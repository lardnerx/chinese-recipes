const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, 'recipes-new.db');
const db = new sqlite3.Database(dbPath);

// ============ 菜谱3-10 Level 1-5 完整数据 ============

const data = {

  // ============== 3. 蛋炒饭 [Egg Fried Rice] ==============
  3: [
    {
      level: 1,
      note_zh: '新手入门级，简单快手',
      note_en: 'Beginner level, quick and easy',
      ingredients_zh: '剩米饭300g，鸡蛋2个，葱1根，盐少许',
      ingredients_en: 'Leftover rice 300g, eggs 2, scallion 1, salt a little',
      steps_zh: '剩米饭用勺子打散，避免结块|鸡蛋打入碗中搅散|锅中放油烧热，倒入蛋液快速炒散|加入米饭大火翻炒，让每粒米饭裹上蛋液|加少许盐调味，撒葱花翻炒均匀出锅',
      steps_en: 'Break up leftover rice with a spoon to avoid clumping|Beat eggs in a bowl|Heat oil in a pan, pour in beaten eggs and quickly stir to scramble|Add rice and stir-fry on high heat, making sure each grain is coated with egg|Season with a little salt, sprinkle scallions and stir well, serve'
    },
    {
      level: 2,
      note_zh: '家常经典版',
      note_en: 'Classic home-style version',
      ingredients_zh: '隔夜米饭300g，鸡蛋2个，葱2根，盐少许，鸡精少许',
      ingredients_en: 'Overnight rice 300g, eggs 2, scallions 2, salt a little, chicken bouillon a little',
      steps_zh: '剩米饭提前从冰箱取出回温，用手捏散|鸡蛋打散加少许盐搅匀|锅中放油烧热，倒入蛋液炒至半熟盛出|锅中再放少许油，加入米饭大火翻炒|倒入炒好的鸡蛋继续翻炒均匀|加盐和少许鸡精调味，撒葱花出锅',
      steps_en: 'Take leftover rice out of the fridge to warm up, break apart with hands|Beat eggs with a pinch of salt|Heat oil in a pan, pour in eggs and cook until half done, set aside|Add a little more oil, add rice and stir-fry on high heat|Return cooked eggs and stir-fry evenly|Season with salt and a little chicken bouillon, sprinkle scallions and serve'
    },
    {
      level: 3,
      note_zh: '中级提升，加入蔬菜',
      note_en: 'Intermediate level, adding vegetables',
      ingredients_zh: '隔夜米饭350g，鸡蛋3个，胡萝卜50g，青豆30g，葱2根，盐，白胡椒粉',
      ingredients_en: 'Overnight rice 350g, eggs 3, carrot 50g, green peas 30g, scallions 2, salt, white pepper',
      steps_zh: '米饭用隔夜饭最佳，提前用手捏散|鸡蛋打散，胡萝卜切小丁，青豆洗净|锅中放油，先炒胡萝卜丁和青豆至断生盛出|锅中再放油，倒入蛋液炒散|加入米饭大火快速翻炒，让米粒粒分明|加入炒好的蔬菜丁翻炒均匀|加盐、白胡椒粉调味，撒葱花出锅',
      steps_en: 'Use overnight rice for best results, break apart with hands beforehand|Beat eggs, dice carrot finely, wash green peas|Heat oil in a pan, stir-fry carrot and peas until cooked, set aside|Add more oil, pour in beaten eggs and scramble|Add rice and stir-fry on high heat until each grain is separate|Add cooked vegetables and stir-fry evenly|Season with salt and white pepper, sprinkle scallions and serve'
    },
    {
      level: 4,
      note_zh: '高级版，加入火腿和丰富配料',
      note_en: 'Advanced version, adding ham and more ingredients',
      ingredients_zh: '隔夜米饭400g，鸡蛋3个，火腿50g，胡萝卜50g，青豆30g，葱2根，盐，白胡椒粉，生抽少许',
      ingredients_en: 'Overnight rice 400g, eggs 3, ham 50g, carrot 50g, green peas 30g, scallions 2, salt, white pepper, soy sauce a little',
      steps_zh: '隔夜米饭提前回温，用手充分捏散|鸡蛋3个打散，加少许料酒去腥|火腿切小丁，胡萝卜切丁，青豆焯水|锅中放油，先炒鸡蛋至凝固盛出|锅中放油，爆香葱花，加火腿丁翻炒|加入米饭大火翻炒至粒粒分明|倒入炒好的鸡蛋和蔬菜丁翻炒|加盐、白胡椒粉、少许生抽调味，翻炒均匀出锅',
      steps_en: 'Warm up overnight rice beforehand, break apart thoroughly with hands|Beat 3 eggs, add a little wine to remove odor|Dice ham finely, dice carrot, blanch green peas|Heat oil, scramble eggs until set, set aside|Heat oil, sauté scallions until fragrant, add ham and stir-fry|Add rice and stir-fry on high heat until each grain is separate|Return cooked eggs and vegetables, stir-fry evenly|Season with salt, white pepper and a little soy sauce, stir well and serve'
    },
    {
      level: 5,
      note_zh: '大师级，豪华配料',
      note_en: 'Master level, deluxe ingredients',
      ingredients_zh: '隔夜米饭400g，鸡蛋3个，虾仁50g，火腿30g，胡萝卜30g，青豆20g，玉米粒20g，葱2根，盐，白胡椒粉，生抽，料酒',
      ingredients_en: 'Overnight rice 400g, eggs 3, shrimp 50g, ham 30g, carrot 30g, green peas 20g, corn kernels 20g, scallions 2, salt, white pepper, soy sauce, wine',
      steps_zh: '隔夜米饭回温捏散，打入一个蛋黄拌匀让米饭呈金黄色|蛋白和另外2个鸡蛋打散，加少许盐和料酒|虾仁切小丁用料酒腌制，火腿、胡萝卜切小丁，青豆、玉米粒备好|锅中放油，先滑炒虾仁变色盛出|锅中放油，炒蛋白至凝固盛出|锅中放油，爆香葱花，加火腿胡萝卜丁翻炒|加入米饭大火翻炒至粒粒分明，蛋香四溢|加入虾仁、蛋白、青豆、玉米粒翻炒|加盐、白胡椒粉、少许生抽调味|撒葱花翻炒均匀即可出锅装盘',
      steps_en: 'Warm up overnight rice and break apart, mix in one egg yolk to give rice a golden color|Beat egg whites with 2 eggs, add a little salt and wine|Dice shrimp and marinate with wine, dice ham and carrot, prepare peas and corn|Heat oil, stir-fry shrimp until pink, set aside|Heat oil, cook egg whites until set, set aside|Heat oil, sauté scallions, add ham and carrot, stir-fry|Add rice and stir-fry on high heat until each grain is separate and fragrant|Add shrimp, egg whites, peas and corn, stir-fry|Season with salt, white pepper and a little soy sauce|Sprinkle scallions, stir well and serve'
    }
  ],

  // ============== 4. 糖醋里脊 [Sweet and Sour Pork] ==============
  4: [
    {
      level: 1,
      note_zh: '新手入门级',
      note_en: 'Beginner level',
      ingredients_zh: '猪里脊肉300g，番茄酱3勺，白糖2勺，料酒1勺，盐少许',
      ingredients_en: 'Pork tenderloin 300g, ketchup 3 tbsp, sugar 2 tbsp, wine 1 tbsp, salt a little',
      steps_zh: '猪里脊肉洗净切成条状|加少许盐和料酒腌制10分钟|锅中放油烧热，放入肉条煎至两面金黄|加番茄酱和白糖翻炒均匀|加少许水焖煮2分钟，收汁即可出锅',
      steps_en: 'Wash pork tenderloin and cut into strips|Marinate with a little salt and wine for 10 minutes|Heat oil in a pan, fry pork strips until golden on both sides|Add ketchup and sugar, stir-fry evenly|Add a little water, braise 2 minutes, reduce sauce and serve'
    },
    {
      level: 2,
      note_zh: '家常版，外酥里嫩',
      note_en: 'Home-style, crispy outside tender inside',
      ingredients_zh: '猪里脊肉300g，鸡蛋1个，淀粉50g，番茄酱4勺，白糖3勺，白醋1勺，料酒，盐，白芝麻',
      ingredients_en: 'Pork tenderloin 300g, egg 1, cornstarch 50g, ketchup 4 tbsp, sugar 3 tbsp, white vinegar 1 tbsp, wine, salt, white sesame',
      steps_zh: '猪里脊肉切条状，加盐料酒腌制15分钟|鸡蛋打散，肉条裹上蛋液再裹上淀粉|锅中放油烧至六成热，放入肉条炸至金黄捞出|锅中留底油，加番茄酱、白糖、白醋炒匀|放入炸好的肉条快速翻炒裹上酱汁|撒白芝麻即可出锅',
      steps_en: 'Cut pork into strips, marinate with salt and wine for 15 minutes|Beat egg, coat pork strips in egg then cornstarch|Heat oil to medium-high, deep-fry pork until golden, remove|Leave a little oil in pan, add ketchup, sugar and vinegar, stir well|Return fried pork and quickly coat with sauce|Sprinkle white sesame and serve'
    },
    {
      level: 3,
      note_zh: '中级提升，复炸更酥脆',
      note_en: 'Intermediate level, double-fry for extra crispiness',
      ingredients_zh: '猪里脊肉350g，鸡蛋1个，淀粉50g，面粉30g，番茄酱5勺，白糖4勺，白醋2勺，生抽1勺，料酒，盐，白胡椒粉，白芝麻',
      ingredients_en: 'Pork tenderloin 350g, egg 1, cornstarch 50g, flour 30g, ketchup 5 tbsp, sugar 4 tbsp, white vinegar 2 tbsp, soy sauce 1 tbsp, wine, salt, white pepper, white sesame',
      steps_zh: '猪里脊肉切1cm厚片，用刀背拍松后切条|加盐、料酒、白胡椒粉腌制15分钟|调面糊：淀粉、面粉、鸡蛋、水调成糊状|肉条裹上面糊，放入六成热油中炸至金黄捞出|油温升至七成热，复炸30秒使外皮更酥脆|锅中放少许油，加番茄酱、白糖、白醋、少许水煮开|倒入水淀粉勾芡，放入炸好的肉条快速翻炒|酱汁均匀裹上后立即出锅',
      steps_en: 'Cut pork into 1cm thick slices, tenderize with knife back then cut into strips|Marinate with salt, wine and white pepper for 15 minutes|Make batter: mix cornstarch, flour, egg and water into a paste|Coat pork strips in batter, deep-fry at medium-high until golden, remove|Heat oil to high, re-fry for 30 seconds for extra crispiness|Heat a little oil, add ketchup, sugar, vinegar and water, bring to boil|Add cornstarch water to thicken, add pork and stir quickly|Serve immediately once coated with sauce'
    },
    {
      level: 4,
      note_zh: '高级专业，脆炸糊工艺',
      note_en: 'Advanced, crispy batter technique',
      ingredients_zh: '猪里脊肉400g，鸡蛋1个，淀粉60g，面粉30g，番茄酱5勺，白糖4勺，白醋2勺，生抽1勺，料酒，盐，白胡椒粉，姜，白芝麻，葱',
      ingredients_en: 'Pork tenderloin 400g, egg 1, cornstarch 60g, flour 30g, ketchup 5 tbsp, sugar 4 tbsp, white vinegar 2 tbsp, soy sauce 1 tbsp, wine, salt, white pepper, ginger, white sesame, scallion',
      steps_zh: '猪里脊肉切1cm厚片，用刀背十字形拍松切成条|加盐、料酒、白胡椒粉、少许生抽腌制20分钟|调脆炸糊：淀粉和面粉2:1比例，加鸡蛋和水调成酸奶状|肉条先裹一层干淀粉，再挂上脆炸糊|油温六成热，逐个放入肉条炸至微黄捞出|油温升至七成热，全部复炸1分钟至金黄酥脆|酱汁：番茄酱、白糖、白醋、生抽、水按比例调好|锅中少许油，倒入酱汁煮开，加淀粉水勾芡|放入炸好的肉条快速翻炒裹匀酱汁|淋少许热油使酱汁更亮，撒芝麻葱花出锅',
      steps_en: 'Cut pork into 1cm slices, tenderize crosswise with knife back, cut into strips|Marinate with salt, wine, white pepper and a little soy sauce for 20 minutes|Make crispy batter: mix cornstarch and flour at 2:1 ratio, add egg and water until yogurt-like|Coat strips in dry cornstarch first, then dip in crispy batter|Heat oil to medium, fry strips one by one until light yellow, remove|Heat oil to high, re-fry all for 1 minute until golden crispy|Sauce: mix ketchup, sugar, vinegar, soy sauce and water|Heat a little oil, pour in sauce and bring to boil, thicken with cornstarch water|Add fried pork and stir quickly to coat evenly|Drizzle a little hot oil for shine, sprinkle sesame and scallion, serve'
    },
    {
      level: 5,
      note_zh: '大师级，完美糖醋汁',
      note_en: 'Master level, perfect sweet and sour sauce',
      ingredients_zh: '猪里脊肉400g，鸡蛋1个，淀粉70g，面粉35g，番茄酱6勺，白糖5勺，白醋3勺，生抽1勺，橙汁1勺，料酒，盐，白胡椒粉，姜，蒜，白芝麻，葱',
      ingredients_en: 'Pork tenderloin 400g, egg 1, cornstarch 70g, flour 35g, ketchup 6 tbsp, sugar 5 tbsp, white vinegar 3 tbsp, soy sauce 1 tbsp, orange juice 1 tbsp, wine, salt, white pepper, ginger, garlic, white sesame, scallion',
      steps_zh: '猪里脊肉去筋膜，切1cm厚片，用刀背十字形拍松后切条|加盐、料酒、白胡椒粉、生抽、姜汁腌制20分钟|调脆炸糊：淀粉与面粉2:1，加鸡蛋、水和少许油调成糊，醒10分钟|肉条先裹干淀粉，再均匀挂上脆炸糊|油温六成热，逐条放入炸至微黄捞出（约2分钟）|油温升至七成热，全部复炸1分钟至金黄酥脆|锅中放少许油，炒香蒜末|加番茄酱、白糖、白醋、生抽、橙汁调匀煮开|加淀粉水勾芡至浓稠透亮，加少许热油搅匀使酱汁更亮|倒入炸好的肉条快速翻炒，每个肉条均匀裹上酱汁|撒白芝麻和葱花，立即出锅装盘',
      steps_en: 'Trim pork tenderloin, cut into 1cm slices, tenderize crosswise with knife back, cut into strips|Marinate with salt, wine, white pepper, soy sauce and ginger juice for 20 minutes|Make crispy batter: cornstarch and flour 2:1, add egg, water and a little oil, rest for 10 minutes|Coat strips in dry cornstarch, then evenly coat with crispy batter|Heat oil to medium, fry strips one by one until light yellow (about 2 minutes)|Heat oil to high, re-fry all for 1 minute until golden crispy|Heat a little oil, sauté minced garlic until fragrant|Add ketchup, sugar, vinegar, soy sauce and orange juice, stir and bring to boil|Thicken with cornstarch water until glossy, add a little hot oil for shine|Add fried pork and stir quickly to coat evenly with sauce|Sprinkle white sesame and scallion, serve immediately'
    }
  ],

  // ============== 5. 红烧肉 [Red Braised Pork] ==============
  5: [
    {
      level: 1,
      note_zh: '新手入门级',
      note_en: 'Beginner level',
      ingredients_zh: '五花肉500g，葱2根，姜3片，冰糖20g，生抽2勺，老抽1勺',
      ingredients_en: 'Pork belly 500g, scallions 2, ginger 3 slices, rock sugar 20g, light soy sauce 2 tbsp, dark soy sauce 1 tbsp',
      steps_zh: '五花肉洗净切成3cm方块|锅中放水烧开，放入肉块焯水2分钟捞出|锅中放少许油，加入肉块煎至两面微黄|加生抽和老抽翻炒上色|加开水没过肉块，加葱姜和冰糖|大火烧开后转小火炖40分钟|转大火收汁至汤汁浓稠即可',
      steps_en: 'Wash pork belly and cut into 3cm cubes|Bring water to a boil, blanch pork for 2 minutes, drain|Heat a little oil, fry pork until lightly golden on both sides|Add light and dark soy sauce, stir to color|Add boiling water to cover pork, add scallions, ginger and rock sugar|Bring to a boil then simmer on low heat for 40 minutes|Increase to high heat and reduce sauce until thickened'
    },
    {
      level: 2,
      note_zh: '家常版，炒糖色',
      note_en: 'Home-style, caramelized sugar',
      ingredients_zh: '五花肉500g，葱2根，姜4片，八角1个，冰糖30g，生抽2勺，老抽1勺，料酒2勺，盐少许',
      ingredients_en: 'Pork belly 500g, scallions 2, ginger 4 slices, star anise 1, rock sugar 30g, light soy sauce 2 tbsp, dark soy sauce 1 tbsp, wine 2 tbsp, salt a little',
      steps_zh: '五花肉切3cm方块，冷水下锅加料酒焯水5分钟捞出洗净|锅中放少许油，加冰糖小火炒至融化呈琥珀色|放入肉块翻炒均匀上色|加葱段姜片八角，加料酒生抽老抽|加开水没过肉面，大火烧开转小火炖1小时|加盐调味，继续炖20分钟|转大火收汁至汤汁浓稠，每块肉裹上酱汁即可',
      steps_en: 'Cut pork belly into 3cm cubes, place in cold water with wine, bring to boil and blanch 5 minutes, rinse clean|Heat a little oil, add rock sugar and stir on low heat until melted and amber|Add pork and stir-fry to coat evenly with color|Add scallion segments, ginger slices, star anise, wine, light and dark soy sauce|Add boiling water to cover, bring to a boil then simmer on low for 1 hour|Season with salt, continue simmering 20 minutes|Increase to high heat and reduce sauce until thick and coats each piece'
    },
    {
      level: 3,
      note_zh: '中级提升，加入香料',
      note_en: 'Intermediate, adding aromatics',
      ingredients_zh: '五花肉600g，葱2根，姜5片，八角1个，桂皮1小段，香叶2片，冰糖40g，生抽2勺，老抽1勺，料酒2勺，盐少许',
      ingredients_en: 'Pork belly 600g, scallions 2, ginger 5 slices, star anise 1, cinnamon stick 1, bay leaves 2, rock sugar 40g, light soy sauce 2 tbsp, dark soy sauce 1 tbsp, wine 2 tbsp, salt a little',
      steps_zh: '五花肉切3cm方块，冷水下锅加姜片料酒焯水5分钟捞出洗净|锅中放少许油，加冰糖小火炒糖色至枣红色|放入肉块翻炒上色，加八角桂皮香叶等香料|加葱段姜片，加料酒生抽老抽翻炒均匀|加开水没过肉，大火烧开转小火炖1.5小时|加盐和少许冰糖调味，继续炖30分钟至肉软烂|转大火收汁至浓稠，不停翻动以免粘锅|汤汁收至裹住每块肉即可出锅',
      steps_en: 'Cut pork belly into 3cm cubes, place in cold water with ginger and wine, blanch 5 minutes, rinse clean|Heat a little oil, add rock sugar and cook on low heat until dark red caramel color|Add pork and stir to color, add star anise, cinnamon and bay leaves|Add scallion segments, ginger slices, wine, light and dark soy sauce, stir evenly|Add boiling water to cover pork, bring to a boil then simmer on low for 1.5 hours|Season with salt and a little rock sugar, continue simmering 30 minutes until tender|Increase to high heat and reduce sauce, stirring constantly to prevent sticking|Serve when sauce is thick and coats each piece of meat'
    },
    {
      level: 4,
      note_zh: '高级专业，火候精准',
      note_en: 'Advanced, precise heat control',
      ingredients_zh: '五花肉600g，葱2根，姜5片，八角2个，桂皮1小段，香叶2片，干辣椒2个，冰糖50g，生抽3勺，老抽2勺，料酒2勺，盐少许',
      ingredients_en: 'Pork belly 600g, scallions 2, ginger 5 slices, star anise 2, cinnamon stick 1, bay leaves 2, dried chilies 2, rock sugar 50g, light soy sauce 3 tbsp, dark soy sauce 2 tbsp, wine 2 tbsp, salt a little',
      steps_zh: '五花肉切3cm方块，冷水加姜片料酒焯水5分钟，捞出用温水洗净|锅中放少许油，加冰糖小火炒至枣红色冒小泡|放入肉块快速翻炒上色|加葱段姜片、八角、桂皮、香叶、干辣椒|加料酒、生抽、老抽翻炒出香味|加开水没过肉，大火烧开后撇去浮沫|转小火盖盖炖1.5小时至肉能用筷子轻松插入|加盐调味，继续炖20分钟|转大火收汁，不断翻动防止粘锅|汤汁浓稠包裹每块肉时，撒少许葱花即可出锅',
      steps_en: 'Cut pork belly into 3cm cubes, blanch in cold water with ginger and wine for 5 minutes, rinse with warm water|Heat a little oil, add rock sugar and cook on low heat until dark red with small bubbles|Add pork and stir quickly to color evenly|Add scallion segments, ginger, star anise, cinnamon, bay leaves and dried chilies|Add wine, light and dark soy sauce, stir until fragrant|Add boiling water to cover, bring to a boil and skim off foam|Cover and simmer on low for 1.5 hours until pork is fork-tender|Season with salt, continue simmering 20 minutes|Increase to high heat and reduce sauce, stirring constantly|When sauce is thick and coats each piece, sprinkle scallions and serve'
    },
    {
      level: 5,
      note_zh: '大师级，完美红亮',
      note_en: 'Master level, perfect red sheen',
      ingredients_zh: '五花肉700g，葱3根，姜6片，八角2个，桂皮1小段，香叶2片，干辣椒2个，花椒1小勺，冰糖60g，生抽3勺，老抽2勺，料酒3勺，盐适量',
      ingredients_en: 'Pork belly 700g, scallions 3, ginger 6 slices, star anise 2, cinnamon stick 1, bay leaves 2, dried chilies 2, Sichuan pepper 1 tsp, rock sugar 60g, light soy sauce 3 tbsp, dark soy sauce 2 tbsp, wine 3 tbsp, salt to taste',
      steps_zh: '五花肉选三层肥两层瘦最佳，切成3cm方块|冷水加姜片、料酒、花椒焯水5分钟，捞出温水洗净|锅中放少许油，加冰糖小火炒至枣红色冒密集小泡|放入肉块快速翻炒至每面均匀上色|加葱段姜片、八角2个、桂皮1小段、香叶2片、干辣椒2个|沿锅边淋入料酒去腥，加生抽老抽炒出酱香味|加开水没过肉面2cm，大火烧开，彻底撇净浮沫|转小火盖盖慢炖1.5-2小时至肉酥烂|加盐和少许冰糖调味，继续炖20分钟|挑出香料，转大火收汁，用锅铲不停翻动|汤汁收至浓稠发亮，包裹每块肉时关火出锅',
      steps_en: 'Choose pork belly with 3 layers lean and 2 layers fat, cut into 3cm cubes|Place in cold water with ginger, wine and Sichuan pepper, blanch 5 minutes, rinse with warm water|Heat a little oil, add rock sugar and cook on low until dark red with dense small bubbles|Add pork and stir quickly to color evenly on all sides|Add scallion segments, ginger, star anise, cinnamon, bay leaves and dried chilies|Drizzle wine along pan edge to remove odor, add light and dark soy sauce, stir until fragrant|Add boiling water 2cm above pork, bring to a boil, skim foam thoroughly|Cover and simmer on low for 1.5-2 hours until pork is very tender|Season with salt and a little rock sugar, continue 20 minutes|Remove spices, increase to high heat and reduce sauce, stirring constantly|Turn off heat when sauce is thick and glossy, coating each piece of meat'
    }
  ],

  // ============== 6. 火锅 [Hot Pot] ==============
  6: [
    {
      level: 1,
      note_zh: '新手入门级，超市底料简单煮',
      note_en: 'Beginner level, simple with store-bought base',
      ingredients_zh: '火锅底料1包，蘸料1份，肥牛片200g，蔬菜拼盘1份，豆腐200g，粉丝1把',
      ingredients_en: 'Hot pot base seasoning 1 pack, dipping sauce 1 serving, beef slices 200g, vegetable platter 1, tofu 200g, vermicelli 1 bunch',
      steps_zh: '超市买火锅底料和蘸料|各种食材清洗干净，蔬菜切好，肉类切片|锅中加水烧开，放入火锅底料煮开|先煮耐煮的食材如土豆、萝卜|再涮肉片和蔬菜|调好蘸料即可享用',
      steps_en: 'Buy hot pot base and dipping sauce from supermarket|Wash all ingredients, cut vegetables, slice meat|Bring water to a boil in pot, add hot pot base and bring to boil|Cook longer-cooking ingredients first like potatoes and radish|Then dip meat slices and vegetables|Prepare dipping sauce and enjoy'
    },
    {
      level: 2,
      note_zh: '家常版，自制芝麻酱蘸料',
      note_en: 'Home-style, homemade sesame dipping sauce',
      ingredients_zh: '火锅底料1包，芝麻酱，蒜末，葱花，肥牛片300g，羊肉片200g，蔬菜拼盘，豆腐，粉丝，土豆，萝卜',
      ingredients_en: 'Hot pot base 1 pack, sesame paste, minced garlic, chopped scallions, beef slices 300g, lamb slices 200g, vegetable platter, tofu, vermicelli, potato, radish',
      steps_zh: '准备火锅底料、蘸料和各种食材|肉类切薄片，蔬菜洗净切好，豆腐切块，粉丝泡软|锅中加水烧开，放入火锅底料和姜片葱段煮10分钟|调制蘸料：芝麻酱、蒜末、葱花、香油、生抽|先涮肉类再涮蔬菜，注意火候|随时加汤保持汤量',
      steps_en: 'Prepare hot pot base, dipping sauce and all ingredients|Slice meat thinly, wash and cut vegetables, cube tofu, soak vermicelli until soft|Bring water to a boil, add hot pot base with ginger and scallion, cook 10 minutes|Make dipping sauce: mix sesame paste, minced garlic, scallions, sesame oil and soy sauce|Dip meat first then vegetables, watch the heat|Add broth as needed to maintain liquid level'
    },
    {
      level: 3,
      note_zh: '中级提升，丰富食材种类',
      note_en: 'Intermediate, more ingredient variety',
      ingredients_zh: '火锅底料1包，牛肉片300g，羊肉片200g，虾滑200g，鱼丸100g，蔬菜拼盘，豆腐，土豆，藕片，粉丝，香菇，金针菇，芝麻酱，蒜末，葱花，香油，生抽，蚝油，辣椒油，香菜',
      ingredients_en: 'Hot pot base 1 pack, beef slices 300g, lamb slices 200g, shrimp paste 200g, fish balls 100g, vegetable platter, tofu, potato, lotus root slices, vermicelli, shiitake mushrooms, enoki mushrooms, sesame paste, minced garlic, scallions, sesame oil, soy sauce, oyster sauce, chili oil, cilantro',
      steps_zh: '火锅底料放入锅中，加姜片葱段干辣椒花椒，加水大火煮开后转中小火煮15分钟出味|调制蘸料：芝麻酱温水调开，加蒜末、葱花、香油、生抽、蚝油、辣椒油拌匀|牛肉片和羊肉片分别摆盘，虾滑挤成球形，鱼丸切半，香菇去蒂切花刀|先涮肉类让汤底更鲜美，虾滑煮至浮起变红，鱼丸煮至膨胀|蔬菜按耐煮程度依次入锅，土豆藕片煮3-5分钟，菌菇煮2分钟|用漏勺捞取食材，蘸料食用，随时加汤保持汤量',
      steps_en: 'Put hot pot base in pot with ginger, scallion, dried chilies and Sichuan pepper, add water, bring to boil then simmer 15 minutes|Make dipping sauce: dilute sesame paste with warm water, add minced garlic, scallions, sesame oil, soy sauce, oyster sauce and chili oil|Arrange beef and lamb slices on plates, shape shrimp paste into balls, halve fish balls, trim and score shiitake mushrooms|Cook meat first to enrich broth, cook shrimp paste until floating and pink, fish balls until puffed|Add vegetables in order of cooking time: potato and lotus root 3-5 minutes, mushrooms 2 minutes|Use a strainer to retrieve food, dip in sauce, add broth as needed'
    },
    {
      level: 4,
      note_zh: '高级专业，自制高汤',
      note_en: 'Advanced, homemade broth',
      ingredients_zh: '牛骨高汤2000ml，牛肉片300g，羊肉片250g，鲜虾200g，鱿鱼200g，虾滑150g，鱼丸100g，鸭血200g，豆腐200g，土豆，藕片，冬瓜，香菇，金针菇，娃娃菜，粉丝，年糕，芝麻酱，蒜末，葱花，姜末，香菜末，香油，生抽，蚝油，腐乳汁，辣椒油，花椒油，熟芝麻',
      ingredients_en: 'Beef bone broth 2000ml, beef slices 300g, lamb slices 250g, fresh shrimp 200g, squid 200g, shrimp paste 150g, fish balls 100g, duck blood cake 200g, tofu 200g, potato, lotus root, winter melon, shiitake mushrooms, enoki mushrooms, baby cabbage, vermicelli, rice cakes, sesame paste, minced garlic, scallions, minced ginger, cilantro, sesame oil, soy sauce, oyster sauce, fermented tofu sauce, chili oil, Sichuan pepper oil, toasted sesame',
      steps_zh: '牛骨或鸡骨熬制高汤：牛骨焯水后加姜片葱段大火烧开转小火熬2小时，过滤后作为汤底|锅中放少许油炒香姜片葱段干辣椒花椒，倒入高汤大火煮开，加少许枸杞红枣增香|制作蘸料：芝麻酱温水调开，加腐乳汁、蚝油、生抽、香油、花椒油、辣椒油、蒜末、葱花、香菜末、熟芝麻调匀|食材预处理：牛肉片羊肉片摆盘，鲜虾开背去虾线，鱿鱼切花刀切片，鸭血切厚块，豆腐切片，蔬菜按需切好|涮食顺序：先下鸭血豆腐耐煮食材，再涮肉类海鲜，最后涮蔬菜菌菇|虾滑用勺子舀成球形入锅，煮至浮起变红即可，鱿鱼卷曲即熟|年糕和粉丝最后下锅，粉丝煮1分钟即熟，年糕煮至软糯',
      steps_en: 'Make bone broth: blanch beef bones, add ginger and scallion, bring to boil then simmer 2 hours, strain|Heat a little oil, sauté ginger, scallion, dried chilies and Sichuan pepper, add broth and bring to boil, add a few goji berries and dates for aroma|Make dipping sauce: dilute sesame paste with warm water, add fermented tofu sauce, oyster sauce, soy sauce, sesame oil, chili oil, Sichuan pepper oil, garlic, scallions, cilantro and toasted sesame|Prepare ingredients: arrange meat on plates, butterfly shrimp and devein, score squid, slice duck blood cake and tofu|Cooking order: first cook duck blood and tofu, then meat and seafood, finally vegetables and mushrooms|Scoop shrimp paste into balls, cook until floating and pink; squid is done when curled|Add rice cakes and vermicelli last, vermicelli cooks in 1 minute, rice cakes until soft and chewy'
    },
    {
      level: 5,
      note_zh: '大师级，顶级高汤与丰富食材',
      note_en: 'Master level, premium broth and ingredients',
      ingredients_zh: '牛棒骨500g，老母鸡半只，牛肉片300g，羊肉片250g，鲜虾200g，鱿鱼150g，鲜鲍鱼4个，虾滑150g，鱼丸100g，鸭血200g，冻豆腐200g，鲜腐竹100g，土豆，藕片，冬瓜，山药，香菇，金针菇，杏鲍菇，娃娃菜，茼蒿，粉丝，年糕，芝麻酱，蒜末，葱花，姜末，香菜末，花生碎，香油，生抽，蚝油，腐乳汁，韭菜花酱，辣椒油，花椒油，熟芝麻',
      ingredients_en: 'Beef marrow bones 500g, half old hen chicken, beef slices 300g, lamb slices 250g, fresh shrimp 200g, squid 150g, fresh abalone 4, shrimp paste 150g, fish balls 100g, duck blood cake 200g, frozen tofu 200g, fresh yuba 100g, potato, lotus root, winter melon, yam, shiitake, enoki, king oyster mushrooms, baby cabbage, crown daisy, vermicelli, rice cakes, sesame paste, minced garlic, scallions, ginger, cilantro, crushed peanuts, sesame oil, soy sauce, oyster sauce, fermented tofu sauce, chive flower sauce, chili oil, Sichuan pepper oil, toasted sesame',
      steps_zh: '熬制顶级高汤：牛棒骨敲断焯水，老母鸡斩块焯水，一同放入锅中加姜片葱段料酒大火烧开转小火熬3-4小时至汤色奶白，过滤取汤|制作锅底：炒锅放油炒香姜片葱段干辣椒花椒八角，倒入熬好的高汤，加枸杞红枣和少许盐调味，大火煮开后转中火煮10分钟|秘制蘸料：芝麻酱分次加温水调开至顺滑，加腐乳汁、韭菜花酱、蚝油、生抽、香油、花椒油、辣椒油、蒜末、姜末、葱花、香菜末、花生碎、熟芝麻搅匀|食材精心处理：牛肉片切薄片摆盘，羊肉片摆盘，鲜虾开背去虾线留尾壳，鱿鱼切网格花刀切片，鲍鱼去壳去内脏切花刀，鸭血切厚块，冻豆腐解冻切块，蔬菜切好摆盘|涮食讲究顺序：先下鸭血冻豆腐腐竹耐煮食材煮5分钟|再涮肉类：用筷子夹住肉片在沸汤中来回涮10-15秒至变色即可|接着涮海鲜：虾变红即可，鱿鱼卷曲即熟，鲍鱼涮30秒|虾滑用勺舀成球形入锅煮至浮起|最后涮蔬菜菌菇和粉丝年糕|随时撇去汤面浮沫，保持汤底清澈，中途加汤用原汤',
      steps_en: 'Make premium broth: crack beef bones and blanch, chop old hen and blanch, put both in pot with ginger, scallion and wine, bring to boil then simmer 3-4 hours until milky white, strain|Make pot base: sauté ginger, scallion, dried chilies, Sichuan pepper and star anise in oil, add broth, goji berries, dates and salt, boil then simmer 10 minutes|Secret dipping sauce: gradually dilute sesame paste with warm water until smooth, add fermented tofu sauce, chive flower sauce, oyster sauce, soy sauce, sesame oil, chili oil, Sichuan pepper oil, garlic, ginger, scallions, cilantro, crushed peanuts and toasted sesame|Prepare ingredients: slice beef and lamb thinly, butterfly shrimp leaving tail shell, score squid in diamond pattern, clean and score abalone, slice duck blood cake, thaw and cube frozen tofu|Cooking order: first cook duck blood, frozen tofu and yuba for 5 minutes|Then cook meat: hold slices with chopsticks and swish in boiling broth 10-15 seconds until变色|Then seafood: shrimp turn pink, squid curls, abalone needs 30 seconds|Scoop shrimp paste into balls, cook until floating|Finally cook vegetables, mushrooms, vermicelli and rice cakes|Skim foam from broth surface regularly, add original broth when needed'
    }
  ],

  // ============== 7. 北京烤鸭 [Peking Duck] ==============
  7: [
    {
      level: 1,
      note_zh: '新手入门级',
      note_en: 'Beginner level',
      ingredients_zh: '烤鸭1只，荷叶饼20张，甜面酱半碗，葱2根，黄瓜1根',
      ingredients_en: 'Roast duck 1, lotus leaf pancakes 20, sweet bean sauce half bowl, scallions 2, cucumber 1',
      steps_zh: '超市购买现成的烤鸭|将烤鸭放入预热好的烤箱180度加热10分钟|取出后趁热片下鸭肉|准备荷叶饼、甜面酱、葱丝和黄瓜条|取一张荷叶饼，放上鸭肉、葱丝、黄瓜条和甜面酱|卷起来即可享用',
      steps_en: 'Buy ready-made roast duck from supermarket|Preheat oven to 180°C, heat duck for 10 minutes|Remove and slice duck meat while hot|Prepare pancakes, sweet bean sauce, scallion shreds and cucumber sticks|Take a pancake, add duck meat, scallion shreds, cucumber sticks and sauce|Roll up and enjoy'
    },
    {
      level: 2,
      note_zh: '家常版，皮脆肉嫩',
      note_en: 'Home-style, crispy skin tender meat',
      ingredients_zh: '烤鸭1只，荷叶饼20张，甜面酱半碗，葱3根，黄瓜1根，白糖少许，香油少许',
      ingredients_en: 'Roast duck 1, lotus leaf pancakes 20, sweet bean sauce half bowl, scallions 3, cucumber 1, sugar a little, sesame oil a little',
      steps_zh: '购买现成烤鸭，烤箱预热180度|烤鸭放入烤箱加热10-15分钟至皮脆|趁热将鸭肉片成薄片，带皮带肉|鸭骨架可留作熬汤|准备荷叶饼上锅蒸2分钟变软|甜面酱加少许糖和香油调匀|摆盘：鸭肉片整齐摆放，配荷叶饼、葱丝、黄瓜条和甜面酱',
      steps_en: 'Buy ready-made roast duck, preheat oven to 180°C|Heat duck in oven for 10-15 minutes until skin is crispy|Slice duck meat thinly while hot, each slice with skin and meat|Save duck bones for soup|Steam pancakes for 2 minutes until soft|Mix sweet bean sauce with a little sugar and sesame oil|Arrange: place sliced duck neatly, serve with pancakes, scallion shreds, cucumber sticks and sauce'
    },
    {
      level: 3,
      note_zh: '中级提升，精心片鸭',
      note_en: 'Intermediate, careful duck slicing',
      ingredients_zh: '烤鸭1只，荷叶饼24张，甜面酱半碗，葱白3根，黄瓜1根，白萝卜半个，白糖少许，香油少许，蒜蓉少许',
      ingredients_en: 'Roast duck 1, lotus leaf pancakes 24, sweet bean sauce half bowl, scallion whites 3, cucumber 1, white radish half, sugar a little, sesame oil a little, minced garlic a little',
      steps_zh: '购买优质烤鸭，烤箱预热180度|烤鸭放入烤箱加热12-15分钟至表皮酥脆|用锋利片鸭刀趁热将鸭肉片成薄片，每片带皮带肉，共片出约24片|甜面酱加白糖、香油、少许蒜蓉调匀蒸5分钟增香|荷叶饼上锅大火蒸2分钟至柔软透亮|葱白切细丝，黄瓜切细条，白萝卜去皮切细条，分别摆盘|取一张荷叶饼，放上鸭肉、葱丝、黄瓜条、萝卜条和甜面酱卷起食用',
      steps_en: 'Buy quality roast duck, preheat oven to 180°C|Heat duck for 12-15 minutes until skin is crispy|Use a sharp duck knife to slice meat thinly while hot, each slice with skin and meat, about 24 slices|Mix sweet bean sauce with sugar, sesame oil and minced garlic, steam 5 minutes for aroma|Steam pancakes on high heat for 2 minutes until soft and translucent|Cut scallion whites into thin shreds, cucumber into thin sticks, peel and cut radish into thin sticks, arrange separately|Take a pancake, add duck, scallion shreds, cucumber, radish sticks and sauce, roll and enjoy'
    },
    {
      level: 4,
      note_zh: '高级专业，配菜丰富',
      note_en: 'Advanced, rich side dishes',
      ingredients_zh: '优质填鸭1只（约2kg），荷叶饼30张，甜面酱半碗，葱白4根，黄瓜1根，白萝卜半个，心里美萝卜半个，白糖，香油，蒜蓉，蜂蜜少许',
      ingredients_en: 'Quality duck 1 (about 2kg), lotus leaf pancakes 30, sweet bean sauce half bowl, scallion whites 4, cucumber 1, white radish half, beauty radish half, sugar, sesame oil, minced garlic, honey a little',
      steps_zh: '购买优质填鸭，烤箱预热180度|烤鸭放入烤箱中层，上下火180度加热15分钟至皮脆油亮|片鸭方法：先片鸭胸皮，再片鸭腿肉，每片约2mm厚带皮带肉，共片出30片|甜面酱加白糖、香油、蒜蓉、少许蜂蜜调匀，隔水蒸8分钟使其更加香浓|荷叶饼上锅大火蒸2分钟，趁热揭开叠放|配菜：葱白切细丝泡冰水使其卷曲，黄瓜切细条，白萝卜和心里美萝卜分别切细丝|摆盘：鸭肉片扇形摆盘，配菜分格摆放，甜面酱装小碟|鸭骨架熬汤：加姜片葱段大火烧开转小火熬1小时，加白菜豆腐即成鸭架汤',
      steps_en: 'Buy quality duck, preheat oven to 180°C|Place duck in middle rack, heat at 180°C for 15 minutes until skin is crispy and shiny|Slicing method: first slice breast skin, then leg meat, each slice about 2mm thick with skin and meat, about 30 slices total|Mix sweet bean sauce with sugar, sesame oil, garlic and a little honey, steam for 8 minutes for richer flavor|Steam pancakes on high heat for 2 minutes, separate while hot|Side dishes: cut scallion whites into fine shreds and soak in ice water to curl, cut cucumber into thin sticks, shred both radishes|Arrange: fan out duck slices on plate, place sides in separate compartments, serve sauce in small dish|Make soup from duck bones: add ginger and scallion, bring to boil then simmer 1 hour, add cabbage and tofu'
    },
    {
      level: 5,
      note_zh: '大师级，传统京味',
      note_en: 'Master level, traditional Beijing flavor',
      ingredients_zh: '优质北京填鸭1只（约2.5kg），荷叶饼36张，甜面酱半碗，葱白5根，黄瓜1根，哈密瓜半只，心里美萝卜半个，白糖，香油，蒜蓉，蜂蜜，桂花酱少许',
      ingredients_en: 'Premium Beijing duck 1 (about 2.5kg), lotus leaf pancakes 36, sweet bean sauce half bowl, scallion whites 5, cucumber 1, half cantaloupe, beauty radish half, sugar, sesame oil, minced garlic, honey, osmanthus sauce a little',
      steps_zh: '选用优质北京填鸭，烤箱预热200度|烤鸭处理：先用开水淋烫鸭皮使皮收紧，再刷一层麦芽糖水晾干，入烤箱200度烤10分钟定型，转180度烤15-20分钟至皮酥脆金红|片鸭技法：用专用片鸭刀，第一刀片鸭胸皮最酥脆部分，然后依次片鸭腿、鸭背，每片约2mm厚，共片出36片，装盘保持鸭形完整|甜面酱加白糖、香油、蒜蓉、蜂蜜、桂花酱调匀，隔水蒸10分钟至香气浓郁|荷叶饼上锅大火蒸2分钟，趁热揭开叠放，保持柔软|配菜升级：葱白切细丝泡冰水成卷曲状，哈密瓜去皮切细条，心里美萝卜切细丝，黄瓜切细条|摆盘艺术：鸭皮和鸭肉分别摆盘，配菜分格摆放，甜面酱和桂花酱各一小碟|鸭骨架熬汤：加姜片葱段料酒大火烧开转小火熬2小时，加白菜豆腐粉丝即成鲜美鸭架汤|食用方法：取荷叶饼抹甜面酱，放鸭皮蘸桂花酱，再放鸭肉和配菜卷起食用，皮酥肉嫩',
      steps_en: 'Select premium Beijing duck, preheat oven to 200°C|Duck preparation: pour boiling water over duck skin to tighten, brush with maltose syrup and air dry, roast at 200°C for 10 minutes to set, then 180°C for 15-20 minutes until crispy and golden red|Slicing technique: use special duck knife, first slice the crispiest breast skin, then legs and back, each slice about 2mm thick, total 36 slices, arrange on plate keeping duck shape intact|Mix sweet bean sauce with sugar, sesame oil, garlic, honey and osmanthus sauce, steam for 10 minutes until richly aromatic|Steam pancakes on high for 2 minutes, separate while hot to keep soft|Upgraded sides: cut scallion whites into fine shreds and soak in ice water to curl, peel and julienne cantaloupe, shred beauty radish, cut cucumber into thin sticks|Plating art: arrange duck skin and meat separately, place sides in compartments, serve sweet bean sauce and osmanthus sauce in small dishes|Duck bone soup: add ginger, scallion and wine, bring to boil then simmer 2 hours, add cabbage, tofu and vermicelli|Serving method: spread sauce on pancake, add duck skin dipped in osmanthus sauce, then duck meat and sides, roll and enjoy'
    }
  ],

  // ============== 8. 饺子 [Dumplings] ==============
  8: [
    {
      level: 1,
      note_zh: '新手入门级，买现成饺子皮',
      note_en: 'Beginner level, use store-bought wrappers',
      ingredients_zh: '猪肉馅300g，饺子皮40张，姜1小块，葱2根，盐，生抽，料酒',
      ingredients_en: 'Ground pork 300g, dumpling wrappers 40, ginger 1 small piece, scallions 2, salt, soy sauce, wine',
      steps_zh: '猪肉馅加姜末葱花，加盐生抽料酒拌匀|饺子皮可以直接买现成的|取一张饺子皮，放适量馅料在中间|对折捏紧边缘，做成半月形|锅中烧开水，放入饺子煮至浮起|加半碗凉水再次煮开，重复2次即可捞出',
      steps_en: 'Mix ground pork with minced ginger, chopped scallions, salt, soy sauce and wine|Use store-bought dumpling wrappers|Take a wrapper, place filling in the center|Fold in half and pinch edges tightly to form a half-moon shape|Bring water to a boil, add dumplings and cook until they float|Add half a bowl of cold water and bring to boil again, repeat twice, then drain'
    },
    {
      level: 2,
      note_zh: '家常版，加白菜更鲜嫩',
      note_en: 'Home-style, add cabbage for tenderness',
      ingredients_zh: '猪肉馅300g，白菜200g，饺子皮40张，姜，葱，盐，生抽，料酒，香油',
      ingredients_en: 'Ground pork 300g, cabbage 200g, dumpling wrappers 40, ginger, scallions, salt, soy sauce, wine, sesame oil',
      steps_zh: '猪肉馅加姜末葱花、盐、生抽、料酒、香油顺一个方向搅匀|白菜切碎加盐腌制10分钟，挤干水分加入肉馅中拌匀|取饺子皮放适量馅料，对折捏紧，边缘捏出褶子|锅中烧开水加少许盐，下饺子轻轻搅动不粘底|水开后加半碗凉水，反复3次至饺子全部浮起|捞出装盘，配醋或生抽蘸料',
      steps_en: 'Mix ground pork with minced ginger, scallions, salt, soy sauce, wine and sesame oil, stir in one direction|Chop cabbage finely, salt for 10 minutes, squeeze dry, mix into pork filling|Take a wrapper, add filling, fold in half and pinch tight, pleat the edge|Bring water to a boil with a little salt, add dumplings and gently stir to prevent sticking|After boiling, add half bowl cold water, repeat 3 times until all dumplings float|Drain and plate, serve with vinegar or soy sauce dipping'
    },
    {
      level: 3,
      note_zh: '中级提升，自制面皮加韭菜',
      note_en: 'Intermediate, homemade wrappers with chives',
      ingredients_zh: '猪肉馅300g，韭菜200g，面粉300g，姜，葱，盐，生抽，老抽，料酒，白胡椒粉，鸡蛋1个，香油',
      ingredients_en: 'Ground pork 300g, chives 200g, flour 300g, ginger, scallions, salt, light soy sauce, dark soy sauce, wine, white pepper, egg 1, sesame oil',
      steps_zh: '猪肉馅加姜末葱花、盐、生抽、老抽、料酒、白胡椒粉、鸡蛋、香油顺一个方向搅至上劲|韭菜洗净切碎，用少许油拌匀防止出水，加入肉馅中拌匀|面粉加温水和成光滑面团，盖布醒30分钟|面团搓成长条，切成均匀小剂子，撒干面粉按扁|擀成中间厚边缘薄的圆形饺子皮|取皮放适量馅料，对折捏紧，用拇指和食指沿边缘捏出褶子|锅中烧开水加少许盐，下饺子轻轻搅动防止粘底，盖盖煮至浮起|加半碗凉水，反复3次，最后一次不加盖煮至皮透亮鼓起|捞出装盘，配醋和蒜蓉蘸料',
      steps_en: 'Mix ground pork with minced ginger, scallions, salt, light and dark soy sauce, wine, white pepper, egg and sesame oil, stir in one direction until sticky|Wash and chop chives finely, mix with a little oil to prevent water release, combine with pork|Mix flour with warm water and knead into smooth dough, cover and rest 30 minutes|Roll dough into a long log, cut into evenly sized pieces, dust with flour and flatten|Roll each piece into a round wrapper with thick center and thin edges|Place filling on wrapper, fold and pinch tight, pleat the edge with thumb and index finger|Bring water to a boil with salt, add dumplings and gently stir, cover and cook until they float|Add cold water, repeat 3 times, last time uncover and cook until wrappers are translucent and puffed|Drain and serve with vinegar and garlic dipping sauce'
    },
    {
      level: 4,
      note_zh: '高级专业，虾仁三鲜馅',
      note_en: 'Advanced, shrimp three-delicacy filling',
      ingredients_zh: '猪肉馅300g，白菜150g，韭菜100g，鲜虾仁200g，面粉350g，姜，葱，盐，生抽，老抽，料酒，白胡椒粉，鸡蛋1个，香油，蚝油，花椒油',
      ingredients_en: 'Ground pork 300g, cabbage 150g, chives 100g, fresh shrimp 200g, flour 350g, ginger, scallions, salt, light soy sauce, dark soy sauce, wine, white pepper, egg 1, sesame oil, oyster sauce, Sichuan pepper oil',
      steps_zh: '面粉加少许盐用温水和成光滑面团，醒面35分钟|猪肉馅加姜末葱花、盐、生抽、老抽、料酒、白胡椒粉、蚝油、香油、花椒油顺一个方向搅上劲，加少许水搅打至起胶|白菜切碎加盐腌10分钟挤干水分，韭菜切碎用油拌匀，虾仁切小丁|将白菜、韭菜、虾仁丁加入肉馅中拌匀，最后淋少许香油锁住水分|面团搓长条切小剂子，每个约10g，按扁擀成中间厚边缘薄的圆皮|饺子包法：取皮放适量馅料，对折后左手拇指推褶，右手拇指和食指捏合，打出均匀的褶子|锅中水烧开加少许盐，下饺子后立即用漏勺沿锅边轻轻推动防止粘底|大火煮至浮起后加凉水，反复3次，最后一次不加盖煮至饺子皮呈半透明状|捞出装盘，配蘸料：醋、生抽、蒜蓉、香油调匀',
      steps_en: 'Mix flour with a little salt and warm water, knead into smooth dough, rest 35 minutes|Mix ground pork with minced ginger, scallions, salt, soy sauces, wine, white pepper, oyster sauce, sesame oil and Sichuan pepper oil, stir in one direction, add a little water and beat until sticky|Chop cabbage finely, salt 10 minutes and squeeze dry, chop chives and mix with oil, dice shrimp|Combine cabbage, chives and shrimp with pork, drizzle sesame oil to seal in moisture|Roll dough into log, cut into 10g pieces, flatten and roll into round wrappers|Folding: place filling, fold in half, use left thumb to push pleats while right thumb and index finger pinch, creating even pleats|Bring water to a boil with salt, add dumplings and gently push along pot edge with strainer|Cook on high until floating, add cold water 3 times, last time uncover until wrappers are translucent|Drain and serve with dipping sauce: vinegar, soy sauce, garlic and sesame oil'
    },
    {
      level: 5,
      note_zh: '大师级，灌汤饺子',
      note_en: 'Master level, soup-filled dumplings',
      ingredients_zh: '猪前腿肉400g，鲜虾仁200g，韭菜100g，白菜100g，面粉400g，姜，葱，盐，生抽，老抽，料酒，白胡椒粉，鸡蛋1个，香油，蚝油，花椒油，鸡汤冻200g',
      ingredients_en: 'Pork front leg 400g, fresh shrimp 200g, chives 100g, cabbage 100g, flour 400g, ginger, scallions, salt, light soy sauce, dark soy sauce, wine, white pepper, egg 1, sesame oil, oyster sauce, Sichuan pepper oil, chicken broth jelly 200g',
      steps_zh: '制作面团：面粉加一个蛋清和少许盐，用温水和成光滑面团，盖布醒面40分钟|肉馅制作：猪前腿肉手工剁碎更佳，加姜末葱花、盐、生抽、老抽、料酒、白胡椒粉、蚝油、花椒油顺一个方向搅打，分次加少许葱姜水搅至起胶|馅料升级：鲜虾仁切大丁，韭菜切碎用香油拌匀防出水，白菜切碎挤干，鸡汤冻切成小丁|所有馅料混合拌匀，最后轻轻拌入鸡汤冻丁（这是汤汁饱满的关键）|面团搓长条切成小剂子，每个12g，擀成边缘薄中间厚的圆皮|包饺子手法：取皮放适量馅料，用右手拇指和食指从右向左逐个捏出均匀的褶子，最后收口捏紧，呈月牙形|煮制：锅中水烧开加少许盐，下饺子后立即轻推防止粘底，盖盖大火煮至浮起|点水三次：每次加半碗凉水，第三次开盖煮至饺子皮鼓胀透亮|蘸料升级：陈醋、生抽、蒜蓉、姜丝、香油、辣椒油按比例调匀|捞出装盘，趁热食用，咬开时汤汁饱满，鲜香可口',
      steps_en: 'Make dough: mix flour with egg white and salt, add warm water and knead into smooth dough, cover and rest 40 minutes|Filling: hand-chop pork for best texture, add minced ginger, scallions, salt, soy sauces, wine, white pepper, oyster sauce and Sichuan pepper oil, stir in one direction, gradually add scallion-ginger water until sticky|Upgrade filling: dice shrimp, chop chives and mix with sesame oil, squeeze cabbage dry, dice chicken broth jelly into small cubes|Mix all filling ingredients, gently fold in broth jelly cubes (key to juicy filling)|Roll dough into log, cut into 12g pieces, roll into thin-edged thick-centered wrappers|Folding technique: place filling, use thumb and index finger to pleat from right to left, seal tightly in crescent shape|Cooking: bring water to a boil with salt, add dumplings and gently stir, cover and cook on high until floating|Add water three times: half bowl cold water each time, third time uncover until dumplings puff up and become translucent|Upgraded dipping: aged vinegar, soy sauce, garlic, ginger shreds, sesame oil and chili oil mixed in proportion|Drain and serve hot - when bitten, the soup inside bursts with flavor'
    }
  ],

  // ============== 9. 小笼包 [Xiaolongbao] ==============
  9: [
    {
      level: 1,
      note_zh: '新手入门级，用速冻小笼包',
      note_en: 'Beginner level, use frozen xiaolongbao',
      ingredients_zh: '速冻小笼包20个，姜1块，醋3勺',
      ingredients_en: 'Frozen xiaolongbao 20, ginger 1 piece, vinegar 3 tbsp',
      steps_zh: '超市购买速冻小笼包|蒸锅加水烧开，蒸笼铺上蒸笼纸|放入小笼包，间隔一定距离|大火蒸8-10分钟|准备姜丝和醋作为蘸料|趁热食用，小心汤汁烫口',
      steps_en: 'Buy frozen xiaolongbao from supermarket|Bring steamer water to a boil, line steamer with parchment paper|Place xiaolongbao with space between each|Steam on high heat for 8-10 minutes|Prepare ginger shreds and vinegar as dipping sauce|Eat while hot, be careful of hot soup inside'
    },
    {
      level: 2,
      note_zh: '家常版，自制肉馅和皮冻',
      note_en: 'Home-style, homemade filling and aspic',
      ingredients_zh: '猪肉馅300g，猪皮冻150g，面粉300g，姜，葱，盐，生抽，料酒，白糖，醋',
      ingredients_en: 'Ground pork 300g, pork aspic 150g, flour 300g, ginger, scallions, salt, soy sauce, wine, sugar, vinegar',
      steps_zh: '猪肉馅加姜末葱花、盐生抽料酒白糖拌匀|猪皮冻切碎加入肉馅中拌匀（这是汤汁的关键）|面粉加温水和成面团醒20分钟|面团搓条切小剂子，擀成中间厚边缘薄的皮|取皮放馅料，用拇指和食指打褶子收口|蒸锅水开后放上小笼包，大火蒸8分钟|配姜丝醋碟食用',
      steps_en: 'Mix ground pork with minced ginger, scallions, salt, soy sauce, wine and sugar|Chop pork aspic finely and mix into filling (this is the key to soupy filling)|Mix flour with warm water and knead into dough, rest 20 minutes|Roll dough into log, cut into pieces, roll into wrappers with thick center and thin edges|Place filling on wrapper, pleat with thumb and index finger to seal|Place in steamer when water boils, steam on high for 8 minutes|Serve with ginger shreds and vinegar'
    },
    {
      level: 3,
      note_zh: '中级提升，皮冻更足',
      note_en: 'Intermediate, more aspic for juicier filling',
      ingredients_zh: '猪肉馅300g，猪皮冻200g，面粉350g，姜，葱，盐，生抽，老抽，料酒，白糖，白胡椒粉，香油，醋',
      ingredients_en: 'Ground pork 300g, pork aspic 200g, flour 350g, ginger, scallions, salt, light soy sauce, dark soy sauce, wine, sugar, white pepper, sesame oil, vinegar',
      steps_zh: '猪肉馅加姜末葱花、盐、生抽、老抽、料酒、白糖、白胡椒粉、香油顺一个方向搅上劲|猪皮冻切成小碎丁加入肉馅中拌匀，放冰箱冷藏20分钟使馅料稍硬更好包|面粉加温水和成光滑面团醒30分钟，搓长条切小剂子，每个15g|案板抹油，剂子按扁擀成直径8cm中间厚边缘薄的圆皮|取皮放适量馅料，用拇指和食指打褶子，每个小笼包打18-20个褶收口|蒸笼铺胡萝卜片或蒸笼纸防粘，放入小笼包保持间距|水开后放入蒸笼大火蒸8分钟|配姜丝醋碟食用',
      steps_en: 'Mix ground pork with minced ginger, scallions, salt, soy sauces, wine, sugar, white pepper and sesame oil, stir in one direction until sticky|Finely chop pork aspic and mix into filling, refrigerate 20 minutes for easier wrapping|Mix flour with warm water, knead into smooth dough, rest 30 minutes, roll into log, cut into 15g pieces|Oil the work surface, flatten pieces and roll into 8cm diameter wrappers with thick center|Place filling on wrapper, pleat with thumb and index finger, about 18-20 pleats per xiaolongbao|Line steamer with carrot slices or parchment paper, place xiaolongbao with spacing|Steam on high for 8 minutes after water boils|Serve with ginger shreds and vinegar'
    },
    {
      level: 4,
      note_zh: '高级专业，虾仁小笼包',
      note_en: 'Advanced, shrimp xiaolongbao',
      ingredients_zh: '猪肉馅350g，鲜虾仁100g，猪皮冻250g，中筋面粉400g，姜，葱，盐，生抽，老抽，料酒，白糖，白胡椒粉，香油，蚝油，花雕酒，高汤100ml',
      ingredients_en: 'Ground pork 350g, fresh shrimp 100g, pork aspic 250g, all-purpose flour 400g, ginger, scallions, salt, light soy sauce, dark soy sauce, wine, sugar, white pepper, sesame oil, oyster sauce, huadiao wine, broth 100ml',
      steps_zh: '制作皮冻：猪皮洗净焯水去油脂，加姜片葱段和适量水熬煮2小时至汤汁浓稠，过滤后冷却凝固成冻，切碎备用|肉馅制作：猪肉馅加姜汁葱花、盐、生抽、老抽、白糖、白胡椒粉、蚝油、花雕酒顺一个方向搅打|分次加入高汤搅打至完全吸收，再加入香油拌匀|鲜虾仁切小丁拌入肉馅中，最后加入皮冻碎拌匀，冷藏30分钟|面团制作：中筋面粉加少许盐用温水和成光滑面团醒30分钟|搓条切小剂子每个12g，擀成直径8cm中间厚边缘薄的圆皮|包制手法：取皮放25g馅料，左手拇指压住馅料，右手拇指和食指沿边缘打褶，每个包子打20-22个褶，收口留小孔|蒸笼铺蒸笼纸或胡萝卜片，放入小笼包保持间距|大火烧开蒸锅水，放入蒸笼大火蒸8分钟至皮半透明',
      steps_en: 'Make aspic: wash pork skin, blanch to remove fat, simmer with ginger, scallion and water for 2 hours until thick, strain, cool and solidify, then dice|Filling: mix ground pork with ginger juice, scallions, salt, soy sauces, sugar, white pepper, oyster sauce and huadiao wine, stir in one direction|Gradually add broth, stirring until fully absorbed, then add sesame oil|Dice shrimp and mix into filling, finally add diced aspic, refrigerate 30 minutes|Dough: mix flour with a little salt and warm water, knead into smooth dough, rest 30 minutes|Roll into log, cut into 12g pieces, roll into 8cm diameter wrappers|Wrapping: place 25g filling on wrapper, use left thumb to hold filling, right thumb and finger to pleat, about 20-22 pleats, leave a small opening at top|Line steamer with parchment or carrot slices, place xiaolongbao with spacing|Steam on high heat for 8 minutes until wrappers are translucent'
    },
    {
      level: 5,
      note_zh: '大师级，传统无锡小笼包',
      note_en: 'Master level, traditional Wuxi style',
      ingredients_zh: '猪前腿肉400g，鲜虾仁150g，猪皮冻300g，中筋面粉400g，高筋面粉100g，姜，葱，盐，生抽，老抽，料酒，白糖，白胡椒粉，香油，蚝油，花雕酒，高汤200ml，食用碱少许',
      ingredients_en: 'Pork front leg 400g, fresh shrimp 150g, pork aspic 300g, all-purpose flour 400g, bread flour 100g, ginger, scallions, salt, light soy sauce, dark soy sauce, wine, sugar, white pepper, sesame oil, oyster sauce, huadiao wine, broth 200ml, a little baking soda',
      steps_zh: '熬制顶级皮冻：猪皮焯水刮净油脂，加鸡爪、姜片葱段花雕酒和足量水熬煮3小时至汤浓，过滤后冷藏凝结成冻，切小丁备用|调制肉馅：猪前腿肉手工剁成肉蓉，加姜汁、葱花、盐、生抽、老抽、白糖、白胡椒粉、蚝油、花雕酒顺一个方向搅打|高汤分次加入，每次搅打至完全吸收，使肉馅饱满多汁|鲜虾仁切大丁拌入，最后加入香油和皮冻丁拌匀，冰箱冷藏1小时使馅料更加紧实|面团制作：中筋面粉和高筋面粉混合，加少许盐和食用碱，用温水和成光滑面团醒40分钟，使面皮更有筋道|搓条切小剂子每个10g，按扁擀成直径8cm边缘极薄中间略厚的圆皮|包制技法：取皮放30g馅料，左手配合旋转，右手拇指食指捏褶，每个包子打22-24个均匀的褶子，收口捏紧成鲫鱼嘴状|蒸制：蒸笼铺松针或胡萝卜片，放入小笼包保持间距|大火烧开蒸锅水，放入蒸笼大火蒸6-7分钟，至皮呈半透明状隐约可见汤汁|蘸料：姜丝泡镇江香醋，搭配食用|食用方法：轻轻提起小笼包，先在皮上咬一小口吸出汤汁，再蘸姜丝醋食用',
      steps_en: 'Make premium aspic: blanch pork skin and scrape fat clean, simmer with chicken feet, ginger, scallion, huadiao wine and water for 3 hours until thick, strain, refrigerate to set, dice|Filling: hand-chop pork front leg into paste, add ginger juice, scallions, salt, soy sauces, sugar, white pepper, oyster sauce and huadiao wine, stir in one direction|Gradually add broth, stirring until fully absorbed after each addition for juicy filling|Add diced shrimp, then sesame oil and diced aspic, refrigerate 1 hour for firmer filling|Dough: mix all-purpose and bread flour, add salt and baking soda, knead with warm water into smooth dough, rest 40 minutes for chewier wrappers|Roll into log, cut into 10g pieces, flatten and roll into 8cm wrappers with very thin edges|Wrapping: place 30g filling, rotate with left hand while pleating with right thumb and finger, about 22-24 even pleats, seal tightly in fish-mouth shape|Steaming: line steamer with pine needles or carrot slices, place xiaolongbao with spacing|Steam on high for 6-7 minutes until wrappers are translucent showing soup inside|Dipping: soak ginger shreds in Zhenjiang vinegar|Serving: gently lift xiaolongbao, bite a small hole on top to sip the soup, then dip in ginger vinegar and enjoy'
    }
  ],

  // ============== 10. 宫保虾球 [Kung Pao Shrimp] ==============
  10: [
    {
      level: 1,
      note_zh: '新手入门级',
      note_en: 'Beginner level',
      ingredients_zh: '大虾300g，花生50g，生抽2勺，白糖1勺，料酒1勺，葱1根',
      ingredients_en: 'Large shrimp 300g, peanuts 50g, soy sauce 2 tbsp, sugar 1 tbsp, wine 1 tbsp, scallion 1',
      steps_zh: '大虾去壳去虾线洗净，用料酒腌5分钟|锅中放油烧热，放入虾仁翻炒至变色|加生抽和白糖翻炒均匀|放入花生米翻炒几下|撒葱花出锅即可',
      steps_en: 'Shell and devein shrimp, wash clean, marinate with wine for 5 minutes|Heat oil in a pan, stir-fry shrimp until color changes|Add soy sauce and sugar, stir well|Add peanuts and stir a few times|Sprinkle scallions and serve'
    },
    {
      level: 2,
      note_zh: '家常版，加辣椒增香',
      note_en: 'Home-style, add chilies for aroma',
      ingredients_zh: '大虾350g，花生60g，干辣椒3个，葱姜蒜，生抽2勺，白糖1勺，醋1勺，淀粉1勺，料酒，盐',
      ingredients_en: 'Large shrimp 350g, peanuts 60g, dried chilies 3, scallion ginger garlic, soy sauce 2 tbsp, sugar 1 tbsp, vinegar 1 tbsp, cornstarch 1 tbsp, wine, salt',
      steps_zh: '大虾去壳开背去虾线，加料酒盐淀粉抓匀腌10分钟|切葱花姜末蒜末，干辣椒剪段|调碗汁：生抽、糖、醋、淀粉、水调匀|锅中油烧热，下虾仁滑炒变色盛出|锅中爆香葱姜蒜辣椒|倒入虾仁和碗汁快速翻炒|加花生米翻炒均匀出锅',
      steps_en: 'Shell and butterfly shrimp, devein, mix with wine, salt and cornstarch, marinate 10 minutes|Chop scallion, ginger and garlic, cut dried chilies into segments|Mix sauce: soy sauce, sugar, vinegar, cornstarch and water|Heat oil, stir-fry shrimp until pink, set aside|Sauté scallion, ginger, garlic and chilies until fragrant|Return shrimp and pour in sauce, stir-fry quickly|Add peanuts, stir well and serve'
    },
    {
      level: 3,
      note_zh: '中级提升，花椒提麻味',
      note_en: 'Intermediate, Sichuan pepper for numbing flavor',
      ingredients_zh: '大虾400g，花生60g，干辣椒4个，花椒1小勺，葱姜蒜，生抽2勺，老抽半勺，白糖1勺，醋1勺，料酒1勺，淀粉1勺，盐，白胡椒粉，香油',
      ingredients_en: 'Large shrimp 400g, peanuts 60g, dried chilies 4, Sichuan pepper 1 tsp, scallion ginger garlic, light soy sauce 2 tbsp, dark soy sauce half tbsp, sugar 1 tbsp, vinegar 1 tbsp, wine 1 tbsp, cornstarch 1 tbsp, salt, white pepper, sesame oil',
      steps_zh: '大虾去壳开背去虾线，加料酒、盐、白胡椒粉、淀粉抓匀腌15分钟|花生小火炸至金黄酥脆捞出|调碗汁：生抽、老抽、白糖、醋、料酒、淀粉、水、香油调匀|锅中油烧至六成热，下虾仁滑炒至卷曲变红盛出|锅中留底油，小火炸香花椒后捞出，下干辣椒段炸至微焦|下姜末蒜末葱花大火爆香|倒入虾仁大火翻炒，沿锅边倒入碗汁快速翻炒裹匀|加花生米翻炒几下，立即出锅',
      steps_en: 'Shell and butterfly shrimp, devein, mix with wine, salt, white pepper and cornstarch, marinate 15 minutes|Fry peanuts on low heat until golden crispy, set aside|Mix sauce: light soy sauce, dark soy sauce, sugar, vinegar, wine, cornstarch, water and sesame oil|Heat oil to medium-high, stir-fry shrimp until curled and pink, set aside|Leave base oil, fry Sichuan pepper on low until fragrant, remove, fry dried chilies until slightly charred|Sauté ginger, garlic and scallion on high heat until fragrant|Add shrimp and stir-fry on high, pour sauce along pan edge and stir quickly to coat|Add peanuts, stir a few times and serve immediately'
    },
    {
      level: 4,
      note_zh: '高级专业，滑炒技法',
      note_en: 'Advanced, oil-slick technique',
      ingredients_zh: '大虾450g，花生70g，干辣椒5个，花椒1勺，葱白2段，姜4片，蒜4瓣，生抽2勺，老抽半勺，白糖1.5勺，醋1.5勺，料酒1勺，淀粉1.5勺，盐，白胡椒粉，蛋清半个，香油',
      ingredients_en: 'Large shrimp 450g, peanuts 70g, dried chilies 5, Sichuan pepper 1 tbsp, scallion whites 2 segments, ginger 4 slices, garlic 4 cloves, light soy sauce 2 tbsp, dark soy sauce half tbsp, sugar 1.5 tbsp, vinegar 1.5 tbsp, wine 1 tbsp, cornstarch 1.5 tbsp, salt, white pepper, half egg white, sesame oil',
      steps_zh: '大虾去壳开背去虾线，加盐、白胡椒粉、料酒、蛋清、淀粉抓匀腌20分钟|花生小火炸至金黄酥脆，捞出控油|调碗汁：生抽、老抽、白糖、醋、料酒、淀粉、水、香油调匀备用|锅中多放油烧至五成热，下虾仁滑炒至八成熟盛出|锅中留底油，小火炸花椒至出香捞出，下干辣椒段炸至棕红|下葱白段、姜片、蒜片大火爆香|倒入虾仁大火快速翻炒，沿锅边倒入碗汁翻炒至汤汁浓稠裹匀|加花生米快速拌匀，立即出锅装盘',
      steps_en: 'Shell and butterfly shrimp, devein, mix with salt, white pepper, wine, egg white and cornstarch, marinate 20 minutes|Fry peanuts on low heat until golden crispy, drain oil|Mix sauce: soy sauces, sugar, vinegar, wine, cornstarch, water and sesame oil|Heat more oil to medium, slide shrimp in and stir-fry until 80% done, set aside|Leave base oil, fry Sichuan pepper on low until fragrant, remove, fry dried chilies until dark red|Sauté scallion whites, ginger slices and garlic slices on high heat|Add shrimp and stir-fry on high, pour sauce along pan edge, stir until sauce thickens and coats|Add peanuts, mix quickly and serve immediately'
    },
    {
      level: 5,
      note_zh: '大师级，完美宫保风味',
      note_en: 'Master level, perfect Kung Pao flavor',
      ingredients_zh: '大虾500g，花生80g，干辣椒6个，花椒1.5勺，葱白3段，姜5片，蒜5瓣，生抽2.5勺，老抽半勺，白糖2勺，醋2勺，花雕酒1勺，淀粉1.5勺，盐，白胡椒粉，蛋清半个，香油，辣椒油少许',
      ingredients_en: 'Large shrimp 500g, peanuts 80g, dried chilies 6, Sichuan pepper 1.5 tbsp, scallion whites 3, ginger 5 slices, garlic 5 cloves, light soy sauce 2.5 tbsp, dark soy sauce half tbsp, sugar 2 tbsp, vinegar 2 tbsp, huadiao wine 1 tbsp, cornstarch 1.5 tbsp, salt, white pepper, half egg white, sesame oil, chili oil a little',
      steps_zh: '大虾去壳留尾壳，开背去虾线，加盐、白胡椒粉、花雕酒、蛋清、淀粉抓匀腌20分钟|花生小火炸至酥脆金黄，捞出控油|调碗汁：生抽、老抽、白糖、醋、花雕酒、淀粉、水、香油、辣椒油调匀|锅中多放油烧至五成热，下虾仁滑炒至全部卷曲变红盛出|锅中留底油，小火炸花椒至深棕色出香捞出，下干辣椒段炸至暗红|下葱白段、姜片、蒜片大火爆香30秒|倒入虾仁大火快炒，沿锅边倒入碗汁快速翻炒至酱汁浓稠完全裹住虾仁|加花生米快速拌匀|装盘后撒少许葱花点缀，立即上桌趁热食用',
      steps_en: 'Shell shrimp leaving tail shell, butterfly and devein, mix with salt, white pepper, huadiao wine, egg white and cornstarch, marinate 20 minutes|Fry peanuts on low heat until crispy golden, drain oil|Mix sauce: soy sauces, sugar, vinegar, huadiao wine, cornstarch, water, sesame oil and chili oil|Heat more oil to medium, slide shrimp in and stir-fry until all curled and pink, set aside|Leave base oil, fry Sichuan pepper on low until dark brown and fragrant, remove, fry dried chilies until dark red|Sauté scallion whites, ginger and garlic on high heat for 30 seconds|Add shrimp and stir-fry on high, pour sauce along pan edge, stir quickly until sauce thickens and coats shrimp completely|Add peanuts and mix quickly|Garnish with chopped scallions, serve immediately while hot'
    }
  ]
};

// ============ 数据库操作 ============
db.serialize(() => {
  // 删除菜谱3-10的旧数据
  console.log('删除菜谱3-10的旧数据...');
  db.run('DELETE FROM levels WHERE recipe_id >= 3 AND recipe_id <= 10');

  // 插入新数据
  const insert = db.prepare(`INSERT INTO levels 
    (recipe_id, level, ingredients_zh, ingredients_en, steps_zh, steps_en, note_zh, note_en) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);

  let total = 0;
  for (let recipeId = 3; recipeId <= 10; recipeId++) {
    const levels = data[recipeId];
    if (!levels) continue;
    
    for (const l of levels) {
      insert.run(recipeId, l.level, l.ingredients_zh, l.ingredients_en, l.steps_zh, l.steps_en, l.note_zh, l.note_en);
      total++;
      console.log(`菜谱${recipeId} Level ${l.level} -> 已插入`);
    }
  }

  insert.finalize();

  // 验证结果
  db.all('SELECT recipe_id, COUNT(*) as cnt, GROUP_CONCAT(level) as levels FROM levels WHERE recipe_id>=1 AND recipe_id<=10 GROUP BY recipe_id ORDER BY recipe_id', (e, r) => {
    if (e) console.error(e);
    else {
      console.log('\n========== 导入完成 ==========');
      console.log(`共插入 ${total} 条新记录`);
      console.log('\n菜谱1-10 Level 数据情况：');
      console.log('菜谱ID | Level数 | 包含Level');
      console.log('-' .repeat(40));
      r.forEach(row => {
        console.log(`  ${row.recipe_id}    |    ${row.cnt}    | Level ${row.levels}`);
      });

      // 检查是否存在英文非空
      db.all('SELECT recipe_id, level, ingredients_en, steps_en FROM levels WHERE recipe_id>=3 AND recipe_id<=10 AND (ingredients_en IS NULL OR ingredients_en = "" OR steps_en IS NULL OR steps_en = "")', (e2, r2) => {
        if (e2) console.error(e2);
        else {
          if (r2.length > 0) {
            console.log('\n⚠️ 以下记录英文数据为空：');
            r2.forEach(row => console.log(`菜谱${row.recipe_id} Level ${row.level}`));
          } else {
            console.log('\n✅ 所有记录的英文数据均非空！');
          }
        }
        db.close();
      });
    }
  });
});