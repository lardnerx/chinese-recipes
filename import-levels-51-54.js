const dbPath = require('path').join(__dirname, 'recipes-new.db');
const db = new (require('sqlite3').Database)(dbPath);

const data = {
  // 51. 叉烧 [Char Siu - BBQ Pork]
  51: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'五花肉500g，生抽3勺，老抽2勺，蜂蜜3勺，料酒2勺，蒜3瓣',
      ingredients_en:'Pork belly 500g, soy sauce 3 tbsp, dark soy 2 tbsp, honey 3 tbsp, wine 2 tbsp, garlic 3 cloves',
      steps_zh:'五花肉切长条，用叉子扎孔|生抽、老抽、蜂蜜、料酒、蒜末调成叉烧酱|将肉放入酱汁中腌2小时|烤箱预热200度，放入肉烤20分钟|取出刷一层酱汁，翻面再烤15分钟|取出切片即可',
      steps_en:'Cut belly into strips, prick with fork|Mix soy sauces, honey, wine and garlic into char siu sauce|Marinate 2 hours|Preheat oven to 200°C, roast 20 minutes|Brush with sauce, flip, roast 15 more minutes|Slice and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'五花肉600g，生抽3勺，老抽2勺，蜂蜜4勺，料酒2勺，蚝油1勺，南乳2块，蒜3瓣，姜',
      ingredients_en:'Pork belly 600g, soy sauce 3 tbsp, dark soy 2 tbsp, honey 4 tbsp, wine 2 tbsp, oyster sauce 1 tbsp, red fermented tofu 2 cubes, garlic 3 cloves, ginger',
      steps_zh:'五花肉切长条，用叉子扎孔方便入味|南乳压碎，加生抽、老抽、蜂蜜、料酒、蚝油、蒜末、姜片调成叉烧酱|将肉放入酱汁中，冰箱冷藏腌制过夜（6小时以上）|烤箱预热200度，烤盘铺锡纸放上肉|烤20分钟后取出刷酱翻面，再烤15分钟|取出再刷一层蜂蜜，烤5分钟上色|取出稍凉切片即可',
      steps_en:'Cut belly into strips, prick with fork|Mash red tofu, mix with soy sauces, honey, wine, oyster sauce, garlic and ginger|Marinate in fridge 6+ hours|Preheat oven to 200°C, line baking tray with foil|Roast 20 minutes, brush sauce, flip, roast 15 minutes|Brush honey, roast 5 more minutes for color|Cool slightly, slice'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'五花肉700g，生抽4勺，老抽2勺，蜂蜜4勺，麦芽糖1勺，花雕酒2勺，蚝油1勺，南乳3块，蒜5瓣，姜，五香粉',
      ingredients_en:'Pork belly 700g, soy sauce 4 tbsp, dark soy 2 tbsp, honey 4 tbsp, maltose 1 tbsp, huadiao wine 2 tbsp, oyster sauce 1 tbsp, red tofu 3 cubes, garlic 5 cloves, ginger, five spice',
      steps_zh:'五花肉切成4cm宽长条，用叉子扎孔|南乳压碎，加生抽、老抽、蜂蜜、麦芽糖、花雕酒、蚝油、蒜末、姜片、五香粉调成叉烧酱|肉放入酱汁中冰箱冷藏腌制8小时以上|烤箱预热200度，烤盘铺锡纸放上肉刷一层酱汁|烤20分钟后翻面刷酱，再烤15分钟|取出刷麦芽糖和蜂蜜混合液，再烤5分钟至表面焦红（麦芽糖使表皮更亮）|取出稍凉，斜刀切片装盘',
      steps_en:'Cut belly into 4cm wide strips, prick with fork|Mash red tofu, mix with soy sauces, honey, maltose, huadiao wine, oyster sauce, garlic, ginger and five spice|Marinate in fridge 8+ hours|Preheat 200°C, line tray, place meat and brush sauce|Roast 20 min, flip and brush sauce, roast 15 min|Brush maltose-honey mix, roast 5 min until charred red (maltose makes skin glossier)|Cool slightly, slice diagonally and plate'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'五花肉800g，生抽4勺，老抽3勺，蜂蜜4勺，麦芽糖2勺，花雕酒3勺，蚝油1勺，南乳3块，蒜6瓣，姜，五香粉，红曲粉少许',
      ingredients_en:'Pork belly 800g, soy sauce 4 tbsp, dark soy 3 tbsp, honey 4 tbsp, maltose 2 tbsp, huadiao wine 3 tbsp, oyster sauce 1 tbsp, red tofu 3 cubes, garlic 6 cloves, ginger, five spice, red yeast powder a little',
      steps_zh:'五花肉选肥瘦相间的部分，切长条用叉子扎孔|南乳压碎加红曲粉（增红色），加生抽、老抽、蜂蜜、麦芽糖、花雕酒、蚝油、蒜末、姜片、五香粉调成叉烧酱|肉放入酱汁冰箱冷藏腌制12小时|烤箱预热200度，烤盘铺锡纸放上肉刷酱汁|烤20分钟后翻面刷酱再烤15分钟|取出刷麦芽糖蜂蜜混合液，再烤5分钟至表面焦红亮泽|取出后趁热再刷一层蜂蜜增亮|稍凉斜刀切片，盘中可铺生菜或黄瓜片装饰',
      steps_en:'Choose belly with good fat layers, cut strips, prick with fork|Mash red tofu with red yeast powder (enhances redness), mix with soy sauces, honey, maltose, huadiao wine, oyster sauce, garlic, ginger and five spice|Marinate in fridge 12 hours|Preheat 200°C, line tray, brush sauce|Roast 20 min, flip and brush, roast 15 min|Brush maltose-honey mix, roast 5 min until charred red and glossy|Brush honey again while hot for shine|Cool slightly, slice diagonally, plate on lettuce or cucumber'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'五花肉1000g，生抽5勺，老抽3勺，蜂蜜5勺，麦芽糖2勺，花雕酒3勺，蚝油1勺，南乳4块，蒜8瓣，姜，五香粉，红曲粉，玫瑰露酒',
      ingredients_en:'Pork belly 1000g, soy sauce 5 tbsp, dark soy 3 tbsp, honey 5 tbsp, maltose 2 tbsp, huadiao wine 3 tbsp, oyster sauce 1 tbsp, red tofu 4 cubes, garlic 8 cloves, ginger, five spice, red yeast powder, rose dew wine',
      steps_zh:'五花肉选猪颈肉或梅花肉更嫩，切长条用叉子扎孔密一些|南乳压碎加红曲粉和玫瑰露酒（玫瑰露酒增添独特香气），加生抽、老抽、蜂蜜、麦芽糖、花雕酒、蚝油、蒜末、姜汁、五香粉调成叉烧酱|肉放入酱汁中冰箱冷藏腌制24小时以上|烤箱预热200度，烤盘铺锡纸放上肉刷一层酱汁|烤20分钟后取出翻面刷酱，再烤15分钟|取出刷麦芽糖蜂蜜混合液（麦芽糖蜂蜜1:2），再烤5-8分钟至表面焦红|取出趁热再刷一层蜂蜜，撒熟白芝麻|稍凉斜刀切片，摆盘造型即可',
      steps_en:'Choose pork neck or pork shoulder for tenderness, cut strips, prick densely with fork|Mash red tofu with red yeast powder and rose dew wine (adds unique aroma), mix with soy sauces, honey, maltose, huadiao wine, oyster sauce, garlic, ginger juice and five spice|Marinate in fridge 24+ hours|Preheat 200°C, line tray, brush sauce|Roast 20 min, flip and brush, roast 15 min|Brush maltose-honey mix (1:2), roast 5-8 min until charred red|Brush honey again while hot, sprinkle white sesame|Cool slightly, slice diagonally and arrange on plate'}
  ],

  // 52. 白胡椒猪肚 [White Pepper Pig Stomach Soup]
  52: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'猪肚1个，白胡椒粉2勺，姜5片，盐，料酒',
      ingredients_en:'Pig stomach 1, white pepper 2 tbsp, ginger 5 slices, salt, wine',
      steps_zh:'猪肚用盐和面粉反复搓洗去异味，冲洗干净|锅中加水烧开，放姜片料酒，放入猪肚焯水5分钟捞出|猪肚切条|锅中重新加水，放入猪肚、姜片、白胡椒粉大火烧开|转小火炖1小时至猪肚软烂|加盐调味即可',
      steps_en:'Rub pig stomach with salt and flour repeatedly to remove odor, rinse well|Blanch in boiling water with ginger and wine 5 minutes, drain|Slice into strips|Add fresh water, stomach, ginger and white pepper, bring to boil|Simmer 1 hour until tender|Season with salt'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'猪肚1个，排骨300g，白胡椒粉3勺，姜8片，盐，料酒，红枣5颗，枸杞',
      ingredients_en:'Pig stomach 1, pork ribs 300g, white pepper 3 tbsp, ginger 8 slices, salt, wine, red dates 5, goji berries',
      steps_zh:'猪肚用盐和面粉反复搓洗3遍去异味，翻面去油脂冲洗干净|排骨斩段焯水|锅中加水烧开，放姜片料酒，放入猪肚焯水5分钟捞出切条|锅中重新加足量水，放入猪肚、排骨、姜片、白胡椒粉大火烧开撇去浮沫|转小火炖1.5小时至猪肚软烂|加入红枣和枸杞煮10分钟|加盐调味即可',
      steps_en:'Rub stomach with salt and flour 3 times, remove fat, rinse well|Blanch ribs segments|Blanch stomach with ginger and wine 5 min, slice into strips|Add fresh water, stomach, ribs, ginger and white pepper, boil, skim foam|Simmer 1.5 hours until stomach is tender|Add red dates and goji berries, cook 10 minutes|Season with salt'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'猪肚1个，排骨400g，白胡椒粉4勺，姜10片，盐，料酒，红枣8颗，枸杞，薏米50g',
      ingredients_en:'Pig stomach 1, pork ribs 400g, white pepper 4 tbsp, ginger 10 slices, salt, wine, red dates 8, goji berries, pearl barley 50g',
      steps_zh:'猪肚用盐和面粉反复搓洗3遍，加白醋再搓洗一遍去腥效果更好，冲洗干净|排骨斩段冷水下锅加姜片料酒焯水5分钟捞出|锅中加水烧开放姜片料酒，放入猪肚焯水5分钟捞出切条|锅中加足量水，放入猪肚、排骨、姜片、白胡椒粉、薏米大火烧开撇去浮沫|转小火炖2小时至汤色奶白猪肚软烂|加入红枣煮10分钟|加枸杞和盐煮5分钟即可',
      steps_en:'Rub stomach with salt and flour 3 times, add white vinegar for better deodorizing, rinse well|Blanch ribs in cold water with ginger and wine 5 min, drain|Blanch stomach with ginger and wine 5 min, slice|Add fresh water, stomach, ribs, ginger, white pepper and barley, boil, skim foam|Simmer 2 hours until soup turns milky white and stomach is tender|Add red dates, cook 10 minutes|Add goji berries and salt, cook 5 minutes'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'猪肚1个，排骨400g，鸡腿1个，白胡椒粉5勺，姜12片，盐，料酒，红枣8颗，枸杞，薏米50g，莲子30g，胡椒粒',
      ingredients_en:'Pig stomach 1, ribs 400g, chicken leg 1, white pepper 5 tbsp, ginger 12 slices, salt, wine, red dates 8, goji berries, pearl barley 50g, lotus seeds 30g, whole white pepper',
      steps_zh:'猪肚用盐、面粉、白醋反复搓洗去异味，翻面去油脂筋膜，洗净|排骨鸡腿焯水|猪肚冷水下锅加姜片料酒焯水5分钟捞出切条|白胡椒粒拍碎（拍碎香气更浓郁）|锅中加足量水，放入猪肚、排骨、鸡腿、姜片、拍碎胡椒粒、薏米、莲子大火烧开撇去浮沫|转小火炖2.5小时至汤色奶白浓郁|加入红枣煮10分钟，枸杞和盐煮5分钟|捞出猪肚切条装碗，倒汤，撒葱花',
      steps_en:'Rub stomach with salt, flour and vinegar, remove fat and membrane, wash|Blanch ribs and chicken leg|Blanch stomach in cold water with ginger and wine 5 min, slice|Crush whole white pepper (crushed releases more aroma)|Add fresh water, stomach, ribs, chicken, ginger, crushed pepper, barley and lotus seeds, boil, skim foam|Simmer 2.5 hours until soup is milky white and rich|Add red dates 10 min, goji berries and salt 5 min|Slice stomach, place in bowl, pour soup, sprinkle scallion'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'猪肚1个，排骨500g，鸡腿1个，白胡椒粉6勺，姜15片，盐，花雕酒，红枣10颗，枸杞，薏米50g，莲子30g，胡椒粒，党参2根，当归1片',
      ingredients_en:'Pig stomach 1, ribs 500g, chicken leg 1, white pepper 6 tbsp, ginger 15 slices, salt, huadiao wine, red dates 10, goji berries, pearl barley 50g, lotus seeds 30g, whole white pepper, codonopsis 2, angelica root 1 slice',
      steps_zh:'猪肚用盐、面粉、白醋反复搓洗4遍去异味，翻面去油脂筋膜，最后用料酒搓洗一遍，冲洗干净|排骨斩段鸡腿洗净，冷水下锅加姜片花雕酒焯水5分钟捞出|猪肚冷水下锅加姜片花雕酒焯水5分钟捞出，切宽条|白胡椒粒用刀背拍碎（拍碎但不要太碎，保留颗粒感）|砂锅中加足量水，放入猪肚、排骨、鸡腿、姜片、拍碎胡椒粒和白胡椒粉、薏米、莲子、党参、当归大火烧开|转最小火炖3小时至汤色奶白浓稠（表面有一层薄油光）|加入红枣煮15分钟至饱满|加入枸杞和盐煮5分钟|捞出猪肚切条装碗，捞出排骨鸡腿拆肉放碗中，浇上滚烫的汤，撒葱花和白胡椒粉',
      steps_en:'Rub stomach with salt, flour and vinegar 4 times, remove fat and membrane, finally rub with wine, rinse well|Blanch ribs and chicken in cold water with ginger and huadiao wine 5 min|Blanch stomach in cold water with ginger and huadiao wine 5 min, slice thick|Crush whole white pepper with knife back (crushed but still grainy)|In clay pot, add plenty water, stomach, ribs, chicken, ginger, crushed pepper and white pepper, barley, lotus seeds, codonopsis and angelica, bring to boil|Simmer on lowest heat 3 hours until soup is milky white and thick|Add red dates, cook 15 minutes until plump|Add goji berries and salt, cook 5 minutes|Slice stomach, shred meat from ribs and chicken, place in bowl, pour hot soup, sprinkle scallions and white pepper'}
  ],

  // 53. 梅菜扣肉 [Mei Cai Kou Rou - Pork Belly with Preserved Vegetables]
  53: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'五花肉500g，梅干菜100g，生抽3勺，老抽2勺，糖1勺，姜5片',
      ingredients_en:'Pork belly 500g, preserved mustard greens (mei cai) 100g, soy sauce 3 tbsp, dark soy 2 tbsp, sugar 1 tbsp, ginger 5 slices',
      steps_zh:'五花肉整块冷水下锅煮20分钟，捞出|用叉子在猪皮上扎孔，抹上老抽上色|锅中放油，猪皮朝下煎至金黄起泡|梅干菜泡软切碎，用油加生抽糖炒香|五花肉切片，皮朝下码入碗中|铺上炒好的梅干菜，上锅蒸1小时|扣入盘中即可',
      steps_en:'Boil whole pork belly 20 minutes, drain|Prick skin with fork, rub dark soy for color|Heat oil, fry skin-side down until golden and bubbly|Soak and chop preserved mustard, stir-fry with soy sauce and sugar|Slice pork, arrange skin-side down in bowl|Top with preserved mustard, steam 1 hour|Flip onto plate'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'五花肉600g，梅干菜150g，生抽3勺，老抽3勺，糖1勺，姜5片，料酒2勺，八角1个',
      ingredients_en:'Pork belly 600g, preserved mustard 150g, soy sauce 3 tbsp, dark soy 3 tbsp, sugar 1 tbsp, ginger 5 slices, wine 2 tbsp, star anise 1',
      steps_zh:'五花肉整块冷水下锅加姜片料酒八角煮30分钟至筷子能插入|捞出用叉子在猪皮上密集扎孔，擦干水分抹老抽|锅中放油，猪皮朝下煎至金黄起泡呈虎皮纹|梅干菜泡软挤干水分切碎，用炒过肉的热油加生抽糖姜末炒香|五花肉切0.5cm厚片，皮朝下码入碗中，撒少许糖|铺上炒好的梅干菜压实，上锅大火蒸1.5小时|取出倒出汤汁，扣入盘中，汤汁勾芡浇上',
      steps_en:'Boil whole belly with ginger, wine and star anise 30 min until fork-tender|Prick skin densely with fork, dry and rub dark soy|Fry skin-side down until golden bubbly tiger-skin pattern|Soak, squeeze and chop preserved mustard, stir-fry with oil, soy sauce, sugar and ginger|Slice 0.5cm thick, arrange skin-down in bowl, sprinkle sugar|Top with mustard, press down, steam on high 1.5 hours|Drain sauce, flip onto plate, thicken sauce and pour over'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'五花肉700g，梅干菜200g，生抽3勺，老抽4勺，糖1.5勺，冰糖3块，姜5片，料酒3勺，八角2个，桂皮1段',
      ingredients_en:'Pork belly 700g, preserved mustard 200g, soy sauce 3 tbsp, dark soy 4 tbsp, sugar 1.5 tbsp, rock sugar 3 cubes, ginger 5 slices, wine 3 tbsp, star anise 2, cinnamon 1 stick',
      steps_zh:'五花肉整块冷水下锅加姜片料酒八角桂皮煮40分钟，取出用牙签在猪皮上扎孔|擦干水分抹老抽上色，猪皮朝下煎至金黄起泡成漂亮虎皮|梅干菜泡1小时挤干切碎，用油加生抽、老抽、糖、冰糖炒香（冰糖增亮）|五花肉切0.5cm厚片，加生抽老抽糖拌匀腌10分钟|肉片皮朝下码入碗中，铺上梅干菜压实|蒸锅水烧开，放入大火蒸2小时|取出倒出汤汁扣盘，汤汁收浓浇在肉上',
      steps_en:'Boil whole belly with ginger, wine, star anise and cinnamon 40 min, prick skin with toothpick|Dry, rub dark soy, fry skin-down until golden bubbly tiger-skin|Soak mustard 1 hour, squeeze dry and chop, stir-fry with soy sauces, sugar and rock sugar (rock sugar adds shine)|Slice 0.5cm thick, mix with soy sauces and sugar, marinate 10 min|Arrange skin-down in bowl, top with mustard, press|Steam on high 2 hours|Drain sauce, flip onto plate, reduce sauce and pour over'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'五花肉800g，梅干菜200g，生抽4勺，老抽4勺，糖2勺，冰糖5块，姜8片，料酒3勺，八角2个，桂皮1段，香叶2片，白胡椒粉',
      ingredients_en:'Pork belly 800g, preserved mustard 200g, soy sauce 4 tbsp, dark soy 4 tbsp, sugar 2 tbsp, rock sugar 5 cubes, ginger 8 slices, wine 3 tbsp, star anise 2, cinnamon 1 stick, bay leaves 2, white pepper',
      steps_zh:'五花肉整块冷水下锅加姜片料酒八角桂皮香叶煮40分钟|捞出用牙签在猪皮上密集扎孔（扎得越密虎皮越漂亮）|擦干水分抹老抽上色，晾干10分钟|猪皮朝下煎至金黄起泡成虎皮纹|梅干菜反复洗净泡1小时挤干切碎|锅中放油加姜末八角爆香，放梅干菜加生抽老抽糖白胡椒粉炒香|五花肉切0.5cm厚片，加生抽老抽糖拌匀腌15分钟|肉片皮朝下码入碗中，铺上梅干菜压实，放上冰糖|蒸锅水烧开，放入大火蒸2.5小时至肉酥烂|取出倒出汤汁扣盘，汤汁过滤加少许水淀粉勾芡浇在肉上',
      steps_en:'Boil whole belly with ginger, wine, star anise, cinnamon and bay leaves 40 min|Prick skin densely with toothpick (denser = prettier tiger-skin)|Dry, rub dark soy, air dry 10 min|Fry skin-down until golden bubbly tiger-skin|Rinse and soak mustard 1 hour, squeeze and chop|Heat oil, fry ginger and star anise, add mustard, soy sauces, sugar and pepper|Slice 0.5cm, mix with soy sauces and sugar, marinate 15 min|Arrange skin-down in bowl, top with mustard, press, add rock sugar|Steam on high 2.5 hours until very tender|Drain sauce, flip, strain sauce, thicken with cornstarch and pour over'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'五花肉1000g，梅干菜250g，生抽4勺，老抽5勺，糖2勺，冰糖8块，姜10片，花雕酒半碗，八角3个，桂皮1段，香叶2片，白胡椒粉，蜂蜜',
      ingredients_en:'Pork belly 1000g, preserved mustard 250g, soy sauce 4 tbsp, dark soy 5 tbsp, sugar 2 tbsp, rock sugar 8 cubes, ginger 10 slices, huadiao wine half bowl, star anise 3, cinnamon 1 stick, bay leaves 2, white pepper, honey',
      steps_zh:'五花肉选择方正的五花三层，整块冷水下锅加姜片花雕酒八角桂皮香叶煮50分钟至七成熟|捞出用牙签在猪皮上均匀密扎孔，擦干水分抹老抽和蜂蜜混合液上色（蜂蜜增亮），晾干15分钟|猪皮朝下煎至金黄起泡成漂亮虎皮纹|梅干菜反复洗净泡2小时挤干切细碎（越细越好）|锅中放油加姜末八角爆香，放梅干菜加生抽老抽糖白胡椒粉炒香，加少许花雕酒焖5分钟|五花肉切0.5cm厚大薄片，加生抽老抽花雕糖腌20分钟|肉片皮朝下整齐码入大碗中呈扇形，放冰糖和剩余酱汁|铺上炒好的梅干菜压实，碗口封保鲜膜|蒸锅水烧开，放入中火蒸3小时至肉酥烂入口即化|取出倒出汤汁扣盘，汤汁过滤加少许水淀粉勾琉璃芡浇在肉上，撒葱花点缀',
      steps_en:'Choose square belly with 3 fat 3 lean layers, boil whole with ginger, huadiao, star anise, cinnamon and bay leaves 50 min until 70% done|Prick skin evenly with toothpick, dry, rub dark soy and honey mix (honey adds shine), air dry 15 min|Fry skin-down until golden bubbly tiger-skin|Rinse and soak mustard 2 hours, squeeze and chop fine (finer is better)|Heat oil, fry ginger and star anise, add mustard, soy sauces, sugar and pepper, add huadiao, simmer 5 min|Slice 0.5cm thin wide slices, marinate with soy sauces, huadiao and sugar 20 min|Arrange skin-down in fan pattern in large bowl, add rock sugar and remaining sauce|Top with mustard, press, cover bowl with plastic wrap|Steam on medium 3 hours until melt-in-mouth tender|Drain sauce, flip, strain sauce, thicken with cornstarch for glaze, pour over, garnish with scallions'}
  ],

  // 54. 糖醋排骨 [Sweet and Sour Ribs]
  54: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'排骨500g，白糖3勺，醋4勺，生抽2勺，老抽1勺，姜4片',
      ingredients_en:'Pork ribs 500g, sugar 3 tbsp, vinegar 4 tbsp, soy sauce 2 tbsp, dark soy 1 tbsp, ginger 4 slices',
      steps_zh:'排骨斩段，冷水下锅加姜片焯水5分钟捞出|锅中放少许油，下排骨煎至微黄|加白糖炒至糖融化包裹排骨|加醋、生抽、老抽和适量水没过排骨|大火烧开转小火炖30分钟|转大火收汁至浓稠裹在排骨上即可',
      steps_en:'Cut ribs into segments, blanch in cold water with ginger 5 min, drain|Heat oil, fry ribs until lightly golden|Add sugar, stir-fry until melted and coats ribs|Add vinegar, soy sauces and water to cover|Boil then simmer 30 minutes|Increase heat, reduce sauce until thick and coats ribs'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'排骨600g，白糖4勺，醋5勺，生抽3勺，老抽1勺，姜5片，料酒2勺，八角1个，熟芝麻',
      ingredients_en:'Pork ribs 600g, sugar 4 tbsp, vinegar 5 tbsp, soy sauce 3 tbsp, dark soy 1 tbsp, ginger 5 slices, wine 2 tbsp, star anise 1, sesame seeds',
      steps_zh:'排骨斩段冷水下锅加姜片料酒焯水5分钟捞出洗净|锅中多放油烧至六成热，下排骨炸至金黄捞出（炸过更香）|锅中留底油，放白糖中小火炒至融化呈琥珀色（糖色）|立即放入排骨翻炒上色|加醋、生抽、老抽、料酒、八角、姜片和适量水|大火烧开转小火炖40分钟至酥烂|转大火收汁至浓稠，不断翻动使排骨裹上酱汁|撒熟芝麻即可',
      steps_en:'Cut ribs, blanch in cold water with ginger and wine 5 min, drain and rinse|Deep-fry ribs at medium until golden (deep-frying adds flavor)|Leave oil, melt sugar on low-medium until amber color (caramel)|Immediately add ribs, toss to coat|Add vinegar, soy sauces, wine, star anise, ginger and water|Boil then simmer 40 minutes until tender|Increase heat, reduce sauce until thick, constantly toss to coat|Sprinkle sesame seeds'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'排骨700g，冰糖5块，醋5勺，生抽3勺，老抽1勺，姜5片，料酒3勺，八角2个，桂皮1段，番茄酱2勺，熟芝麻',
      ingredients_en:'Pork ribs 700g, rock sugar 5 pieces, vinegar 5 tbsp, soy sauce 3 tbsp, dark soy 1 tbsp, ginger 5 slices, wine 3 tbsp, star anise 2, cinnamon 1 stick, ketchup 2 tbsp, sesame seeds',
      steps_zh:'排骨斩段冷水下锅加姜片料酒焯水5分钟捞出洗净，沥干水分|锅中多放油烧至六成热，下排骨炸至金黄酥脆捞出|锅中留底油，放冰糖中小火炒至融化呈深琥珀色（冰糖炒糖色更亮）|放入排骨快速翻炒上色|加醋、生抽、老抽、料酒、八角、桂皮、番茄酱和适量水（番茄酱增色提味）|大火烧开转小火炖40分钟至排骨酥烂|转大火收汁，不断翻动使酱汁浓稠挂满排骨|撒熟芝麻，翻匀出锅',
      steps_en:'Cut ribs, blanch in cold water with ginger and wine 5 min, drain and dry|Deep-fry ribs at medium until golden crispy, drain|Leave oil, melt rock sugar on low-medium until deep amber (rock sugar caramel is glossier)|Add ribs quickly, toss to coat|Add vinegar, soy sauces, wine, star anise, cinnamon, ketchup and water (ketchup adds color and flavor)|Boil then simmer 40 minutes until tender|Increase heat, reduce sauce, constantly toss until thick and coats ribs|Sprinkle sesame seeds, toss and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'排骨800g，冰糖6块，香醋5勺，生抽3勺，老抽1勺，姜5片，花雕酒3勺，八角2个，桂皮1段，香叶2片，番茄酱3勺，白芝麻，盐',
      ingredients_en:'Pork ribs 800g, rock sugar 6 pieces, black vinegar 5 tbsp, soy sauce 3 tbsp, dark soy 1 tbsp, ginger 5 slices, huadiao wine 3 tbsp, star anise 2, cinnamon 1 stick, bay leaves 2, ketchup 3 tbsp, white sesame, salt',
      steps_zh:'排骨斩段冷水下锅加姜片花雕酒焯水5分钟捞出，用厨房纸吸干水分|锅中多放油烧至七成热，下排骨炸至金黄酥脆捞出控油|锅中留底油，放冰糖小火炒至融化呈枣红色起小泡（糖色炒到位才亮）|放入排骨快速翻炒均匀上色|加花雕酒、生抽、老抽、香醋（香醋比普通醋更醇香）、番茄酱、八角、桂皮、香叶和适量热水|大火烧开转小火炖45分钟至排骨酥烂脱骨|转大火收汁，不停翻动排骨至酱汁浓稠红亮|加少许盐调味，淋一勺香醋提酸香（最后加醋味更突出）|撒白芝麻翻匀装盘',
      steps_en:'Cut ribs, blanch in cold water with ginger and huadiao 5 min, pat dry|Deep-fry ribs at medium-high until golden crispy, drain|Leave oil, melt rock sugar on low until jujube red with small bubbles (good caramel = shiny)|Add ribs quickly, toss to coat evenly|Add huadiao, soy sauces, black vinegar (richer than regular), ketchup, star anise, cinnamon, bay leaves and hot water|Boil then simmer 45 minutes until tender and falling off bone|Increase heat, reduce sauce, constantly toss until thick and glossy red|Season with salt, drizzle 1 tbsp black vinegar for brightness (final vinegar is more pronounced)|Sprinkle white sesame, toss and plate'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'排骨1000g，冰糖8块，香醋6勺，生抽3勺，老抽2勺，姜8片，花雕酒半碗，八角3个，桂皮1段，香叶2片，陈皮1小块，番茄酱3勺，白芝麻，盐，白胡椒粉，菠萝块',
      ingredients_en:'Pork ribs 1000g, rock sugar 8 pieces, black vinegar 6 tbsp, soy sauce 3 tbsp, dark soy 2 tbsp, ginger 8 slices, huadiao wine half bowl, star anise 3, cinnamon 1 stick, bay leaves 2, dried tangerine peel 1 small, ketchup 3 tbsp, white sesame, salt, white pepper, pineapple chunks',
      steps_zh:'排骨斩小段冷水下锅加姜片花雕酒焯水5分钟捞出，用厨房纸吸干水分（越干越好防止溅油）|锅中多放油烧至七成热（180度），下排骨中火炸至金黄酥脆捞出，油温升高复炸1分钟至表面酥硬|锅中留底油，放冰糖小火慢炒至融化呈枣红色起密集小泡（糖色炒老一点颜色更深）|放入排骨快速翻炒使每块都裹上糖色|加花雕酒、生抽、老抽、一半香醋、番茄酱、八角、桂皮、香叶、陈皮和适量热水（没过排骨一半）|大火烧开转小火炖50分钟至排骨酥烂入味|转大火收汁，不停翻动至酱汁浓稠红亮|加菠萝块快速翻炒（菠萝增加果香甜酸解腻）|加盐、白胡椒粉和剩下的一半香醋（第二次加醋使酸味更鲜明）|撒白芝麻翻匀装盘，酱汁红亮酸甜适口',
      steps_en:'Cut ribs into small segments, blanch in cold water with ginger and huadiao 5 min, pat very dry|Deep-fry ribs at 180°C until golden crispy, drain; re-fry 1 min at higher heat for crispy exterior|Leave oil, melt rock sugar on low until jujube red with dense small bubbles (darker caramel = deeper color)|Add ribs quickly, toss to coat each piece|Add huadiao, soy sauces, half black vinegar, ketchup, star anise, cinnamon, bay leaves, tangerine peel and hot water (halfway up ribs)|Boil then simmer 50 minutes until tender and flavorful|Increase heat, reduce sauce, constantly toss until thick and glossy red|Add pineapple chunks, stir-fry quickly (pineapple adds fruity sweet-sour to cut grease)|Season with salt, white pepper and remaining half black vinegar (second addition makes sourness more vibrant)|Sprinkle white sesame, toss and plate - sauce is glossy red, sweet and sour perfectly balanced'}
  ]
};

db.serialize(() => {
  console.log('删除菜谱51-54旧数据...');
  db.run('DELETE FROM levels WHERE recipe_id >= 51 AND recipe_id <= 54');

  const insert = db.prepare(`INSERT INTO levels 
    (recipe_id, level, ingredients_zh, ingredients_en, steps_zh, steps_en, note_zh, note_en) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);

  let total = 0;
  for (let rid = 51; rid <= 54; rid++) {
    const levels = data[rid];
    if (!levels) continue;
    for (const l of levels) {
      insert.run(rid, l.level, l.ingredients_zh, l.ingredients_en, l.steps_zh, l.steps_en, l.note_zh, l.note_en);
      total++;
    }
  }
  insert.finalize();

  db.all('SELECT recipe_id, COUNT(*) as cnt FROM levels WHERE recipe_id>=51 AND recipe_id<=54 GROUP BY recipe_id ORDER BY recipe_id', (e, r) => {
    if (e) console.error(e);
    else {
      console.log(`\n========== 导入完成！共 ${total} 条记录 ==========`);
      r.forEach(row => console.log(`菜谱${String(row.recipe_id).padStart(2)}: ${row.cnt}个Level ✅`));
      db.all("SELECT recipe_id, level FROM levels WHERE recipe_id>=51 AND recipe_id<=54 AND (ingredients_en IS NULL OR ingredients_en='')", (e2, r2) => {
        if (r2.length === 0) console.log('\n✅ 所有英文数据均非空！');
        else r2.forEach(row => console.log(`⚠️ 菜谱${row.recipe_id} Level ${row.level} 英文数据为空`));
        db.close();
      });
    }
  });
});