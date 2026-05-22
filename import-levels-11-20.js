const dbPath = require('path').join(__dirname, 'recipes-new.db');
const db = new (require('sqlite3').Database)(dbPath);

const data = {
  // 11. 回锅肉 [Twice Cooked Pork]
  11: [
    {
      level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'五花肉300g，蒜苗3根，青椒1个，红椒1个，姜3片，豆瓣酱2勺，料酒，生抽，糖',
      ingredients_en:'Pork belly 300g, garlic sprouts 3, green pepper 1, red pepper 1, ginger 3 slices, chili bean paste 2 tbsp, wine, soy sauce, sugar',
      steps_zh:'五花肉整块放入冷水锅中，加姜片料酒煮20分钟至熟|捞出放凉后切成薄片|蒜苗切斜段，青红椒切片|锅中放少许油，放入肉片煎至两面微卷出油|加豆瓣酱炒出红油|加蒜苗和青红椒翻炒均匀|加少许生抽和糖调味，翻炒均匀即可',
      steps_en:'Place whole pork belly in cold water with ginger and wine, cook 20 minutes until done|Remove and let cool, slice thinly|Cut garlic sprouts diagonally, slice peppers|Heat a little oil, fry pork slices until curled and oil releases|Add chili bean paste, stir until red oil releases|Add garlic sprouts and peppers, stir-fry evenly|Add a little soy sauce and sugar, stir well and serve'
    },
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'五花肉400g，蒜苗4根，青椒1个，红椒1个，姜4片，蒜3瓣，豆瓣酱2勺，豆豉1勺，料酒，花椒，生抽，糖',
      ingredients_en:'Pork belly 400g, garlic sprouts 4, green pepper 1, red pepper 1, ginger 4 slices, garlic 3 cloves, chili bean paste 2 tbsp, fermented black beans 1 tbsp, wine, Sichuan pepper, soy sauce, sugar',
      steps_zh:'五花肉整块冷水下锅，加姜片、料酒、花椒煮25分钟至能用筷子插入|捞出过凉水，切成3mm厚薄片|蒜苗切斜段，青红椒切块，姜蒜切片|锅中不放油，直接下肉片中火煎至出油微卷|把肉拨到一边，下豆瓣酱炒出红油|加豆豉和姜蒜片炒香|加蒜苗和青红椒大火翻炒|加少许生抽和糖调味，翻炒均匀即可出锅',
      steps_en:'Place pork belly in cold water with ginger, wine and Sichuan pepper, cook 25 minutes until fork-tender|Rinse with cold water, slice 3mm thick|Cut garlic sprouts diagonally, chunk peppers, slice ginger and garlic|Dry-fry pork slices on medium heat until curled and oil releases|Push meat aside, fry chili bean paste until red oil releases|Add black beans, ginger and garlic, stir until fragrant|Add garlic sprouts and peppers, stir-fry on high|Add a little soy sauce and sugar, stir well and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'五花肉500g，蒜苗5根，青椒1个，红椒1个，洋葱半个，姜5片，蒜4瓣，豆瓣酱2勺，豆豉1勺，甜面酱1勺，料酒，花椒，生抽，白糖',
      ingredients_en:'Pork belly 500g, garlic sprouts 5, green pepper 1, red pepper 1, onion half, ginger 5 slices, garlic 4 cloves, chili bean paste 2 tbsp, black beans 1 tbsp, sweet bean sauce 1 tbsp, wine, Sichuan pepper, soy sauce, sugar',
      steps_zh:'五花肉整块冷水下锅，加姜片、料酒、花椒煮30分钟至筷子能轻松插入|捞出过凉水，切成2mm厚的薄片|蒜苗切斜段，青红椒切块，洋葱切块，姜蒜切片|锅中不放油，下肉片中火煎至出油卷曲呈灯盏窝状|把肉推到一边，下豆瓣酱小火炒出红油|加豆豉和甜面酱炒香，再加姜蒜片爆香|加洋葱翻炒至半透明，加蒜苗和青红椒大火翻炒|加少许生抽和白糖调味，大火翻炒均匀即可出锅',
      steps_en:'Place pork belly in cold water with ginger, wine and Sichuan pepper, cook 30 minutes until fork slides in easily|Rinse with cold water, slice 2mm thin|Cut garlic sprouts diagonally, chunk peppers and onion, slice ginger and garlic|Dry-fry pork on medium heat until curled like bowls|Push aside, fry chili bean paste on low until red oil releases|Add black beans and sweet bean sauce, then ginger and garlic|Add onion until translucent, add garlic sprouts and peppers on high|Add soy sauce and sugar, stir well on high and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'五花肉600g，蒜苗5根，青椒1个，红椒1个，洋葱半个，姜5片，蒜4瓣，豆瓣酱2.5勺，豆豉1.5勺，甜面酱1勺，料酒，花椒，生抽，白糖，盐，白胡椒粉',
      ingredients_en:'Pork belly 600g, garlic sprouts 5, green pepper 1, red pepper 1, onion half, ginger 5 slices, garlic 4 cloves, chili bean paste 2.5 tbsp, black beans 1.5 tbsp, sweet bean sauce 1 tbsp, wine, Sichuan pepper, soy sauce, sugar, salt, white pepper',
      steps_zh:'五花肉整块冷水下锅，加姜片、料酒、花椒、少许盐煮35分钟至全熟|捞出过凉水，切成2mm厚薄片|蒜苗切斜段，青红椒切菱形块，洋葱切块，姜蒜切片|锅中不放油，下肉片中火煎至出油卷曲呈灯盏窝状，肉片微焦更香|肉片拨到一边，下豆瓣酱小火慢炒出红油|加豆豉碎和甜面酱炒香，下姜蒜片爆香|加洋葱炒至微黄透明，加青红椒和蒜苗杆大火翻炒|最后加蒜苗叶大火翻炒，加生抽、少许白糖、白胡椒粉调味|大火翻炒均匀，立即出锅装盘',
      steps_en:'Place pork belly in cold water with ginger, wine, Sichuan pepper and salt, cook 35 minutes until fully done|Rinse cold water, slice 2mm|Cut garlic sprouts diagonally, diamond-cut peppers, chunk onion, slice ginger and garlic|Dry-fry pork on medium until curled and slightly crispy|Push aside, fry chili bean paste on low until red oil releases|Add crushed black beans and sweet bean sauce, then ginger and garlic|Add onion until golden, add peppers and garlic sprout stems on high|Add garlic sprout leaves, season with soy sauce, sugar and white pepper|Stir-fry on high and serve immediately'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'猪后腿二刀肉600g，蒜苗5根，青椒1个，红椒1个，洋葱半个，姜6片，蒜5瓣，郫县豆瓣酱3勺，永川豆豉1.5勺，甜面酱1勺，料酒，花椒，生抽，白糖，盐，白胡椒粉，鸡精少许',
      ingredients_en:'Pork hind leg meat 600g, garlic sprouts 5, green pepper 1, red pepper 1, onion half, ginger 6 slices, garlic 5 cloves, Pixian chili bean paste 3 tbsp, Yongchuan black beans 1.5 tbsp, sweet bean sauce 1 tbsp, wine, Sichuan pepper, soy sauce, sugar, salt, white pepper, chicken bouillon a little',
      steps_zh:'选猪后腿二刀肉整块冷水下锅加姜片、料酒、花椒、少许盐煮40分钟至筷子能轻松扎透无血水|捞出放凉后冰箱冷冻20分钟稍硬更好切，切成1.5mm薄片|蒜苗切斜段，青红椒切菱形片，洋葱切薄片，姜蒜切片|豆瓣酱剁细备用，豆豉稍微剁碎|锅中不放油，下肉片中火煎至出油卷曲呈灯盏窝状，煎至微焦出香|肉片拨到一边，下剁细的豆瓣酱小火慢炒出红油|加豆豉碎和甜面酱炒出酱香味，下姜蒜片爆香|加洋葱炒至微黄，加青红椒和蒜苗杆大火翻炒至断生|加蒜苗叶快速翻炒，加生抽、白糖、白胡椒粉、少许鸡精调味|大火翻炒均匀，锅气十足时立即出锅装盘',
      steps_en:'Choose pork hind leg meat, place in cold water with ginger, wine, Sichuan pepper and salt, cook 40 minutes until fork pierces easily with no blood|Cool then freeze 20 minutes for easier slicing, cut 1.5mm thin|Cut garlic sprouts diagonally, diamond-cut peppers, thinly slice onion, slice ginger and garlic|Finely chop chili bean paste, slightly crush black beans|Dry-fry pork on medium until curled and fragrant, slightly crispy|Push aside, fry chopped chili bean paste on low until red oil releases|Add crushed black beans and sweet bean sauce, then ginger and garlic|Add onion until golden, add peppers and garlic sprout stems on high until cooked|Add garlic sprout leaves, season with soy sauce, sugar, white pepper and chicken bouillon|Stir-fry on high with wok hei and serve immediately'}
  ],

  // 12. 鱼香肉丝 [Fish-Fragrant Pork]
  12: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'猪里脊肉300g，木耳50g，胡萝卜1根，青椒1个，葱姜蒜，豆瓣酱2勺，生抽2勺，糖2勺，醋2勺，淀粉，料酒',
      ingredients_en:'Pork tenderloin 300g, wood ear mushrooms 50g, carrot 1, green pepper 1, scallion ginger garlic, chili bean paste 2 tbsp, soy sauce 2 tbsp, sugar 2 tbsp, vinegar 2 tbsp, cornstarch, wine',
      steps_zh:'猪里脊肉切丝，加料酒生抽淀粉抓匀腌10分钟|木耳泡发切丝，胡萝卜切丝，青椒切丝|调鱼香汁：生抽、糖、醋、淀粉、水调匀|锅中放油，下肉丝滑炒变色盛出|锅中爆香蒜末姜末葱花，加豆瓣酱炒出红油|加胡萝卜丝木耳丝翻炒|倒回肉丝翻炒均匀|倒入鱼香汁快速翻炒，汤汁收浓即可出锅',
      steps_en:'Shred pork tenderloin, mix with wine, soy sauce and cornstarch, marinate 10 minutes|Soak wood ear mushrooms, shred along with carrot and green pepper|Mix sauce: soy sauce, sugar, vinegar, cornstarch and water|Heat oil, stir-fry pork until color changes, set aside|Sauté garlic, ginger and scallion, add chili bean paste until red oil|Add carrot and wood ear shreds, stir-fry|Return pork, stir evenly|Pour in sauce, stir-fry quickly until thickened and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'猪里脊肉350g，木耳50g，胡萝卜1根，青椒1个，笋50g，葱姜蒜，豆瓣酱2勺，泡椒2个，生抽2勺，糖2勺，醋2勺，老抽少许，料酒，淀粉',
      ingredients_en:'Pork tenderloin 350g, wood ear 50g, carrot 1, green pepper 1, bamboo shoot 50g, scallion ginger garlic, chili bean paste 2 tbsp, pickled chilies 2, soy sauce 2 tbsp, sugar 2 tbsp, vinegar 2 tbsp, dark soy a little, wine, cornstarch',
      steps_zh:'猪里脊肉切丝，加盐料酒白胡椒粉淀粉抓匀腌15分钟|木耳泡发切丝，胡萝卜切丝，青椒切丝，笋切丝|调鱼香汁：生抽、糖、醋、料酒、淀粉、水、少许老抽调匀|锅中多放油，下肉丝滑炒变色盛出|锅中留底油，下蒜末姜末葱花爆香，加豆瓣酱炒出红油|加胡萝卜丝木耳丝笋丝大火翻炒断生|倒回肉丝，加青椒丝翻炒|沿锅边倒入鱼香汁快速翻炒，汤汁收浓裹匀即可出锅',
      steps_en:'Shred pork, mix with salt, wine, white pepper and cornstarch, marinate 15 minutes|Soak wood ear, shred along with carrot, bamboo shoot and green pepper|Mix sauce: soy sauce, sugar, vinegar, wine, cornstarch, water and dark soy|Heat oil, stir-fry pork until pale, set aside|Leave base oil, sauté garlic, ginger and scallion, add chili bean paste until red oil|Add carrot, wood ear and bamboo shoot, stir-fry on high until cooked|Return pork, add green pepper shreds|Pour sauce along pan edge, stir-fry quickly until thickened and coated'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'猪里脊肉400g，木耳50g，胡萝卜1根，青椒1个，笋50g，葱姜蒜，郫县豆瓣酱2勺，泡椒3个，生抽2勺，糖3勺，醋3勺，老抽半勺，料酒，盐，白胡椒粉，淀粉，香油',
      ingredients_en:'Pork tenderloin 400g, wood ear 50g, carrot 1, green pepper 1, bamboo shoot 50g, scallion ginger garlic, Pixian chili bean paste 2 tbsp, pickled chilies 3, soy sauce 2 tbsp, sugar 3 tbsp, vinegar 3 tbsp, dark soy half tbsp, wine, salt, white pepper, cornstarch, sesame oil',
      steps_zh:'猪里脊肉切细丝，加盐、料酒、白胡椒粉、淀粉抓匀腌15分钟，加少许油拌匀防粘|木耳泡发切细丝，胡萝卜和笋切细丝，青椒切丝，泡椒剁碎，葱姜蒜切末|调鱼香汁：生抽、糖、醋、老抽、料酒、淀粉、水、香油调匀|锅中多放油烧至四成热，下肉丝滑炒变白盛出|锅中留底油，下泡椒碎和豆瓣酱小火炒出红油|加姜末蒜末葱花大火爆香|加胡萝卜丝笋丝木耳丝大火翻炒至断生|倒回肉丝和青椒丝大火翻炒|沿锅边倒入鱼香汁快速翻炒至汤汁浓稠裹匀所有食材|出锅装盘',
      steps_en:'Finely shred pork, mix with salt, wine, white pepper and cornstarch, marinate 15 minutes, add oil to prevent sticking|Finely shred soaked wood ear, carrot, bamboo shoot and green pepper, chop pickled chilies, mince aromatics|Mix sauce: soy sauce, sugar, vinegar, dark soy, wine, cornstarch, water and sesame oil|Heat oil to medium-low, slide pork in until white, set aside|Leave base oil, fry pickled chilies and chili bean paste on low until red oil|Add garlic, ginger and scallion on high until fragrant|Add carrot, bamboo shoot and wood ear on high until cooked|Return pork and green pepper shreds on high|Pour sauce along pan edge, stir-fry quickly until thick and coats everything|Plate and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'猪里脊肉450g，木耳50g，胡萝卜1根，青椒1个，笋50g，香菇3朵，葱姜蒜，郫县豆瓣酱2勺，泡椒4个，生抽2勺，糖3勺，醋3勺，老抽半勺，料酒，盐，白胡椒粉，蛋清半个，淀粉，香油，高汤少许',
      ingredients_en:'Pork loin 450g, wood ear 50g, carrot 1, green pepper 1, bamboo shoot 50g, shiitake 3, scallion ginger garlic, Pixian chili bean paste 2 tbsp, pickled chilies 4, soy sauce 2 tbsp, sugar 3 tbsp, vinegar 3 tbsp, dark soy half tbsp, wine, salt, white pepper, half egg white, cornstarch, sesame oil, broth a little',
      steps_zh:'猪里脊肉切细丝，加盐、料酒、白胡椒粉、蛋清、淀粉抓匀腌20分钟，加少许油拌匀|木耳、香菇泡发切细丝，胡萝卜和笋切细丝，青椒切细丝，泡椒剁成蓉，葱姜蒜切末|调鱼香汁：生抽、糖、醋、老抽、料酒、淀粉、高汤、香油调匀|锅中多放油烧至四成热，下肉丝滑熟变白捞出控油|锅中留底油，下泡椒蓉和郫县豆瓣酱小火慢炒至红油透亮|加姜末蒜末葱花大火爆香|加胡萝卜丝笋丝香菇丝木耳丝大火翻炒至香气四溢|加青椒丝快速翻炒|倒回肉丝，沿锅边倒入鱼香汁大火快速翻炒至所有食材均匀裹上酱汁|酱汁浓稠透亮时立即出锅装盘',
      steps_en:'Finely shred pork, mix with salt, wine, white pepper, egg white and cornstarch, marinate 20 minutes, add oil|Finely shred soaked wood ear, shiitake, carrot, bamboo shoot and green pepper, mash pickled chilies, mince aromatics|Mix sauce: soy sauce, sugar, vinegar, dark soy, wine, cornstarch, broth and sesame oil|Heat oil to medium-low, slide pork in until white, drain|Leave base oil, fry pickled chili mash and chili bean paste on low until red oil shines|Add garlic, ginger and scallion on high until fragrant|Add carrot, bamboo shoot, shiitake and wood ear on high until aromatic|Add green pepper shreds, stir quickly|Return pork, pour sauce along pan edge, stir-fry on high until evenly coated|Serve immediately when sauce is thick and glossy'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'猪通脊肉500g，木耳50g，胡萝卜1根，青椒1个，笋100g，香菇3朵，葱白2段，姜1块，蒜5瓣，郫县豆瓣酱2.5勺，泡椒5个，生抽2勺，糖3.5勺，醋3.5勺，老抽半勺，花雕酒，盐，白胡椒粉，蛋清半个，淀粉，香油，高汤，鸡精少许',
      ingredients_en:'Pork loin 500g, wood ear 50g, carrot 1, green pepper 1, bamboo shoot 100g, shiitake 3, scallion whites 2, ginger 1, garlic 5 cloves, Pixian chili bean paste 2.5 tbsp, pickled chilies 5, soy sauce 2 tbsp, sugar 3.5 tbsp, vinegar 3.5 tbsp, dark soy half tbsp, huadiao wine, salt, white pepper, half egg white, cornstarch, sesame oil, broth, chicken bouillon a little',
      steps_zh:'猪通脊肉顺丝切细如火柴棍的丝，加盐、白胡椒粉、花雕酒、蛋清、淀粉抓匀腌20分钟，加油拌匀防止粘连|木耳香菇泡发切细丝，胡萝卜和笋切细丝，青椒切细丝，泡椒剁成细蓉，葱白姜蒜切末|调鱼香汁：生抽、糖、醋、老抽、花雕酒、淀粉、高汤、香油、鸡精调匀，比例精准|锅中多放油烧至四成热，肉丝下锅用筷子迅速划散至变白盛出|锅中留底油，下泡椒蓉小火炒至油红发亮|加郫县豆瓣酱继续小火炒出红油|下姜末蒜末葱花大火爆香|加胡萝卜丝笋丝香菇丝木耳丝大火翻炒至熟|加青椒丝快速翻炒|倒回肉丝，沿锅边淋入鱼香汁大火快速翻炒10秒|酱汁浓稠透亮、均匀裹住每根肉丝时立即出锅装盘',
      steps_en:'Cut pork loin into matchstick-thin shreds along grain, mix with salt, white pepper, huadiao wine, egg white and cornstarch, marinate 20 minutes, add oil to prevent sticking|Finely shred soaked wood ear, shiitake, carrot, bamboo shoot and green pepper, mash pickled chilies, mince aromatics|Perfect sauce: soy sauce, sugar, vinegar, dark soy, huadiao wine, cornstarch, broth, sesame oil and chicken bouillon in precise ratio|Heat oil to medium-low, slide pork in and quickly separate with chopsticks until white, set aside|Leave base oil, fry pickled chili mash on low until oil turns red and shiny|Add Pixian chili bean paste, continue frying on low until red oil|Add garlic, ginger and scallion on high until fragrant|Add carrot, bamboo shoot, shiitake and wood ear on high until cooked|Add green pepper shreds, stir quickly|Return pork, drizzle sauce along pan edge, stir-fry on high for 10 seconds|Serve immediately when sauce is thick, glossy and evenly coats every shred'}
  ],

  // 13. 豆豉排骨 [Black Bean Sauce Ribs]
  13: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'排骨500g，豆豉2勺，大蒜3瓣，生抽2勺，料酒1勺，糖1勺，葱1根',
      ingredients_en:'Ribs 500g, fermented black beans 2 tbsp, garlic 3 cloves, soy sauce 2 tbsp, wine 1 tbsp, sugar 1 tbsp, scallion 1',
      steps_zh:'排骨洗净斩小段，用清水浸泡30分钟去血水|豆豉稍微剁碎，大蒜切末|排骨沥干水分，加豆豉、蒜末、生抽、料酒、糖拌匀腌20分钟|将排骨放入盘中铺平|蒸锅水开后放入排骨，大火蒸20分钟|取出撒葱花即可',
      steps_en:'Wash ribs and chop into small segments, soak in water 30 minutes to remove blood|Slightly chop black beans, mince garlic|Drain ribs, mix with black beans, garlic, soy sauce, wine and sugar, marinate 20 minutes|Spread ribs flat on a plate|Bring steamer water to a boil, steam ribs on high for 20 minutes|Remove and sprinkle scallions'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'排骨500g，豆豉3勺，大蒜5瓣，姜1小块，红椒半个，生抽2勺，老抽半勺，料酒2勺，糖1勺，白胡椒粉，淀粉，葱',
      ingredients_en:'Ribs 500g, black beans 3 tbsp, garlic 5 cloves, ginger 1 small piece, red pepper half, soy sauce 2 tbsp, dark soy half tbsp, wine 2 tbsp, sugar 1 tbsp, white pepper, cornstarch, scallion',
      steps_zh:'排骨斩小段，清水浸泡30分钟后沥干|豆豉剁碎，大蒜切末，姜切末，红椒切小丁|排骨加豆豉、蒜末、姜末、生抽、老抽、料酒、糖、白胡椒粉、淀粉抓匀腌30分钟|加少许油拌匀锁住水分|将排骨铺在盘中，不要重叠|蒸锅水开后放入排骨，大火蒸25-30分钟|取出撒红椒丁和葱花即可',
      steps_en:'Chop ribs, soak 30 minutes and drain|Chop black beans, mince garlic and ginger, dice red pepper|Mix ribs with black beans, garlic, ginger, soy sauce, dark soy, wine, sugar, white pepper and cornstarch, marinate 30 minutes|Add a little oil to seal moisture|Spread ribs flat in a dish without overlapping|Steam on high for 25-30 minutes after water boils|Remove, sprinkle red pepper and scallions'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'排骨600g，豆豉3勺，大蒜6瓣，姜1小块，红椒半个，青椒半个，生抽2勺，老抽半勺，蚝油1勺，料酒2勺，糖1勺，白胡椒粉，淀粉，香油，葱',
      ingredients_en:'Ribs 600g, black beans 3 tbsp, garlic 6 cloves, ginger 1 small piece, red pepper half, green pepper half, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce 1 tbsp, wine 2 tbsp, sugar 1 tbsp, white pepper, cornstarch, sesame oil, scallion',
      steps_zh:'排骨斩小段，清水浸泡30分钟去血水，捞出沥干|豆豉剁碎，大蒜姜切末，红椒青椒切小丁|排骨加豆豉碎、蒜末、姜末、生抽、老抽、蚝油、料酒、糖、白胡椒粉、淀粉抓匀腌30分钟|加少许香油和油拌匀锁住水分，使肉质更嫩|将排骨平铺在深盘中，不要重叠|蒸锅水开后放入排骨，大火蒸30分钟至排骨酥烂脱骨|取出撒红椒丁、青椒丁和葱花即可',
      steps_en:'Chop ribs, soak 30 minutes to remove blood, drain|Chop black beans, mince garlic and ginger, dice peppers|Mix ribs with black beans, garlic, ginger, soy sauces, oyster sauce, wine, sugar, white pepper and cornstarch, marinate 30 minutes|Add sesame oil and oil to seal moisture for tender meat|Spread ribs flat in a deep dish without overlapping|Steam on high for 30 minutes until tender and falling off bone|Remove, sprinkle diced peppers and scallions'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'肋排700g，阳江豆豉3勺，大蒜8瓣，姜1小块，红椒半个，青椒半个，洋葱少许，生抽2勺，老抽半勺，蚝油1勺，柱侯酱半勺，花雕酒2勺，糖1.5勺，白胡椒粉，淀粉，香油，葱',
      ingredients_en:'Pork ribs 700g, Yangjiang black beans 3 tbsp, garlic 8 cloves, ginger 1 small piece, red pepper half, green pepper half, onion a little, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce 1 tbsp, Chu Hou paste half tbsp, huadiao wine 2 tbsp, sugar 1.5 tbsp, white pepper, cornstarch, sesame oil, scallion',
      steps_zh:'肋排斩小段，清水浸泡1小时去血水，捞出充分沥干|阳江豆豉稍微剁碎，大蒜姜切末，红椒青椒洋葱切小丁|排骨加豆豉碎、蒜末、姜末、生抽、老抽、蚝油、柱侯酱、花雕酒、糖、白胡椒粉、淀粉抓匀腌制40分钟|加香油和油拌匀锁住汁水|平铺在盘中，撒上洋葱丁|蒸锅水开后放入排骨，大火蒸35-40分钟至骨肉分离|取出撒红椒丁、青椒丁和葱花，浇一勺滚热油激香',
      steps_en:'Chop ribs into small segments, soak 1 hour to remove blood, drain thoroughly|Slightly chop Yangjiang black beans, mince garlic and ginger, dice peppers and onion|Mix ribs with black beans, garlic, ginger, soy sauces, oyster sauce, Chu Hou paste, huadiao wine, sugar, white pepper and cornstarch, marinate 40 minutes|Add sesame oil and oil to seal juices|Spread flat on plate, sprinkle onion|Steam on high for 35-40 minutes until meat separates from bone|Remove, sprinkle peppers and scallions, pour a spoonful of hot oil to sizzle'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'猪肋排800g，阳江豆豉4勺，大蒜10瓣，姜1块，红椒半个，青椒半个，洋葱少许，豆豉酱2勺，生抽2勺，老抽半勺，蚝油1.5勺，柱侯酱1勺，花雕酒3勺，糖2勺，白胡椒粉，五香粉少许，淀粉，香油，葱',
      ingredients_en:'Pork ribs 800g, Yangjiang black beans 4 tbsp, garlic 10 cloves, ginger 1 piece, red pepper half, green pepper half, onion a little, black bean sauce 2 tbsp, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce 1.5 tbsp, Chu Hou paste 1 tbsp, huadiao wine 3 tbsp, sugar 2 tbsp, white pepper, five spice powder a little, cornstarch, sesame oil, scallion',
      steps_zh:'猪肋排斩小段，清水浸泡1小时后换水再泡30分钟彻底去血水|排骨冷水下锅加姜片花雕酒焯水3分钟捞出，用温水洗净沥干|制作豆豉酱：豆豉剁碎，大蒜切末，锅中放油小火炒香蒜末和豆豉，加少许生抽蚝油糖炒制成酱备用|排骨加自制豆豉酱、柱侯酱、生抽、老抽、蚝油、花雕酒、糖、白胡椒粉、五香粉、淀粉抓匀腌1小时|加香油和油拌匀，平铺盘中撒洋葱丁和姜丝|蒸锅水烧开后放入排骨，大火蒸40-45分钟至排骨酥烂入味|取出撒红椒丁、青椒丁和葱花|锅中烧热油浇在排骨上激发香气，趁热上桌',
      steps_en:'Chop ribs, soak 1 hour then change water and soak 30 more minutes to fully remove blood|Blanch ribs in cold water with ginger and huadiao wine for 3 minutes, rinse with warm water and drain|Make black bean sauce: chop black beans, mince garlic, fry garlic and beans in oil on low, add soy sauce, oyster sauce and sugar|Mix ribs with homemade black bean sauce, Chu Hou paste, soy sauces, oyster sauce, huadiao wine, sugar, white pepper, five spice and cornstarch, marinate 1 hour|Add sesame oil and oil, spread flat, sprinkle onion and ginger shreds|Steam on high for 40-45 minutes until tender and flavorful|Remove, sprinkle peppers and scallions|Heat oil and pour over ribs to release aroma, serve hot'}
  ],

  // 14. 清蒸鱼 [Steamed Fish]
  14: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鲜鱼1条（约500g），姜1块，葱2根，料酒2勺，蒸鱼豉油3勺，油3勺',
      ingredients_en:'Fresh fish 1 (about 500g), ginger 1 piece, scallions 2, wine 2 tbsp, steamed fish soy sauce 3 tbsp, oil 3 tbsp',
      steps_zh:'鲜鱼处理干净，两面各划几刀|鱼身抹上少许盐和料酒，放上姜片和葱段|蒸锅水开后放入鱼，大火蒸8-10分钟|倒掉盘中的蒸鱼水，去掉姜葱|葱切丝铺在鱼身上|锅中烧热油，浇在葱丝上激出香味|淋上蒸鱼豉油即可',
      steps_en:'Clean fish, score a few times on both sides|Rub fish with salt and wine, place ginger slices and scallion segments on top|Steam on high for 8-10 minutes after water boils|Discard fish water from plate, remove ginger and scallion|Shred scallions and place on fish|Heat oil in pan, pour over scallions to release aroma|Drizzle steamed fish soy sauce around and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鲜鱼1条（约600g），姜1块，葱3根，红椒半个，料酒2勺，蒸鱼豉油3勺，油3勺，盐少许',
      ingredients_en:'Fresh fish 1 (about 600g), ginger 1 piece, scallions 3, red pepper half, wine 2 tbsp, steamed fish soy sauce 3 tbsp, oil 3 tbsp, salt a little',
      steps_zh:'鲜鱼处理干净，两面各划三刀便于入味|鱼身抹盐和料酒，塞入姜片葱段，腌制10分钟|蒸锅水烧开，放入鱼大火蒸8-10分钟|蒸好后倒掉盘中腥水，去掉姜葱|重新铺上新鲜的葱丝和红椒丝|锅中烧热油至冒烟，浇在葱丝上|沿盘边淋入蒸鱼豉油，趁热食用',
      steps_en:'Clean fish, score 3 times on each side for flavor|Rub with salt and wine, stuff ginger and scallion inside, marinate 10 minutes|Steam on high for 8-10 minutes after water boils|Discard fish water and used aromatics|Top with fresh scallion and red pepper shreds|Heat oil until smoking, pour over shreds|Drizzle steamed fish soy sauce around plate edge, serve hot'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'鲜鱼1条（约600g），姜1块，葱3根，红椒半个，香菜少许，料酒2勺，蒸鱼豉油3勺，生抽1勺，油3勺，盐，白胡椒粉',
      ingredients_en:'Fresh fish 1 (about 600g), ginger 1, scallions 3, red pepper half, cilantro a little, wine 2 tbsp, steamed fish soy sauce 3 tbsp, soy sauce 1 tbsp, oil 3 tbsp, salt, white pepper',
      steps_zh:'鲜鱼处理干净，在鱼身两面各划三刀，刀口深至骨|鱼身抹盐、白胡椒粉和料酒，刀口塞入姜片，鱼腹塞入葱段，腌15分钟|蒸锅水烧开，鱼盘底部垫几根葱段使鱼身架空，有利于蒸汽流通|放入鱼大火蒸8-10分钟（中途不开盖）|蒸好后倒掉盘中腥水（去腥关键），去掉姜葱|鱼身上铺新鲜的葱丝、红椒丝和香菜|锅中烧热油至微微冒烟，均匀浇在葱丝上|沿盘边淋入蒸鱼豉油和少许生抽|趁热立即上桌食用',
      steps_en:'Clean fish, score 3 deep cuts to the bone on each side|Rub with salt, white pepper and wine, stuff ginger in cuts and scallion in belly, marinate 15 minutes|Place scallion segments under fish on plate for steam circulation|Steam on high for 8-10 minutes (don\'t open lid midway)|Discard fish water (key to removing fishiness) and used aromatics|Top with fresh scallion shreds, red pepper and cilantro|Heat oil until lightly smoking, pour evenly over shreds|Drizzle steamed fish soy sauce and a little soy sauce around|Serve immediately while hot'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'鲜鱼1条（约750g），姜1大块，葱5根，红椒半个，香菜，料酒3勺，蒸鱼豉油4勺，生抽1勺，白糖少许，花生油4勺，盐，白胡椒粉',
      ingredients_en:'Fresh fish 1 (about 750g), ginger 1 large piece, scallions 5, red pepper half, cilantro, wine 3 tbsp, steamed fish soy sauce 4 tbsp, soy sauce 1 tbsp, sugar a little, peanut oil 4 tbsp, salt, white pepper',
      steps_zh:'鲜鱼处理干净，沿脊骨两侧各划一刀，再在背部肉厚处横划两刀|鱼身抹盐、白胡椒粉和料酒，刀口塞姜片，鱼腹塞葱段，腌20分钟|蒸鱼碟底部铺葱段姜片将鱼架空，使蒸汽流通均匀受热|蒸锅水大火烧开，放入鱼大火蒸8-10分钟（每500g蒸8分钟）|蒸好后立即倒掉腥水，去掉所有姜葱|鱼身上铺满新鲜的葱丝、红椒丝，撒少许香菜|另起锅烧热花生油至冒烟，均匀浇在葱丝上激出香味|鱼盘边缘淋入蒸鱼豉油和生抽，加少许白糖提鲜|立即上桌趁热食用，鱼肉鲜嫩味美',
      steps_en:'Clean fish, score along both sides of backbone, then 2 cross cuts on thick back meat|Rub with salt, white pepper and wine, stuff ginger in cuts and scallion in belly, marinate 20 minutes|Line plate with scallion and ginger to elevate fish for even steaming|Steam on high for 8-10 minutes (8 minutes per 500g)|Discard fish water immediately, remove all aromatics|Cover fish with fresh scallion shreds, red pepper and cilantro|Heat peanut oil until smoking in a separate pan, pour over shreds|Drizzle steamed fish soy sauce and soy sauce around plate edge, add a little sugar|Serve immediately while hot, fish is tender and flavorful'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'鲜活鲈鱼或石斑鱼1条（约800g），老姜1大块，京葱2根，小葱3根，红椒半个，香菜，花雕酒3勺，蒸鱼豉油4勺，生抽1勺，白糖少许，花生油5勺，猪油1勺，盐，白胡椒粉',
      ingredients_en:'Fresh sea bass or grouper 1 (about 800g), old ginger 1 large piece, Beijing scallions 2, small scallions 3, red pepper half, cilantro, huadiao wine 3 tbsp, steamed fish soy sauce 4 tbsp, soy sauce 1 tbsp, sugar a little, peanut oil 5 tbsp, lard 1 tbsp, salt, white pepper',
      steps_zh:'鲜活鱼宰杀处理干净，在鱼身两面每隔2cm划一刀，刀口深至骨，背部肉厚处各划一刀|鱼身抹盐、白胡椒粉和花雕酒，刀口塞入姜片，鱼腹塞葱段姜片，腌制20分钟|鱼盘底部铺葱段姜片将鱼架空，鱼身上抹少许猪油增香|蒸锅水大火烧开（蒸汽要足），放入鱼大火蒸8-10分钟（中途绝对不开盖）|蒸好后立即倒掉盘中腥水（此步决定鲜味），去掉所有姜葱|鱼身上均匀铺上新鲜的京葱丝、小葱丝和红椒丝|花生油烧至七成热，加少许猪油融化，均匀浇在葱丝上|沿盘边淋入蒸鱼豉油和生抽，加少许白糖提鲜|鱼头朝左、鱼腹朝前摆放，趁热上桌，鱼肉鲜嫩洁白',
      steps_en:'Clean live fish, score every 2cm on both sides to the bone, extra cuts on thick back|Rub with salt, white pepper and huadiao wine, stuff ginger in cuts and scallion in belly, marinate 20 minutes|Line plate with scallion and ginger to elevate fish, brush fish with a little lard for aroma|Steam on high with full steam for 8-10 minutes (absolutely no lid opening midway)|Discard fish water immediately (crucial for flavor), remove all aromatics|Cover fish evenly with fresh Beijing scallion shreds, small scallion shreds and red pepper|Heat peanut oil to medium-high, melt in a little lard, pour evenly over shreds|Drizzle steamed fish soy sauce and soy sauce around edge, add a little sugar|Arrange fish head left and belly forward, serve hot - fish is tender, white and delicious'}
  ],

  // 15. 油焖大虾 [Braised Shrimp]
  15: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'大虾400g，姜4片，蒜3瓣，葱2根，料酒2勺，生抽2勺，糖1勺',
      ingredients_en:'Large shrimp 400g, ginger 4 slices, garlic 3 cloves, scallions 2, wine 2 tbsp, soy sauce 2 tbsp, sugar 1 tbsp',
      steps_zh:'大虾剪去须脚，开背去虾线，洗净沥干|锅中放油烧热，放入大虾煎至两面变红|加姜片蒜片炒香|加料酒、生抽、糖和少许水|盖盖焖2分钟至入味|开盖收汁，撒葱花出锅',
      steps_en:'Trim shrimp, butterfly and devein, wash and drain|Heat oil, fry shrimp until red on both sides|Add ginger and garlic slices, stir until fragrant|Add wine, soy sauce, sugar and a little water|Cover and braise 2 minutes until flavored|Uncover, reduce sauce, sprinkle scallions and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'大虾500g，姜1块，蒜5瓣，葱3根，料酒2勺，生抽2勺，老抽半勺，糖1勺，番茄酱1勺，香油',
      ingredients_en:'Large shrimp 500g, ginger 1 piece, garlic 5 cloves, scallions 3, wine 2 tbsp, soy sauce 2 tbsp, dark soy half tbsp, sugar 1 tbsp, ketchup 1 tbsp, sesame oil',
      steps_zh:'大虾剪去须脚开背去虾线，用料酒腌10分钟|锅中多放油烧热，放入大虾煎至两面金黄|加姜末蒜末葱花爆香|加料酒、生抽、老抽、糖、番茄酱和少许水|盖盖中火焖3分钟让虾入味|开盖大火收汁至浓稠|淋少许香油，撒葱花装盘',
      steps_en:'Trim and butterfly shrimp, devein, marinate with wine 10 minutes|Heat more oil, fry shrimp until golden on both sides|Add minced ginger, garlic and scallion, sauté until fragrant|Add wine, soy sauces, sugar, ketchup and a little water|Cover and simmer on medium 3 minutes|Uncover, reduce sauce on high until thick|Drizzle sesame oil, sprinkle scallions and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'大虾600g，姜1块，蒜6瓣，葱3根，料酒2勺，生抽2勺，老抽半勺，蚝油1勺，糖1.5勺，番茄酱1.5勺，白胡椒粉，香油',
      ingredients_en:'Large shrimp 600g, ginger 1, garlic 6 cloves, scallions 3, wine 2 tbsp, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce 1 tbsp, sugar 1.5 tbsp, ketchup 1.5 tbsp, white pepper, sesame oil',
      steps_zh:'大虾剪去须脚、开背去虾线，加料酒和白胡椒粉腌15分钟|锅中多放油烧至六成热，下大虾煎至两面金黄酥脆盛出|锅中留底油，下姜末蒜末爆香|加番茄酱小火炒出红油，加生抽、老抽、蚝油、糖调匀|加少许水煮开，放入大虾翻炒均匀|盖盖中火焖3分钟让虾充分入味|开盖大火收汁，不断翻动使酱汁裹满虾身|淋香油，撒葱花装盘',
      steps_en:'Trim and butterfly shrimp, marinate with wine and white pepper 15 minutes|Heat oil to medium-high, fry shrimp until golden crispy, set aside|Leave base oil, sauté minced ginger and garlic|Add ketchup on low until red oil, add soy sauces, oyster sauce and sugar|Add water and bring to boil, return shrimp and stir evenly|Cover and simmer on medium 3 minutes|Uncover, reduce sauce on high, turning to coat shrimp|Drizzle sesame oil, sprinkle scallions and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'大虾700g，姜1块，蒜8瓣，葱3根，料酒3勺，生抽2勺，老抽半勺，蚝油1勺，柱侯酱半勺，糖2勺，番茄酱2勺，白胡椒粉，香醋少许，香油，高汤少许',
      ingredients_en:'Large shrimp 700g, ginger 1, garlic 8 cloves, scallions 3, wine 3 tbsp, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce 1 tbsp, Chu Hou paste half tbsp, sugar 2 tbsp, ketchup 2 tbsp, white pepper, vinegar a little, sesame oil, broth a little',
      steps_zh:'大虾剪去须脚和虾枪，开背去虾线，用料酒、白胡椒粉、少许盐腌20分钟|锅中多放油烧至六成热，下大虾中火煎至两面金黄酥脆，虾壳焦香，盛出备用|锅中留底油，下姜末蒜末葱花爆香|加番茄酱和柱侯酱小火炒出红油|加生抽、老抽、蚝油、糖、香醋和高汤调匀煮开|放入大虾翻炒均匀，盖盖中小火焖4分钟焖透入味|开盖后大火收汁，不停翻动使酱汁浓稠裹满每只虾|淋香油，撒葱花装盘',
      steps_en:'Trim shrimp, butterfly and devein, marinate with wine, white pepper and salt 20 minutes|Heat oil to medium-high, fry shrimp until golden crispy with fragrant shells, set aside|Leave base oil, sauté minced ginger, garlic and scallion|Add ketchup and Chu Hou paste on low until red oil|Add soy sauces, oyster sauce, sugar, vinegar and broth, bring to boil|Return shrimp, stir well, cover and simmer on medium-low 4 minutes|Uncover, reduce sauce on high, stirring to coat each shrimp|Drizzle sesame oil, sprinkle scallions and serve'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'大虾800g，姜1大块，蒜10瓣，葱3根，花雕酒3勺，生抽2勺，老抽半勺，蚝油1.5勺，柱侯酱1勺，糖2.5勺，番茄酱2勺，白胡椒粉，香醋几滴，香油，高汤，猪油1勺',
      ingredients_en:'Large shrimp 800g, ginger 1 large piece, garlic 10 cloves, scallions 3, huadiao wine 3 tbsp, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce 1.5 tbsp, Chu Hou paste 1 tbsp, sugar 2.5 tbsp, ketchup 2 tbsp, white pepper, vinegar a few drops, sesame oil, broth, lard 1 tbsp',
      steps_zh:'大虾精选个头均匀的，剪去须脚虾枪，开背去虾线，用花雕酒、白胡椒粉、少许盐腌20分钟|锅中放植物油和猪油混合烧热，下大虾中火煎至两面金黄，虾壳酥脆出香，盛出|锅中留底油，下姜末蒜末爆香|加番茄酱和柱侯酱小火慢炒至红油透亮|加花雕酒、生抽、老抽、蚝油、糖、香醋和高汤调匀煮开，小火煮2分钟让酱汁融合|放入煎好的大虾，大火翻炒均匀，盖盖中小火焖4分钟|开盖大火收汁，不停翻动使浓稠的酱汁均匀裹在每只虾上|淋香油，撒葱花，快速翻匀出锅装盘',
      steps_en:'Select evenly sized shrimp, trim and butterfly, marinate with huadiao wine, white pepper and salt 20 minutes|Heat vegetable oil and lard together (lard adds aroma), fry shrimp until golden with crispy shells, set aside|Leave base oil, sauté minced garlic and ginger|Add ketchup and Chu Hou paste on low until red oil shines|Add huadiao wine, soy sauces, oyster sauce, sugar, vinegar and broth, bring to boil, simmer 2 minutes to blend|Return shrimp, stir on high, cover and simmer on medium-low 4 minutes|Uncover, reduce sauce on high, stirring to coat each shrimp evenly|Drizzle sesame oil, sprinkle scallions, toss quickly and serve'}
  ],

  // 16. 水煮鱼 [Sichuan Spicy Fish]
  16: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'草鱼1条，豆瓣酱3勺，干辣椒10个，花椒2勺，姜蒜，料酒，盐，淀粉',
      ingredients_en:'Grass carp 1, chili bean paste 3 tbsp, dried chilies 10, Sichuan pepper 2 tbsp, ginger garlic, wine, salt, cornstarch',
      steps_zh:'草鱼处理干净，片下鱼肉切成薄片|鱼片加料酒盐淀粉抓匀腌15分钟|锅中放油，下豆瓣酱炒出红油|加姜蒜末和花椒炒香|加适量水烧开煮5分钟出味|放入鱼片煮至变色|连汤带鱼倒入大碗中|撒上干辣椒段和花椒，浇上热油即可',
      steps_en:'Clean grass carp, fillet and slice thinly|Marinate fish slices with wine, salt and cornstarch 15 minutes|Heat oil, fry chili bean paste until red oil|Add ginger, garlic and Sichuan pepper, stir until fragrant|Add water, bring to boil and cook 5 minutes|Add fish slices, cook until color changes|Pour everything into a large bowl|Top with dried chilies and Sichuan pepper, pour hot oil over'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'草鱼1条，豆瓣酱4勺，干辣椒15个，花椒3勺，姜蒜，蛋清1个，料酒，盐，白胡椒粉，淀粉，糖',
      ingredients_en:'Grass carp 1, chili bean paste 4 tbsp, dried chilies 15, Sichuan pepper 3 tbsp, ginger garlic, egg white 1, wine, salt, white pepper, cornstarch, sugar',
      steps_zh:'草鱼处理干净，片下鱼肉切成薄片，鱼骨切段|鱼片加料酒盐白胡椒粉淀粉蛋清抓匀腌20分钟|锅中放油，下鱼骨煎至两面金黄盛出|锅中放油，下豆瓣酱、姜蒜末、花椒小火炒出红油|加适量水烧开，放入鱼骨煮10分钟出味|捞出鱼骨放大碗底|汤中加盐糖调味，逐片放入鱼片煮至变白|连汤带鱼倒入碗中|撒大量干辣椒段花椒和蒜末，浇上滚烫热油',
      steps_en:'Clean fish, fillet and slice, cut bones into segments|Marinate fish with wine, salt, white pepper, cornstarch and egg white 20 minutes|Fry fish bones until golden, set aside|Fry chili bean paste, ginger, garlic and Sichuan pepper on low until red oil|Add water, bring to boil, add fish bones and cook 10 minutes|Remove bones to bowl bottom|Season broth with salt and sugar, add fish slices one by one until white|Pour into bowl|Top with lots of chilies, Sichuan pepper and garlic, pour sizzling hot oil over'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'草鱼1条，黄豆芽200g，芹菜2根，郫县豆瓣酱3勺，干辣椒20个，花椒4勺，姜蒜，蛋清1个，料酒，盐，白胡椒粉，淀粉，糖，鸡精',
      ingredients_en:'Grass carp 1, bean sprouts 200g, celery 2 stalks, Pixian chili bean paste 3 tbsp, dried chilies 20, Sichuan pepper 4 tbsp, ginger garlic, egg white 1, wine, salt, white pepper, cornstarch, sugar, chicken bouillon',
      steps_zh:'草鱼处理干净，片下鱼片厚薄均匀约3mm，鱼骨切段|鱼片加料酒、盐、白胡椒粉、蛋清、淀粉抓匀腌20分钟，加油拌匀防粘|黄豆芽洗净，芹菜切段，焯水后铺在大碗底部|锅中放油，下郫县豆瓣酱、姜末蒜末小火炒出红油|加适量水烧开，放入鱼骨煮10分钟出味，捞出鱼骨铺在豆芽上|汤中加盐、糖、鸡精调味，逐片下入鱼片煮至变白|连汤带鱼倒入碗中|撒上干辣椒段、花椒和蒜末，浇上烧至冒烟的热油激香',
      steps_en:'Clean fish, slice evenly about 3mm thick, cut bones|Marinate fish with wine, salt, white pepper, egg white and cornstarch 20 minutes, add oil to prevent sticking|Wash bean sprouts, cut celery, blanch and spread on bowl bottom|Fry chili bean paste, ginger and garlic on low until red oil|Add water, bring to boil, add bones and cook 10 minutes, remove bones to sprouts|Season broth with salt, sugar and chicken bouillon, add fish slices one by one until white|Pour into bowl|Top with dried chilies, Sichuan pepper and garlic, pour smoking hot oil over'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'草鱼或黑鱼1条，黄豆芽250g，芹菜3根，蒜苗3根，郫县豆瓣酱3勺，干辣椒30个，花椒5勺，姜蒜，蛋清1个，料酒，盐，白胡椒粉，淀粉，糖，鸡精，刀口辣椒',
      ingredients_en:'Grass or snakehead fish 1, bean sprouts 250g, celery 3, garlic sprouts 3, Pixian chili bean paste 3 tbsp, dried chilies 30, Sichuan pepper 5 tbsp, ginger garlic, egg white 1, wine, salt, white pepper, cornstarch, sugar, chicken bouillon, chopped chili',
      steps_zh:'鱼选黑鱼口感更佳，处理干净片成薄片，鱼骨斩段|鱼片加料酒、盐、白胡椒粉、蛋清、淀粉抓匀腌20分钟，加少许油拌匀|制作刀口辣椒：干辣椒和花椒用小火焙香，用刀铡成粗碎备用|黄豆芽、芹菜段、蒜苗段焯水铺在大碗底|锅中多放油，下豆瓣酱、姜末蒜末小火慢炒至红油透亮|加适量高汤烧开，放入鱼骨煮10分钟，捞出鱼骨铺在蔬菜上|汤中加盐、糖、鸡精、白胡椒粉调味，逐片下鱼片煮至变白|连汤带鱼倒入碗中|撒上自制刀口辣椒碎和大量蒜末|锅中烧热油至七成热，浇在辣椒上激发出浓郁香气',
      steps_en:'Choose snakehead fish for better texture, fillet and slice, chop bones|Marinate fish with wine, salt, white pepper, egg white and cornstarch 20 minutes, add oil|Make chopped chili: dry-roast chilies and Sichuan pepper on low, chop into coarse pieces|Blanch bean sprouts, celery and garlic sprouts, spread on bowl bottom|Fry chili bean paste, ginger and garlic on low until red oil shines|Add broth, bring to boil, add bones and cook 10 minutes, remove bones to vegetables|Season broth with salt, sugar, chicken bouillon and white pepper, add fish slices one by one until white|Pour into bowl|Top with homemade chopped chili and lots of garlic|Heat oil to medium-high, pour over chili to release rich aroma'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'黑鱼1条（约1500g），黄豆芽300g，芹菜3根，蒜苗3根，郫县豆瓣酱4勺，干辣椒40个，花椒6勺，姜蒜，蛋清1个，料酒，盐，白胡椒粉，红薯淀粉，糖，鸡精，刀口辣椒，青花椒油',
      ingredients_en:'Snakehead fish 1 (about 1500g), bean sprouts 300g, celery 3, garlic sprouts 3, Pixian chili bean paste 4 tbsp, dried chilies 40, Sichuan pepper 6 tbsp, ginger garlic, egg white 1, wine, salt, white pepper, sweet potato starch, sugar, chicken bouillon, chopped chili, green Sichuan pepper oil',
      steps_zh:'黑鱼宰杀处理干净，沿脊骨片下两片鱼肉，鱼头鱼骨斩块|鱼肉斜刀片成大蝴蝶片|鱼片加料酒、盐、白胡椒粉、蛋清、红薯淀粉抓匀腌30分钟，加少许油拌匀|制作刀口辣椒：干辣椒和红花椒用小火焙至酥脆出香，用刀铡成粗碎|蔬菜焯水铺入大碗底|锅中多放菜籽油，下鱼头鱼骨煎至金黄，加姜片爆香|锅中放油，下郫县豆瓣酱、姜末蒜末小火慢炒至红油透亮，加少许刀口辣椒碎炒香|加高汤大火烧开转中火煮10分钟出味，捞出鱼骨铺在蔬菜上|汤中加盐、糖、鸡精、白胡椒粉调味，转小火|鱼片逐片下锅，煮至变白卷曲立即捞出铺入碗中，倒入适量汤汁|鱼片上撒大量自制刀口辣椒碎、蒜末和葱花|另起锅烧热菜籽油至七成热，加少许青花椒油，浇在辣椒碎上|滋滋声响，香气四溢，撒香菜点缀即可上桌',
      steps_en:'Clean snakehead fish, fillet along backbone, chop head and bones|Slice fillets diagonally into large butterfly slices|Marinate fish with wine, salt, white pepper, egg white and sweet potato starch 30 minutes, add oil|Make chopped chili: dry-roast chilies and Sichuan pepper until crispy, chop coarse|Blanch vegetables, spread on bowl bottom|Fry fish head and bones in rapeseed oil until golden, add ginger|Fry chili bean paste, ginger and garlic on low until red oil shines, add some chopped chili|Add broth, bring to boil then simmer 10 minutes, remove bones to vegetables|Season broth with salt, sugar, chicken bouillon and white pepper, reduce to low|Add fish slices one by one, cook until white and curled, place in bowl, pour in some broth|Top fish with lots of chopped chili, garlic and scallions|Heat rapeseed oil in separate pan to medium-high, add green Sichuan pepper oil, pour over chili|Sizzling sound fills the air, garnish with cilantro and serve'}
  ],

  // 17. 干锅鸡 [Dry Pot Chicken]
  17: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'鸡腿肉400g，土豆1个，青红椒各1个，洋葱半个，姜蒜，豆瓣酱2勺，生抽，料酒，糖',
      ingredients_en:'Chicken thighs 400g, potato 1, green and red peppers 1 each, onion half, ginger garlic, chili bean paste 2 tbsp, soy sauce, wine, sugar',
      steps_zh:'鸡肉斩小块，加料酒生抽腌15分钟|土豆切条，青红椒切块，洋葱切块|锅中放油，下鸡块煎至两面金黄盛出|锅中放油，下豆瓣酱和姜蒜炒香|加土豆条翻炒，加少许水焖至断生|倒回鸡块，加青红椒和洋葱翻炒|加生抽糖调味，大火收汁即可',
      steps_en:'Chop chicken into small pieces, marinate with wine and soy sauce 15 minutes|Cut potato into strips, chunk peppers and onion|Fry chicken until golden on both sides, set aside|Fry chili bean paste with ginger and garlic until fragrant|Add potato strips, add water and cook until tender|Return chicken, add peppers and onion, stir-fry|Season with soy sauce and sugar, reduce sauce on high and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'鸡腿肉500g，土豆1个，藕1节，芹菜2根，青红椒各1个，洋葱半个，干辣椒5个，花椒1勺，豆瓣酱2勺，姜蒜，生抽，老抽，料酒，糖，孜然粉，熟芝麻',
      ingredients_en:'Chicken thighs 500g, potato 1, lotus root 1 section, celery 2 stalks, peppers 1 each, onion half, dried chilies 5, Sichuan pepper 1 tbsp, chili bean paste 2 tbsp, ginger garlic, soy sauce, dark soy, wine, sugar, cumin powder, toasted sesame',
      steps_zh:'鸡腿肉斩小块，加料酒生抽老抽淀粉抓匀腌20分钟|土豆切条，藕切片，芹菜切段，青红椒切块，洋葱切块|锅中多放油，下鸡块炸至金黄捞出|土豆条和藕片也炸至微黄捞出|锅中留底油，下豆瓣酱、姜蒜、干辣椒、花椒小火炒香|加洋葱和芹菜翻炒|倒回鸡块、土豆、藕片大火翻炒|加生抽、糖、孜然粉调味|最后加青红椒翻炒均匀，撒熟芝麻出锅',
      steps_en:'Chop chicken, mix with wine, soy sauces and cornstarch, marinate 20 minutes|Cut potato strips, slice lotus root, cut celery, chunk peppers and onion|Deep-fry chicken until golden, remove|Deep-fry potato and lotus root until light golden, remove|Leave base oil, fry chili bean paste, ginger, garlic, chilies and Sichuan pepper on low|Add onion and celery, stir-fry|Return chicken, potato and lotus root, stir-fry on high|Season with soy sauce, sugar and cumin powder|Add peppers, stir well, sprinkle sesame and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'鸡腿肉600g，土豆1个，藕1节，芹菜3根，青红椒各1个，洋葱半个，干辣椒8个，花椒1.5勺，郫县豆瓣酱2勺，姜蒜，生抽，老抽，蚝油，料酒，糖，孜然粉，辣椒粉，熟芝麻，香菜',
      ingredients_en:'Chicken thighs 600g, potato 1, lotus root 1, celery 3, peppers 1 each, onion half, dried chilies 8, Sichuan pepper 1.5 tbsp, Pixian chili bean paste 2 tbsp, ginger garlic, soy sauce, dark soy, oyster sauce, wine, sugar, cumin, chili powder, sesame, cilantro',
      steps_zh:'鸡腿肉斩小块，加料酒、生抽、老抽、蚝油、淀粉抓匀腌30分钟|土豆切条，藕切片，芹菜切段，青红椒切块，洋葱切块|锅中多放油烧至六成热，下鸡块炸至金黄酥脆捞出|土豆条和藕片炸至微黄捞出|锅中留底油，下郫县豆瓣酱、姜末蒜末小火炒出红油|加干辣椒段和花椒炒出麻辣味|加洋葱和芹菜大火翻炒|倒回鸡块、土豆、藕片大火翻炒|加生抽、蚝油、糖、孜然粉、辣椒粉调味|最后加青红椒大火翻炒均匀，撒熟芝麻和香菜段出锅',
      steps_en:'Chop chicken, mix with wine, soy sauces, oyster sauce and cornstarch, marinate 30 minutes|Cut potato strips, slice lotus root, cut celery and peppers, chunk onion|Deep-fry chicken at medium-high until golden crispy, remove|Deep-fry potato and lotus root until light golden, remove|Leave base oil, fry chili bean paste with ginger and garlic on low until red oil|Add dried chilies and Sichuan pepper until numbing-spicy|Add onion and celery on high, stir-fry|Return chicken, potato and lotus root on high|Season with soy sauce, oyster sauce, sugar, cumin and chili powder|Add peppers, stir on high, sprinkle sesame and cilantro, serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'鸡腿肉700g，土豆1个，藕1节，芹菜3根，青红椒各1个，洋葱半个，干辣椒10个，花椒2勺，郫县豆瓣酱2勺，姜蒜，生抽，老抽，蚝油，料酒，糖，孜然粉，辣椒粉，花椒粉，熟芝麻，香菜，啤酒少许',
      ingredients_en:'Chicken thighs 700g, potato 1, lotus root 1, celery 3, peppers 1 each, onion half, dried chilies 10, Sichuan pepper 2 tbsp, Pixian chili bean paste 2 tbsp, ginger garlic, soy sauce, dark soy, oyster sauce, wine, sugar, cumin, chili powder, Sichuan pepper powder, sesame, cilantro, beer a little',
      steps_zh:'鸡腿去骨切小块，加料酒、生抽、老抽、蚝油、糖、淀粉抓匀腌30分钟|土豆切条，藕切薄片，芹菜切段，青红椒切块，洋葱切块|锅中多放油烧至六成热，下鸡块炸至金黄焦香捞出|土豆条和藕片炸至金黄酥脆捞出|锅中留底油，下郫县豆瓣酱、姜末蒜末小火炒出红油|加干辣椒段、花椒小火炒至麻辣飘香|加洋葱和芹菜大火翻炒出香味|倒回鸡块、土豆、藕片，沿锅边淋少许啤酒增香|大火翻炒，加生抽、蚝油、糖、孜然粉、辣椒粉、花椒粉调味|最后加青红椒大火翻炒均匀|撒熟芝麻和香菜段，出锅装盘',
      steps_en:'Debone chicken, chop small, mix with wine, soy sauces, oyster sauce, sugar and cornstarch, marinate 30 minutes|Cut potato strips, thinly slice lotus root, cut celery and peppers, chunk onion|Deep-fry chicken at medium-high until golden crispy, remove|Deep-fry potato and lotus root until golden crispy, remove|Leave base oil, fry chili bean paste with ginger and garlic on low until red oil|Add dried chilies and Sichuan pepper on low until fragrant|Add onion and celery on high|Return all fried items, drizzle beer along pan edge for aroma|Season with soy sauce, oyster sauce, sugar, cumin, chili and Sichuan pepper powder|Add peppers on high, stir well|Sprinkle sesame and cilantro, serve'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'鸡腿肉800g，土豆1个，藕1节，芹菜4根，青红椒各1个，洋葱半个，干辣椒15个，花椒2.5勺，郫县豆瓣酱2.5勺，姜蒜，生抽，老抽，蚝油，料酒，糖，孜然粉，辣椒粉，花椒粉，十三香少许，熟芝麻，香菜，啤酒，香油',
      ingredients_en:'Chicken thighs 800g, potato 1, lotus root 1, celery 4, peppers 1 each, onion half, dried chilies 15, Sichuan pepper 2.5 tbsp, Pixian chili bean paste 2.5 tbsp, ginger garlic, soy sauce, dark soy, oyster sauce, wine, sugar, cumin, chili powder, Sichuan pepper powder, thirteen spices a little, sesame, cilantro, beer, sesame oil',
      steps_zh:'鸡腿去骨，肉切2cm小块，加料酒、生抽、老抽、蚝油、糖、十三香、淀粉抓匀腌40分钟|土豆切粗条，藕切薄片，芹菜切段，青红椒切菱形块，洋葱切块，姜切片，蒜拍扁|锅中多放油烧至六成热，鸡块炸至金黄酥脆捞出控油|土豆条炸至金黄焦脆，藕片炸至酥脆捞出|锅中留底油，下姜片蒜瓣小火炸香|下郫县豆瓣酱小火慢炒至红油透亮|加干辣椒段和花椒小火炒至麻辣味浓郁|加洋葱和芹菜大火翻炒出香|倒回所有炸好的食材大火快速翻炒|沿锅边淋入少许啤酒产生锅气，加生抽、蚝油、糖、孜然粉、辣椒粉、花椒粉翻炒均匀|最后加青红椒大火翻炒至断生|淋香油，撒熟芝麻和香菜段，快速翻炒几下出锅装盘',
      steps_en:'Debone chicken, cut into 2cm cubes, mix with wine, soy sauces, oyster sauce, sugar, thirteen spices and cornstarch, marinate 40 minutes|Cut thick potato strips, thinly slice lotus root, cut celery, diamond-cut peppers, chunk onion, slice ginger, smash garlic|Deep-fry chicken at medium-high until golden crispy, drain|Deep-fry potato until golden crispy, lotus root until crispy, remove|Leave base oil, fry ginger slices and garlic cloves on low|Fry chili bean paste on low until red oil shines|Add chilies and Sichuan pepper on low until richly numbing-spicy|Add onion and celery on high|Return all fried items, stir-fry on high|Drizzle beer along pan edge for wok hei, season with soy sauce, oyster sauce, sugar, cumin, chili and Sichuan pepper powders|Add peppers on high until just cooked|Drizzle sesame oil, sprinkle sesame and cilantro, toss a few times and serve'}
  ],

  // 18. 扬州炒饭 [Yangzhou Fried Rice]
  18: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'隔夜米饭400g，鸡蛋2个，火腿50g，葱2根，盐少许',
      ingredients_en:'Overnight rice 400g, eggs 2, ham 50g, scallions 2, salt a little',
      steps_zh:'隔夜米饭用勺子打散|火腿切丁，鸡蛋打散，葱切葱花|锅中放油烧热，倒入蛋液炒散|加入米饭大火翻炒均匀|加火腿丁翻炒|加盐调味，撒葱花翻炒均匀出锅',
      steps_en:'Break up overnight rice with a spoon|Dice ham, beat eggs, chop scallions|Heat oil, scramble eggs|Add rice and stir-fry on high|Add ham, stir-fry|Season with salt, sprinkle scallions, stir well and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'隔夜米饭500g，鸡蛋3个，虾仁50g，火腿50g，青豆30g，胡萝卜30g，葱2根，盐，白胡椒粉',
      ingredients_en:'Overnight rice 500g, eggs 3, shrimp 50g, ham 50g, green peas 30g, carrot 30g, scallions 2, salt, white pepper',
      steps_zh:'隔夜米饭提前捏散|鸡蛋打散加少许盐，火腿切丁，虾仁切丁，青豆洗净，胡萝卜切丁|锅中放油，先炒鸡蛋至凝固盛出|锅中放油，爆香葱花，加虾仁炒变色|加火腿丁胡萝卜丁青豆翻炒|加入米饭大火翻炒至粒粒分明|倒回鸡蛋翻炒，加盐和白胡椒粉调味|撒葱花翻炒均匀即可出锅',
      steps_en:'Break up overnight rice|Beat eggs with salt, dice ham and shrimp, wash peas, dice carrot|Scramble eggs until set, set aside|Sauté scallions, add shrimp until pink|Add ham, carrot and peas, stir-fry|Add rice, stir-fry on high until separate|Return eggs, season with salt and white pepper|Sprinkle scallions, stir well and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'隔夜米饭500g，鸡蛋3个，虾仁80g，火腿50g，叉烧50g，青豆30g，胡萝卜30g，玉米粒20g，葱2根，盐，白胡椒粉，生抽少许，料酒',
      ingredients_en:'Overnight rice 500g, eggs 3, shrimp 80g, ham 50g, BBQ pork 50g, green peas 30g, carrot 30g, corn 20g, scallions 2, salt, white pepper, soy sauce a little, wine',
      steps_zh:'隔夜米饭提前用手捏散，加入一个蛋黄拌匀使米饭呈淡黄色|鸡蛋2个打散加盐，虾仁切丁加料酒腌，火腿和叉烧切丁，胡萝卜切丁|锅中放油，先炒蛋白至凝固盛出|锅中放油，爆香葱花，加虾仁炒变色|加火腿丁、叉烧丁、胡萝卜丁和青豆玉米粒翻炒|加入米饭大火翻炒至粒粒分明|倒回蛋白翻炒，加盐、白胡椒粉、少许生抽调味|撒葱花翻炒均匀即可出锅',
      steps_en:'Break up rice, mix with 1 egg yolk for golden color|Beat 2 eggs with salt, dice shrimp and marinate with wine, dice ham and BBQ pork, dice carrot|Cook egg whites until set, set aside|Sauté scallions, add shrimp until pink|Add ham, BBQ pork, carrot, peas and corn, stir-fry|Add rice, stir-fry on high until separate|Return egg whites, season with salt, white pepper and soy sauce|Sprinkle scallions, stir well and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'隔夜米饭500g，鸡蛋3个，虾仁100g，火腿50g，叉烧50g，瑶柱20g，青豆30g，胡萝卜30g，玉米粒20g，香菇3朵，葱2根，盐，白胡椒粉，生抽，料酒，香油',
      ingredients_en:'Overnight rice 500g, eggs 3, shrimp 100g, ham 50g, BBQ pork 50g, dried scallops 20g, peas 30g, carrot 30g, corn 20g, shiitake 3, scallions 2, salt, white pepper, soy sauce, wine, sesame oil',
      steps_zh:'隔夜米饭回温捏散，打入一个蛋黄拌匀|鸡蛋2个打散加少许盐和料酒|虾仁切大丁加料酒盐腌，火腿和叉烧切小丁，瑶柱泡发撕碎，胡萝卜切小丁，香菇泡发切丁|锅中放油，将蛋白炒至凝固盛出|锅中放油，爆香葱花，加虾仁炒变色|加瑶柱碎、火腿丁、叉烧丁翻炒出香|加胡萝卜丁、香菇丁、青豆、玉米粒翻炒均匀|加入米饭大火翻炒至粒粒分明|倒回蛋白翻炒，加盐、白胡椒粉、少许生抽调味|撒葱花，淋少许香油，大火翻炒均匀出锅',
      steps_en:'Warm rice, break apart, mix with 1 egg yolk|Beat 2 eggs with salt and wine|Dice shrimp marinated with wine, dice ham and BBQ pork, soak and shred scallops, dice carrot and shiitake|Cook egg whites until set, set aside|Sauté scallions, add shrimp until pink|Add scallops, ham and BBQ pork, stir until fragrant|Add carrot, shiitake, peas and corn, stir well|Add rice, stir-fry on high until separate|Return egg whites, season with salt, white pepper and soy sauce|Sprinkle scallions, drizzle sesame oil, stir on high and serve'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'隔夜米饭600g，鸡蛋3个，鲜虾仁100g，火腿50g，叉烧50g，瑶柱20g，海参50g，青豆30g，胡萝卜30g，玉米粒20g，香菇3朵，葱2根，盐，白胡椒粉，生抽，花雕酒，香油，猪油',
      ingredients_en:'Overnight rice 600g, eggs 3, fresh shrimp 100g, ham 50g, BBQ pork 50g, scallops 20g, sea cucumber 50g, peas 30g, carrot 30g, corn 20g, shiitake 3, scallions 2, salt, white pepper, soy sauce, huadiao wine, sesame oil, lard',
      steps_zh:'隔夜米饭回温，三个蛋黄蛋清分开，蛋黄与米饭拌匀使米粒呈金黄色|蛋清加少许盐和花雕酒打散|虾仁切大丁加花雕酒盐腌，火腿叉烧切小丁，瑶柱泡发撕碎，海参切小丁，胡萝卜香菇切小丁|锅中放猪油烧热，倒入蛋清炒至凝固盛出|锅中放猪油，爆香葱花，加虾仁炒变色|加瑶柱碎、海参丁、火腿丁、叉烧丁大火翻炒出香|加胡萝卜丁、香菇丁、青豆、玉米粒翻炒均匀|加入米饭大火翻炒至粒粒分明，每一粒都裹上蛋黄呈金黄色|倒回蛋白翻炒均匀，加盐、白胡椒粉、少许生抽和花雕酒调味|大火继续翻炒出香味，淋香油，撒葱花|翻炒均匀立即出锅装盘',
      steps_en:'Warm rice, separate 3 egg yolks from whites, mix yolks with rice for golden color|Beat egg whites with salt and huadiao wine|Dice shrimp marinated with huadiao wine and salt, dice ham and BBQ pork, soak and shred scallops, dice sea cucumber, carrot and shiitake|Heat lard, cook egg whites until set, set aside|Heat lard, sauté scallions, add shrimp until pink|Add scallops, sea cucumber, ham and BBQ pork on high until fragrant|Add carrot, shiitake, peas and corn, stir well|Add rice, stir-fry on high until each grain is separate and golden|Return egg whites, season with salt, white pepper, soy sauce and huadiao wine|Stir-fry on high until fragrant, drizzle sesame oil, sprinkle scallions|Stir well and serve immediately'}
  ],

  // 19. 煲仔饭 [Clay Pot Rice]
  19: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'大米200g，腊肠2根，姜1块，葱1根，生抽2勺，油少许',
      ingredients_en:'Rice 200g, Chinese sausage 2, ginger 1 piece, scallion 1, soy sauce 2 tbsp, oil a little',
      steps_zh:'大米淘洗干净，在砂锅中泡水30分钟|腊肠切片，姜切丝|泡好的米大火烧开转小火焖煮至水分收干|铺上腊肠和姜丝，沿锅边淋少许油|盖盖继续小火焖10分钟|关火再焖5分钟，撒葱花淋酱油即可',
      steps_en:'Wash rice, soak in clay pot for 30 minutes|Slice sausage, shred ginger|Bring rice to a boil then simmer on low until water is absorbed|Top with sausage and ginger, drizzle oil along pot edge|Cover and simmer on low 10 minutes|Turn off heat, rest 5 minutes, sprinkle scallions and drizzle soy sauce'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'大米250g，腊肠2根，腊肉50g，香菇3朵，青菜2颗，姜1块，葱1根，生抽2勺，老抽半勺，糖少许，油',
      ingredients_en:'Rice 250g, sausage 2, cured pork 50g, shiitake 3, greens 2, ginger 1, scallion 1, soy sauce 2 tbsp, dark soy half tbsp, sugar a little, oil',
      steps_zh:'大米淘洗后砂锅中泡水30分钟|腊肠切片，腊肉切片，香菇泡发切片，青菜焯水|米大火烧开转小火煮至水分快收干|铺上腊肠、腊肉、香菇、姜丝|沿锅边淋一圈油|盖盖小火焖12-15分钟|听到滋滋声时关火再焖5分钟|摆上焯好的青菜，淋上调好的酱油汁|撒葱花即可',
      steps_en:'Wash rice, soak in clay pot 30 minutes|Slice sausage and cured pork, soak and slice shiitake, blanch greens|Boil rice then simmer until water almost absorbed|Top with sausage, cured pork, shiitake and ginger|Drizzle oil around pot edge|Cover and simmer on low 12-15 minutes|When sizzling, turn off heat and rest 5 minutes|Arrange blanched greens, drizzle prepared sauce|Sprinkle scallions and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'大米250g，腊肠2根，腊肉80g，香菇4朵，青菜3颗，姜1块，葱1根，生抽2勺，老抽半勺，蚝油半勺，糖少许，油，香油',
      ingredients_en:'Rice 250g, sausage 2, cured pork 80g, shiitake 4, greens 3, ginger 1, scallion 1, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce half tbsp, sugar a little, oil, sesame oil',
      steps_zh:'大米淘洗后砂锅中加适量水浸泡40分钟|腊肠斜切片，腊肉切薄片，香菇泡发切片，青菜焯水|大米大火烧开转小火煮至水分快收干|铺上腊肠片、腊肉片、香菇片和姜丝|沿锅边淋一圈油|盖盖继续小火焖12-15分钟至闻到微焦香味|关火后不开盖再焖5分钟|调酱汁：生抽、老抽、蚝油、糖、香油和少许水调匀|摆上焯好的青菜，淋上调好的酱汁，撒葱花即可',
      steps_en:'Wash rice, soak in clay pot with water for 40 minutes|Slice sausage diagonally, thinly slice cured pork, soak and slice shiitake, blanch greens|Boil rice then simmer until water almost absorbed|Top with sausage, cured pork, shiitake and ginger|Drizzle oil around pot edge|Cover and simmer on low 12-15 minutes until slightly charred aroma|Turn off heat, rest 5 minutes without opening lid|Mix sauce: soy sauce, dark soy, oyster sauce, sugar, sesame oil and water|Arrange greens, drizzle sauce, sprinkle scallions and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'丝苗米250g，腊肠2根，腊肉80g，润肠1根，香菇4朵，青菜3颗，姜1块，葱1根，生抽2勺，老抽半勺，蚝油1勺，糖少许，油，香油，猪油',
      ingredients_en:'Jasmine rice 250g, sausage 2, cured pork 80g, liver sausage 1, shiitake 4, greens 3, ginger 1, scallion 1, soy sauce 2 tbsp, dark soy half tbsp, oyster sauce 1 tbsp, sugar a little, oil, sesame oil, lard',
      steps_zh:'丝苗米淘洗后砂锅浸泡30分钟，水量为中指第一关节深度|腊肠、润肠斜切片，腊肉切薄片，香菇泡发切片，青菜焯水|米中加少许油和盐拌匀，大火烧开后立即转小火煮至水分快收干|铺上腊肠、润肠、腊肉、香菇片和姜丝|沿锅边淋入一勺猪油和花生油的混合油|盖盖小火焖12-15分钟，期间转动砂锅使受热均匀，每3分钟转一次|当闻到微微焦香且有滋滋声时关火，焖5分钟|调酱汁：生抽、老抽、蚝油、糖、香油和少许水调匀|摆上焯好的青菜，淋上酱汁，撒葱花|搅拌均匀，让锅巴、米饭和配料充分混合',
      steps_en:'Wash jasmine rice, soak 30 minutes in clay pot, water to first knuckle depth|Slice sausages diagonally, thinly slice cured pork, soak and slice shiitake, blanch greens|Mix rice with a little oil and salt, boil then immediately simmer until water almost absorbed|Top with sausages, cured pork, shiitake and ginger|Drizzle mixed lard and peanut oil along pot edge|Cover and simmer on low 12-15 minutes, rotate pot every 3 minutes for even heating|When slightly charred aroma and sizzling, turn off heat, rest 5 minutes|Mix sauce: soy sauce, dark soy, oyster sauce, sugar, sesame oil and water|Arrange greens, drizzle sauce, sprinkle scallions|Mix well to combine crispy rice, toppings and sauce'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'丝苗米或泰国香米300g，腊肠2根，腊肉100g，润肠1根，香菇5朵，青菜3颗，姜1块，葱1根，红椒半个，生抽3勺，老抽1勺，蚝油1勺，糖少许，鱼露几滴，油，猪油，香油',
      ingredients_en:'Jasmine or Thai rice 300g, sausage 2, cured pork 100g, liver sausage 1, shiitake 5, greens 3, ginger 1, scallion 1, red pepper half, soy sauce 3 tbsp, dark soy 1 tbsp, oyster sauce 1 tbsp, sugar a little, fish sauce a few drops, oil, lard, sesame oil',
      steps_zh:'精选丝苗米淘洗两次，砂锅中加适量水浸泡40分钟|腊肠、润肠斜切厚片，腊肉切薄片，香菇泡发切花刀，青菜焯水|大米开盖大火煮至沸腾，用筷子搅拌防粘底，沸腾后转小火煮至表面水分消失|铺上腊肠、润肠、腊肉、香菇片和大量姜丝|沿砂锅边淋入猪油和花生油混合油，锅边淋一圈|盖盖极小火焖13-15分钟，每3分钟将砂锅转动45度，使锅巴均匀|当滋滋声变大且有微焦香时离火，焖6分钟|调魂汁：生抽、老抽、蚝油、糖、鱼露、香油和少许水煮开备用|摆上焯好的青菜、红椒圈，淋上调好的灵魂酱汁|撒葱花，吃前充分拌匀，让每一粒米都裹上酱汁，锅巴金黄酥脆',
      steps_en:'Wash jasmine rice twice, soak in clay pot for 40 minutes|Thickly slice sausages, thinly slice cured pork, soak and score shiitake, blanch greens|Boil rice uncovered on high, stir to prevent sticking, when boiling reduce to low until surface water disappears|Top with sausages, cured pork, shiitake and lots of ginger shreds|Drizzle mixed lard and peanut oil around pot edge|Cover and simmer on lowest heat 13-15 minutes, rotate pot 45 degrees every 3 minutes for even crust|When sizzling loud with charred aroma, remove from heat, rest 6 minutes|Make soul sauce: boil soy sauce, dark soy, oyster sauce, sugar, fish sauce, sesame oil and water|Arrange greens and red pepper rings, drizzle soul sauce|Sprinkle scallions, mix thoroughly before eating to coat every grain with sauce, crispy golden crust bottom'}
  ],

  // 20. 粥 [Congee]
  20: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'大米100g，水1500ml，盐少许，油少许',
      ingredients_en:'Rice 100g, water 1500ml, salt a little, oil a little',
      steps_zh:'大米淘洗干净，加少许油和盐腌10分钟|锅中加足量水烧开，放入大米|大火烧开后转小火慢煮30分钟|期间不时搅拌防止粘底|煮至米粒开花粥变浓稠即可|可配咸菜或皮蛋食用',
      steps_en:'Wash rice, mix with a little oil and salt, marinate 10 minutes|Bring water to a boil, add rice|Boil then simmer on low for 30 minutes|Stir occasionally to prevent sticking|Cook until rice grains bloom and congee thickens|Serve with pickles or century egg'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'大米120g，皮蛋2个，瘦肉100g，姜丝少许，水1500ml，盐，白胡椒粉，葱花，料酒',
      ingredients_en:'Rice 120g, century eggs 2, lean pork 100g, ginger shreds a little, water 1500ml, salt, white pepper, scallions, wine',
      steps_zh:'大米淘洗干净，加少许油和盐腌15分钟|皮蛋去壳切小块，瘦肉切丝加盐料酒腌一下|锅中加水烧开，放入大米和少许姜丝|大火烧开后转小火慢煮35-40分钟|煮至米粒开花粥变浓稠|加入皮蛋和肉丝继续煮5分钟|加盐和白胡椒粉调味，撒葱花即可',
      steps_en:'Wash rice, mix with oil and salt, marinate 15 minutes|Peel and dice century eggs, shred pork and marinate with salt and wine|Bring water to a boil, add rice and ginger shreds|Boil then simmer on low for 35-40 minutes|Cook until rice blooms and congee thickens|Add century eggs and pork shreds, cook 5 more minutes|Season with salt and white pepper, sprinkle scallions and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'大米150g，皮蛋2个，瘦肉150g，姜丝，葱花，水2000ml，盐，白胡椒粉，料酒，油，鸡蛋1个，香油',
      ingredients_en:'Rice 150g, century eggs 2, lean pork 150g, ginger shreds, scallions, water 2000ml, salt, white pepper, wine, oil, egg 1, sesame oil',
      steps_zh:'大米淘洗后加少许油和盐腌20分钟|皮蛋去壳切小块，瘦肉切丝加料酒盐白胡椒粉腌10分钟，鸡蛋打散|锅中加足量水烧开，放入腌好的大米，大火烧开转小火慢煮40分钟至米开花粥变稠|用勺子顺时针搅动至粥更顺滑|加入瘦肉丝搅散煮3分钟至变色|加入皮蛋丁煮3分钟|转圈淋入蛋液形成蛋花|加盐和白胡椒粉调味，淋少许香油，撒葱花即可',
      steps_en:'Wash rice, mix with oil and salt, marinate 20 minutes|Peel and dice century eggs, shred pork and marinate with wine, salt and white pepper 10 minutes, beat egg|Bring water to a boil, add rice, boil then simmer 40 minutes until rice blooms and congee thickens|Stir clockwise until smoother|Add pork shreds, cook 3 minutes until color changes|Add century eggs, cook 3 minutes|Drizzle beaten egg in circles to form egg ribbons|Season with salt and white pepper, drizzle sesame oil, sprinkle scallions'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'大米150g，糯米30g，皮蛋2个，瘦肉150g，鲜虾仁50g，干贝20g，姜丝，葱花，香菜，水2000ml，盐，白胡椒粉，料酒，油，香油',
      ingredients_en:'Rice 150g, glutinous rice 30g, century eggs 2, lean pork 150g, fresh shrimp 50g, dried scallops 20g, ginger shreds, scallions, cilantro, water 2000ml, salt, white pepper, wine, oil, sesame oil',
      steps_zh:'大米加糯米淘洗后加油盐腌20分钟|干贝泡软撕成细丝，瘦肉切丝加料酒盐腌，虾仁切丁，皮蛋去壳切丁|锅中加水烧开，放入大米糯米，大火烧开转小火慢煮45分钟至粥底绵滑浓稠|加干贝丝煮5分钟出鲜味|加瘦肉丝搅散煮3分钟|加皮蛋丁和虾仁丁煮3分钟至虾仁变红|加盐和白胡椒粉调味，搅匀|淋少许香油，撒葱花和香菜末即可',
      steps_en:'Wash rice and glutinous rice, mix with oil and salt, marinate 20 minutes|Soak scallops and shred, shred pork and marinate with wine and salt, dice shrimp, peel and dice century eggs|Bring water to a boil, add rice, boil then simmer 45 minutes until congee is smooth and thick|Add scallop shreds, cook 5 minutes for umami|Add pork shreds, cook 3 minutes|Add century eggs and shrimp, cook 3 minutes until shrimp turns pink|Season with salt and white pepper|Drizzle sesame oil, sprinkle scallions and cilantro'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'大米150g，糯米30g，皮蛋2个，瘦肉150g，鲜虾仁80g，干贝20g，干鲍鱼片20g，姜丝，葱花，香菜，水2500ml，盐，白胡椒粉，料酒，油，香油，鸡精少许',
      ingredients_en:'Rice 150g, glutinous rice 30g, century eggs 2, lean pork 150g, fresh shrimp 80g, dried scallops 20g, dried abalone slices 20g, ginger shreds, scallions, cilantro, water 2500ml, salt, white pepper, wine, oil, sesame oil, chicken bouillon a little',
      steps_zh:'大米和糯米淘洗后加少许油和盐腌30分钟|干贝和干鲍鱼片泡软撕成丝，瘦肉切丝加料酒白胡椒粉腌，虾仁切丁，皮蛋切丁|锅中加水烧开，放入大米和糯米大火煮15分钟至米粒开花|转小火慢煮30分钟至粥底绵滑浓稠，期间需不时搅拌防止粘底|加入干贝丝和鲍鱼丝煮8分钟出鲜味|加瘦肉丝搅散煮3分钟|加皮蛋丁和虾仁丁煮3分钟至虾仁变红熟透|加盐、白胡椒粉和少许鸡精调味|淋香油，撒大量葱花和香菜末|搅匀后盛入碗中',
      steps_en:'Wash rice and glutinous rice, mix with oil and salt, marinate 30 minutes|Soak scallops and abalone slices, shred, shred pork and marinate with wine and white pepper, dice shrimp and century eggs|Bring water to a boil, add rice, boil 15 minutes until rice blooms|Simmer on low 30 minutes until congee is smooth and thick, stir occasionally to prevent sticking|Add scallop and abalone shreds, cook 8 minutes for umami|Add pork shreds, cook 3 minutes|Add century eggs and shrimp, cook 3 minutes until shrimp is pink and cooked through|Season with salt, white pepper and chicken bouillon|Drizzle sesame oil, sprinkle lots of scallions and cilantro|Stir well and ladle into bowls'}
  ]
};

db.serialize(() => {
  console.log('删除菜谱11-20旧数据...');
  db.run('DELETE FROM levels WHERE recipe_id >= 11 AND recipe_id <= 20');

  const insert = db.prepare(`INSERT INTO levels 
    (recipe_id, level, ingredients_zh, ingredients_en, steps_zh, steps_en, note_zh, note_en) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);

  let total = 0;
  for (let rid = 11; rid <= 20; rid++) {
    const levels = data[rid];
    if (!levels) continue;
    for (const l of levels) {
      insert.run(rid, l.level, l.ingredients_zh, l.ingredients_en, l.steps_zh, l.steps_en, l.note_zh, l.note_en);
      total++;
    }
  }
  insert.finalize();

  db.all('SELECT recipe_id, COUNT(*) as cnt, GROUP_CONCAT(level) as levels FROM levels WHERE recipe_id>=1 AND recipe_id<=20 GROUP BY recipe_id ORDER BY recipe_id', (e, r) => {
    if (e) console.error(e);
    else {
      console.log(`\n========== 导入完成！共 ${total} 条记录 ==========`);
      r.forEach(row => console.log(`菜谱${String(row.recipe_id).padStart(2)}: ${row.cnt}个Level (${row.levels})`));
      
      db.all("SELECT recipe_id, level FROM levels WHERE recipe_id>=11 AND recipe_id<=20 AND (ingredients_en IS NULL OR ingredients_en='' OR steps_en IS NULL OR steps_en='')", (e2, r2) => {
        if (r2.length === 0) console.log('\n✅ 所有英文数据均非空！');
        else r2.forEach(row => console.log(`⚠️ 菜谱${row.recipe_id} Level ${row.level} 英文数据为空`));
        db.close();
      });
    }
  });
});