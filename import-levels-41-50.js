const dbPath = require('path').join(__dirname, 'recipes-new.db');
const db = new (require('sqlite3').Database)(dbPath);

const data = {
  // 41. 皮蛋豆腐 [Century Egg Tofu]
  41: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'嫩豆腐1盒，皮蛋2个，姜，葱，生抽2勺，醋1勺，香油1勺',
      ingredients_en:'Silken tofu 1 box, century eggs 2, ginger, scallion, soy sauce 2 tbsp, vinegar 1 tbsp, sesame oil 1 tbsp',
      steps_zh:'嫩豆腐整块放入盘中|皮蛋剥壳切成小丁|姜切末，葱切花|皮蛋丁撒在豆腐上|生抽、醋、香油调成汁淋上|撒上姜末和葱花即可',
      steps_en:'Place whole silken tofu on plate|Peel and dice century eggs|Mince ginger, chop scallion|Scatter egg dices over tofu|Mix soy sauce, vinegar and sesame oil, drizzle over|Sprinkle ginger and scallion'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'嫩豆腐1盒，皮蛋2个，榨菜少许，姜蒜葱，红椒半个，花生碎，生抽2勺，醋2勺，糖少许，香油，辣椒油',
      ingredients_en:'Silken tofu 1 box, century eggs 2, pickled mustard a little, garlic ginger scallion, red pepper half, crushed peanuts, soy sauce 2 tbsp, vinegar 2 tbsp, sugar a little, sesame oil, chili oil',
      steps_zh:'嫩豆腐切片在开水中烫一下，捞出摆盘|皮蛋剥壳切小丁，榨菜切末|姜切末，蒜切末，葱切花，红椒切小丁|皮蛋丁、榨菜末撒在豆腐上|生抽、醋、糖、香油、辣椒油调成汁|淋在豆腐上，撒姜末蒜末葱花红椒丁|花生碎点缀即可',
      steps_en:'Slice tofu, blanch in boiling water, drain and plate|Peel and dice century eggs, mince pickled mustard|Mince ginger and garlic, chop scallion, dice red pepper|Scatter egg dices and mustard over tofu|Mix soy sauce, vinegar, sugar, sesame oil and chili oil into sauce|Drizzle over tofu, sprinkle ginger, garlic, scallion and red pepper|Garnish with crushed peanuts'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'嫩豆腐1盒，皮蛋3个，榨菜少许，姜蒜葱，红椒半个，花生碎，熟芝麻，生抽2勺，醋2勺，糖少许，香油，辣椒油，盐',
      ingredients_en:'Silken tofu 1 box, century eggs 3, pickled mustard a little, garlic ginger scallion, red pepper half, crushed peanuts, sesame seeds, soy sauce 2 tbsp, vinegar 2 tbsp, sugar a little, sesame oil, chili oil, salt',
      steps_zh:'嫩豆腐切片在开水中加盐烫一下，捞出摆盘（加盐使豆腐更紧实）|皮蛋剥壳切小丁，榨菜切细末|姜切末，蒜切末，葱切花，红椒切小丁|花生碎和熟芝麻混合备用|皮蛋丁、榨菜末撒在豆腐上|调汁：生抽、醋、糖、香油、辣椒油、少许盐调匀|淋在豆腐上，撒姜末蒜末葱花红椒丁|撒花生碎和熟芝麻即可',
      steps_en:'Slice tofu, blanch in salted boiling water (salt firms tofu), drain and plate|Peel and dice century eggs, finely mince mustard|Mince ginger and garlic, chop scallion, dice red pepper|Mix crushed peanuts and sesame seeds|Scatter egg dices and mustard over tofu|Mix sauce: soy sauce, vinegar, sugar, sesame oil, chili oil and salt|Drizzle over tofu, sprinkle garlic, ginger, scallion and red pepper|Sprinkle peanuts and sesame'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'嫩豆腐1盒，皮蛋3个，松花蛋1个（双色皮蛋），榨菜少许，姜蒜葱，红椒半个，青椒半个，花生碎，熟芝麻，生抽2勺，香醋2勺，糖少许，香油，辣椒油，盐，鸡精',
      ingredients_en:'Silken tofu 1 box, century eggs 3, preserved egg 1 (two-color eggs), pickled mustard a little, garlic ginger scallion, red pepper half, green pepper half, crushed peanuts, sesame seeds, soy sauce 2 tbsp, black vinegar 2 tbsp, sugar a little, sesame oil, chili oil, salt, chicken bouillon',
      steps_zh:'嫩豆腐整块在开水中加盐烫2分钟，捞出切厚片摆盘（整块烫更好保持形状）|皮蛋和松花蛋剥壳切小丁（双色蛋更美观），榨菜切细末|姜切末，蒜切末，葱切花，红椒青椒切小丁|双色皮蛋丁、榨菜末均匀撒在豆腐上|调汁：生抽、香醋、糖、香油、辣椒油、盐、鸡精调匀|淋在豆腐上，撒姜末蒜末葱花和双色椒丁|花生碎和熟芝麻撒在最上面点缀',
      steps_en:'Blanch whole tofu in salted boiling water 2 minutes, slice thick and plate|Peel and dice century eggs and preserved egg (two colors), finely mince mustard|Mince ginger and garlic, chop scallion, dice red and green peppers|Scatter two-color egg dices and mustard over tofu|Mix sauce: soy sauce, black vinegar, sugar, sesame oil, chili oil, salt and chicken bouillon|Drizzle over tofu, sprinkle garlic, ginger, scallion and peppers|Top with crushed peanuts and sesame seeds'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'嫩豆腐1盒，皮蛋3个，松花蛋1个，榨菜少许，姜蒜葱，红椒半个，青椒半个，花生碎，熟芝麻，肉松少许，生抽3勺，香醋3勺，糖少许，香油，辣椒油，花椒油，盐，鸡精',
      ingredients_en:'Silken tofu 1 box, century eggs 3, preserved egg 1, pickled mustard a little, garlic ginger scallion, red pepper half, green pepper half, crushed peanuts, sesame seeds, meat floss a little, soy sauce 3 tbsp, black vinegar 3 tbsp, sugar a little, sesame oil, chili oil, Sichuan pepper oil, salt, chicken bouillon',
      steps_zh:'嫩豆腐整块放入开水中加盐烫3分钟，捞出切薄片摆成花形（刀工均匀）|皮蛋和松花蛋剥壳切小丁，榨菜切细末|姜切细末，蒜切末，葱切花，红椒青椒切细丁|调汁：生抽、香醋、糖、香油、辣椒油、花椒油、盐、鸡精调匀（花椒油增添麻香）|双色皮蛋丁、榨菜末均匀撒在豆腐上|淋上调好的酱汁，撒姜末蒜末葱花和双色椒丁|撒花生碎、熟芝麻和肉松（肉松增加口感层次）|静置5分钟入味后上桌',
      steps_en:'Blanch whole tofu in salted boiling water 3 minutes, slice thin and arrange in flower pattern|Peel and dice century and preserved eggs, finely mince mustard|Finely mince ginger, mince garlic, chop scallion, finely dice red and green peppers|Mix sauce: soy sauce, black vinegar, sugar, sesame oil, chili oil, Sichuan pepper oil, salt and chicken bouillon (Sichuan pepper oil adds numbing aroma)|Scatter two-color egg dices and mustard over tofu|Drizzle sauce over, sprinkle garlic, ginger, scallion and colored peppers|Sprinkle crushed peanuts, sesame seeds and meat floss (meat floss adds texture)|Rest 5 minutes to absorb flavors before serving'}
  ],

  // 42. 拍黄瓜 [Cucumber Salad]
  42: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'黄瓜2根，蒜3瓣，生抽2勺，醋2勺，糖1勺，香油1勺，盐',
      ingredients_en:'Cucumbers 2, garlic 3 cloves, soy sauce 2 tbsp, vinegar 2 tbsp, sugar 1 tbsp, sesame oil 1 tbsp, salt',
      steps_zh:'黄瓜洗净，用刀背拍裂后切成段|蒜切末|黄瓜加盐腌5分钟，倒掉多余水分|加蒜末、生抽、醋、糖、香油拌匀即可',
      steps_en:'Wash cucumbers, smash with knife back, cut into segments|Mince garlic|Salt cucumbers 5 minutes, drain excess water|Add garlic, soy sauce, vinegar, sugar and sesame oil, mix well'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'黄瓜2根，蒜5瓣，干辣椒3个，花椒1小勺，生抽2勺，醋3勺，糖1勺，香油1勺，盐，熟芝麻',
      ingredients_en:'Cucumbers 2, garlic 5 cloves, dried chilies 3, Sichuan pepper 1 tsp, soy sauce 2 tbsp, vinegar 3 tbsp, sugar 1 tbsp, sesame oil 1 tbsp, salt, sesame seeds',
      steps_zh:'黄瓜洗净用刀背拍裂（让黄瓜自然裂开更入味）|切成小段，加少许盐腌10分钟|倒掉腌出的水分|蒜切末，干辣椒剪段|锅中烧热油，下花椒和干辣椒炸香|蒜末放在黄瓜上，浇上热油|加生抽、醋、糖、香油拌匀|撒熟芝麻即可',
      steps_en:'Wash cucumbers, smash with knife back for better flavor absorption|Cut into segments, salt 10 minutes|Drain salted water|Mince garlic, cut chilies into segments|Heat oil, fry Sichuan pepper and chilies until fragrant|Place garlic on cucumbers, pour hot oil over|Add soy sauce, vinegar, sugar and sesame oil, mix well|Sprinkle sesame seeds'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'黄瓜2根，蒜5瓣，干辣椒3个，花椒1.5小勺，生抽2勺，醋3勺，糖1勺，香油1勺，辣椒油，盐，熟芝麻，花生碎',
      ingredients_en:'Cucumbers 2, garlic 5 cloves, dried chilies 3, Sichuan pepper 1.5 tsp, soy sauce 2 tbsp, vinegar 3 tbsp, sugar 1 tbsp, sesame oil 1 tbsp, chili oil, salt, sesame seeds, crushed peanuts',
      steps_zh:'黄瓜洗净用刀背拍裂成自然裂开状，切成4cm段|加少许盐腌10分钟，倒掉水分不要挤太干（保留脆度）|蒜切末，干辣椒剪段|锅中烧热油至冒烟，下花椒炸香捞出花椒弃用|碗中放入蒜末和干辣椒段，浇上热花椒油激香|加生抽、醋、糖、香油、辣椒油调匀成酱汁|酱汁倒入黄瓜中拌匀|撒熟芝麻和花生碎即可',
      steps_en:'Wash cucumbers, smash naturally with knife back, cut into 4cm segments|Salt 10 minutes, drain but do not squeeze too dry (keep crunch)|Mince garlic, cut chilies|Heat oil until smoking, fry Sichuan pepper until fragrant, discard pepper|Put garlic and chilies in bowl, pour hot oil over to release aroma|Mix soy sauce, vinegar, sugar, sesame oil and chili oil into dressing|Pour dressing over cucumbers, mix well|Sprinkle sesame seeds and crushed peanuts'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'黄瓜3根，蒜6瓣，干辣椒4个，花椒2小勺，生抽2勺，香醋3勺，糖1勺，香油1勺，辣椒油，花椒油，盐，熟芝麻，花生碎，香菜',
      ingredients_en:'Cucumbers 3, garlic 6 cloves, dried chilies 4, Sichuan pepper 2 tsp, soy sauce 2 tbsp, black vinegar 3 tbsp, sugar 1 tbsp, sesame oil 1 tbsp, chili oil, Sichuan pepper oil, salt, sesame seeds, crushed peanuts, cilantro',
      steps_zh:'黄瓜选用嫩黄瓜，洗净去掉两头，用刀背拍裂成自然裂开状|切成4cm段，加盐腌15分钟，倒掉水分|蒜切末，干辣椒剪段，香菜切段|锅中烧热油至冒烟，下花椒炸香捞出|碗中放蒜末和干辣椒段，浇上热花椒油激香|加生抽、香醋、糖、香油、辣椒油、花椒油调匀（花椒油和辣椒油双重麻辣）|酱汁倒入黄瓜中拌匀，加香菜段|撒熟芝麻和花生碎，冰箱冷藏10分钟更爽脆',
      steps_en:'Choose tender cucumbers, trim ends, smash with knife back|Cut into 4cm segments, salt 15 minutes, drain|Mince garlic, cut chilies, cut cilantro into segments|Heat oil until smoking, fry Sichuan pepper until fragrant, discard|Put garlic and chilies in bowl, pour hot oil over|Mix soy sauce, black vinegar, sugar, sesame oil, chili oil and Sichuan pepper oil (double numbing-spicy)|Pour dressing over cucumbers, add cilantro|Sprinkle sesame seeds and peanuts, refrigerate 10 minutes for extra crunch'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'黄瓜3根，蒜8瓣，干辣椒5个，花椒2.5小勺，生抽3勺，香醋4勺，糖1勺，香油1勺，辣椒油，花椒油，盐，熟芝麻，花生碎，香菜，红椒半个，鸡精',
      ingredients_en:'Cucumbers 3, garlic 8 cloves, dried chilies 5, Sichuan pepper 2.5 tsp, soy sauce 3 tbsp, black vinegar 4 tbsp, sugar 1 tbsp, sesame oil 1 tbsp, chili oil, Sichuan pepper oil, salt, sesame seeds, crushed peanuts, cilantro, red pepper half, chicken bouillon',
      steps_zh:'黄瓜选用带刺嫩黄瓜，洗净去两头，用刀背先轻拍再稍用力形成自然裂纹（拍得恰到好处才脆）|切成4cm段，加盐腌15分钟，倒掉水分|蒜切细末，干辣椒剪细段，香菜切段，红椒切丝|锅中烧热油至冒烟，下花椒炸至微焦出香捞出|碗中放蒜末和干辣椒段，浇上热花椒油激出香味|加生抽、香醋、糖、香油、辣椒油、花椒油、鸡精调匀成复合酱汁|酱汁倒入黄瓜中充分拌匀，放入香菜段和红椒丝|撒熟芝麻和花生碎，冰箱冷藏15分钟至凉透爽脆|装盘后淋少许酱汁在表面点缀',
      steps_en:'Choose prickly tender cucumbers, trim ends, gently then firmly smash for natural cracks (right force makes them crunchy)|Cut into 4cm segments, salt 15 minutes, drain|Finely mince garlic, finely cut chilies, cut cilantro, shred red pepper|Heat oil until smoking, fry Sichuan pepper until slightly charred, discard|Put garlic and chilies in bowl, pour hot oil over|Mix soy sauce, black vinegar, sugar, sesame oil, chili oil, Sichuan pepper oil and chicken bouillon into complex dressing|Pour dressing over cucumbers, mix thoroughly, add cilantro and red pepper|Sprinkle sesame seeds and peanuts, refrigerate 15 minutes until chilled and crunchy|Drizzle extra sauce on top when plating'}
  ],

  // 43. 泡椒凤爪 [Spicy Chicken Feet]
  43: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鸡爪500g，泡椒200g，泡椒水半碗，盐，糖，醋',
      ingredients_en:'Chicken feet 500g, pickled chilies 200g, pickled chili brine half bowl, salt, sugar, vinegar',
      steps_zh:'鸡爪剪去指甲，洗净|锅中加水烧开，放入鸡爪煮15分钟|捞出过凉水，沥干|泡椒切段，加泡椒水、盐、糖、醋调成泡汁|鸡爪放入泡汁中，冰箱冷藏浸泡4小时以上即可',
      steps_en:'Trim chicken feet nails, wash|Boil water, cook chicken feet 15 minutes|Rinse in cold water, drain|Cut pickled chilies into segments, mix with brine, salt, sugar and vinegar|Add chicken feet to pickling liquid, refrigerate 4+ hours'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鸡爪600g，泡椒200g，野山椒100g，花椒1勺，姜，蒜，芹菜，盐，糖，白醋',
      ingredients_en:'Chicken feet 600g, pickled chilies 200g, wild peppers 100g, Sichuan pepper 1 tbsp, ginger, garlic, celery, salt, sugar, white vinegar',
      steps_zh:'鸡爪剪去指甲，每个斩成两半|锅中加水烧开，加姜片料酒八角，放入鸡爪煮15分钟|捞出过冰水（使鸡爪更Q弹），沥干|泡椒和野山椒切段，加泡椒水、花椒、盐、糖、白醋、凉开水调成泡汁|鸡爪放入泡汁中，加姜片蒜片和芹菜段增香|冰箱冷藏浸泡过夜更入味',
      steps_en:'Trim nails, cut each foot in half|Boil water with ginger, wine and star anise, cook feet 15 minutes|Rinse in ice water (for Q弹 texture), drain|Cut pickled chilies and wild peppers, mix with brine, Sichuan pepper, salt, sugar, white vinegar and water|Add feet to liquid with ginger, garlic and celery slices|Refrigerate overnight for best flavor'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'鸡爪700g，泡椒200g，野山椒150g，花椒1.5勺，姜，蒜，芹菜，胡萝卜半根，盐，糖，白醋，料酒，八角',
      ingredients_en:'Chicken feet 700g, pickled chilies 200g, wild peppers 150g, Sichuan pepper 1.5 tbsp, ginger, garlic, celery, carrot half, salt, sugar, white vinegar, wine, star anise',
      steps_zh:'鸡爪剪去指甲，每个斩成两半|冷水下锅加姜片料酒八角煮开，焯水5分钟捞出洗净|重新加水烧开，放入鸡爪煮10分钟至熟但不过烂|捞出立即过冰水（冰水浸泡10分钟使鸡爪更Q弹）|泡椒和野山椒切段，胡萝卜切薄片|调泡汁：泡椒水、野山椒水、花椒、盐、糖、白醋、凉开水调匀（味道要够咸够酸）|鸡爪放入泡汁中，加姜片蒜片芹菜段和胡萝卜片|冰箱冷藏浸泡24小时至完全入味',
      steps_en:'Trim nails, cut each in half|Blanch in cold water with ginger, wine and star anise 5 minutes, drain and rinse|Boil fresh water, cook feet 10 minutes until done but not mushy|Immediately rinse in ice water (10 minutes for Q弹 texture)|Cut pickled chilies and wild peppers, slice carrot thin|Mix pickling liquid: chili brines, Sichuan pepper, salt, sugar, white vinegar and water (should be quite salty and sour)|Add feet with ginger, garlic, celery and carrot slices|Refrigerate 24 hours for full flavor'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'鸡爪800g，泡椒200g，野山椒150g，花椒2勺，姜，蒜，芹菜，胡萝卜半根，洋葱半个，盐，糖，白醋，料酒，八角，桂皮，柠檬半个',
      ingredients_en:'Chicken feet 800g, pickled chilies 200g, wild peppers 150g, Sichuan pepper 2 tbsp, ginger, garlic, celery, carrot half, onion half, salt, sugar, white vinegar, wine, star anise, cinnamon, lemon half',
      steps_zh:'鸡爪剪去指甲，每个斩成两半|冷水下锅加姜片料酒八角桂皮煮开，焯水5分钟捞出洗净|重新加水烧开，放入鸡爪煮8分钟（不要煮太久保持脆度）|捞出过冰水浸泡15分钟，沥干|泡椒和野山椒切段，胡萝卜切薄片，洋葱切丝，柠檬切薄片去籽|调泡汁：泡椒水、野山椒水、花椒、盐、糖、白醋、凉开水调匀|鸡爪放入大碗中，加入所有蔬菜和柠檬片|倒入泡汁没过所有食材，密封|冰箱冷藏浸泡48小时，中间翻动一次使入味均匀',
      steps_en:'Trim nails, cut each in half|Blanch in cold water with ginger, wine, star anise and cinnamon 5 minutes, drain and rinse|Boil fresh water, cook feet 8 minutes (keep crunchy)|Rinse in ice water 15 minutes, drain|Cut chilies, slice carrot thin, shred onion, slice lemon thin and deseed|Mix pickling liquid: brines, Sichuan pepper, salt, sugar, vinegar and water|Put feet in large bowl, add all vegetables and lemon|Pour liquid to cover everything, seal|Refrigerate 48 hours, flip once for even marinating'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'鸡爪1000g，泡椒250g，野山椒200g，花椒2.5勺，姜，蒜，芹菜，胡萝卜半根，洋葱半个，柠檬1个，盐，糖，白醋，花雕酒，八角，桂皮，香叶，小米辣',
      ingredients_en:'Chicken feet 1000g, pickled chilies 250g, wild peppers 200g, Sichuan pepper 2.5 tbsp, ginger, garlic, celery, carrot half, onion half, lemon 1, salt, sugar, white vinegar, huadiao wine, star anise, cinnamon, bay leaves, bird eye chilies',
      steps_zh:'鸡爪剪去指甲，每个斩成两半|冷水下锅加姜片花雕酒八角桂皮香叶大火煮开，焯水5分钟捞出洗净|重新加水烧开，放入鸡爪煮8分钟至刚好熟透（筷子能戳透但皮不烂）|捞出立即放入冰水中浸泡15分钟至完全冷却（冰水浸泡使皮质Q弹脆爽）|泡椒野山椒切段，胡萝卜切薄片，洋葱切丝，柠檬切薄片去籽，小米辣切圈|调泡汁：泡椒水、野山椒水、花椒、盐、糖、白醋、凉开水调匀（味道要浓郁才入味）|鸡爪沥干放入大密封盒中，加入所有蔬菜香料和柠檬片小米辣|倒入泡汁完全没过食材，密封严实|冰箱冷藏浸泡48-72小时（时间越长越入味），每天翻动一次|食用前取出摆盘，淋少许泡汁在表面',
      steps_en:'Trim nails, cut each in half|Blanch in cold water with ginger, huadiao wine, star anise, cinnamon and bay leaves 5 minutes, drain and rinse|Boil fresh water, cook feet 8 minutes until just done (chopstick pierces but skin not mushy)|Immediately soak in ice water 15 minutes until fully cooled (ice water makes skin Q弹 crunchy)|Cut pickled chilies and wild peppers, slice carrot thin, shred onion, slice lemon thin and deseed, slice bird eye chilies|Mix pickling liquid: brines, Sichuan pepper, salt, sugar, white vinegar and water (strong flavor for good absorption)|Drain feet, put in large sealed container with all vegetables, spices, lemon and bird eye chilies|Pour liquid to completely cover, seal tightly|Refrigerate 48-72 hours (longer = more flavorful), flip daily|Arrange on plate, drizzle some pickling liquid on top before serving'}
  ],

  // 44. 糖拌西红柿 [Sugar Tomatoes]
  44: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'西红柿3个，白糖3勺',
      ingredients_en:'Tomatoes 3, sugar 3 tbsp',
      steps_zh:'西红柿洗净去蒂|切成薄片或瓣状|摆入盘中|均匀撒上白糖即可',
      steps_en:'Wash and core tomatoes|Slice thin or cut into wedges|Arrange on plate|Sprinkle evenly with sugar'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'西红柿3个，白糖4勺，盐少许，干桂花少许',
      ingredients_en:'Tomatoes 3, sugar 4 tbsp, salt a little, dried osmanthus a little',
      steps_zh:'西红柿洗净去蒂|切成均匀薄片|摆入盘中呈花形|撒上白糖，再撒少许盐提鲜|放入冰箱冷藏15分钟口感更佳|食用前可撒少许桂花点缀',
      steps_en:'Wash and core tomatoes|Cut into even thin slices|Arrange in flower shape on plate|Sprinkle sugar and a little salt to enhance sweetness|Refrigerate 15 minutes for better taste|Garnish with osmanthus before serving'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'西红柿4个，白糖4勺，盐少许，干桂花少许，蜂蜜1勺',
      ingredients_en:'Tomatoes 4, sugar 4 tbsp, salt a little, dried osmanthus a little, honey 1 tbsp',
      steps_zh:'西红柿洗净去蒂，切成均匀薄片（约0.5cm厚）|摆入盘中呈扇形或花形|撒少许盐提鲜（盐能突出甜味）|均匀撒上白糖，再淋少许蜂蜜（蜂蜜增加风味层次）|放入冰箱冷藏20分钟使糖融化入味|食用前撒干桂花点缀',
      steps_en:'Wash and core tomatoes, cut into even 0.5cm slices|Arrange in fan or flower shape on plate|Sprinkle a little salt (salt accentuates sweetness)|Sprinkle sugar evenly, drizzle honey (honey adds flavor depth)|Refrigerate 20 minutes for sugar to dissolve and infuse|Garnish with dried osmanthus before serving'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'西红柿4个，白糖5勺，盐少许，干桂花少许，蜂蜜1勺，薄荷叶几片，柠檬汁少许',
      ingredients_en:'Tomatoes 4, sugar 5 tbsp, salt a little, dried osmanthus a little, honey 1 tbsp, mint leaves a few, lemon juice a little',
      steps_zh:'西红柿洗净去蒂，用开水烫一下去皮（去皮后口感更细腻）|切成均匀薄片，摆入盘中呈花形|撒少许盐提鲜，淋少许柠檬汁防止氧化|均匀撒上白糖和蜂蜜（白糖蜂蜜混合更清甜）|放入冰箱冷藏20分钟至出汁|薄荷叶洗净擦干切细丝|取出后撒干桂花和薄荷叶丝点缀',
      steps_en:'Wash and core tomatoes, blanch in boiling water and peel (peeled gives smoother texture)|Cut into even thin slices, arrange in flower shape|Sprinkle salt, drizzle lemon juice to prevent oxidation|Sprinkle sugar and honey evenly (mixed sweeteners taste cleaner)|Refrigerate 20 minutes until juices release|Wash, dry and julienne mint leaves|Garnish with osmanthus and mint julienne before serving'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'西红柿5个，白糖5勺，盐少许，干桂花适量，蜂蜜1勺，薄荷叶几片，柠檬汁少许，话梅3颗',
      ingredients_en:'Tomatoes 5, sugar 5 tbsp, salt a little, dried osmanthus, honey 1 tbsp, mint leaves a few, lemon juice a little, preserved plums 3',
      steps_zh:'西红柿洗净去蒂，顶部划十字用开水烫一下去皮（西红柿选熟透多汁的）|切成均匀薄片，摆入圆盘中从外到内呈螺旋花形|撒少许盐提鲜，淋柠檬汁防氧化|话梅去核切碎，撒在西红柿上（话梅增加酸甜层次）|均匀撒上白糖和蜂蜜，让每片都沾到|放入冰箱冷藏30分钟至出汁入味|取出后撒干桂花，薄荷叶切丝点缀|盘底汤汁酸甜可口，可一起食用',
      steps_en:'Wash and core tomatoes, score top with cross, blanch and peel (choose ripe juicy tomatoes)|Cut into even thin slices, arrange in spiral flower from outer to inner ring|Sprinkle salt, drizzle lemon juice to prevent oxidation|Pit and chop preserved plums, scatter over tomatoes (plums add sweet-sour depth)|Sprinkle sugar and honey evenly so each slice is coated|Refrigerate 30 minutes until juices release and flavors meld|Garnish with osmanthus and julienned mint|The sweet-sour juice at the bottom is delicious, can be eaten together'}
  ],

  // 45. 凉面 [Cold Noodles]
  45: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'面条300g，黄瓜1根，豆芽100g，芝麻酱2勺，生抽2勺，醋2勺，糖1勺',
      ingredients_en:'Noodles 300g, cucumber 1, bean sprouts 100g, sesame paste 2 tbsp, soy sauce 2 tbsp, vinegar 2 tbsp, sugar 1 tbsp',
      steps_zh:'面条煮熟捞出过凉水，沥干|黄瓜切丝，豆芽焯水|芝麻酱加水调稀，加生抽醋糖调成酱汁|面条装碗，放上黄瓜丝和豆芽|淋上酱汁，撒葱花即可',
      steps_en:'Cook noodles, rinse in cold water, drain|Julienne cucumber, blanch bean sprouts|Thin sesame paste with water, mix with soy sauce, vinegar and sugar|Put noodles in bowl, top with cucumber and sprouts|Drizzle sauce, sprinkle scallions'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'面条400g，鸡胸肉1块，黄瓜1根，豆芽100g，花生碎，熟芝麻，芝麻酱3勺，生抽2勺，醋3勺，糖1勺，蒜泥，辣椒油，花椒粉，葱',
      ingredients_en:'Noodles 400g, chicken breast 1, cucumber 1, bean sprouts 100g, crushed peanuts, sesame seeds, sesame paste 3 tbsp, soy sauce 2 tbsp, vinegar 3 tbsp, sugar 1 tbsp, garlic paste, chili oil, Sichuan pepper powder, scallion',
      steps_zh:'面条煮熟捞出过冰水，沥干水分，加少许油拌匀防粘|鸡胸肉煮熟撕成丝，黄瓜切丝，豆芽焯水|芝麻酱用温水调开，加生抽、醋、糖、蒜泥、辣椒油、花椒粉调成酱汁|面条装碗，摆上鸡丝、黄瓜丝、豆芽、花生碎|淋上调好的酱汁，撒葱花和熟芝麻|拌匀即可食用',
      steps_en:'Cook noodles, rinse in ice water, drain, toss with oil to prevent sticking|Cook and shred chicken breast, julienne cucumber, blanch sprouts|Thin sesame paste with warm water, mix with soy sauce, vinegar, sugar, garlic, chili oil and Sichuan pepper powder|Put noodles in bowl, top with chicken, cucumber, sprouts and peanuts|Drizzle sauce, sprinkle scallions and sesame|Mix well before eating'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'面条400g，鸡胸肉1块，黄瓜1根，豆芽100g，花生碎，熟芝麻，芝麻酱3勺，花生酱1勺，生抽2勺，醋3勺，糖1勺，蒜泥，辣椒油，花椒粉，葱，香菜，盐',
      ingredients_en:'Noodles 400g, chicken breast 1, cucumber 1, bean sprouts 100g, crushed peanuts, sesame seeds, sesame paste 3 tbsp, peanut butter 1 tbsp, soy sauce 2 tbsp, vinegar 3 tbsp, sugar 1 tbsp, garlic paste, chili oil, Sichuan pepper powder, scallion, cilantro, salt',
      steps_zh:'面条煮熟捞出过冰水，沥干加熟油拌匀防粘|鸡胸肉加姜片料酒煮熟，撕成细丝|黄瓜切细丝，豆芽焯水过凉|芝麻酱和花生酱用温水调开（花生酱增加香浓度）|加生抽、醋、糖、蒜泥、辣椒油、花椒粉、盐调成酱汁|面条装碗，摆上鸡丝、黄瓜丝、豆芽|撒花生碎和熟芝麻|淋上调好的酱汁，撒葱花和香菜|拌匀即可',
      steps_en:'Cook noodles, rinse in ice water, drain, toss with oil|Cook chicken breast with ginger and wine, shred fine|Finely julienne cucumber, blanch and cool sprouts|Thin sesame paste and peanut butter with warm water (peanut butter adds richness)|Mix with soy sauce, vinegar, sugar, garlic, chili oil, pepper powder and salt|Put noodles in bowl, top with chicken, cucumber and sprouts|Sprinkle peanuts and sesame|Drizzle sauce, sprinkle scallions and cilantro|Mix well'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'面条500g，鸡胸肉1块，黄瓜1根，豆芽100g，胡萝卜半根，花生碎，熟芝麻，芝麻酱3勺，花生酱1勺，生抽3勺，香醋4勺，糖1勺，蒜泥，辣椒油，花椒油，葱，香菜，盐，鸡精',
      ingredients_en:'Noodles 500g, chicken breast 1, cucumber 1, bean sprouts 100g, carrot half, crushed peanuts, sesame seeds, sesame paste 3 tbsp, peanut butter 1 tbsp, soy sauce 3 tbsp, black vinegar 4 tbsp, sugar 1 tbsp, garlic paste, chili oil, Sichuan pepper oil, scallion, cilantro, salt, chicken bouillon',
      steps_zh:'面条煮熟捞出过冰水，沥干加熟油拌匀防粘|鸡胸肉加姜片葱段料酒煮熟，撕成细丝|黄瓜和胡萝卜切细丝，豆芽焯水过凉|芝麻酱和花生酱用温水调开至顺滑|加生抽、香醋、糖、蒜泥、辣椒油、花椒油、盐、鸡精调成酱汁（花椒油增添麻香）|面条装大碗，依次摆上鸡丝、黄瓜丝、胡萝卜丝、豆芽|撒花生碎和熟芝麻|淋上调好的酱汁，撒葱花和香菜|上桌后拌匀食用',
      steps_en:'Cook noodles, rinse in ice water, drain, toss with oil|Cook chicken with ginger, scallion and wine, shred fine|Finely julienne cucumber and carrot, blanch sprouts|Thin sesame paste and peanut butter with warm water until smooth|Mix with soy sauce, black vinegar, sugar, garlic, chili oil, Sichuan pepper oil, salt and chicken bouillon (Sichuan pepper oil adds numbing aroma)|Put noodles in large bowl, top with chicken, cucumber, carrot and sprouts in order|Sprinkle peanuts and sesame|Drizzle sauce, sprinkle scallions and cilantro|Mix well at table before eating'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'面条500g，鸡腿2个，黄瓜1根，豆芽100g，胡萝卜半根，鸡蛋1个，花生碎，熟芝麻，芝麻酱4勺，花生酱1勺，生抽3勺，香醋4勺，糖1勺，蒜泥，辣椒油，花椒油，葱，香菜，盐，鸡精，香油',
      ingredients_en:'Noodles 500g, chicken legs 2, cucumber 1, bean sprouts 100g, carrot half, egg 1, crushed peanuts, sesame seeds, sesame paste 4 tbsp, peanut butter 1 tbsp, soy sauce 3 tbsp, black vinegar 4 tbsp, sugar 1 tbsp, garlic paste, chili oil, Sichuan pepper oil, scallion, cilantro, salt, chicken bouillon, sesame oil',
      steps_zh:'面条选择碱水面更劲道，煮熟捞出过冰水，沥干加香油拌匀防粘|鸡腿去骨加姜片葱段煮熟，撕成细丝（鸡腿比鸡胸更嫩滑）|鸡蛋打散煎成蛋皮，放凉切细丝|黄瓜和胡萝卜切细丝，豆芽焯水过凉|芝麻酱和花生酱用温水调开至顺滑浓稠|加生抽、香醋、糖、蒜泥、辣椒油、花椒油、盐、鸡精、香油调成酱汁|面条装大碗，依次摆上鸡丝、蛋皮丝、黄瓜丝、胡萝卜丝、豆芽成五色拼盘|撒花生碎和熟芝麻|淋上调好的酱汁，撒葱花和香菜|上桌后拌匀，面条劲道酱汁浓郁',
      steps_en:'Use alkaline noodles for chewiness, cook, rinse in ice water, drain, toss with sesame oil|Debone chicken legs, cook with ginger and scallion, shred fine (chicken legs are more tender than breast)|Beat egg, fry into thin omelet, cool and julienne|Finely julienne cucumber and carrot, blanch sprouts|Thin sesame paste and peanut butter with warm water until smooth and thick|Mix with soy sauce, black vinegar, sugar, garlic, chili oil, Sichuan pepper oil, salt, chicken bouillon and sesame oil|Put noodles in large bowl, arrange chicken, egg shreds, cucumber, carrot and sprouts in five-color platter|Sprinkle peanuts and sesame|Drizzle sauce, sprinkle scallions and cilantro|Mix at table - chewy noodles with rich savory sauce'}
  ],

  // 46. 炸鸡 [Fried Chicken]
  46: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鸡腿肉500g，面粉100g，淀粉100g，盐，料酒，白胡椒粉',
      ingredients_en:'Chicken thighs 500g, flour 100g, cornstarch 100g, salt, wine, white pepper',
      steps_zh:'鸡腿肉切块，加盐料酒白胡椒粉腌20分钟|面粉和淀粉混合|鸡肉裹上粉料|锅中油烧至六成热，放入鸡肉炸至金黄捞出|油温升高再复炸1分钟即可',
      steps_en:'Cut chicken thighs into pieces, marinate with salt, wine and white pepper 20 min|Mix flour and cornstarch|Coat chicken in flour mixture|Heat oil to medium, fry chicken until golden, drain|Increase oil heat, double-fry 1 minute'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鸡腿肉600g，鸡蛋1个，面粉100g，淀粉100g，盐，料酒，白胡椒粉，蒜，姜，生抽',
      ingredients_en:'Chicken thighs 600g, egg 1, flour 100g, cornstarch 100g, salt, wine, white pepper, garlic, ginger, soy sauce',
      steps_zh:'鸡腿去骨切块，加盐、料酒、白胡椒粉、蒜末、姜末、生抽腌30分钟|面粉和淀粉1:1混合，加少许盐和胡椒粉拌匀|鸡肉先裹一层粉料，再蘸蛋液，再裹一层粉料（反复裹粉更酥脆）|锅中油烧至六成热，放入鸡肉炸至微黄捞出|油温升至七成热，全部复炸1-2分钟至金黄酥脆|捞出控油即可',
      steps_en:'Debone and cut chicken, marinate with salt, wine, white pepper, garlic, ginger and soy sauce 30 min|Mix flour and cornstarch 1:1 with salt and pepper|First coat chicken in flour, dip in egg, then coat again in flour (double coating for crunchier crust)|Heat oil to medium, fry until light yellow, drain|Increase oil to medium-high, double-fry 1-2 minutes until golden crispy|Drain and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'鸡腿肉600g，鸡蛋1个，面粉100g，淀粉100g，盐，料酒，白胡椒粉，蒜，姜，生抽，五香粉，泡打粉少许',
      ingredients_en:'Chicken thighs 600g, egg 1, flour 100g, cornstarch 100g, salt, wine, white pepper, garlic, ginger, soy sauce, five spice, baking powder a little',
      steps_zh:'鸡腿去骨切块，加盐、料酒、白胡椒粉、蒜末、姜末、生抽、五香粉腌30分钟|面粉和淀粉1:1混合，加少许盐、五香粉、泡打粉拌匀（泡打粉使外壳更酥脆）|鸡肉先裹一层粉料，蘸蛋液，再裹一层粉料并用手压紧|锅中油烧至六成热（约160度），放入鸡肉炸4分钟至微黄捞出|油温升至七成热（约190度），复炸1-2分钟至金黄酥脆|捞出控油即可',
      steps_en:'Debone and cut chicken, marinate with salt, wine, white pepper, garlic, ginger, soy sauce and five spice 30 min|Mix flour and cornstarch 1:1 with salt, five spice and baking powder (baking powder makes coating crunchier)|Coat in flour, dip in egg, coat again pressing firmly|Heat oil to 160°C, fry 4 minutes until light yellow, drain|Heat oil to 190°C, double-fry 1-2 minutes until golden crispy|Drain and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'鸡腿肉800g，鸡蛋2个，面粉100g，淀粉100g，盐，料酒，白胡椒粉，蒜，姜，生抽，五香粉，泡打粉少许，辣椒粉，孜然粉，牛奶',
      ingredients_en:'Chicken thighs 800g, eggs 2, flour 100g, cornstarch 100g, salt, wine, white pepper, garlic, ginger, soy sauce, five spice, baking powder a little, chili powder, cumin powder, milk',
      steps_zh:'鸡腿去骨切块，加盐、料酒、白胡椒粉、蒜末、姜末、生抽、辣椒粉、孜然粉、牛奶腌1小时（牛奶使鸡肉更嫩）|面粉和淀粉1:1混合，加盐、五香粉、辣椒粉、泡打粉拌匀|鸡肉先裹一层粉料，蘸蛋液，再裹一层粉料，用力压实使粉料附着紧密|锅中多放油烧至六成热（160度），放入鸡肉炸5分钟至微黄捞出|油温升至七成热（190度），全部复炸1-2分钟至金黄酥脆|捞出控油，趁热撒少许辣椒粉和孜然粉',
      steps_en:'Debone and cut chicken, marinate with salt, wine, white pepper, garlic, ginger, soy sauce, chili powder, cumin and milk 1 hour (milk tenderizes chicken)|Mix flour and cornstarch 1:1 with salt, five spice, chili powder and baking powder|Coat in flour, dip in egg, coat again pressing firmly|Heat oil to 160°C, fry 5 minutes until light yellow, drain|Heat oil to 190°C, double-fry 1-2 minutes until golden crispy|Drain, sprinkle chili and cumin powder while hot'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'鸡腿肉1000g，鸡蛋2个，面粉150g，淀粉150g，盐，料酒，白胡椒粉，蒜，姜，生抽，五香粉，泡打粉少许，辣椒粉，孜然粉，牛奶，蜂蜜，韩式辣酱',
      ingredients_en:'Chicken thighs 1000g, eggs 2, flour 150g, cornstarch 150g, salt, wine, white pepper, garlic, ginger, soy sauce, five spice, baking powder a little, chili powder, cumin, milk, honey, Korean chili paste',
      steps_zh:'鸡腿去骨切块，加盐、料酒、白胡椒粉、蒜末、姜末、生抽、五香粉、牛奶腌2小时（充分腌制更入味）|面粉和淀粉1:1混合，加盐、五香粉、辣椒粉、泡打粉拌匀成炸粉|鸡肉先裹一层炸粉，蘸蛋液，再裹一层炸粉并用手反复压实|锅中多放油烧至六成热（160度），放入鸡肉炸5分钟至微黄捞出|油温升至七成热（190度），复炸2分钟至金黄酥脆捞出|可选酱汁：蜂蜜和韩式辣酱混合加热调匀|炸鸡趁热拌入酱汁（或蘸食），撒辣椒粉和孜然粉|外酥里嫩，可搭配泡菜解腻',
      steps_en:'Debone and cut chicken, marinate with salt, wine, white pepper, garlic, ginger, soy sauce, five spice and milk 2 hours|Mix flour and cornstarch 1:1 with salt, five spice, chili powder and baking powder|Coat in flour mix, dip in egg, coat again pressing firmly|Heat oil to 160°C, fry 5 minutes until light yellow, drain|Heat oil to 190°C, double-fry 2 minutes until golden crispy|Optional sauce: mix honey and Korean chili paste, heat until combined|Toss hot fried chicken in sauce (or dip), sprinkle chili and cumin|Crispy outside, tender inside, serve with kimchi to cut grease'}
  ],

  // 47. 葱油鸡 [Scallion Oil Chicken]
  47: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鸡腿2个，葱5根，姜1块，盐，料酒，生抽，油',
      ingredients_en:'Chicken legs 2, scallions 5, ginger 1 piece, salt, wine, soy sauce, oil',
      steps_zh:'鸡腿肉加盐料酒姜片腌20分钟|锅中加水烧开，放入鸡腿蒸15分钟至熟|取出切块装盘|葱切花，姜切末铺在鸡肉上|锅中烧热油浇在葱姜上激出香味|淋上生抽即可',
      steps_en:'Marinate chicken legs with salt, wine and ginger 20 min|Steam chicken legs 15 minutes until done|Cut into pieces and plate|Chop scallions, mince ginger, spread over chicken|Heat oil until smoking, pour over scallions and ginger to release aroma|Drizzle soy sauce over'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鸡腿3个或小鸡1只，葱10根，姜1块，红椒半个，盐，料酒，蒸鱼豉油，油',
      ingredients_en:'Chicken legs 3 or small chicken 1, scallions 10, ginger 1, red pepper half, salt, wine, steamed fish soy sauce, oil',
      steps_zh:'鸡腿或整鸡加盐料酒姜片葱段腌30分钟|锅中加水烧开，放入鸡肉大火蒸20分钟至熟透|取出斩块装盘|大量葱花和姜末铺在鸡肉上|锅中烧热油至冒烟，均匀浇在葱姜上|淋入蒸鱼豉油或生抽|可加少许红椒圈点缀',
      steps_en:'Marinate chicken with salt, wine, ginger and scallion 30 min|Steam chicken on high 20 minutes until fully cooked|Chop into pieces and plate|Cover chicken with lots of scallions and minced ginger|Heat oil until smoking, pour evenly over scallions and ginger|Drizzle steamed fish soy sauce or soy sauce|Garnish with red pepper rings'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'三黄鸡1只，葱15根，姜1大块，红椒半个，盐，料酒，白胡椒粉，蒸鱼豉油，生抽，油，花椒油',
      ingredients_en:'Three-yellow chicken 1, scallions 15, ginger 1 large piece, red pepper half, salt, wine, white pepper, steamed fish soy sauce, soy sauce, oil, Sichuan pepper oil',
      steps_zh:'三黄鸡洗净擦干，内外抹盐、白胡椒粉、料酒，塞姜片葱段入腹中腌1小时|锅中加水烧开，放入整鸡大火蒸25分钟至熟透（筷子插腿无血水）|取出稍凉斩块装盘，保留蒸出的鸡汁|大量葱花和姜末铺满鸡肉表面|锅中烧热油和少许花椒油至冒烟，均匀浇在葱姜上|淋入蒸鱼豉油和少许鸡汁调匀|红椒切圈点缀，即可上桌',
      steps_en:'Clean and dry chicken, rub inside and out with salt, white pepper and wine, stuff ginger and scallion in cavity, marinate 1 hour|Steam whole chicken on high 25 minutes until done (no blood when poking thigh)|Cool slightly, chop into pieces, plate, reserve chicken juice|Cover chicken with lots of scallions and minced ginger|Heat oil and Sichuan pepper oil until smoking, pour evenly over|Mix steamed fish soy sauce with some chicken juice, drizzle over|Garnish with red pepper rings'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'三黄鸡1只，葱20根，姜1大块，红椒半个，沙姜少许，盐，料酒，白胡椒粉，蒸鱼豉油，生抽，油，花椒油，香油',
      ingredients_en:'Three-yellow chicken 1, scallions 20, ginger 1 large, red pepper half, sand ginger a little, salt, wine, white pepper, steamed fish soy sauce, soy sauce, oil, Sichuan pepper oil, sesame oil',
      steps_zh:'三黄鸡处理干净，内外抹盐、白胡椒粉、料酒，塞姜片葱段入腹腌2小时|蒸锅水烧开，放入整鸡大火蒸30分钟至熟（保留鸡汁）|取出放凉，斩块摆盘|沙姜切末，大量葱花和沙姜末姜末铺满鸡肉|锅中烧热油、花椒油和香油混合至冒烟，浇在葱姜上激香|蒸鱼豉油和生抽按2:1调匀，加少许鸡汁混合|将调好的酱汁沿着盘边淋入（不要直接淋在葱姜上）|红椒切丝点缀',
      steps_en:'Clean chicken, rub with salt, white pepper and wine, stuff ginger and scallion in cavity, marinate 2 hours|Steam whole chicken on high 30 minutes, reserve chicken juice|Cool, chop and plate|Mince sand ginger, cover chicken with scallions, sand ginger and ginger|Heat oil, Sichuan pepper oil and sesame oil until smoking, pour over|Mix steamed fish soy sauce and soy sauce 2:1 with some chicken juice|Pour sauce along plate edge (not directly on scallions)|Garnish with red pepper shreds'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'三黄鸡1只，葱30根，姜1大块，红椒半个，沙姜少许，盐，料酒，白胡椒粉，蒸鱼豉油，生抽，油，花椒油，香油，鸡精，香菜',
      ingredients_en:'Three-yellow chicken 1, scallions 30, ginger 1 large, red pepper half, sand ginger a little, salt, wine, white pepper, steamed fish soy sauce, soy sauce, oil, Sichuan pepper oil, sesame oil, chicken bouillon, cilantro',
      steps_zh:'三黄鸡处理干净，用厨房纸擦干内外水分|内外抹盐、白胡椒粉、鸡精、料酒腌制3小时，腹中塞姜片葱段|蒸锅水烧开，放入整鸡大火蒸30分钟至熟透，保留鸡汁|取出放凉至不烫手，斩成整齐块状摆入长盘|沙姜切细末，大量葱花（葱白葱绿分开）、姜末、沙姜末铺满鸡肉表面|锅中混合油、花椒油和香油烧至冒烟，先浇一半在葱姜上激香|蒸鱼豉油、生抽、鸡汁、少许糖调匀，沿盘边淋入|再浇上剩下的一半热油使香味更浓郁|红椒切细丝、香菜点缀，葱香四溢，皮滑肉嫩',
      steps_en:'Clean chicken, pat dry inside and out|Rub inside and out with salt, white pepper, chicken bouillon and wine, marinate 3 hours, stuff ginger and scallion in cavity|Steam on high 30 minutes until done, reserve chicken juice|Cool until handleable, chop into neat pieces, arrange on long plate|Finely mince sand ginger, separate scallion white and green, cover chicken with scallions, ginger and sand ginger|Heat oil, Sichuan pepper oil and sesame oil until smoking, pour half over scallions|Mix steamed fish soy sauce, soy sauce, chicken juice and sugar, pour along plate edge|Pour remaining hot oil over for stronger aroma|Garnish with red pepper shreds and cilantro, scallion aroma fills the air, skin smooth and meat tender'}
  ],

  // 48. 白切鸡 [White Cut Chicken]
  48: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'三黄鸡1只，姜1块，葱2根，料酒3勺',
      ingredients_en:'Three-yellow chicken 1, ginger 1 piece, scallions 2, wine 3 tbsp',
      steps_zh:'鸡洗净，锅中加水烧开加姜片料酒|手提鸡头放入开水中烫10秒提起，重复3次|整鸡放入锅中，转小火煮20分钟|关火焖10分钟至熟|捞出过冰水使皮更脆|斩块装盘，配姜葱蘸料食用',
      steps_en:'Clean chicken, boil water with ginger and wine|Hold chicken head, dip in boiling water 10 seconds, lift, repeat 3 times|Submerge whole chicken, simmer 20 minutes|Turn off heat, rest 10 minutes until done|Rinse in ice water for crispy skin|Chop into pieces, serve with ginger-scallion dipping sauce'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'三黄鸡1只，姜1块，葱3根，料酒3勺，冰水一盆，姜（蘸料），葱（蘸料），盐，生抽，油',
      ingredients_en:'Three-yellow chicken 1, ginger 1, scallions 3, wine 3 tbsp, ice water, ginger (for dip), scallions (for dip), salt, soy sauce, oil',
      steps_zh:'鸡处理干净，锅中加足量水加姜片葱段料酒烧开|手提鸡头将鸡浸入开水中烫10秒提起，反复3次使皮收紧|整鸡放入锅中，大火烧开后转小火煮15分钟|关火盖盖焖15分钟至刚好熟透（用筷子插入大腿无血水）|捞出立即放入冰水中浸泡10分钟使皮脆肉滑|斩块装盘|姜葱蘸料：姜末葱花加盐，浇热油激香加少许生抽',
      steps_en:'Clean chicken, boil plenty water with ginger, scallion and wine|Dip chicken in boiling water 10 seconds, lift, repeat 3 times for tight skin|Submerge chicken, boil then simmer 15 minutes|Cover and rest 15 minutes until just done (no blood when poking thigh)|Immediately soak in ice water 10 minutes for crispy skin and tender meat|Chop and plate|Dip: minced ginger and scallion with salt, pour hot oil over, add soy sauce'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'三黄鸡1只，姜1块，葱3根，料酒3勺，冰水一盆，黄酒，姜（蘸料），葱（蘸料），沙姜少许，盐，生抽，油，香菜',
      ingredients_en:'Three-yellow chicken 1, ginger 1, scallions 3, wine 3 tbsp, ice water, huangjiu, ginger (for dip), scallions (for dip), sand ginger a little, salt, soy sauce, oil, cilantro',
      steps_zh:'三黄鸡处理干净，用厨房纸擦干内外|锅中加足量水加姜片葱段黄酒烧开（黄酒比料酒更香）|手提鸡头将鸡浸入开水中烫10秒提起，反复3次使皮收紧|整鸡放入锅中，大火烧开后转最小火，保持水面微开不沸腾，煮12分钟|关火盖盖焖15分钟至刚好熟透（鸡腿最厚处75度）|捞出立即放入冰水中浸泡15分钟使皮脆肉滑|取出斩块摆盘，骨中带血为最佳火候|蘸料：姜末沙姜末葱花加盐，浇热油激香加生抽和少许鸡汤',
      steps_en:'Clean chicken, pat dry inside and out|Boil plenty water with ginger, scallion and huangjiu (huangjiu is more aromatic)|Dip chicken in boiling water 10 seconds, lift, repeat 3 times|Submerge chicken, bring to boil then lowest heat, water barely bubbling, cook 12 minutes|Cover and rest 15 minutes until done (thickest part of thigh 75°C)|Soak in ice water 15 minutes for crispy skin and tender meat|Chop and plate, bone with slight pinkness is perfect doneness|Dip: minced ginger, sand ginger and scallion with salt, pour hot oil over, add soy sauce and chicken broth'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'三黄鸡1只，姜1块，葱3根，料酒3勺，冰水一盆，黄酒，姜（蘸料），葱（蘸料），沙姜少许，蒜，盐，生抽，油，香油，鸡汤',
      ingredients_en:'Three-yellow chicken 1, ginger 1, scallions 3, wine 3 tbsp, ice water, huangjiu, ginger (for dip), scallions (for dip), sand ginger a little, garlic, salt, soy sauce, oil, sesame oil, chicken broth',
      steps_zh:'三黄鸡处理干净，选2斤左右嫩鸡口感最佳|锅中加足量水加姜片葱段黄酒大火烧开|手提鸡头将鸡浸入开水中烫10秒提起，反复4次使皮充分收紧|整鸡放入锅中，大火烧开后转最小火（水面冒小泡不沸腾），煮12分钟|关火盖盖焖20分钟至鸡腿最厚处达80度|捞出立即放入冰水中浸泡15分钟至完全冷却|取出斩块摆盘，保持鸡皮完整美观|蘸料：姜末沙姜末蒜末葱花加盐和少许糖，浇热油和香油混合油激香|加生抽和2勺煮鸡原汤调匀',
      steps_en:'Clean chicken, choose ~1kg young chicken for best texture|Boil plenty water with ginger, scallion and huangjiu|Dip in boiling water 10 seconds, lift, repeat 4 times for tight skin|Submerge, bring to boil then lowest heat (small bubbles, not boiling), cook 12 minutes|Cover and rest 20 minutes until thickest thigh reaches 80°C|Soak in ice water 15 minutes until fully cooled|Chop and plate, keep skin intact for presentation|Dip: minced ginger, sand ginger, garlic and scallion with salt and sugar, pour hot oil and sesame oil over|Add soy sauce and 2 tbsp chicken broth'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'三黄鸡1只（约2斤），姜1大块，葱5根，黄酒3勺，冰水一盆，姜（蘸料），葱（蘸料），沙姜少许，蒜，红葱头，盐，生抽，油，香油，花椒油，鸡汤，鸡精',
      ingredients_en:'Three-yellow chicken 1 (~1kg), ginger 1 large, scallions 5, huangjiu 3 tbsp, ice water, ginger (for dip), scallions (for dip), sand ginger a little, garlic, shallot, salt, soy sauce, oil, sesame oil, Sichuan pepper oil, chicken broth, chicken bouillon',
      steps_zh:'三黄鸡处理干净，用厨房纸擦干内外水分|锅中加足量水加姜片葱段黄酒大火烧开（水量要能完全没过鸡）|手提鸡头将鸡浸入开水中烫8秒提起，反复5次使皮充分收紧|整鸡放入锅中，大火烧开后转最小火（水面仅冒蟹眼泡），浸煮13分钟|关火盖盖焖20分钟至熟（用竹签插入鸡腿最厚处无血水流出）|捞出立即放入冰水中浸泡20分钟使皮脆肉滑（冰水加冰效果更好）|取出擦干水分，在鸡皮上刷一层香油增亮|斩块摆盘，按鸡形码放整齐|蘸料：姜末沙姜末红葱头末蒜末葱花，加盐鸡精和少许糖|锅中烧热油、香油和花椒油混合至冒烟，浇在蘸料上激香|加生抽和2勺煮鸡原汤调匀，配白切鸡上桌',
      steps_en:'Clean chicken, pat dry inside and out|Boil plenty water (enough to fully submerge chicken) with ginger, scallion and huangjiu|Dip in boiling water 8 seconds, lift, repeat 5 times for tight skin|Submerge, bring to boil then lowest heat (crab-eye bubbles only), poach 13 minutes|Cover and rest 20 minutes until done (bamboo skewer into thigh shows no blood)|Soak in ice water 20 minutes (add ice for best effect)|Pat dry, brush skin with sesame oil for shine|Chop and plate in chicken shape|Dip: minced ginger, sand ginger, shallot, garlic and scallion with salt, chicken bouillon and sugar|Heat oil, sesame oil and Sichuan pepper oil until smoking, pour over dip|Add soy sauce and 2 tbsp chicken broth, serve with white cut chicken'}
  ],

  // 49. 酱油鸡 [Soy Sauce Chicken]
  49: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鸡腿2个，生抽3勺，老抽2勺，料酒2勺，姜4片',
      ingredients_en:'Chicken legs 2, soy sauce 3 tbsp, dark soy 2 tbsp, wine 2 tbsp, ginger 4 slices',
      steps_zh:'鸡腿加生抽老抽料酒姜片腌30分钟|锅中放少许油，放入鸡腿煎至两面金黄|加腌鸡的酱汁和适量水|大火烧开转小火焖20分钟至熟|转大火收汁，不断浇淋鸡腿使其上色|取出切块，淋上锅中酱汁即可',
      steps_en:'Marinate chicken legs with soy sauces, wine and ginger 30 min|Heat oil, fry chicken legs until golden on both sides|Add marinade sauce and water|Boil then simmer 20 minutes until done|Increase heat to reduce sauce, constantly baste chicken for color|Slice and plate, drizzle pan sauce over'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鸡半只，生抽4勺，老抽3勺，料酒3勺，冰糖20g，姜5片，葱2根，八角1个，桂皮1小段',
      ingredients_en:'Half chicken, soy sauce 4 tbsp, dark soy 3 tbsp, wine 3 tbsp, rock sugar 20g, ginger 5 slices, scallions 2, star anise 1, cinnamon 1 small stick',
      steps_zh:'鸡半只洗净沥干，加生抽老抽料酒姜片葱段腌1小时（中间翻面）|锅中放油烧热，放入鸡煎至两面金黄|加入腌鸡的酱汁、冰糖、八角、桂皮和适量水（没过鸡的一半）|大火烧开转小火，盖盖焖25分钟|打开盖，不断用勺子舀汤汁浇淋鸡身使其均匀上色|转大火收汁至汤汁浓稠|取出斩块装盘，淋上剩余酱汁即可',
      steps_en:'Clean and dry half chicken, marinate with soy sauces, wine, ginger and scallion 1 hour (flip halfway)|Heat oil, fry chicken until golden on both sides|Add marinade, rock sugar, star anise, cinnamon and water (halfway up chicken)|Boil then simmer covered 25 minutes|Uncover, constantly spoon sauce over chicken for even color|Increase heat to reduce sauce until thick|Chop and plate, drizzle remaining sauce over'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'鸡半只，生抽4勺，老抽3勺，花雕酒3勺，冰糖30g，姜5片，葱2根，八角2个，桂皮1小段，香叶2片，盐少许',
      ingredients_en:'Half chicken, soy sauce 4 tbsp, dark soy 3 tbsp, huadiao wine 3 tbsp, rock sugar 30g, ginger 5 slices, scallions 2, star anise 2, cinnamon 1 small, bay leaves 2, salt a little',
      steps_zh:'鸡半只洗净沥干，用叉子在鸡身扎孔便于入味|加生抽、老抽、花雕酒、姜片、葱段腌2小时（中间翻面）|锅中放油烧热，放入鸡煎至两面金黄|加入腌鸡的酱汁和所有香料（冰糖、八角、桂皮、香叶），加适量水（至鸡身一半）|大火烧开转小火，盖盖焖20分钟|开盖后不断用勺子舀汤汁浇淋鸡身，反复浇淋10分钟使上色均匀|转大火收汁至汤汁浓稠|取出斩块装盘，淋上酱汁',
      steps_en:'Clean half chicken, prick with fork for better absorption|Marinate with soy sauces, huadiao wine, ginger and scallion 2 hours (flip halfway)|Heat oil, fry chicken until golden on both sides|Add marinade, rock sugar, star anise, cinnamon, bay leaves and water (halfway up chicken)|Boil then simmer covered 20 minutes|Uncover, constantly baste chicken with sauce for 10 minutes for even color|Increase heat to reduce sauce until thick|Chop and plate, drizzle sauce over'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'鸡1只，生抽5勺，老抽4勺，花雕酒半碗，冰糖40g，姜8片，葱3根，八角2个，桂皮1段，香叶2片，陈皮1小块，盐少许，蜂蜜',
      ingredients_en:'Chicken 1 whole, soy sauce 5 tbsp, dark soy 4 tbsp, huadiao wine half bowl, rock sugar 40g, ginger 8 slices, scallions 3, star anise 2, cinnamon 1 stick, bay leaves 2, dried tangerine peel 1 small, salt a little, honey',
      steps_zh:'整鸡处理干净沥干，用叉子在鸡身扎孔|加生抽、老抽、花雕酒、姜片、葱段腌3小时（中间多次翻面）|锅中放油烧热，放入整鸡煎至六面金黄|加入腌鸡的酱汁、冰糖、八角、桂皮、香叶、陈皮和适量水（没过鸡身一半）|大火烧开转小火，盖盖焖20分钟|开盖后不断用勺子舀汤汁浇淋鸡身，持续15分钟使其均匀上色|加少许蜂蜜调匀，继续浇淋5分钟使色泽红亮|转大火收汁至浓稠|取出斩块摆盘，淋上酱汁',
      steps_en:'Clean whole chicken, pat dry, prick with fork|Marinate with soy sauces, huadiao wine, ginger and scallion 3 hours (flip multiple times)|Heat oil, fry whole chicken until golden on all sides|Add marinade, rock sugar, star anise, cinnamon, bay leaves, tangerine peel and water (halfway up chicken)|Boil then simmer covered 20 minutes|Uncover, constantly baste chicken with sauce for 15 minutes for even color|Add honey, continue basting 5 minutes for glossy red color|Increase heat to reduce sauce until thick|Chop and plate, drizzle sauce over'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'三黄鸡1只，生抽6勺，老抽4勺，花雕酒半碗，冰糖50g，姜10片，葱4根，八角3个，桂皮1段，香叶2片，陈皮1小块，草果1个，盐少许，蜂蜜，麦芽糖，青菜',
      ingredients_en:'Three-yellow chicken 1, soy sauce 6 tbsp, dark soy 4 tbsp, huadiao wine half bowl, rock sugar 50g, ginger 10 slices, scallions 4, star anise 3, cinnamon 1 stick, bay leaves 2, dried tangerine peel 1 small, black cardamom 1, salt a little, honey, maltose, greens',
      steps_zh:'三黄鸡处理干净沥干，用厨房纸擦干内外，用叉子在鸡胸鸡腿扎孔|加生抽、老抽、花雕酒、姜片、葱段腌4小时（冰箱冷藏腌制，中间多次翻面）|锅中放油烧热，放入整鸡煎至六面金黄|加入腌鸡的酱汁、冰糖、麦芽糖、八角、桂皮、香叶、陈皮、草果和适量水（没过鸡身一半）|大火烧开转最小火，盖盖焖25分钟|开盖后不断用勺子舀汤汁浇淋鸡身，持续15分钟使均匀上色|加入蜂蜜调匀，继续浇淋5分钟至色泽红亮如琥珀|转大火收汁至浓稠挂勺|青菜焯水围边，取出鸡斩块摆盘，淋上酱汁',
      steps_en:'Clean three-yellow chicken, pat dry, prick breast and thighs with fork|Marinate with soy sauces, huadiao wine, ginger and scallion 4 hours in fridge (flip multiple times)|Heat oil, fry whole chicken until golden on all sides|Add marinade, rock sugar, maltose, star anise, cinnamon, bay leaves, tangerine peel, black cardamom and water (halfway up chicken)|Boil then lowest heat, cover and simmer 25 minutes|Uncover, constantly baste chicken for 15 minutes for even color|Add honey, continue basting 5 minutes until amber red and glossy|Increase heat to reduce sauce until thick enough to coat spoon|Blanch greens for garnish, chop chicken and plate, drizzle sauce over'}
  ],

  // 50. 樟茶鸭 [Tea-Smoked Duck]
  50: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鸭腿2个，茶叶2勺，糖2勺，米2勺，盐，花椒，五香粉',
      ingredients_en:'Duck legs 2, tea leaves 2 tbsp, sugar 2 tbsp, rice 2 tbsp, salt, Sichuan pepper, five spice powder',
      steps_zh:'鸭腿加盐花椒五香粉涂抹均匀腌制2小时|锅中放茶叶、糖、米，架上篦子|放入鸭腿，盖盖中小火熏10分钟|熏好的鸭腿放入蒸锅蒸30分钟|取出切块即可',
      steps_en:'Rub duck legs with salt, Sichuan pepper and five spice, marinate 2 hours|Put tea leaves, sugar and rice in wok, place rack|Put duck legs on rack, cover and smoke on medium-low 10 minutes|Steam smoked duck legs 30 minutes|Slice and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鸭腿2个，茶叶3勺，糖3勺，米3勺，八角1个，桂皮1段，盐，花椒，五香粉，料酒，姜',
      ingredients_en:'Duck legs 2, tea leaves 3 tbsp, sugar 3 tbsp, rice 3 tbsp, star anise 1, cinnamon 1 stick, salt, Sichuan pepper, five spice, wine, ginger',
      steps_zh:'鸭腿加盐、花椒、五香粉、料酒、姜片涂抹均匀腌制4小时|锅中放茶叶、糖、米、八角、桂皮，架上篦子铺上锡纸|放入鸭腿，盖盖中小火熏10-15分钟至茶香入味|熏好的鸭腿放入蒸锅大火蒸30-40分钟至熟透|锅中多放油烧至七成热，放入鸭腿炸至皮脆色深|取出切块装盘即可',
      steps_en:'Rub duck legs with salt, Sichuan pepper, five spice, wine and ginger, marinate 4 hours|Put tea, sugar, rice, star anise and cinnamon in wok, place lined rack|Smoke duck legs covered on medium-low 10-15 minutes|Steam smoked duck legs on high 30-40 minutes until done|Heat oil to medium-high, deep-fry duck legs until skin crispy and dark|Slice and plate'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'鸭腿2个，茶叶3勺（龙井或茉莉花茶），糖3勺，米3勺，八角1个，桂皮1段，香叶2片，盐，花椒，五香粉，花雕酒，姜，葱',
      ingredients_en:'Duck legs 2, tea leaves 3 tbsp (Longjing or jasmine), sugar 3 tbsp, rice 3 tbsp, star anise 1, cinnamon 1 stick, bay leaves 2, salt, Sichuan pepper, five spice, huadiao wine, ginger, scallion',
      steps_zh:'鸭腿加盐、花椒、五香粉、花雕酒、姜片、葱段涂抹均匀，冰箱冷藏腌制6小时|蒸锅水烧开，放入鸭腿大火蒸40分钟至熟透|锅中铺锡纸，放茶叶、糖、米、八角、桂皮、香叶混合均匀|架上篦子，放入蒸好的鸭腿，盖盖中小火熏10-12分钟至茶香浓郁|锅中多放油烧至七成热（180度），放入鸭腿炸至皮脆呈深红色|取出稍凉切块装盘即可',
      steps_en:'Rub duck legs with salt, Sichuan pepper, five spice, huadiao wine, ginger and scallion, refrigerate 6 hours|Steam duck legs on high 40 minutes until fully cooked|Line wok with foil, put tea, sugar, rice, star anise, cinnamon and bay leaves|Place rack, put steamed duck legs, smoke on medium-low 10-12 minutes|Heat oil to 180°C, deep-fry duck legs until skin crispy and deep red|Cool slightly, slice and plate'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'鸭腿2个或半只鸭，茉莉花茶4勺，糖4勺，米4勺，八角2个，桂皮1段，香叶2片，草果1个，盐，花椒，五香粉，花雕酒，姜，葱，白胡椒粉',
      ingredients_en:'Duck legs 2 or half duck, jasmine tea 4 tbsp, sugar 4 tbsp, rice 4 tbsp, star anise 2, cinnamon 1 stick, bay leaves 2, black cardamom 1, salt, Sichuan pepper, five spice, huadiao wine, ginger, scallion, white pepper',
      steps_zh:'鸭腿洗净沥干，加盐、花椒、五香粉、白胡椒粉、花雕酒、姜片、葱段内外涂抹均匀，冰箱冷藏腌制过夜|蒸锅水烧开，放入鸭腿大火蒸45分钟至熟透（筷子能轻松插入）|锅中铺锡纸，放茉莉花茶、糖、米、八角、桂皮、香叶、草果混合均匀|架上篦子，放入蒸好的鸭腿，盖盖中小火熏12-15分钟至茶香四溢|锅中多放油烧至七成热（180度），放入鸭腿炸至外皮酥脆呈枣红色|捞出控油，稍凉切块装盘',
      steps_en:'Clean and dry duck, rub inside and out with salt, Sichuan pepper, five spice, white pepper, huadiao wine, ginger and scallion, refrigerate overnight|Steam duck on high 45 minutes until fully cooked (chopstick pierces easily)|Line wok with foil, put jasmine tea, sugar, rice, star anise, cinnamon, bay leaves and black cardamom|Place rack, put steamed duck, smoke on medium-low 12-15 minutes|Heat oil to 180°C, deep-fry duck until skin crispy and jujube red|Drain, cool slightly, slice and plate'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'鸭半只或整鸭1只，茉莉花茶5勺，糖4勺，米4勺，八角2个，桂皮1段，香叶2片，草果1个，陈皮1小块，盐，花椒，五香粉，花雕酒，姜，葱，白胡椒粉，麦芽糖，香油',
      ingredients_en:'Half or whole duck, jasmine tea 5 tbsp, sugar 4 tbsp, rice 4 tbsp, star anise 2, cinnamon 1 stick, bay leaves 2, black cardamom 1, dried tangerine peel 1 small, salt, Sichuan pepper, five spice, huadiao wine, ginger, scallion, white pepper, maltose, sesame oil',
      steps_zh:'鸭处理干净，用厨房纸擦干内外水分|加盐、花椒、五香粉、白胡椒粉、花雕酒、姜片、葱段内外涂抹均匀，冰箱冷藏腌制过夜（12小时以上）|蒸锅水烧开，放入鸭子大火蒸50分钟至完全熟透|锅中铺锡纸，放茉莉花茶、糖、米、八角、桂皮、香叶、草果、陈皮混合均匀|架上篦子，放入蒸好的鸭子，盖盖中小火熏15分钟至茶香浓郁|麦芽糖加少许热水调开，刷在鸭皮上晾干（使皮更脆亮）|锅中多放油烧至七成热（180度），放入鸭子炸至外皮酥脆呈深枣红色|捞出控油，刷一层香油增亮|稍凉斩块装盘，摆成鸭形',
      steps_en:'Clean duck, pat dry inside and out|Rub inside and out with salt, Sichuan pepper, five spice, white pepper, huadiao wine, ginger and scallion, refrigerate overnight (12+ hours)|Steam duck on high 50 minutes until fully cooked|Line wok with foil, put jasmine tea, sugar, rice, star anise, cinnamon, bay leaves, black cardamom and tangerine peel|Place rack, put steamed duck, smoke on medium-low 15 minutes|Mix maltose with hot water, brush on duck skin, air dry (for extra crispy shiny skin)|Heat oil to 180°C, deep-fry duck until skin crispy and deep jujube red|Drain, brush with sesame oil for shine|Cool slightly, chop and plate in duck shape'}
  ]
};

db.serialize(() => {
  console.log('删除菜谱41-50旧数据...');
  db.run('DELETE FROM levels WHERE recipe_id >= 41 AND recipe_id <= 50');

  const insert = db.prepare(`INSERT INTO levels 
    (recipe_id, level, ingredients_zh, ingredients_en, steps_zh, steps_en, note_zh, note_en) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);

  let total = 0;
  for (let rid = 41; rid <= 50; rid++) {
    const levels = data[rid];
    if (!levels) continue;
    for (const l of levels) {
      insert.run(rid, l.level, l.ingredients_zh, l.ingredients_en, l.steps_zh, l.steps_en, l.note_zh, l.note_en);
      total++;
    }
  }
  insert.finalize();

  db.all('SELECT recipe_id, COUNT(*) as cnt FROM levels WHERE recipe_id>=41 AND recipe_id<=50 GROUP BY recipe_id ORDER BY recipe_id', (e, r) => {
    if (e) console.error(e);
    else {
      console.log(`\n========== 导入完成！共 ${total} 条记录 ==========`);
      r.forEach(row => console.log(`菜谱${String(row.recipe_id).padStart(2)}: ${row.cnt}个Level ✅`));
      db.all("SELECT recipe_id, level FROM levels WHERE recipe_id>=41 AND recipe_id<=50 AND (ingredients_en IS NULL OR ingredients_en='')", (e2, r2) => {
        if (r2.length === 0) console.log('\n✅ 所有英文数据均非空！');
        else r2.forEach(row => console.log(`⚠️ 菜谱${row.recipe_id} Level ${row.level} 英文数据为空`));
        db.close();
      });
    }
  });
});