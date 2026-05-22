const dbPath = require('path').join(__dirname, 'recipes-new.db');
const db = new (require('sqlite3').Database)(dbPath);

const data = {
  // 31. 酸辣汤 [Hot and Sour Soup]
  31: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'嫩豆腐1盒，木耳5朵，鸡蛋1个，生抽2勺，醋3勺，白胡椒粉1勺，盐，淀粉',
      ingredients_en:'Silken tofu 1 box, wood ear 5 pieces, egg 1, soy sauce 2 tbsp, vinegar 3 tbsp, white pepper 1 tbsp, salt, cornstarch',
      steps_zh:'木耳泡发切丝，豆腐切丝，鸡蛋打散|锅中加水烧开，放入木耳和豆腐丝|加生抽、醋、白胡椒粉和盐调味|水淀粉勾芡使汤变浓稠|转圈淋入蛋液形成蛋花|撒葱花出锅即可',
      steps_en:'Soak wood ear, shred; shred tofu; beat egg|Boil water, add wood ear and tofu shreds|Season with soy sauce, vinegar, white pepper and salt|Thicken with cornstarch slurry|Drizzle egg in circles to form egg flower|Sprinkle scallions and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'嫩豆腐1盒，木耳5朵，香菇3朵，笋50g，瘦肉50g，鸡蛋1个，生抽2勺，老抽半勺，醋4勺，白胡椒粉1勺，盐，淀粉，香菜，香油',
      ingredients_en:'Silken tofu 1 box, wood ear 5, shiitake 3, bamboo shoot 50g, lean pork 50g, egg 1, soy sauce 2 tbsp, dark soy 0.5 tbsp, vinegar 4 tbsp, white pepper 1 tbsp, salt, cornstarch, cilantro, sesame oil',
      steps_zh:'木耳泡发切丝，香菇泡发切丝，豆腐切丝，笋切丝，瘦肉切丝加料酒腌一下|鸡蛋打散，香菜切末|锅中加水或高汤烧开，放入肉丝煮至变色|加入木耳丝香菇丝笋丝豆腐丝煮3分钟|加生抽、老抽、醋、白胡椒粉、盐调味|水淀粉分次勾芡至浓稠度适中|转圈淋入蛋液形成漂亮的蛋花|淋香油，撒香菜末和葱花即可',
      steps_en:'Soak and shred wood ear and shiitake; shred tofu and bamboo shoot; shred pork, marinate with wine|Beat egg, chop cilantro|Boil water or broth, cook pork shreds until color changes|Add wood ear, shiitake, bamboo shoot and tofu shreds, cook 3 minutes|Season with soy sauce, dark soy, vinegar, white pepper and salt|Thicken gradually with cornstarch slurry|Drizzle egg in circles for beautiful egg flower|Drizzle sesame oil, sprinkle cilantro and scallions'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'嫩豆腐1盒，木耳6朵，香菇4朵，笋50g，胡萝卜30g，瘦肉80g，鸡蛋1个，生抽2勺，老抽半勺，醋4勺，白胡椒粉1.5勺，盐，糖少许，淀粉，香菜，香油，高汤',
      ingredients_en:'Silken tofu 1 box, wood ear 6, shiitake 4, bamboo shoot 50g, carrot 30g, lean pork 80g, egg 1, soy sauce 2 tbsp, dark soy 0.5 tbsp, vinegar 4 tbsp, white pepper 1.5 tbsp, salt, sugar a little, cornstarch, cilantro, sesame oil, broth',
      steps_zh:'木耳香菇泡发切细丝，豆腐切细丝，笋和胡萝卜切丝，瘦肉切丝加料酒盐白胡椒粉腌10分钟，鸡蛋打散|锅中加高汤烧开，放入肉丝煮至变色|加入木耳丝、香菇丝、笋丝、胡萝卜丝、豆腐丝煮3分钟|加生抽、老抽、醋（醋分两次加）、白胡椒粉、盐、少许糖调味|水淀粉分次淋入勾芡至浓稠适中（不要太稠）|转圈淋入蛋液形成漂亮的蛋花|撒香菜末和葱花，淋香油，再加少许醋提酸香|搅匀出锅装碗',
      steps_en:'Soak and finely shred wood ear and shiitake; finely shred tofu, bamboo shoot and carrot; shred pork, marinate with wine, salt and white pepper 10 min; beat egg|Boil broth, cook pork shreds until color changes|Add wood ear, shiitake, bamboo shoot, carrot and tofu shreds, cook 3 minutes|Season with soy sauce, dark soy, half the vinegar, white pepper, salt and a little sugar|Thicken gradually with cornstarch slurry (not too thick)|Drizzle egg in circles for beautiful egg flower|Sprinkle cilantro and scallions, drizzle sesame oil, add remaining vinegar for brightness|Stir and serve in bowl'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'嫩豆腐1盒，木耳6朵，香菇4朵，冬笋50g，胡萝卜30g，金针菇50g，瘦肉100g，鸡蛋1个，生抽2勺，老抽半勺，香醋4勺，白胡椒粉2勺，盐，糖，淀粉，香菜，葱花，香油，高汤，鸡精',
      ingredients_en:'Silken tofu 1 box, wood ear 6, shiitake 4, winter bamboo shoot 50g, carrot 30g, enoki mushrooms 50g, lean pork 100g, egg 1, soy sauce 2 tbsp, dark soy 0.5 tbsp, black vinegar 4 tbsp, white pepper 2 tbsp, salt, sugar, cornstarch, cilantro, scallions, sesame oil, broth, chicken bouillon',
      steps_zh:'木耳香菇泡发切细丝，冬笋和胡萝卜切细丝，金针菇去根撕开，嫩豆腐切细丝（豆腐丝越细越好）|瘦肉切细丝加料酒白胡椒粉淀粉抓匀腌10分钟，鸡蛋打散|锅中加高汤大火烧开，先放肉丝划散煮至变色|加入所有蔬菜丝（木耳、香菇、冬笋、胡萝卜、金针菇）煮3分钟|加生抽、老抽、一半醋、白胡椒粉、盐、糖、鸡精调味|水淀粉多次少量淋入勾芡至浓稠适中（比普通汤稍稠）|转圈淋入蛋液形成漂亮的蛋花|撒香菜末和葱花，淋香油，再加剩下的一半香醋提酸香|搅匀出锅装碗',
      steps_en:'Soak and finely shred wood ear and shiitake; finely shred winter bamboo shoot and carrot; trim enoki; finely shred tofu (as thin as possible)|Finely shred pork, marinate with wine, white pepper and cornstarch 10 min; beat egg|Bring broth to boil, cook pork shreds until color changes|Add all vegetable shreds, cook 3 minutes|Season with soy sauce, dark soy, half the vinegar, white pepper, salt, sugar and chicken bouillon|Thicken gradually with cornstarch slurry (slightly thicker than regular soup)|Drizzle egg in circles for beautiful egg flower|Sprinkle cilantro and scallions, drizzle sesame oil, add remaining vinegar for brightness|Stir and serve in bowl'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'嫩豆腐1盒，木耳8朵，香菇4朵，冬笋50g，胡萝卜30g，金针菇50g，鲜香菇2朵，瘦肉120g，鸡蛋2个，生抽3勺，老抽半勺，香醋5勺，白胡椒粉3勺，盐，糖，淀粉，香菜，葱花，香油，高汤，鸡精，姜丝',
      ingredients_en:'Silken tofu 1 box, wood ear 8, shiitake 4, winter bamboo shoot 50g, carrot 30g, enoki 50g, fresh shiitake 2, lean pork 120g, eggs 2, soy sauce 3 tbsp, dark soy 0.5 tbsp, black vinegar 5 tbsp, white pepper 3 tbsp, salt, sugar, cornstarch, cilantro, scallions, sesame oil, broth, chicken bouillon, ginger shreds',
      steps_zh:'木耳香菇温水泡发后切细丝，冬笋胡萝卜金针菇切细丝，鲜香菇去蒂切细丝（多种菌菇增加鲜味层次）|嫩豆腐先切薄片再切细丝，放入淡盐水中浸泡防碎|瘦肉切细丝加料酒白胡椒粉生抽淀粉抓匀腌15分钟|鸡蛋2个打散加少许盐白胡椒粉搅匀|锅中加高汤大火烧开，先放姜丝和肉丝划散煮至变色|加入所有蔬菜丝（木耳、香菇、鲜香菇、冬笋、胡萝卜、金针菇）煮5分钟至鲜味融合|加生抽、老抽、白胡椒粉2勺、盐、糖、鸡精调味煮2分钟|水淀粉分3-4次少量淋入勾芡至浓稠适中|转圈淋入蛋液，用筷子轻轻搅动形成云朵般的大片蛋花|关火，加香醋5勺（关火后加醋味更醇厚不挥发），搅匀|撒大量香菜末和葱花，淋香油，再撒白胡椒粉1勺增辛香|趁热出锅装碗',
      steps_en:'Soak wood ear and shiitake in warm water, finely shred; shred bamboo shoot, carrot and enoki; trim and shred fresh shiitake (multiple mushrooms increase umami layers)|Slice tofu thin then finely shred, soak in salted water to prevent breaking|Finely shred pork, marinate with wine, white pepper, soy sauce and cornstarch 15 min|Beat 2 eggs with a little salt and white pepper|Bring broth to boil, add ginger shreds and pork, cook until color changes|Add all vegetable shreds, cook 5 minutes until flavors meld|Season with soy sauce, dark soy, 2 tbsp white pepper, salt, sugar and chicken bouillon, cook 2 minutes|Thicken with cornstarch slurry in 3-4 batches|Drizzle egg in circles, gently stir with chopsticks for cloud-like egg flower|Turn off heat, add 5 tbsp black vinegar (add after turning off for mellow flavor)|Sprinkle lots of cilantro and scallions, drizzle sesame oil, add 1 tbsp white pepper for pungency|Serve hot in bowl'}
  ],

  // 32. 馄饨汤 [Wonton Soup]
  32: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'馄饨皮30张，猪肉馅200g，姜葱，盐，生抽，紫菜，虾皮，香油',
      ingredients_en:'Wonton wrappers 30, ground pork 200g, ginger scallion, salt, soy sauce, seaweed, dried shrimp, sesame oil',
      steps_zh:'猪肉馅加姜末葱花盐生抽拌匀|取馄饨皮放馅料，对折捏紧，两角弯回捏合|锅中水烧开，放入馄饨煮至浮起|碗中放生抽香油紫菜虾皮|连汤带馄饨盛入碗中，撒葱花即可',
      steps_en:'Mix pork with minced ginger, scallion, salt and soy sauce|Place filling on wonton wrapper, fold and seal, bring two corners together and pinch|Boil water, cook wontons until they float|In bowl, add soy sauce, sesame oil, seaweed and dried shrimp|Ladle wontons with soup into bowl, sprinkle scallions'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'馄饨皮40张，猪肉馅300g，姜葱，盐，生抽，料酒，白胡椒粉，紫菜，虾皮，香油，香菜',
      ingredients_en:'Wonton wrappers 40, ground pork 300g, ginger scallion, salt, soy sauce, wine, white pepper, seaweed, dried shrimp, sesame oil, cilantro',
      steps_zh:'猪肉馅加姜末葱花、盐、生抽、料酒、白胡椒粉、少许水搅上劲|取馄饨皮放适量馅料，对折成三角形，两角弯回捏合|锅中烧开水，放入馄饨煮至全部浮起（约3分钟）|准备汤底：碗中放生抽、香油、白胡椒粉、紫菜、虾皮、葱花|先舀一勺热汤冲入碗中，再盛入馄饨|撒香菜末即可',
      steps_en:'Mix pork with ginger, scallion, salt, soy sauce, wine, white pepper and water until sticky|Place filling on wrapper, fold into triangle, bring corners together and pinch|Boil water, cook wontons until all float (about 3 minutes)|Prepare broth: in bowl, add soy sauce, sesame oil, white pepper, seaweed, dried shrimp, scallions|Ladle hot soup into bowl first, then add wontons|Sprinkle cilantro'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'馄饨皮40张，猪肉馅300g，鸡蛋1个，姜葱，盐，生抽，料酒，白胡椒粉，紫菜，虾皮，香油，香菜，榨菜末，高汤',
      ingredients_en:'Wonton wrappers 40, ground pork 300g, egg 1, ginger scallion, salt, soy sauce, wine, white pepper, seaweed, dried shrimp, sesame oil, cilantro, pickled mustard, broth',
      steps_zh:'猪肉馅加姜末葱花、盐、生抽、料酒、白胡椒粉、鸡蛋、少许水顺一个方向搅上劲（加鸡蛋更嫩滑）|取馄饨皮放适量馅料，对折捏紧，两角弯回捏合|锅中加高汤烧开，放入馄饨煮至全部浮起|准备汤底：碗中放生抽、香油、白胡椒粉、紫菜、虾皮、榨菜末、葱花|先舀一勺热高汤冲入碗中再盛入馄饨|撒香菜末即可',
      steps_en:'Mix pork with ginger, scallion, salt, soy sauce, wine, white pepper, egg and water, stir in one direction until sticky (egg makes it tender)|Place filling on wrapper, fold and seal, bring corners together|Bring broth to boil, cook wontons until all float|Prepare broth: soy sauce, sesame oil, white pepper, seaweed, dried shrimp, pickled mustard, scallions|Ladle hot broth into bowl, then add wontons|Sprinkle cilantro'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'馄饨皮50张，猪肉馅350g，鸡蛋1个，鲜虾仁100g，姜葱，盐，生抽，料酒，白胡椒粉，紫菜，虾皮，香油，香菜，榨菜末，高汤，鸡精',
      ingredients_en:'Wonton wrappers 50, ground pork 350g, egg 1, fresh shrimp 100g, ginger scallion, salt, soy sauce, wine, white pepper, seaweed, dried shrimp, sesame oil, cilantro, pickled mustard, broth, chicken bouillon',
      steps_zh:'猪肉馅加姜末葱花、盐、生抽、料酒、白胡椒粉、鸡蛋搅上劲|虾仁剁碎加入肉馅中搅匀（虾仁增加鲜味层次）|取馄饨皮放适量馅料，包成元宝形|锅中加高汤大火烧开，放入馄饨煮至浮起再煮1分钟|准备汤底：碗中放生抽、香油、白胡椒粉、鸡精、紫菜、虾皮、榨菜末、葱花|先舀热高汤冲入碗中，再盛入馄饨|撒香菜末，淋少许香油即可',
      steps_en:'Mix pork with ginger, scallion, salt, soy sauce, wine, white pepper and egg until sticky|Chop shrimp, mix into filling (shrimp adds umami depth)|Place filling on wrapper, fold into ingot shape|Bring broth to boil, cook wontons until floating plus 1 minute|Prepare broth: soy sauce, sesame oil, white pepper, chicken bouillon, seaweed, dried shrimp, pickled mustard, scallions|Ladle hot broth into bowl, then add wontons|Sprinkle cilantro, drizzle a little sesame oil'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'馄饨皮50张，猪肉馅350g，鸡蛋1个，鲜虾仁150g，干贝2粒，姜葱，盐，生抽，料酒，白胡椒粉，紫菜，虾皮，香油，香菜，榨菜末，高汤，鸡精，青菜',
      ingredients_en:'Wonton wrappers 50, ground pork 350g, egg 1, fresh shrimp 150g, dried scallops 2, ginger scallion, salt, soy sauce, wine, white pepper, seaweed, dried shrimp, sesame oil, cilantro, pickled mustard, broth, chicken bouillon, greens',
      steps_zh:'猪肉馅选用三肥七瘦，加姜末葱花、盐、生抽、料酒、白胡椒粉、鸡蛋搅上劲|虾仁剁成虾茸，干贝温水泡发撕成丝，加入肉馅中搅匀（干贝增鲜）|取馄饨皮放适量馅料，包成元宝形|青菜洗净备用|锅中加高汤大火烧开，放入馄饨煮至浮起|放入青菜烫熟|准备汤底：碗中放生抽、香油、白胡椒粉、鸡精、紫菜、虾皮、榨菜末、大量葱花|先舀热高汤冲入碗中，再盛入馄饨和青菜|撒香菜末和干贝丝，淋香油即可',
      steps_en:'Use 30% fat 70% lean pork, mix with ginger, scallion, salt, soy sauce, wine, white pepper and egg until sticky|Mince shrimp into paste, soak and shred dried scallops, mix into filling (scallops add umami)|Place filling on wrapper, fold into ingot shape|Wash greens and set aside|Bring broth to boil, cook wontons until floating|Blanch greens in broth|Prepare broth: soy sauce, sesame oil, white pepper, chicken bouillon, seaweed, dried shrimp, pickled mustard, lots of scallions|Ladle hot broth into bowl, then add wontons and greens|Sprinkle cilantro and shredded scallops, drizzle sesame oil'}
  ],

  // 33. 蛋花汤 [Egg Drop Soup]
  33: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鸡蛋2个，盐少许，淀粉1勺，葱花，香油',
      ingredients_en:'Eggs 2, salt a little, cornstarch 1 tbsp, scallions, sesame oil',
      steps_zh:'鸡蛋打散搅匀|锅中加水烧开，加少许盐调味|水淀粉勾薄芡|转圈淋入蛋液，用筷子搅散形成蛋花|撒葱花，淋少许香油即可出锅',
      steps_en:'Beat eggs until well mixed|Boil water, season with salt|Thinly thicken with cornstarch slurry|Drizzle egg in circles, stir with chopsticks to form egg flower|Sprinkle scallions, drizzle sesame oil and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鸡蛋2个，番茄1个，葱，香菜，盐，白胡椒粉，淀粉1勺，香油',
      ingredients_en:'Eggs 2, tomato 1, scallions, cilantro, salt, white pepper, cornstarch 1 tbsp, sesame oil',
      steps_zh:'鸡蛋打散搅匀|番茄切小块，葱切花，香菜切末|锅中放少许油，下番茄块炒出汁|加适量水烧开煮2分钟|加盐和白胡椒粉调味|水淀粉勾薄芡|转圈淋入蛋液，用筷子轻轻搅动形成漂亮蛋花|撒葱花和香菜末，淋香油出锅',
      steps_en:'Beat eggs|Dice tomato, chop scallions and cilantro|Heat oil, sauté tomato until juicy|Add water, boil 2 minutes|Season with salt and white pepper|Thinly thicken with cornstarch slurry|Drizzle egg in circles, gently stir for beautiful egg flower|Sprinkle scallions and cilantro, drizzle sesame oil'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'鸡蛋3个，番茄2个，葱，香菜，盐，白胡椒粉，糖少许，淀粉1勺，香油，高汤，鸡精',
      ingredients_en:'Eggs 3, tomatoes 2, scallions, cilantro, salt, white pepper, sugar a little, cornstarch 1 tbsp, sesame oil, broth, chicken bouillon',
      steps_zh:'鸡蛋打散搅匀（稍微搅几下保留蛋白蛋黄层次）|番茄切小块，葱切花，香菜切末|锅中放少许油，下番茄块中火炒出红油|加高汤烧开煮3分钟让番茄味充分融入|加盐、白胡椒粉、少许糖和鸡精调味|水淀粉勾薄芡至汤汁微微浓稠|转圈淋入蛋液，用筷子轻轻搅动形成大片蛋花|撒葱花和香菜末，淋香油出锅',
      steps_en:'Beat eggs lightly (keep some egg white and yolk layers)|Dice tomatoes, chop scallions and cilantro|Heat oil, sauté tomatoes on medium until red oil releases|Add broth, boil 3 minutes for tomato flavor|Season with salt, white pepper, sugar and chicken bouillon|Thinly thicken until soup slightly thickened|Drizzle egg in circles, gently stir for large egg flower pieces|Sprinkle scallions and cilantro, drizzle sesame oil'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'鸡蛋3个，番茄2个，鲜香菇3朵，嫩豆腐半盒，葱，香菜，盐，白胡椒粉，糖少许，淀粉1勺，香油，高汤，鸡精',
      ingredients_en:'Eggs 3, tomatoes 2, fresh shiitake 3, silken tofu half box, scallions, cilantro, salt, white pepper, sugar a little, cornstarch 1 tbsp, sesame oil, broth, chicken bouillon',
      steps_zh:'鸡蛋打散，番茄切小块，香菇切薄片，嫩豆腐切小丁|葱切花，香菜切末|锅中放少许油，下番茄块中火炒出红油并软烂|加高汤大火烧开，放入香菇片和豆腐丁煮3分钟|加盐、白胡椒粉、少许糖和鸡精调味|水淀粉分两次勾薄芡至汤汁有轻微浓稠感|转圈淋入蛋液，用筷子轻轻搅动形成云朵般的蛋花|撒葱花和香菜末，淋香油出锅',
      steps_en:'Beat eggs; dice tomatoes; slice shiitake; dice tofu|Chop scallions and cilantro|Heat oil, sauté tomatoes on medium until soft and red oil|Add broth, bring to boil, add shiitake and tofu, cook 3 minutes|Season with salt, white pepper, sugar and chicken bouillon|Thicken in 2 batches for light consistency|Drizzle egg in circles, gently stir for cloud-like egg flower|Sprinkle scallions and cilantro, drizzle sesame oil'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'鸡蛋4个，番茄2个，鲜香菇3朵，嫩豆腐半盒，金针菇50g，葱，香菜，盐，白胡椒粉，糖少许，淀粉1勺，香油，高汤，鸡精，白醋几滴',
      ingredients_en:'Eggs 4, tomatoes 2, fresh shiitake 3, silken tofu half box, enoki 50g, scallions, cilantro, salt, white pepper, sugar a little, cornstarch 1 tbsp, sesame oil, broth, chicken bouillon, white vinegar a few drops',
      steps_zh:'鸡蛋打散加几滴水搅匀（加水更嫩），番茄切小丁，香菇切薄片，嫩豆腐切小丁，金针菇去根撕开|锅中放油烧热，下番茄丁中火炒至软烂出红油|加高汤大火烧开，放入香菇片、金针菇、豆腐丁煮3分钟|加盐、白胡椒粉、少许糖和鸡精调味|水淀粉分两次勾薄芡至汤汁微稠|转圈淋入蛋液，用筷子轻轻朝一个方向搅动形成大片薄蛋花|滴几滴白醋提升蛋花嫩滑口感|撒大量葱花和香菜末，淋香油出锅装碗',
      steps_en:'Beat eggs with a few drops of water (for tenderness); dice tomatoes; slice shiitake; dice tofu; trim enoki|Heat oil, sauté tomatoes on medium until soft and red oil|Add broth, bring to boil, add shiitake, enoki and tofu, cook 3 minutes|Season with salt, white pepper, sugar and chicken bouillon|Thicken in 2 batches until soup slightly thick|Drizzle egg in circles, gently stir in one direction for large thin egg flower|Add a few drops white vinegar for tender egg flower texture|Sprinkle lots of scallions and cilantro, drizzle sesame oil, serve in bowl'}
  ],

  // 34. 丝瓜汤 [Luffa Soup]
  34: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'丝瓜2根，姜3片，盐少许，葱1根',
      ingredients_en:'Luffa 2, ginger 3 slices, salt a little, scallion 1',
      steps_zh:'丝瓜去皮切成滚刀块|锅中放少许油，加姜片爆香|放入丝瓜翻炒几下|加适量水烧开煮3分钟|加盐调味，撒葱花即可出锅',
      steps_en:'Peel luffa, cut into rolling chunks|Heat oil, sauté ginger slices|Add luffa, stir a few times|Add water, boil 3 minutes|Season with salt, sprinkle scallions and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'丝瓜2根，鸡蛋1个，木耳5朵，姜，葱，盐，白胡椒粉',
      ingredients_en:'Luffa 2, egg 1, wood ear 5, ginger, scallion, salt, white pepper',
      steps_zh:'丝瓜去皮切成滚刀块|木耳泡发撕小朵|鸡蛋打散|锅中放少许油，加姜丝爆香|放入丝瓜块翻炒至变软|加适量水或高汤烧开，放入木耳|煮3分钟至丝瓜透明|加盐和白胡椒粉调味|转圈淋入蛋液形成蛋花|撒葱花即可出锅',
      steps_en:'Peel luffa, cut into rolling chunks|Soak and tear wood ear into small pieces|Beat egg|Heat oil, sauté ginger shreds|Add luffa, stir-fry until soft|Add water or broth, bring to boil, add wood ear|Cook 3 minutes until luffa is translucent|Season with salt and white pepper|Drizzle egg in circles to form egg flower|Sprinkle scallions and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'丝瓜2根，鸡蛋2个，木耳6朵，枸杞少许，姜，葱，盐，白胡椒粉，高汤，香油',
      ingredients_en:'Luffa 2, eggs 2, wood ear 6, goji berries a little, ginger, scallions, salt, white pepper, broth, sesame oil',
      steps_zh:'丝瓜去皮切成滚刀块（皮要刮干净不然有硬皮感）|木耳泡发撕小朵，枸杞泡软|鸡蛋打散加少许盐搅匀|锅中放少许油，加姜丝爆香|放入丝瓜块翻炒至变软略微出汁|加高汤烧开，放入木耳煮3分钟至丝瓜半透明|加盐和白胡椒粉调味|转圈淋入蛋液形成蛋花|撒枸杞和葱花，淋香油即可出锅',
      steps_en:'Peel luffa thoroughly, cut into rolling chunks|Soak and tear wood ear, soak goji berries|Beat eggs with a little salt|Heat oil, sauté ginger shreds|Add luffa, stir-fry until soft and slightly juicy|Add broth, bring to boil, add wood ear, cook 3 minutes until luffa semi-translucent|Season with salt and white pepper|Drizzle egg in circles to form egg flower|Sprinkle goji berries and scallions, drizzle sesame oil'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'丝瓜3根，鸡蛋2个，木耳6朵，鲜虾仁100g，枸杞少许，姜，葱，盐，白胡椒粉，高汤，料酒，香油',
      ingredients_en:'Luffa 3, eggs 2, wood ear 6, fresh shrimp 100g, goji berries a little, ginger, scallions, salt, white pepper, broth, wine, sesame oil',
      steps_zh:'丝瓜去皮切成滚刀块（刀工均匀一致）|木耳泡发撕小朵，鲜虾仁加料酒白胡椒粉腌5分钟|鸡蛋打散加少许盐搅匀|锅中放油烧热，下姜丝爆香|放入虾仁滑炒至变色盛出|锅中加高汤烧开，放入丝瓜块和木耳煮3分钟至丝瓜变软|加盐和白胡椒粉调味|转圈淋入蛋液形成蛋花|放入炒好的虾仁和枸杞煮30秒|撒葱花，淋香油出锅',
      steps_en:'Peel luffa, cut into even rolling chunks|Soak wood ear; marinate shrimp with wine and white pepper 5 min|Beat eggs with a little salt|Heat oil, sauté ginger shreds|Stir-fry shrimp until color changes, set aside|Add broth, bring to boil, add luffa and wood ear, cook 3 minutes until soft|Season with salt and white pepper|Drizzle egg in circles to form egg flower|Add cooked shrimp and goji berries, cook 30 seconds|Sprinkle scallions, drizzle sesame oil'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'丝瓜3根，鸡蛋3个，木耳8朵，鲜虾仁150g，枸杞少许，姜，葱，盐，白胡椒粉，高汤，花雕酒，香油，鸡精',
      ingredients_en:'Luffa 3, eggs 3, wood ear 8, fresh shrimp 150g, goji berries a little, ginger, scallions, salt, white pepper, broth, huadiao wine, sesame oil, chicken bouillon',
      steps_zh:'丝瓜去皮切成均匀滚刀块，放入淡盐水中浸泡防氧化|木耳泡发撕小朵，鲜虾仁开背去虾线加花雕酒白胡椒粉盐抓匀腌10分钟|鸡蛋3个打散加少许盐和几滴水搅匀（更嫩）|锅中放油烧热，下姜丝爆香，放入虾仁滑炒至变色卷曲盛出|锅中加高汤大火烧开，放入丝瓜块和木耳煮4分钟至丝瓜透明软滑|加盐、白胡椒粉、鸡精调味|水淀粉勾薄芡使汤微稠（蛋花更悬浮不沉底）|转圈淋入蛋液，用筷子轻轻搅动形成大片蛋花|放入炒好的虾仁和枸杞煮30秒|撒葱花，淋香油，趁热出锅装碗',
      steps_en:'Peel luffa, cut into even chunks, soak in salted water to prevent oxidation|Soak wood ear; butterfly shrimp to remove vein, marinate with huadiao wine, white pepper and salt 10 min|Beat 3 eggs with a little salt and water (for tenderness)|Heat oil, sauté ginger shreds, stir-fry shrimp until curled, set aside|Add broth, bring to boil, add luffa and wood ear, cook 4 minutes until translucent and soft|Season with salt, white pepper and chicken bouillon|Thinly thicken with cornstarch slurry so egg flower floats|Drizzle egg in circles, gently stir for large egg flower|Add cooked shrimp and goji berries, cook 30 seconds|Sprinkle scallions, drizzle sesame oil, serve hot in bowl'}
  ],

  // 35. 莲藕汤 [Lotus Root Soup]
  35: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'排骨300g，莲藕1节，姜3片，盐，葱',
      ingredients_en:'Pork ribs 300g, lotus root 1 section, ginger 3 slices, salt, scallion',
      steps_zh:'莲藕去皮切片，排骨斩段焯水|排骨放入锅中加水大火烧开转小火炖30分钟|加入莲藕继续炖30分钟|加盐调味，撒葱花即可',
      steps_en:'Peel and slice lotus root; cut ribs into segments, blanch|Put ribs in pot with water, boil then simmer 30 minutes|Add lotus root, simmer 30 more minutes|Season with salt, sprinkle scallions'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'排骨500g，莲藕2节，花生50g，姜5片，盐，白胡椒粉，料酒，葱',
      ingredients_en:'Pork ribs 500g, lotus root 2 sections, peanuts 50g, ginger 5 slices, salt, white pepper, wine, scallion',
      steps_zh:'排骨斩段冷水下锅加姜片料酒焯水5分钟捞出洗净|莲藕去皮切滚刀块，花生提前泡水|排骨放入锅中加足量水，加姜片大火烧开转小火炖40分钟|加入莲藕和花生继续炖40分钟至莲藕粉糯|加盐和少许白胡椒粉调味|撒葱花即可',
      steps_en:'Cut ribs, blanch in cold water with ginger and wine 5 min, drain and rinse|Peel lotus root, cut into chunks; soak peanuts|Put ribs in pot with plenty water and ginger, boil then simmer 40 minutes|Add lotus root and peanuts, simmer 40 minutes until lotus root is soft and starchy|Season with salt and white pepper|Sprinkle scallions'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'排骨600g，莲藕2节，花生80g，红枣5颗，姜5片，盐，白胡椒粉，料酒，葱',
      ingredients_en:'Pork ribs 600g, lotus root 2 sections, peanuts 80g, red dates 5, ginger 5 slices, salt, white pepper, wine, scallion',
      steps_zh:'排骨斩段冷水下锅加姜片料酒焯水5分钟捞出洗净|莲藕去皮切滚刀块（切好后泡入水中防氧化），花生提前泡2小时|排骨放入锅中加足量水，加姜片大火烧开转小火炖40分钟|加入莲藕、花生和红枣继续炖40分钟至莲藕粉糯排骨脱骨|加盐和白胡椒粉调味|撒葱花即可',
      steps_en:'Cut ribs, blanch in cold water with ginger and wine 5 min, drain and rinse|Peel lotus root, cut into chunks, soak in water to prevent oxidation; soak peanuts 2 hours|Put ribs in pot with plenty water and ginger, boil then simmer 40 minutes|Add lotus root, peanuts and red dates, simmer 40 minutes until lotus root is tender and ribs fall off bone|Season with salt and white pepper|Sprinkle scallions'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'排骨600g，莲藕2节，花生80g，红枣5颗，枸杞少许，姜5片，盐，白胡椒粉，料酒，葱，鸡精',
      ingredients_en:'Pork ribs 600g, lotus root 2 sections, peanuts 80g, red dates 5, goji berries a little, ginger 5 slices, salt, white pepper, wine, scallion, chicken bouillon',
      steps_zh:'排骨斩段冷水下锅加姜片料酒焯水5分钟捞出洗净|莲藕去皮切滚刀块放入醋水中浸泡（保持洁白），花生提前泡2小时|排骨放入砂锅中加足量水，加姜片大火烧开转小火炖40分钟|加入莲藕、花生、红枣大火烧开转小火炖50分钟至莲藕粉糯|加盐、白胡椒粉、鸡精调味|放入枸杞煮5分钟|撒葱花即可出锅',
      steps_en:'Cut ribs, blanch in cold water with ginger and wine 5 min, drain and rinse|Peel lotus root, cut into chunks, soak in vinegar water (keep white); soak peanuts 2 hours|Put ribs in clay pot with plenty water and ginger, boil then simmer 40 minutes|Add lotus root, peanuts and red dates, boil then simmer 50 minutes until tender|Season with salt, white pepper and chicken bouillon|Add goji berries, cook 5 minutes|Sprinkle scallions and serve'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'排骨800g，莲藕3节，花生100g，红枣8颗，枸杞少许，干贝3粒，姜8片，盐，白胡椒粉，花雕酒，葱，鸡精',
      ingredients_en:'Pork ribs 800g, lotus root 3 sections, peanuts 100g, red dates 8, goji berries a little, dried scallops 3, ginger 8 slices, salt, white pepper, huadiao wine, scallion, chicken bouillon',
      steps_zh:'排骨斩段冷水下锅加姜片花雕酒焯水5分钟捞出洗净|莲藕去皮切滚刀块放入醋水中浸泡，花生提前泡2小时，干贝泡发撕碎|排骨放入砂锅中加足量水，加姜片大火烧开撇去浮沫转小火炖50分钟|加入莲藕、花生、红枣、干贝大火烧开转小火炖1小时至莲藕粉糯排骨酥烂|加盐、白胡椒粉、鸡精调味|放入枸杞煮3分钟|撒葱花即可出锅（汤汁浓白鲜美）',
      steps_en:'Cut ribs, blanch in cold water with ginger and huadiao wine 5 min, drain and rinse|Peel lotus root, cut into chunks, soak in vinegar water; soak peanuts 2 hours; soak and shred dried scallops|Put ribs in clay pot with plenty water and ginger, boil, skim foam, simmer 50 minutes|Add lotus root, peanuts, red dates and scallops, boil then simmer 1 hour until lotus root is tender and ribs fall apart|Season with salt, white pepper and chicken bouillon|Add goji berries, cook 3 minutes|Sprinkle scallions and serve (broth is creamy white and savory)'}
  ],

  // 36. 红豆汤 [Sweet Red Bean Soup]
  36: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'红豆200g，冰糖50g',
      ingredients_en:'Red beans 200g, rock sugar 50g',
      steps_zh:'红豆提前浸泡4小时以上|将红豆放入锅中加足量水大火烧开|转小火慢煮1小时至红豆软烂|加冰糖搅拌至融化|煮至汤汁浓稠即可关火',
      steps_en:'Soak red beans 4+ hours|Put beans in pot with plenty water, bring to boil|Simmer 1 hour until beans are soft|Add rock sugar, stir until melted|Cook until soup thickens, turn off heat'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'红豆300g，冰糖80g，陈皮1小块，干桂花少许',
      ingredients_en:'Red beans 300g, rock sugar 80g, dried tangerine peel 1 small piece, dried osmanthus a little',
      steps_zh:'红豆提前浸泡过夜|陈皮泡软切丝备用|红豆放入锅中加足量水大火烧开|倒掉第一遍水去除涩味|重新加水和陈皮大火烧开转小火慢煮1.5小时|煮至红豆开花软烂|加冰糖和少许桂花煮至融化|再煮10分钟至汤汁浓稠即可',
      steps_en:'Soak red beans overnight|Soak and shred tangerine peel|Put beans in pot with water, bring to boil|Discard first boil water to remove bitterness|Add fresh water and tangerine peel, boil then simmer 1.5 hours|Cook until beans bloom and soften|Add rock sugar and osmanthus, cook until melted|Cook 10 more minutes until soup thickens'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'红豆300g，冰糖80g，陈皮1小块，干桂花少许，莲子50g，红枣5颗',
      ingredients_en:'Red beans 300g, rock sugar 80g, dried tangerine peel 1, dried osmanthus a little, lotus seeds 50g, red dates 5',
      steps_zh:'红豆和莲子提前浸泡过夜|陈皮泡软切丝，红枣洗净去核|红豆放入锅中加足量水大火烧开|倒掉第一遍水去除涩味|重新加足量水，放入陈皮、莲子、红枣大火烧开转小火慢煮1.5小时|煮至红豆开花莲子软糯|加冰糖搅拌至融化|撒干桂花煮5分钟至花香融入|关火焖10分钟即可',
      steps_en:'Soak red beans and lotus seeds overnight|Soak and shred tangerine peel; wash and pit red dates|Put beans in pot with water, bring to boil, discard first water|Add fresh water, tangerine peel, lotus seeds and red dates, boil then simmer 1.5 hours|Cook until beans bloom and lotus seeds are soft|Add rock sugar, stir until melted|Add osmanthus, cook 5 minutes until aroma infuses|Turn off heat, rest 10 minutes'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'红豆400g，冰糖100g，陈皮1小块，干桂花少许，莲子50g，红枣8颗，百合30g，糯米小圆子100g',
      ingredients_en:'Red beans 400g, rock sugar 100g, dried tangerine peel 1, dried osmanthus a little, lotus seeds 50g, red dates 8, dried lily bulb 30g, glutinous rice balls 100g',
      steps_zh:'红豆和莲子提前浸泡过夜，百合泡软|陈皮泡软切丝，红枣去核|红豆放入锅中加足量水大火烧开，倒掉第一遍水去涩|重新加足量水，放入陈皮、莲子、红枣大火烧开转小火慢煮1.5小时至红豆开花|另起一锅煮糯米小圆子至浮起捞出过凉水|红豆汤中加入百合煮15分钟至百合软糯|加冰糖搅拌至融化|加入煮好的小圆子搅匀|撒干桂花煮3分钟关火即可',
      steps_en:'Soak beans and lotus seeds overnight; soak lily bulb|Soak and shred tangerine peel; pit red dates|Boil beans, discard first water, add fresh water, tangerine peel, lotus seeds and dates, simmer 1.5 hours until beans bloom|In another pot, cook glutinous rice balls until floating, drain and rinse cold water|Add lily bulb to bean soup, cook 15 minutes until soft|Add rock sugar, stir until melted|Add cooked rice balls, stir well|Add osmanthus, cook 3 minutes, turn off heat'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'红豆400g，冰糖120g，陈皮1小块，干桂花适量，莲子50g，红枣10颗，百合30g，薏米30g，糯米小圆子150g，椰奶少许',
      ingredients_en:'Red beans 400g, rock sugar 120g, dried tangerine peel 1, dried osmanthus, lotus seeds 50g, red dates 10, dried lily bulb 30g, pearl barley 30g, glutinous rice balls 150g, coconut milk a little',
      steps_zh:'红豆、莲子和薏米提前浸泡过夜（薏米增加口感层次）|陈皮泡软切细丝，红枣去核，百合泡软|红豆放入锅中加足量水大火烧开，倒掉第一遍水去涩味|重新加足量水，放入陈皮、莲子、薏米、红枣大火烧开转小火慢煮2小时至所有豆类软烂出沙|另起一锅煮糯米小圆子至浮起捞出过凉水|红豆汤中加入百合煮15分钟至百合软糯|加冰糖搅拌至融化，汤汁浓稠|加入煮好的小圆子和少许椰奶搅匀（椰奶增添奶香风味）|撒干桂花，关火焖5分钟即可盛碗',
      steps_en:'Soak beans, lotus seeds and pearl barley overnight (barley adds texture)|Soak and shred tangerine peel; pit dates; soak lily bulb|Boil beans, discard first water, add fresh water, tangerine peel, lotus seeds, barley and dates, simmer 2 hours until all beans are soft and creamy|In another pot, cook rice balls until floating, drain and rinse|Add lily bulb to bean soup, cook 15 minutes until soft|Add rock sugar, stir until melted, soup thickens|Add cooked rice balls and a little coconut milk (coconut milk adds creamy aroma)|Sprinkle osmanthus, turn off heat, rest 5 minutes, serve in bowls'}
  ],

  // 37. 宫保豆腐 [Kung Pao Tofu]
  37: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'老豆腐400g，花生50g，生抽2勺，白糖1勺，葱2根',
      ingredients_en:'Firm tofu 400g, peanuts 50g, soy sauce 2 tbsp, sugar 1 tbsp, scallions 2',
      steps_zh:'豆腐切方块，用厨房纸吸干水分|锅中放油烧热，放入豆腐块煎至两面金黄|加生抽和糖翻炒均匀|加花生米和葱花翻炒|出锅即可',
      steps_en:'Cut tofu into cubes, pat dry with paper towel|Heat oil, fry tofu until golden on both sides|Add soy sauce and sugar, stir well|Add peanuts and scallions, toss|Serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'老豆腐500g，花生60g，干辣椒3个，葱姜蒜，生抽2勺，糖1勺，醋1勺，淀粉1勺',
      ingredients_en:'Firm tofu 500g, peanuts 60g, dried chilies 3, garlic ginger scallion, soy sauce 2 tbsp, sugar 1 tbsp, vinegar 1 tbsp, cornstarch 1 tbsp',
      steps_zh:'老豆腐切方块，用厨房纸吸干水分|锅中多放油，下豆腐块煎至六面金黄酥脆盛出|锅中留底油，爆香葱花姜末蒜末和干辣椒段|加入煎好的豆腐翻炒|调碗汁：生抽、糖、醋、淀粉、水调匀|倒入碗汁快速翻炒裹匀|加花生米翻炒几下出锅',
      steps_en:'Cut firm tofu into cubes, pat dry|Fry tofu in oil until golden crispy on all sides, set aside|Leave oil, sauté scallion, ginger, garlic and dried chilies|Return tofu, stir|Mix sauce: soy sauce, sugar, vinegar, cornstarch and water|Pour sauce, stir-fry quickly to coat|Add peanuts, toss and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'老豆腐500g，花生60g，干辣椒5个，花椒1勺，葱姜蒜，生抽2勺，糖1勺，醋1勺，淀粉1勺，料酒，香油',
      ingredients_en:'Firm tofu 500g, peanuts 60g, dried chilies 5, Sichuan pepper 1 tbsp, garlic ginger scallion, soy sauce 2 tbsp, sugar 1 tbsp, vinegar 1 tbsp, cornstarch 1 tbsp, wine, sesame oil',
      steps_zh:'老豆腐切2cm方块，用厨房纸吸干水分|锅中多放油烧至六成热，下豆腐块炸至金黄酥脆捞出|锅中留底油，下花椒和干辣椒段小火炒出麻辣香味|加姜末蒜末葱花爆香|加入炸好的豆腐块翻炒|调碗汁：生抽、糖、醋、料酒、淀粉、水调匀|倒入碗汁大火快速翻炒裹匀|加炒香的花生米翻炒几下|淋少许香油出锅',
      steps_en:'Cut tofu into 2cm cubes, pat dry|Deep-fry tofu at medium-high until golden crispy, drain|Leave oil, fry Sichuan pepper and chilies on low until numbing-spicy|Add ginger, garlic and scallion|Return tofu, stir|Mix sauce: soy sauce, sugar, vinegar, wine, cornstarch and water|Pour sauce, stir-fry on high to coat|Add roasted peanuts, toss|Drizzle sesame oil and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'老豆腐500g，花生70g，干辣椒6个，花椒1.5勺，葱姜蒜，生抽2勺，老抽半勺，糖1勺，醋1勺，料酒，淀粉，香油，盐，鸡精，黄瓜丁',
      ingredients_en:'Firm tofu 500g, peanuts 70g, dried chilies 6, Sichuan pepper 1.5 tbsp, garlic ginger scallion, soy sauce 2 tbsp, dark soy 0.5 tbsp, sugar 1 tbsp, vinegar 1 tbsp, wine, cornstarch, sesame oil, salt, chicken bouillon, cucumber dice',
      steps_zh:'老豆腐切成2cm方块，用厨房纸吸干水分，撒少许盐腌5分钟|锅中多放油烧至七成热，下豆腐块炸至金黄酥脆呈微焦色捞出|锅中留底油，下花椒和干辣椒段小火炒至麻辣浓郁|加姜末蒜末葱花爆香|加入黄瓜丁翻炒几下|加入炸好的豆腐块翻炒|调碗汁：生抽、老抽、糖、醋、料酒、淀粉、水、鸡精调匀|倒入碗汁大火快速翻炒裹匀|加炸好的花生米翻炒几下|淋香油出锅装盘',
      steps_en:'Cut tofu into 2cm cubes, pat dry, sprinkle salt and rest 5 min|Deep-fry tofu at high heat until golden crispy and slightly charred, drain|Leave oil, fry Sichuan pepper and chilies on low until richly numbing-spicy|Add ginger, garlic and scallion|Add cucumber dice, stir briefly|Return tofu, stir-fry|Mix sauce: soy sauces, sugar, vinegar, wine, cornstarch, water and chicken bouillon|Pour sauce, stir-fry on high to coat|Add fried peanuts, toss|Drizzle sesame oil and plate'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'老豆腐600g，花生80g，干辣椒8个，花椒2勺，葱姜蒜，生抽2勺，老抽半勺，糖1勺，醋1勺，花雕酒，淀粉，香油，盐，鸡精，黄瓜丁，红椒丁，郫县豆瓣酱',
      ingredients_en:'Firm tofu 600g, peanuts 80g, dried chilies 8, Sichuan pepper 2 tbsp, garlic ginger scallion, soy sauce 2 tbsp, dark soy 0.5 tbsp, sugar 1 tbsp, vinegar 1 tbsp, huadiao wine, cornstarch, sesame oil, salt, chicken bouillon, cucumber dice, red pepper dice, Pixian chili bean paste',
      steps_zh:'老豆腐切成2cm方丁，用厨房纸吸干水分，撒少许盐腌10分钟|花生米炸至金黄酥脆备用|锅中多放油烧至七成热（180度），下豆腐丁炸至四面金黄酥脆呈虎皮色捞出|锅中留底油，下郫县豆瓣酱小火炒出红油|加花椒和干辣椒段小火炒出浓郁麻辣味|加姜末蒜末葱花爆香|加入黄瓜丁和红椒丁翻炒几下|加入炸好的豆腐丁大火翻炒|调碗汁：生抽、老抽、糖、醋、花雕酒、淀粉、水、鸡精调匀|倒入碗汁大火快速翻炒，让每块豆腐都裹上酱汁|加炸好的花生米翻炒几下|淋香油，撒葱花，出锅装盘',
      steps_en:'Cut tofu into 2cm cubes, pat dry, sprinkle salt and rest 10 min|Deep-fry peanuts until golden crispy, set aside|Heat oil to 180°C, deep-fry tofu until golden crispy with tiger-skin pattern, drain|Leave oil, fry Pixian chili bean paste on low until red oil releases|Add Sichuan pepper and chilies on low until richly numbing-spicy|Add ginger, garlic and scallion|Add cucumber and red pepper dice, stir briefly|Return tofu, stir-fry on high|Mix sauce: soy sauces, sugar, vinegar, huadiao wine, cornstarch, water and chicken bouillon|Pour sauce, stir-fry on high until each cube is coated|Add fried peanuts, toss|Drizzle sesame oil, sprinkle scallions, plate'}
  ],

  // 38. 东坡肉 [Dongpo Pork]
  38: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'五花肉500g，葱2根，姜5片，生抽3勺，老抽2勺，冰糖30g，料酒3勺',
      ingredients_en:'Pork belly 500g, scallions 2, ginger 5 slices, soy sauce 3 tbsp, dark soy 2 tbsp, rock sugar 30g, wine 3 tbsp',
      steps_zh:'五花肉切方块，焯水5分钟捞出|砂锅底铺葱段和姜片|肉皮朝下放入砂锅，加料酒生抽老抽冰糖|加开水没过肉块，大火烧开转小火炖1小时|翻面肉皮朝上继续炖30分钟|转大火收汁即可',
      steps_en:'Cut pork belly into squares, blanch 5 min, drain|Line clay pot bottom with scallions and ginger|Place pork skin-side down, add wine, soy sauces and rock sugar|Add boiling water to cover, boil then simmer 1 hour|Flip skin-side up, simmer 30 more minutes|Reduce sauce on high heat and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'五花肉800g，葱3根，姜8片，八角2个，生抽4勺，老抽3勺，冰糖50g，料酒半碗',
      ingredients_en:'Pork belly 800g, scallions 3, ginger 8 slices, star anise 2, soy sauce 4 tbsp, dark soy 3 tbsp, rock sugar 50g, wine half bowl',
      steps_zh:'五花肉切成10cm见方块，用草绳扎紧防散|冷水下锅加姜片料酒焯水10分钟捞出|砂锅底铺葱段姜片|肉皮朝下放入砂锅，加料酒、生抽、老抽、冰糖、八角|加开水没过肉块2cm，大火烧开转小火炖2小时|翻面肉皮朝上，继续炖1小时至酥烂|取出装盘，汤汁大火收浓浇在肉上',
      steps_en:'Cut pork into 10cm squares, tie with string to prevent falling apart|Blanch in cold water with ginger and wine 10 min, drain|Line clay pot with scallions and ginger|Place pork skin-side down, add wine, soy sauces, rock sugar and star anise|Add boiling water 2cm above meat, boil then simmer 2 hours|Flip skin-side up, simmer 1 hour until tender|Remove to plate, reduce sauce on high and pour over pork'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'五花肉800g，葱3根，姜8片，八角2个，桂皮1小块，生抽4勺，老抽3勺，冰糖50g，料酒半碗，盐少许',
      ingredients_en:'Pork belly 800g, scallions 3, ginger 8 slices, star anise 2, cinnamon stick 1 small, soy sauce 4 tbsp, dark soy 3 tbsp, rock sugar 50g, wine half bowl, salt a little',
      steps_zh:'五花肉切成10cm见方块，用棉绳扎紧防散（字形捆扎更美观）|冷水下锅加姜片料酒焯水10分钟捞出冲洗干净|砂锅底铺葱段和姜片|肉皮朝下码入砂锅，加料酒、生抽、老抽、冰糖、八角、桂皮|加开水没过肉块2cm，大火烧开撇去浮沫，转小火炖2.5小时|翻面肉皮朝上，继续炖1小时至筷子能轻松插入|取出装盘，汤汁大火收浓至粘稠浇在肉上',
      steps_en:'Cut pork into 10cm squares, tie with cotton string (cross-tie for looks)|Blanch in cold water with ginger and wine 10 min, rinse|Line clay pot with scallions and ginger|Place pork skin-side down, add wine, soy sauces, rock sugar, star anise and cinnamon|Add boiling water 2cm above meat, boil, skim foam, simmer 2.5 hours|Flip skin-side up, simmer 1 hour until chopstick pierces easily|Remove to plate, reduce sauce on high until sticky, pour over pork'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'五花肉1000g，葱4根，姜10片，八角3个，桂皮1小块，香叶2片，生抽5勺，老抽4勺，冰糖80g，花雕酒半碗，盐少许，青菜',
      ingredients_en:'Pork belly 1000g, scallions 4, ginger 10 slices, star anise 3, cinnamon 1 small, bay leaves 2, soy sauce 5 tbsp, dark soy 4 tbsp, rock sugar 80g, huadiao wine half bowl, salt a little, greens',
      steps_zh:'五花肉切成12cm见方块，用棉绳扎紧|冷水下锅加姜片花雕酒焯水10分钟捞出冲洗|砂锅底铺葱段姜片|肉皮朝下码入砂锅，加花雕酒、生抽、老抽、冰糖、八角、桂皮、香叶|加开水没过肉块3cm，大火烧开转小火炖3小时|翻面肉皮朝上，继续炖1小时至肉酥皮糯|另起锅焯青菜围边|取出肉块装盘，汤汁大火收至浓稠红亮浇在肉上',
      steps_en:'Cut pork into 12cm squares, tie with cotton string|Blanch in cold water with ginger and huadiao wine 10 min, rinse|Line clay pot with scallions and ginger|Place pork skin-side down, add huadiao wine, soy sauces, rock sugar, star anise, cinnamon and bay leaves|Add boiling water 3cm above meat, boil then simmer 3 hours|Flip skin-side up, simmer 1 hour until skin is糯 and meat tender|Blanch greens for garnish|Remove pork to plate, reduce sauce on high until thick and glossy red, pour over pork'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'五花肉1200g，葱5根，姜12片，八角3个，桂皮1小块，香叶2片，草果1个，生抽5勺，老抽4勺，冰糖100g，花雕酒1碗，盐少许，青菜，枸杞',
      ingredients_en:'Pork belly 1200g, scallions 5, ginger 12 slices, star anise 3, cinnamon 1 small, bay leaves 2, black cardamom 1, soy sauce 5 tbsp, dark soy 4 tbsp, rock sugar 100g, huadiao wine 1 bowl, salt a little, greens, goji berries',
      steps_zh:'五花肉切成15cm见方块，用棉绳扎紧（保持形状完整）|冷水下锅加姜片花雕酒焯水15分钟捞出冲洗干净|砂锅底铺葱段和姜片|肉皮朝下码入砂锅，加花雕酒、生抽、老抽、冰糖、八角、桂皮、香叶、草果|加开水没过肉块3cm，大火烧开撇净浮沫，转最小火炖3.5小时|翻面肉皮朝上，继续炖1.5小时至肉酥皮糯入口即化|青菜焯水加盐油围边装饰，枸杞泡软点缀|取出肉块装盘，汤汁过滤后大火收至浓稠红亮，浇在肉上',
      steps_en:'Cut pork into 15cm squares, tie with cotton string for shape|Blanch in cold water with ginger and huadiao wine 15 min, rinse|Line clay pot with scallions and ginger|Place pork skin-side down, add huadiao wine, soy sauces, rock sugar, star anise, cinnamon, bay leaves and black cardamom|Add boiling water 3cm above meat, boil, skim thoroughly, simmer on lowest heat 3.5 hours|Flip skin-side up, simmer 1.5 hours until melt-in-mouth tender|Blanch greens with salt and oil for garnish, soak goji berries|Remove pork to plate, strain and reduce sauce on high until thick and glossy red, pour over pork'}
  ],

  // 39. 狮子头 [Lion Head Meatballs]
  39: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'猪肉馅400g，姜葱，盐，生抽，料酒，淀粉少许',
      ingredients_en:'Ground pork 400g, ginger scallion, salt, soy sauce, wine, cornstarch a little',
      steps_zh:'猪肉馅加姜末葱花、盐、生抽、料酒顺一个方向搅匀|加少许淀粉和水继续搅上劲|将肉馅团成大肉丸|锅中放油，放入肉丸煎至表面金黄|加开水没过肉丸一半，加生抽调味|盖盖小火炖20分钟即可',
      steps_en:'Mix pork with ginger, scallion, salt, soy sauce and wine in one direction|Add cornstarch and water, stir until sticky|Shape into large meatballs|Heat oil, fry meatballs until golden|Add boiling water halfway up meatballs, add soy sauce|Cover and simmer 20 minutes'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'五花肉400g，瘦肉200g，荸荠5个，鸡蛋1个，姜葱，盐，生抽，老抽，料酒，白胡椒粉，淀粉，青菜',
      ingredients_en:'Pork belly 400g, lean pork 200g, water chestnuts 5, egg 1, ginger scallion, salt, soy sauce, dark soy, wine, white pepper, cornstarch, greens',
      steps_zh:'五花肉和瘦肉一起剁成肉馅（手工剁口感更好）|加姜末葱花、盐、生抽、料酒、白胡椒粉、鸡蛋、淀粉顺一个方向搅上劲|荸荠去皮切碎加入肉馅中拌匀增加口感|将肉馅团成4个大肉丸|锅中多放油烧至六成热，下肉丸炸至表面金黄定型|锅中留底油，加葱姜爆香，加水和生抽老抽烧开|放入肉丸，盖盖小火炖40分钟至酥烂|青菜焯水围边，肉丸装盘，汤汁收浓浇上',
      steps_en:'Hand-chop pork belly and lean pork together (hand-chopped tastes better)|Mix with ginger, scallion, salt, soy sauce, wine, white pepper, egg and cornstarch in one direction|Peel and chop water chestnuts, mix into meat for texture|Shape into 4 large meatballs|Deep-fry at medium-high until golden and set|Leave oil, sauté scallion and ginger, add water, soy sauces, bring to boil|Add meatballs, cover and simmer 40 minutes until tender|Blanch greens for garnish, plate meatballs, reduce sauce and pour over'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'五花肉500g，瘦肉200g，荸荠6个，鸡蛋1个，姜葱，盐，生抽，老抽，料酒，白胡椒粉，糖，淀粉，青菜，高汤',
      ingredients_en:'Pork belly 500g, lean pork 200g, water chestnuts 6, egg 1, ginger scallion, salt, soy sauce, dark soy, wine, white pepper, sugar, cornstarch, greens, broth',
      steps_zh:'五花肉和瘦肉手工剁成粗肉馅（不要太细保留颗粒感）|加姜末葱花、盐、生抽、料酒、白胡椒粉、鸡蛋、糖、淀粉顺一个方向搅上劲|荸荠去皮切碎，加入肉馅拌匀（荸荠增加清甜爽脆口感）|将肉馅团成4个大肉丸，两手交替摔打使肉质紧实|锅中多放油烧至六成热，下肉丸中火炸至金黄定型|锅中留底油爆香葱姜，加高汤、生抽、老抽烧开|放入肉丸，盖盖小火炖50分钟至酥烂入味|青菜焯水围边，肉丸装盘，汤汁大火收浓浇上',
      steps_en:'Roughly hand-chop pork belly and lean pork (keep some texture)|Mix with ginger, scallion, salt, soy sauces, wine, white pepper, egg, sugar and cornstarch in one direction|Peel and chop water chestnuts, mix in (adds sweetness and crunch)|Shape into 4 large meatballs, toss between hands for firm texture|Deep-fry at medium-high until golden and set|Leave oil, sauté scallion and ginger, add broth and soy sauces, bring to boil|Add meatballs, cover and simmer 50 minutes until tender|Blanch greens for garnish, plate meatballs, reduce sauce on high and pour over'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'五花肉500g，瘦肉300g，荸荠8个，鸡蛋1个，姜葱，盐，生抽，老抽，花雕酒，白胡椒粉，糖，淀粉，高汤，香菇，白菜叶',
      ingredients_en:'Pork belly 500g, lean pork 300g, water chestnuts 8, egg 1, ginger scallion, salt, soy sauce, dark soy, huadiao wine, white pepper, sugar, cornstarch, broth, shiitake, cabbage leaves',
      steps_zh:'五花肉和瘦肉手工剁成粗馅（三肥七瘦比例最佳）|加姜末葱花、盐、生抽、花雕酒、白胡椒粉、糖、鸡蛋、淀粉顺一个方向搅上劲|荸荠去皮切碎，香菇泡发切碎加入肉馅中拌匀|将肉馅团成4个大肉丸，两手交替摔打20次使肉丸紧实光滑|锅中多放油烧至七成热，下肉丸炸至金黄酥脆定型|砂锅中铺上白菜叶，放入肉丸，加高汤、生抽、老抽、花雕酒|盖盖小火炖1小时至肉丸酥烂|青菜焯水围边，肉丸装盘，汤汁过滤收浓浇上',
      steps_en:'Roughly hand-chop pork belly and lean pork (30% fat 70% lean is best)|Mix with ginger, scallion, salt, soy sauce, huadiao wine, white pepper, sugar, egg and cornstarch in one direction|Peel and chop water chestnuts; soak and chop shiitake, mix in|Shape into 4 large meatballs, toss 20 times for smooth firm texture|Deep-fry at high heat until golden crispy and set|Line clay pot with cabbage leaves, add meatballs, broth, soy sauces, huadiao wine|Cover and simmer 1 hour until tender|Blanch greens for garnish, plate meatballs, strain and reduce sauce, pour over'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'五花肉600g，瘦肉300g，荸荠8个，鸡蛋1个，蟹黄2勺（或咸蛋黄2个），姜葱，盐，生抽，老抽，花雕酒，白胡椒粉，糖，淀粉，高汤，香菇，白菜叶，枸杞',
      ingredients_en:'Pork belly 600g, lean pork 300g, water chestnuts 8, egg 1, crab roe 2 tbsp (or salted egg yolks 2), ginger scallion, salt, soy sauce, dark soy, huadiao wine, white pepper, sugar, cornstarch, broth, shiitake, cabbage leaves, goji berries',
      steps_zh:'五花肉和瘦肉手工剁成粗馅（选用黑猪肉更香）|加姜末葱花、盐、生抽、花雕酒、白胡椒粉、糖、鸡蛋、淀粉顺一个方向搅上劲|荸荠去皮切碎，香菇泡发切碎，蟹黄或咸蛋黄碾碎加入肉馅中拌匀（蟹黄增鲜提味）|将肉馅团成4个大肉丸，两手交替摔打30次至肉丸紧实光滑有弹性|锅中多放油烧至七成热，下肉丸炸至金黄酥脆定型|砂锅底铺白菜叶，放入肉丸，加高汤、生抽、老抽、花雕酒（汤汁没过肉丸一半）|盖盖最小火慢炖1.5小时至肉丸酥烂|青菜焯水围边，肉丸装盘，汤汁过滤后大火收至浓稠浇上，撒枸杞点缀',
      steps_en:'Roughly hand-chop pork belly and lean pork (black pork is more aromatic)|Mix with ginger, scallion, salt, soy sauce, huadiao wine, white pepper, sugar, egg and cornstarch in one direction|Peel and chop water chestnuts; soak and chop shiitake; mash crab roe or salted egg yolks, mix in (crab roe adds umami)|Shape into 4 large meatballs, toss 30 times for smooth firm elastic texture|Deep-fry at high heat until golden crispy and set|Line clay pot with cabbage leaves, add meatballs, broth, soy sauces, huadiao wine (liquid halfway up)|Cover and simmer on lowest heat 1.5 hours until very tender|Blanch greens for garnish, plate meatballs, strain and reduce sauce on high, pour over, garnish with goji berries'}
  ],

  // 40. 红薯糖水 [Sweet Potato Soup]
  40: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'红薯500g，姜3片，冰糖50g',
      ingredients_en:'Sweet potato 500g, ginger 3 slices, rock sugar 50g',
      steps_zh:'红薯去皮切滚刀块|姜切片拍松|红薯和姜片放入锅中加足量水大火烧开|转小火煮20分钟至红薯软烂|加冰糖煮至融化即可',
      steps_en:'Peel sweet potato, cut into rolling chunks|Slice and lightly smash ginger|Put sweet potato and ginger in pot with water, bring to boil|Simmer 20 minutes until sweet potato is soft|Add rock sugar, cook until melted'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'红薯300g，紫薯200g，红枣10颗，姜5片，冰糖80g',
      ingredients_en:'Sweet potato 300g, purple sweet potato 200g, red dates 10, ginger 5 slices, rock sugar 80g',
      steps_zh:'红薯和紫薯去皮切滚刀块（混合颜色更好看）|姜切片拍松，红枣洗净|锅中加水烧开，放入姜片和红枣煮5分钟|加入红薯紫薯块大火烧开转小火煮20分钟|加冰糖煮至融化|煮至汤汁微甜浓稠，红薯软糯即可关火',
      steps_en:'Peel and cut sweet potato and purple sweet potato into chunks (mixed colors look better)|Slice ginger, wash red dates|Boil water, add ginger and dates, cook 5 minutes|Add sweet potatoes, boil then simmer 20 minutes|Add rock sugar, stir until melted|Cook until soup is sweet and slightly thick, sweet potatoes soft, turn off heat'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'红薯300g，紫薯200g，红枣10颗，姜5片，冰糖80g，枸杞少许，红糖',
      ingredients_en:'Sweet potato 300g, purple sweet potato 200g, red dates 10, ginger 5 slices, rock sugar 80g, goji berries a little, brown sugar',
      steps_zh:'红薯和紫薯去皮切滚刀块（大小均匀）|姜切片拍松，红枣洗净去核|锅中加水烧开，放入姜片和红枣煮5分钟出味|加入红薯紫薯块大火烧开转小火煮20分钟至筷子能插入|加冰糖和少许红糖煮至融化（红糖增色增香）|放入枸杞煮3分钟|煮至汤汁微甜浓稠即可关火',
      steps_en:'Peel and cut sweet potatoes into even chunks|Slice ginger, wash and pit red dates|Boil water, add ginger and dates, cook 5 minutes for flavor|Add sweet potatoes, boil then simmer 20 minutes until fork-tender|Add rock sugar and a little brown sugar (brown sugar adds color and aroma)|Add goji berries, cook 3 minutes|Cook until soup is sweet and slightly thick, turn off heat'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'红薯300g，紫薯200g，红枣12颗，姜5片，冰糖80g，枸杞少许，红糖，桂圆干10颗，糯米小圆子100g',
      ingredients_en:'Sweet potato 300g, purple sweet potato 200g, red dates 12, ginger 5 slices, rock sugar 80g, goji berries a little, brown sugar, dried longan 10, glutinous rice balls 100g',
      steps_zh:'红薯和紫薯去皮切滚刀块（大小均匀）|姜切片拍松，红枣去核，桂圆干泡软|锅中加水烧开，放入姜片、红枣、桂圆干煮5分钟出味|加入红薯紫薯块大火烧开转小火煮20分钟|另起一锅煮糯米小圆子至浮起捞出过凉水|红薯汤中加冰糖和红糖煮至融化|放入小圆子和枸杞煮3分钟|煮至汤汁浓稠红薯软糯即可关火',
      steps_en:'Peel and cut sweet potatoes into even chunks|Slice ginger, pit dates, soak dried longan|Boil water, add ginger, dates and longan, cook 5 minutes|Add sweet potatoes, boil then simmer 20 minutes|In another pot, cook rice balls until floating, drain and rinse cold water|Add rock sugar and brown sugar to sweet potato soup, stir until melted|Add rice balls and goji berries, cook 3 minutes|Cook until soup thickens and sweet potatoes are soft, turn off heat'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'红薯300g，紫薯200g，芋头150g，红枣12颗，姜5片，冰糖100g，枸杞少许，红糖，桂圆干10颗，糯米小圆子150g，椰浆少许',
      ingredients_en:'Sweet potato 300g, purple sweet potato 200g, taro 150g, red dates 12, ginger 5 slices, rock sugar 100g, goji berries a little, brown sugar, dried longan 10, glutinous rice balls 150g, coconut cream a little',
      steps_zh:'红薯紫薯芋头去皮切均匀滚刀块（三种根茎混合更加丰富）|姜切片拍松，红枣去核，桂圆干泡软|锅中加水烧开，放入姜片、红枣、桂圆干煮5分钟出味|加入红薯紫薯芋头块大火烧开转小火煮25分钟至全部软糯|另起一锅煮糯米小圆子至浮起捞出过凉水|红薯汤中加冰糖和少许红糖煮至融化|加入小圆子和枸杞煮3分钟|关火后加少许椰浆搅匀（椰浆增添南洋风味）|盛碗即可',
      steps_en:'Peel and cut sweet potatoes, purple sweet potato and taro into even chunks (3 root varieties for richness)|Slice ginger, pit dates, soak longan|Boil water, add ginger, dates and longan, cook 5 minutes|Add all root chunks, boil then simmer 25 minutes until all soft|In another pot, cook rice balls until floating, drain and rinse|Add rock sugar and brown sugar to soup, stir until melted|Add rice balls and goji berries, cook 3 minutes|Turn off heat, stir in a little coconut cream (adds Southeast Asian aroma)|Serve in bowls'}
  ]
};

db.serialize(() => {
  console.log('删除菜谱31-40旧数据...');
  db.run('DELETE FROM levels WHERE recipe_id >= 31 AND recipe_id <= 40');

  const insert = db.prepare(`INSERT INTO levels 
    (recipe_id, level, ingredients_zh, ingredients_en, steps_zh, steps_en, note_zh, note_en) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);

  let total = 0;
  for (let rid = 31; rid <= 40; rid++) {
    const levels = data[rid];
    if (!levels) continue;
    for (const l of levels) {
      insert.run(rid, l.level, l.ingredients_zh, l.ingredients_en, l.steps_zh, l.steps_en, l.note_zh, l.note_en);
      total++;
    }
  }
  insert.finalize();

  db.all('SELECT recipe_id, COUNT(*) as cnt FROM levels WHERE recipe_id>=31 AND recipe_id<=40 GROUP BY recipe_id ORDER BY recipe_id', (e, r) => {
    if (e) console.error(e);
    else {
      console.log(`\n========== 导入完成！共 ${total} 条记录 ==========`);
      r.forEach(row => console.log(`菜谱${String(row.recipe_id).padStart(2)}: ${row.cnt}个Level ✅`));
      db.all("SELECT recipe_id, level FROM levels WHERE recipe_id>=31 AND recipe_id<=40 AND (ingredients_en IS NULL OR ingredients_en='')", (e2, r2) => {
        if (r2.length === 0) console.log('\n✅ 所有英文数据均非空！');
        else r2.forEach(row => console.log(`⚠️ 菜谱${row.recipe_id} Level ${row.level} 英文数据为空`));
        db.close();
      });
    }
  });
});