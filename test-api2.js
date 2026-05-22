(async () => {
  const text = '剩米饭用勺子打散，避免结块|鸡蛋打入碗中搅散|锅中放油烧热，倒入蛋液快速炒散|加入米饭大火翻炒，让每粒米饭裹上蛋液|加少许盐调味，撒葱花翻炒均匀出锅';
  
  // Try with glm-4-flash (simpler model, no reasoning)
  try {
    console.log('Test with glm-4-flash...');
    const r = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 98e39af8bbb94130b8b01fb9b14b08af.cOWpeP6rutVgBfzz'
      },
      body: JSON.stringify({
        model: 'glm-4-flash',
        messages: [{ role: 'user', content: 'Translate to English: ' + text }],
        max_tokens: 500
      })
    });
    console.log('Status:', r.status);
    const d = await r.json();
    const c = d.choices?.[0]?.message?.content || '';
    console.log('Content:', c.substring(0, 300));
  } catch(e) {
    console.log('FAIL:', e.message);
  }
  console.log('Done');
})();