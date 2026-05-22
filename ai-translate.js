/**
 * AI 翻译脚本 - 使用大模型将中文菜谱翻译为多国语言
 * 
 * 使用方法：
 * 1. 打开本文件，在 CONFIG 区填写 API Key
 * 2. 运行: node ai-translate.js
 * 
 * 支持 provider: 'openai' | 'deepseek' | 'custom'
 *   - OpenAI:  baseURL = https://api.openai.com/v1
 *   - DeepSeek: baseURL = https://api.deepseek.com/v1
 *   - 或任意兼容 OpenAI API 的服务
 */

const sqlite3 = require('sqlite3').verbose();

// ============================================================
// ⚙️ 配置区 - 请填写您的 API 信息
// ============================================================
const CONFIG = {
  provider: 'zhipu',
  apiKey: '98e39af8bbb94130b8b01fb9b14b08af.cOWpeP6rutVgBfzz',
  baseURL: 'https://open.bigmodel.cn/api/paas/v4',
  model: 'glm-4-flash',
};

// ============================================================
// 语言配置
// ============================================================
const LANGUAGES = [
  { code: 'en', name: 'English', instruction: 'Use natural English culinary terms' },
  { code: 'ja', name: 'Japanese', instruction: 'Use authentic Japanese cooking terminology (use ・ not 、as separator if needed)' },
  { code: 'ko', name: 'Korean', instruction: 'Use authentic Korean cooking terminology' },
  { code: 'fr', name: 'French', instruction: 'Use authentic French culinary terms' },
  { code: 'es', name: 'Spanish', instruction: 'Use authentic Spanish culinary terms' },
];

// ============================================================
// 调用 AI API 翻译
// ============================================================
async function callAI(systemPrompt, userPrompt) {
  if (!CONFIG.apiKey) {
    throw new Error('❌ 请在 CONFIG.apiKey 中填写 API Key');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 180000); // 3分钟超时

  try {
    const response = await fetch(`${CONFIG.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CONFIG.apiKey}`
      },
      body: JSON.stringify({
        model: CONFIG.model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.1,
        max_tokens: 2000
      }),
      signal: controller.signal
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`API ${response.status}: ${err}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } finally {
    clearTimeout(timeout);
  }
}

// ============================================================
// 翻译一组步骤或食材
// ============================================================
async function translateContent(text, lang, recipeName, contentType) {
  if (!text || text === '暂无步骤' || text === '暂无食材') return text;

  const systemPrompt = `You are a professional chef and culinary translator. Translate Chinese recipe ${contentType} to ${lang.name}.

CRITICAL RULES (must follow):
- Translate EVERY SINGLE Chinese character. The output must be 100% pure ${lang.name} with ZERO Chinese characters
- Keep the | character as delimiter between steps/items, preserve the exact same number of segments
- Keep ingredient quantities (numbers) unchanged
- Output ONLY the translated text with | delimiters, no explanations, no extra content
- If you are unsure about a specific term, still translate it - do NOT leave any Chinese in the output`;

  const userPrompt = `Recipe name: ${recipeName}
Chinese ${contentType} to translate (delimiter is |):
${text}

Translated ${lang.name} ${contentType} (100% pure ${lang.name}, NO Chinese characters):`;

  return await callAI(systemPrompt, userPrompt);
}

// ============================================================
// 主流程
// ============================================================
async function main() {
  console.log('=== AI 菜谱翻译工具 ===');
  console.log(`模型: ${CONFIG.model}`);
  console.log(`语言: ${LANGUAGES.map(l => l.code).join(', ')}`);
  console.log('');

  const db = new sqlite3.Database('recipes-new.db');

  // 获取所有菜谱
  const recipes = await new Promise((resolve, reject) => {
    db.all('SELECT id, name_zh, slug FROM recipes ORDER BY id', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

  console.log(`共 ${recipes.length} 道菜谱`);

  let totalCalls = 0;
  let totalFails = 0;

  for (const recipe of recipes) {
    if (recipe.id <= 2) {
      console.log(`\n跳过 ${recipe.name_zh}（菜谱1-2已有硬编码翻译）`);
      continue;
    }

    console.log(`\n━━━ ${recipe.name_zh} (ID:${recipe.id}) ━━━`);

    const levels = await new Promise((resolve, reject) => {
      db.all('SELECT id, level, steps_zh, ingredients_zh FROM levels WHERE recipe_id = ? ORDER BY level', recipe.id, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

    for (const level of levels) {
      console.log(`  Level ${level.level}:`);

      for (const lang of LANGUAGES) {
        try {
          console.log(`    ${lang.code}: calling API...`);
          const translatedSteps = await translateContent(
            level.steps_zh, lang, recipe.name_zh, 'steps'
          );
          await new Promise(r => setTimeout(r, 1500)); // 延迟1.5秒避免限流

          // 翻译食材
          const translatedIngredients = await translateContent(
            level.ingredients_zh, lang, recipe.name_zh, 'ingredients'
          );
          await new Promise(r => setTimeout(r, 1500)); // 延迟1.5秒避免限流

          // 更新数据库
          await new Promise((resolve, reject) => {
            db.run(
              `UPDATE levels SET steps_${lang.code} = ?, ingredients_${lang.code} = ? WHERE id = ?`,
              [translatedSteps, translatedIngredients, level.id],
              (err) => { if (err) reject(err); else resolve(); }
            );
          });

          totalCalls += 2;
          console.log(`    ✓ ${lang.code}`);
        } catch (e) {
          totalFails++;
          console.error(`    ✗ ${lang.code}: ${e.message}`);
        }
      }
    }
  }

  db.close();
  console.log('\n══════════════════════════════');
  console.log(`✅ 完成！API 调用: ${totalCalls} 次`);
  if (totalFails > 0) console.log(`⚠️  失败: ${totalFails} 次`);
  console.log('══════════════════════════════');
}

main().catch(console.error);