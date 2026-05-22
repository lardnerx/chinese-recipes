const dbPath = require('path').join(__dirname, 'recipes-new.db');
const db = new (require('sqlite3').Database)(dbPath);

const data = {
  // 21. 肉包子 [Steamed Pork Bun]
  21: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'面粉300g，酵母3g，温水150ml，猪肉馅300g，姜葱，盐，生抽，料酒',
      ingredients_en:'Flour 300g, yeast 3g, warm water 150ml, ground pork 300g, ginger scallion, salt, soy sauce, wine',
      steps_zh:'面粉加酵母温水揉成面团，醒发至2倍大|猪肉馅加姜末葱花盐生抽料酒拌匀|醒好的面团揉匀排气，搓条切小剂子|擀成中间厚边缘薄的圆皮|包入馅料，收口捏紧|放入蒸笼二次醒发15分钟|大火蒸15分钟关火焖3分钟即可',
      steps_en:'Mix flour with yeast and warm water, knead into dough, rise until doubled|Mix ground pork with ginger, scallion, salt, soy sauce and wine|Knead dough to release air, roll into log, cut into pieces|Roll into round wrappers with thick center and thin edges|Wrap in filling, seal tightly|Place in steamer for second rise 15 minutes|Steam on high 15 minutes, turn off heat and rest 3 minutes'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'面粉400g，酵母4g，白糖少许，温水200ml，猪肉馅400g，姜葱，盐，生抽，老抽，料酒，白胡椒粉，香油',
      ingredients_en:'Flour 400g, yeast 4g, sugar a little, warm water 200ml, ground pork 400g, ginger scallion, salt, soy sauce, dark soy, wine, white pepper, sesame oil',
      steps_zh:'面粉加酵母白糖温水揉成光滑面团，醒发至2倍大|猪肉馅加姜末葱花、盐、生抽、老抽、料酒、白胡椒粉、香油顺一个方向搅匀，加少许水搅上劲|面团揉匀排气，搓长条切均匀小剂子|擀成中间厚边缘薄的圆皮|取皮放适量馅料，一个褶一个褶地收口|包好的包子放蒸笼二次醒发15-20分钟至体积明显变大|水开后大火蒸15分钟，关火焖3分钟防止回缩',
      steps_en:'Mix flour with yeast, sugar and warm water, knead smooth, rise until doubled|Mix pork with ginger, scallion, salt, soy sauces, wine, white pepper and sesame oil in one direction, add water until sticky|Knead dough, roll into log, cut even pieces|Roll into round wrappers|Fill and pleat one fold at a time to seal|Place in steamer for second rise 15-20 minutes until puffy|Steam on high 15 minutes after water boils, rest 3 minutes to prevent shrinking'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'中筋面粉500g，酵母5g，白糖10g，温水250ml，猪肉馅500g，姜葱，盐，生抽，老抽，蚝油，料酒，白胡椒粉，白糖，香油，高汤',
      ingredients_en:'AP flour 500g, yeast 5g, sugar 10g, warm water 250ml, ground pork 500g, ginger scallion, salt, soy sauce, dark soy, oyster sauce, wine, white pepper, sugar, sesame oil, broth',
      steps_zh:'面粉加酵母、白糖、温水揉成光滑面团，盖布醒发至2倍大|猪肉馅加姜末葱花、盐、生抽、老抽、蚝油、料酒、白胡椒粉、白糖顺一个方向搅匀|分次加入少许高汤搅打至完全吸收，最后加香油拌匀|面团揉匀排气，搓长条切成每个40g的剂子|擀成中间厚边缘薄的圆皮|取皮放适量馅料，左手托皮，右手拇指和食指一个褶一个褶地捏合，收口捏紧|包好的包子放入蒸笼二次醒发15-20分钟至体积增大一倍|水开后放入蒸笼大火蒸12-15分钟，关火焖3分钟即可',
      steps_en:'Mix flour with yeast, sugar and warm water, knead smooth, cover and rise until doubled|Mix pork with ginger, scallion, salt, soy sauces, oyster sauce, wine, white pepper and sugar in one direction|Gradually add broth until absorbed, add sesame oil|Knead dough, cut into 40g pieces|Roll into thick-centered thin-edged wrappers|Fill and pleat with thumb and index finger, seal tightly|Second rise 15-20 minutes until doubled in size|Steam on high 12-15 minutes after water boils, rest 3 minutes'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'中筋面粉500g，低筋面粉50g，酵母5g，白糖15g，泡打粉3g，温水280ml，猪油10g，猪肉馅500g，姜葱，盐，生抽，老抽，蚝油，料酒，白胡椒粉，白糖，香油，高汤，皮冻100g',
      ingredients_en:'AP flour 500g, cake flour 50g, yeast 5g, sugar 15g, baking powder 3g, warm water 280ml, lard 10g, ground pork 500g, ginger scallion, salt, soy sauce, dark soy, oyster sauce, wine, white pepper, sugar, sesame oil, broth, aspic 100g',
      steps_zh:'中筋和低筋面粉混合，加酵母、白糖、泡打粉拌匀|加温水和成面团，揉入猪油使面团更光滑，醒发至2倍大|猪肉馅加姜末葱花、盐、生抽、老抽、蚝油、料酒、白胡椒粉、白糖顺一个方向搅匀|分次加入高汤搅打至起胶，加入切碎的皮冻，最后加香油拌匀，冷藏30分钟|面团揉匀排气，搓条切成每个45g的剂子，按扁擀成圆皮|取皮放30g馅料，左手配合旋转，右手拇指食指捏褶，每个打18-20个褶|二次醒发20分钟至明显变大|水开后大火蒸12分钟，关火焖4分钟',
      steps_en:'Mix AP and cake flour, add yeast, sugar and baking powder|Add warm water, knead in lard for smooth dough, rise until doubled|Mix pork with aromatics, soy sauces, oyster sauce, wine, white pepper and sugar in one direction|Gradually add broth until sticky, add chopped aspic, sesame oil, refrigerate 30 minutes|Knead dough, cut into 45g pieces, roll into wrappers|Fill with 30g filling, pleat 18-20 folds while rotating|Second rise 20 minutes until noticeably puffy|Steam on high 12 minutes after boiling, rest 4 minutes'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'中筋面粉500g，低筋面粉50g，酵母5g，白糖20g，泡打粉3g，温水280ml，猪油15g，猪肉馅500g，鲜虾仁100g，姜葱，盐，生抽，老抽，蚝油，花雕酒，白胡椒粉，白糖，香油，高汤200ml，皮冻150g',
      ingredients_en:'AP flour 500g, cake flour 50g, yeast 5g, sugar 20g, baking powder 3g, warm water 280ml, lard 15g, ground pork 500g, shrimp 100g, ginger scallion, salt, soy sauce, dark soy, oyster sauce, huadiao wine, white pepper, sugar, sesame oil, broth 200ml, aspic 150g',
      steps_zh:'中筋和低筋面粉混合过筛，加酵母、白糖、泡打粉拌匀，加温水和成面团|加入猪油揉至光滑不粘手，盖布醒发至2倍大|猪肉馅加姜汁、葱花、盐、生抽、老抽、蚝油、花雕酒、白胡椒粉、白糖顺一个方向搅打|分3次加入高汤，每次搅打至完全吸收使肉馅饱满多汁|鲜虾仁切大丁拌入，皮冻切碎丁轻轻拌入，最后加香油拌匀，冷藏1小时|面团揉匀排气，搓条切成每个50g的剂子，按扁擀成直径10cm中间厚边缘薄的圆皮|取皮放35g馅料，左手托皮，右手拇指食指推捏，每个打22-24个均匀的褶子，收口捏紧呈菊花顶|二次醒发25分钟至体积明显增大|水开后大火蒸12分钟，关火焖5分钟|包子皮白如雪、松软有弹性，咬开汤汁四溢',
      steps_en:'Sift AP and cake flour, add yeast, sugar, baking powder, mix with warm water|Knead in lard until smooth, cover and rise until doubled|Mix pork with ginger juice, scallion, salt, soy sauces, oyster sauce, huadiao wine, white pepper and sugar in one direction|Add broth in 3 batches, stirring until fully absorbed for juicy filling|Mix in diced shrimp and aspic, add sesame oil, refrigerate 1 hour|Knead dough, cut into 50g pieces, roll into 10cm wrappers|Fill with 35g filling, pleat 22-24 even folds, seal in chrysanthemum top shape|Second rise 25 minutes|Steam on high 12 minutes after boiling, rest 5 minutes|Buns are snow-white, fluffy and elastic, soup bursts when bitten'}
  ],

  // 22. 葱油饼 [Spring Onion Pancake]
  22: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'面粉300g，葱5根，盐，油',
      ingredients_en:'Flour 300g, scallions 5, salt, oil',
      steps_zh:'面粉加温水揉成光滑面团，醒20分钟|葱切葱花|面团擀成薄片，刷一层油，撒盐和葱花|卷起来盘成圆形，再擀成薄饼|锅中放油烧热，放入饼煎至两面金黄|用锅铲轻轻拍松即可出锅',
      steps_en:'Mix flour with warm water, knead smooth, rest 20 minutes|Chop scallions|Roll dough thin, brush oil, sprinkle salt and scallions|Roll up into a coil, flatten into a thin pancake|Heat oil, fry pancake until golden on both sides|Gently pat loose with spatula and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'面粉400g，葱10根，盐，油，面粉（油酥用）',
      ingredients_en:'Flour 400g, scallions 10, salt, oil, flour (for oil paste)',
      steps_zh:'面粉加少许盐，用温水和成柔软面团，醒30分钟|葱切葱花，面粉加盐和热油调成油酥|面团分成小剂子，擀成长椭圆形|刷上油酥，撒上大量葱花|从一头卷起成长条，再盘成圆形|擀成薄饼|锅中多放油烧热，放入饼中小火煎至两面金黄酥脆|用锅铲拍松，出锅切块即可',
      steps_en:'Mix flour with salt and warm water, knead soft dough, rest 30 minutes|Chop scallions, mix flour with hot oil to make oil paste|Divide dough, roll into ovals|Brush oil paste, add lots of scallions|Roll up from one end, coil into round|Flatten into thin pancake|Heat oil, fry on medium-low until golden crispy|Pat loose, cut and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'中筋面粉400g，葱15根，盐，白胡椒粉，油，面粉（油酥用），花椒粉少许',
      ingredients_en:'AP flour 400g, scallions 15, salt, white pepper, oil, flour (for paste), Sichuan pepper powder a little',
      steps_zh:'面粉加少许盐用温水和成柔软面团，醒面40分钟|制作油酥：面粉加盐、白胡椒粉、花椒粉，淋入烧热的花生油调成流动的油酥|大量葱花切碎备用|面团分成6个小剂子，擀成长方形薄片|均匀刷上油酥，撒上大量葱花|从长边卷起成长条，捏紧两端，再盘成圆形|按扁后擀成直径15cm的薄饼|平底锅多放油烧热，放入饼中小火煎至一面金黄|翻面继续煎至两面金黄酥脆，层数分明|用锅铲轻轻拍松使层次散开，出锅切块即可',
      steps_en:'Mix flour with salt and warm water, knead soft, rest 40 minutes|Make oil paste: mix flour with salt, white pepper and Sichuan pepper powder, add hot peanut oil|Chop lots of scallions|Divide dough into 6, roll into thin rectangles|Brush oil paste evenly, add lots of scallions|Roll from long side into log, pinch ends, coil into round|Flatten to 15cm pancake|Fry on medium-low until golden on both sides and crispy|Pat loose, cut and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'中筋面粉400g，低筋面粉100g，葱20根，盐，五香粉，油，面粉（油酥用），花椒粉，猪油',
      ingredients_en:'AP flour 400g, cake flour 100g, scallions 20, salt, five spice, oil, flour (for paste), Sichuan pepper powder, lard',
      steps_zh:'中筋和低筋面粉混合加盐，用温水和成柔软面团，表面刷油醒面1小时|制作油酥：面粉加盐、五香粉、花椒粉，淋入烧热的猪油和花生油混合油调匀|大量葱花切碎沥干水分|面团分成8个小剂子，案板抹油擀成长方形薄片|均匀抹上油酥，撒上大量葱花|从一端卷起成条，捏紧两端|将长条盘成圆形，收口压在下面|按扁后轻轻擀成直径15cm的圆饼|平底锅放油烧至五成热，放入饼中小火慢煎至两面金黄酥脆|轻轻拍松使层次散开，出锅切块装盘',
      steps_en:'Mix AP and cake flour with salt, warm water, knead soft, brush oil and rest 1 hour|Make oil paste: mix flour with salt, five spice and Sichuan pepper powder, add hot lard and peanut oil|Chop lots of scallions, drain|Divide dough into 8, oil surface, roll into thin rectangles|Spread oil paste, add lots of scallions|Roll up from one end, pinch ends tight|Coil into round, tuck end underneath|Gently flatten to 15cm pancake|Fry on medium-low heat until golden crispy on both sides|Pat loose to separate layers, cut and serve'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'中筋面粉400g，低筋面粉100g，葱25根，盐，五香粉，花椒粉，油，面粉（油酥用），猪油，白芝麻，香油',
      ingredients_en:'AP flour 400g, cake flour 100g, scallions 25, salt, five spice, Sichuan pepper powder, oil, flour (for paste), lard, white sesame, sesame oil',
      steps_zh:'面粉混合加少许盐，用60度温水和成柔软面团，表面抹油醒面1.5小时|制作油酥：面粉加盐、五香粉、花椒粉，淋入烧至六成热的猪油和花生油混合油搅匀成稀油酥，冷却备用|葱切碎成葱花，沥干水分，拌入少许香油防变色|面团分成10个小剂子，案板抹油将剂子擀成极薄的长方形|均匀抹上油酥，撒上足量葱花，再撒少许白芝麻|从一端卷起成紧实的长条，捏紧两端，盘成圆形收口压在下面|醒面10分钟后轻擀成直径12cm的圆饼|平底锅多放油烧至五成热，放入饼中小火慢煎至一面金黄酥脆|翻面继续煎至两面金黄，层次分明，外酥里软|出锅后用双手轻轻拍松，切开可见千层分明，葱香四溢',
      steps_en:'Mix flours with salt and 60°C warm water, knead soft, brush oil and rest 1.5 hours|Make oil paste: mix flour with salt, five spice and pepper powder, add hot lard and peanut oil until runny, cool|Chop scallions, drain, mix with sesame oil to prevent discoloring|Divide dough into 10, oil surface, roll paper-thin|Spread oil paste, add lots of scallions and white sesame|Roll into tight log, pinch ends, coil into round, tuck end underneath|Rest 10 minutes, gently flatten to 12cm|Fry on medium-low with plenty oil until golden crispy|Flip and fry until both sides golden, layers distinct, crispy outside soft inside|Pat loose with hands, cut to reveal thousand layers, scallion aroma fills the air'}
  ],

  // 23. 汤圆 [Tangyuan]
  23: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'糯米粉300g，黑芝麻100g，猪油50g，白糖50g',
      ingredients_en:'Glutinous rice flour 300g, black sesame 100g, lard 50g, sugar 50g',
      steps_zh:'糯米粉加温水揉成光滑面团|黑芝麻炒熟磨碎，加猪油和糖拌匀成馅|面团搓条切小剂子，按扁包入芝麻馅|收口搓圆|锅中水烧开，放入汤圆煮至浮起|再煮2分钟即可捞出食用',
      steps_en:'Mix glutinous rice flour with warm water, knead smooth|Roast black sesame, grind, mix with lard and sugar for filling|Roll dough into log, cut pieces, flatten and wrap filling|Seal and roll into balls|Boil water, add tangyuan, cook until floating|Cook 2 more minutes, drain and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'糯米粉400g，黑芝麻100g，花生50g，猪油60g，白糖80g，干桂花少许',
      ingredients_en:'Glutinous rice flour 400g, black sesame 100g, peanuts 50g, lard 60g, sugar 80g, dried osmanthus a little',
      steps_zh:'糯米粉加温水揉成光滑面团，盖布醒15分钟|黑芝麻炒熟碾碎，花生炒熟碾碎，加猪油和白糖拌匀成馅，冰箱冷藏凝固|面团搓长条切成均匀小剂子|取剂子按扁，放入馅料后用虎口收口搓圆|锅中水烧开，轻轻放入汤圆|煮至汤圆全部浮起后再煮2-3分钟|碗中放少许桂花和糖，连汤盛入即可',
      steps_en:'Mix flour with warm water, knead smooth, rest 15 minutes|Roast and grind sesame and peanuts, mix with lard and sugar, refrigerate|Roll dough into log, cut even pieces|Flatten, fill, seal with tiger-mouth technique and roll round|Boil water, gently add tangyuan|Cook until all float, then 2-3 more minutes|Add osmanthus and sugar in bowl, ladle tangyuan and water in'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'糯米粉400g，澄面50g，黑芝麻100g，花生50g，核桃30g，猪油70g，白糖100g，干桂花',
      ingredients_en:'Glutinous rice flour 400g, wheat starch 50g, black sesame 100g, peanuts 50g, walnuts 30g, lard 70g, sugar 100g, dried osmanthus',
      steps_zh:'糯米粉和澄面混合，加温水和成光滑面团醒20分钟|黑芝麻和花生分别炒香碾碎，核桃烤香碾碎|混合芝麻碎、花生碎、核桃碎、白糖和猪油拌匀成馅，冰箱冷藏30分钟|面团搓条切小剂子每个20g，按扁包入15g馅料|用虎口收口搓圆，表面稍微搓光滑|锅中水烧开，轻轻放入汤圆，用勺背轻推防止粘底|煮至汤圆浮起后转中火再煮2-3分钟|碗中放少许干桂花和白糖，连汤盛入即可',
      steps_en:'Mix glutinous rice flour and wheat starch, add warm water, knead smooth, rest 20 minutes|Roast and grind sesame and peanuts, roast and grind walnuts|Mix all nuts with sugar and lard, refrigerate 30 minutes|Cut dough into 20g pieces, flatten, fill with 15g filling|Seal and roll smooth|Boil water, gently add tangyuan, push gently with spoon back|Cook until floating, then 2-3 minutes on medium|Add osmanthus and sugar in bowl, serve with soup'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'糯米粉400g，澄面60g，黑芝麻120g，花生50g，核桃30g，瓜子仁20g，猪油80g，白糖120g，干桂花，枸杞少许',
      ingredients_en:'Glutinous rice flour 400g, wheat starch 60g, black sesame 120g, peanuts 50g, walnuts 30g, pumpkin seeds 20g, lard 80g, sugar 120g, dried osmanthus, goji berries a little',
      steps_zh:'糯米粉和澄面混合，加温水和成光滑面团，醒30分钟|黑芝麻、花生、核桃分别炒香碾碎，瓜子仁烤香|混合所有坚果碎，加白糖和猪油拌匀成馅，冷藏40分钟使其变硬好包|面团搓条切小剂子每个18g，按扁成中间厚边缘薄的皮|包入15g馅料，用虎口收口搓圆，表面搓至光滑|锅中水烧开，加少许白糖防粘，轻轻放入汤圆|水开转中火，煮至汤圆浮起后继续煮3分钟至汤圆膨胀|碗中放干桂花和枸杞，连汤盛入',
      steps_en:'Mix glutinous rice flour and wheat starch, add warm water, knead smooth, rest 30 minutes|Roast and grind sesame, peanuts, walnuts, toast pumpkin seeds|Mix all nuts with sugar and lard, refrigerate 40 minutes|Cut dough into 18g pieces, flatten into thick-centered wrappers|Fill with 15g filling, seal and roll smooth|Boil water with a little sugar, gently add tangyuan|Cook on medium until floating, then 3 more minutes until puffed|Add osmanthus and goji berries in bowl, serve with soup'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'水磨糯米粉400g，澄面60g，黑芝麻150g，花生50g，核桃30g，杏仁20g，瓜子仁20g，猪油100g，白糖150g，干桂花，枸杞，玫瑰酱少许',
      ingredients_en:'Water-mill glutinous rice flour 400g, wheat starch 60g, black sesame 150g, peanuts 50g, walnuts 30g, almonds 20g, pumpkin seeds 20g, lard 100g, sugar 150g, dried osmanthus, goji berries, rose jam a little',
      steps_zh:'水磨糯米粉和澄面混合过筛，加温水和成光滑面团，醒40分钟|制作馅心：黑芝麻炒香用石臼碾碎呈出香油润感，花生核桃烤香碾碎，杏仁瓜子仁烤香|混合所有坚果碎，加白糖和猪油拌匀，加少许玫瑰酱增香，捏成每个12g的小球，冷藏1小时|面团搓条切小剂子每个15g，按扁成圆片|包入冷硬的馅球，用虎口慢慢收口搓圆，不留裂缝|锅中水宽火烧开，轻轻放入汤圆，用勺背轻推防粘|煮至汤圆浮起后转中小火再煮3分钟，关火焖2分钟|碗中放干桂花、枸杞和少许白糖，盛入汤圆和汤，汤圆皮软糯Q弹，咬开黑芝麻馅流沙香浓',
      steps_en:'Sift water-mill glutinous rice flour and wheat starch, add warm water, knead smooth, rest 40 minutes|Make filling: roast sesame and grind with mortar for oily aroma, roast and grind peanuts and walnuts, toast almonds and pumpkin seeds|Mix all nuts with sugar, lard and rose jam, shape into 12g balls, refrigerate 1 hour|Cut dough into 15g pieces, flatten into rounds|Wrap cold filling balls, seal with tiger-mouth technique, no cracks|Boil plenty water, gently add tangyuan, push gently with spoon|Cook until floating, then 3 minutes on medium-low, turn off and rest 2 minutes|Add osmanthus, goji berries and sugar in bowl, serve with soup - skin is soft and chewy, black sesame filling flows like lava'}
  ],

  // 24. 粽子 [Zongzi]
  24: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'糯米500g，五花肉300g，粽叶20片，绳子，生抽，老抽，料酒',
      ingredients_en:'Glutinous rice 500g, pork belly 300g, bamboo leaves 20, string, soy sauce, dark soy, wine',
      steps_zh:'糯米提前浸泡4小时，粽叶洗净泡软|五花肉切块加生抽老抽料酒腌2小时|两片粽叶叠起卷成锥形|放一层糯米，放一块肉，再盖一层糯米|将粽叶折过来包紧，用绳子扎紧|放入大锅，加水没过粽子，煮2小时即可',
      steps_en:'Soak glutinous rice 4 hours, wash and soak bamboo leaves|Cut pork belly into chunks, marinate with soy sauces and wine 2 hours|Overlap 2 bamboo leaves, fold into cone shape|Add layer of rice, add pork, cover with rice|Fold leaves over to wrap tightly, tie with string|Place in large pot, cover with water, boil 2 hours'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'糯米600g，五花肉400g，咸蛋黄5个，粽叶30片，棉绳，生抽，老抽，料酒，糖，五香粉',
      ingredients_en:'Glutinous rice 600g, pork belly 400g, salted egg yolks 5, bamboo leaves 30, cotton string, soy sauce, dark soy, wine, sugar, five spice powder',
      steps_zh:'糯米提前浸泡6小时，粽叶洗净泡软剪去硬蒂|五花肉切块加生抽老抽料酒糖五香粉腌4小时|咸蛋黄备用|两片粽叶叠起折成漏斗形|先放少量糯米，再放肉和半个蛋黄|再盖上糯米压实|将粽叶折过来包紧，用棉绳扎紧不漏米|大锅中加水没过粽子，大火烧开转小火煮3小时|关火焖1小时口味更佳',
      steps_en:'Soak rice 6 hours, wash and soften bamboo leaves, trim hard stems|Marinate pork with soy sauces, wine, sugar and five spice 4 hours|Prepare salted egg yolks|Overlap leaves into funnel shape|Add some rice, add pork and half yolk|Cover with more rice, press firm|Fold leaves over, tie tightly with string|Cover with water, boil then simmer 3 hours|Turn off heat, rest 1 hour for better flavor'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'糯米700g，五花肉500g，咸蛋黄8个，干香菇8朵，粽叶40片，棉绳，生抽，老抽，料酒，糖，五香粉，白胡椒粉，姜片',
      ingredients_en:'Glutinous rice 700g, pork belly 500g, salted egg yolks 8, dried shiitake 8, bamboo leaves 40, string, soy sauce, dark soy, wine, sugar, five spice, white pepper, ginger',
      steps_zh:'糯米提前浸泡8小时，沥干后加生抽、老抽、少许油拌匀使米粒上色增香|五花肉切大块加生抽、老抽、料酒、糖、五香粉、白胡椒粉、姜片腌过夜|干香菇泡发切半，咸蛋黄对半切|两片粽叶叠起折成漏斗形，先放一层糯米|放入腌好的五花肉、半个咸蛋黄和香菇|再盖一层糯米压实，将粽叶折下包紧|用棉绳在粽子腰部绕两圈扎紧|大锅中加水没过粽子，大火烧开转小火煮3-4小时|关火后焖1-2小时使糯米更软糯入味',
      steps_en:'Soak rice 8 hours, drain, mix with soy sauces and oil for color and aroma|Marinate pork chunks with soy sauces, wine, sugar, five spice, white pepper and ginger overnight|Soak and halve shiitake, halve egg yolks|Overlap leaves into funnel, add rice layer|Add marinated pork, half yolk and shiitake|Cover with rice, press firm, fold and wrap tight|Tie string around waist twice|Boil then simmer 3-4 hours|Rest 1-2 hours for softer, more flavorful rice'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'糯米800g，五花肉600g，咸蛋黄10个，干香菇10朵，干贝30g，虾米20g，粽叶50片，棉绳，生抽，老抽，蚝油，料酒，糖，五香粉，白胡椒粉，姜片，花生油',
      ingredients_en:'Glutinous rice 800g, pork belly 600g, salted egg yolks 10, dried shiitake 10, dried scallops 30g, dried shrimp 20g, bamboo leaves 50, string, soy sauce, dark soy, oyster sauce, wine, sugar, five spice, white pepper, ginger, peanut oil',
      steps_zh:'糯米浸泡过夜，沥干后加生抽、老抽、蚝油、少许花生油拌匀，使米粒色泽金黄油亮|五花肉切大方块，加生抽、老抽、蚝油、料酒、糖、五香粉、白胡椒粉、姜片腌制过夜|干香菇泡发切半，干贝泡发撕碎，虾米泡软，咸蛋黄一开二|取两片粽叶叠起，折成漏斗形|先放少量糯米，依次放入五花肉、半个咸蛋黄、香菇、干贝碎和虾米|再盖上一层糯米压实|将粽叶折下包紧，用棉绳在粽子上下两端各绕两圈扎紧|大锅垫竹篦，放入粽子加水没过，大火烧开转小火煮4小时|关火后在锅中焖2小时，使糯米充分吸收肉香和蛋黄的油脂',
      steps_en:'Soak rice overnight, drain, mix with soy sauces, oyster sauce and peanut oil for glossy golden color|Marinate large pork chunks with soy sauces, oyster sauce, wine, sugar, five spice, white pepper and ginger overnight|Soak and halve shiitake, shred scallops, soften shrimp, halve egg yolks|Overlap 2 leaves into funnel|Add rice, then pork, half yolk, shiitake, scallops and shrimp|Cover with rice, press firm|Wrap tight, tie string at both ends|Line pot with bamboo mat, add zongzi, cover with water, boil then simmer 4 hours|Rest 2 hours in pot for full absorption of meat and yolk flavors'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'糯米1000g，精品五花肉600g，咸蛋黄12个，干香菇12朵，干贝50g，虾米30g，去皮绿豆100g，粽叶60片，棉绳，生抽，老抽，蚝油，料酒，糖，五香粉，白胡椒粉，姜片，花生油，香油',
      ingredients_en:'Glutinous rice 1000g, premium pork belly 600g, salted egg yolks 12, dried shiitake 12, dried scallops 50g, dried shrimp 30g, peeled mung beans 100g, bamboo leaves 60, string, soy sauce, dark soy, oyster sauce, wine, sugar, five spice, white pepper, ginger, peanut oil, sesame oil',
      steps_zh:'糯米精选圆糯米，浸泡过夜10小时，沥干后加生抽、老抽、蚝油、五香粉、花生油和少许香油拌匀|五花肉切大方块每块约40g，加生抽、老抽、蚝油、料酒、糖、五香粉、白胡椒粉、姜片、香油腌制过夜|去皮绿豆提前浸泡4小时，干香菇泡发切半，干贝泡发撕碎，虾米泡软，咸蛋黄每个切半|粽叶选新鲜宽叶，开水烫软后修剪两端，擦干水分抹少许油防粘|取两片粽叶叠起，折成漏斗形|依次铺料：一层糯米、一层绿豆、五花肉、咸蛋黄、干贝、虾米、香菇|再盖一层绿豆和糯米压实|将粽叶折下包紧成四角形，用棉绳先扎腰间再扎两头，扎实不露米|大锅底部垫竹篦，加足量水没过粽子5cm，加少许盐|大火烧开转小火煮4-5小时，中途加水保持水位|关火后不开盖焖3小时|打开粽叶，糯米软糯油亮，肉块酥烂，蛋黄沙香，干贝鲜美',
      steps_en:'Choose round glutinous rice, soak 10 hours, drain, mix with soy sauces, oyster sauce, five spice, peanut and sesame oil|Cut premium pork into 40g chunks, marinate with soy sauces, oyster sauce, wine, sugar, five spice, white pepper, ginger and sesame oil overnight|Soak mung beans 4 hours, halve shiitake, shred scallops, soften shrimp, halve egg yolks|Choose fresh wide bamboo leaves, blanch in boiling water, trim, dry and oil|Overlap 2 leaves into funnel|Layer: rice, mung beans, pork, egg yolk, scallops, shrimp, shiitake|Cover with mung beans and rice, press firm|Wrap into tetrahedron, tie string around waist and ends tightly|Line pot with bamboo mat, add water 5cm above zongzi, add salt|Boil then simmer 4-5 hours, maintain water level|Rest 3 hours without opening lid|Open leaves: rice soft and glossy, meat tender, yolk sandy, scallops savory'}
  ],

  // 25. 月饼 [Moon Cake]
  25: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'中筋面粉200g，转化糖浆150g，枧水3g，花生油50g，莲蓉馅300g',
      ingredients_en:'AP flour 200g, inverted sugar syrup 150g, lye water 3g, peanut oil 50g, lotus seed paste 300g',
      steps_zh:'转化糖浆、枧水、花生油混合搅匀|加入面粉揉成面团醒2小时|莲蓉馅分成小份搓圆|面团分成小剂子按扁，包入莲蓉馅|放入月饼模压出花型|表面刷蛋液，烤箱预热180度烤20分钟|回油2天口感更佳',
      steps_en:'Mix syrup, lye water and peanut oil|Add flour, knead into dough, rest 2 hours|Divide lotus paste into small balls|Divide dough, flatten, wrap paste|Press into mooncake mold|Brush egg wash, bake at 180°C for 20 minutes|Rest 2 days for best texture'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'中筋面粉250g，转化糖浆180g，枧水4g，花生油60g，奶粉20g，莲蓉馅400g，咸蛋黄10个，白酒少许',
      ingredients_en:'AP flour 250g, syrup 180g, lye water 4g, peanut oil 60g, milk powder 20g, lotus paste 400g, salted egg yolks 10, liquor a little',
      steps_zh:'转化糖浆、枧水、花生油充分混合乳化|筛入面粉和奶粉揉成面团，包保鲜膜醒3小时|咸蛋黄喷白酒烤5分钟至表面干爽|莲蓉馅包入咸蛋黄搓圆|面团分成小剂子按扁，包入莲蓉蛋黄馅|放入月饼模压出花型|表面喷水，烤箱预热200度烤5分钟定型|取出刷蛋液，转180度再烤15分钟至金黄|冷却后密封回油2-3天口感最佳',
      steps_en:'Mix syrup, lye water and peanut oil until emulsified|Sift in flour and milk powder, knead, cover and rest 3 hours|Spray egg yolks with liquor, bake 5 minutes until dry|Wrap yolk in lotus paste, roll round|Divide dough, flatten, wrap paste ball|Press into mold, spray water|Bake at 200°C for 5 minutes to set|Brush egg wash, bake at 180°C for 15 minutes until golden|Cool, seal and rest 2-3 days for best texture'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'中筋面粉300g，转化糖浆200g，枧水5g，花生油70g，奶粉25g，莲蓉馅500g，咸蛋黄12个，白酒，蛋液',
      ingredients_en:'AP flour 300g, syrup 200g, lye water 5g, peanut oil 70g, milk powder 25g, lotus paste 500g, salted egg yolks 12, liquor, egg wash',
      steps_zh:'转化糖浆加枧水搅匀，加花生油搅拌至完全乳化呈浓稠状|筛入面粉和奶粉，用刮刀翻拌成团无干粉，包保鲜膜醒面3小时|咸蛋黄喷白酒160度烤6分钟至表面出油，冷却|莲蓉馅分成每个40g，压扁包入咸蛋黄搓圆|饼皮面团分成每个25g，按扁包入莲蓉蛋黄馅，用虎口收口搓圆|饼胚表面沾少许干粉，放入月饼模垂直用力压出花型|烤箱预热200度，饼胚表面喷水防裂，烤5分钟定型|取出刷薄薄一层蛋黄液，转170度烤12-15分钟至金黄|冷却后密封回油2-3天，饼皮由硬变软，油润光亮',
      steps_en:'Mix syrup with lye water, add peanut oil, stir until thick and emulsified|Sift in flour and milk powder, fold until no dry flour, cover and rest 3 hours|Spray yolks with liquor, bake at 160°C for 6 minutes until oily, cool|Divide lotus paste into 40g balls, flatten and wrap yolk|Divide dough into 25g pieces, flatten, wrap paste ball, seal|Dust with flour, press into mold firmly|Spray water, bake at 200°C for 5 minutes to set|Brush thin egg wash, bake at 170°C for 12-15 minutes until golden|Cool, seal and rest 2-3 days, skin softens and becomes glossy'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'中筋面粉350g，转化糖浆220g，枧水6g，花生油80g，奶粉30g，吉士粉10g，莲蓉馅600g，咸蛋黄15个，白酒，蛋液',
      ingredients_en:'AP flour 350g, syrup 220g, lye water 6g, peanut oil 80g, milk powder 30g, custard powder 10g, lotus paste 600g, salted egg yolks 15, liquor, egg wash',
      steps_zh:'转化糖浆和枧水混合搅匀，分次加入花生油搅拌至完全乳化|筛入面粉、奶粉和吉士粉，翻拌成团无干粉，包保鲜膜醒面4小时|咸蛋黄喷白酒160度烤6-8分钟至底部冒泡出油，冷却后一切为二|莲蓉馅分成每个45g，压扁包入半个咸蛋黄搓圆|饼皮面团分成每个20g，按扁包入馅料用虎口慢慢收口|搓圆后轻沾干粉，放入月饼模垂直用力按压出清晰花型|烤箱预热200度，饼胚喷薄薄一层水雾，烤5分钟定型|取出稍凉，刷过筛的蛋黄液，转170度烤10分钟，取出再刷一次蛋液，继续烤5-8分钟至金黄|出炉彻底冷却后密封回油3-4天，饼皮油润透亮，花纹清晰',
      steps_en:'Mix syrup and lye water, gradually add peanut oil, stir until emulsified|Sift in flour, milk powder and custard powder, fold into dough, cover and rest 4 hours|Spray yolks with liquor, bake at 160°C for 6-8 minutes until bubbling, cool and halve|Divide lotus paste into 45g balls, flatten and wrap half yolk|Divide dough into 20g pieces, flatten and wrap filling|Dust with flour, press into mold firmly for clear pattern|Spray water mist, bake at 200°C for 5 minutes to set|Cool briefly, brush strained egg wash, bake at 170°C for 10 minutes|Brush egg wash again, bake 5-8 minutes until golden|Cool completely, seal and rest 3-4 days, skin glossy with clear pattern'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'低筋面粉350g，高筋面粉50g，转化糖浆250g，枧水7g，花生油90g，奶粉30g，吉士粉10g，莲蓉馅800g，低糖莲蓉200g，咸蛋黄20个，白酒，蛋液，蜂蜜',
      ingredients_en:'Cake flour 350g, bread flour 50g, syrup 250g, lye water 7g, peanut oil 90g, milk powder 30g, custard powder 10g, lotus paste 800g, low-sugar lotus paste 200g, salted egg yolks 20, liquor, egg wash, honey',
      steps_zh:'转化糖浆和枧水混合，分2次加入花生油搅拌至浓稠乳化|低筋和高筋面粉混合过筛，加奶粉吉士粉|将糖浆混合物倒入面粉中，刮刀翻拌成团，保鲜膜包好醒面4-6小时|咸蛋黄喷白酒后160度烤8分钟至出油但不焦，冷却后浸花生油2小时|部分莲蓉加蜂蜜调至微甜不腻，每个馅芯45g包入一个油浸蛋黄搓圆|饼皮分成每个15g，手掌按成薄片|包入馅料用虎口慢慢旋转收口，搓圆无缝|模具撒粉，饼胚轻轻压入模具，垂直用力按压2次出清晰花纹|烤箱预热220度，饼胚喷水雾入炉烤6分钟定型|取出刷第一层过筛蛋黄液，烤箱降温至170度烤8分钟|取出刷第二层蛋液，继续烤5-7分钟至饼皮金黄均匀|出炉冷却后刷一层薄花生油增亮|密封回油4-5天，饼皮由硬变软糯，油润光亮，花纹清晰立体',
      steps_en:'Mix syrup and lye water, add peanut oil in 2 batches, stir until thick and emulsified|Sift cake and bread flour, add milk and custard powder|Pour syrup mix into flour, fold into dough, cover and rest 4-6 hours|Spray yolks with liquor, bake at 160°C for 8 minutes until oily, cool and soak in peanut oil 2 hours|Mix lotus paste with honey, wrap one oil-soaked yolk in 45g paste|Divide dough into 15g pieces, flatten thin|Wrap filling, rotate and seal smoothly|Dust mold, press cake in, press firmly twice for clear pattern|Spray water, bake at 220°C for 6 minutes to set|Brush first layer of egg wash, reduce to 170°C, bake 8 minutes|Brush second layer, bake 5-7 minutes until evenly golden|Cool, brush thin peanut oil for shine|Seal and rest 4-5 days, skin softens to chewy, glossy with crisp立体 pattern'}
  ],

  // 26. 皮蛋 [Century Egg]
  26: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'皮蛋3个，姜1块，醋3勺，生抽2勺',
      ingredients_en:'Century eggs 3, ginger 1 piece, vinegar 3 tbsp, soy sauce 2 tbsp',
      steps_zh:'皮蛋剥壳，用冷开水冲洗干净|用细线或刀将皮蛋切成瓣状|姜切末，加醋和生抽调成蘸汁|皮蛋摆盘，淋上蘸汁即可',
      steps_en:'Peel century eggs, rinse with cold water|Cut into wedges with thin thread or knife|Mince ginger, mix with vinegar and soy sauce for dipping|Arrange eggs on plate, drizzle dipping sauce over'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'皮蛋3个，嫩豆腐1盒，姜1块，葱1根，花生碎少许，醋3勺，生抽2勺，香油1勺，糖少许',
      ingredients_en:'Century eggs 3, silken tofu 1 box, ginger 1, scallion 1, crushed peanuts a little, vinegar 3 tbsp, soy sauce 2 tbsp, sesame oil 1 tbsp, sugar a little',
      steps_zh:'皮蛋剥壳冲洗干净，用细线切成6瓣|嫩豆腐切片在开水中烫一下摆盘中央|皮蛋瓣围绕豆腐摆放|姜切末，加醋、生抽、香油、少许糖调成汁|淋在皮蛋和豆腐上|撒葱花和花生碎即可',
      steps_en:'Peel and rinse century eggs, cut into 6 wedges with thread|Slice tofu, blanch in boiling water, place in center of plate|Arrange egg wedges around tofu|Mince ginger, mix with vinegar, soy sauce, sesame oil and sugar|Drizzle over eggs and tofu|Sprinkle scallions and crushed peanuts'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'皮蛋3个，嫩豆腐1盒，姜1块，葱1根，花生碎，白芝麻，醋4勺，生抽2勺，香油1勺，辣椒油1勺，糖少许，盐',
      ingredients_en:'Century eggs 3, silken tofu 1, ginger 1, scallion 1, crushed peanuts, white sesame, vinegar 4 tbsp, soy sauce 2 tbsp, sesame oil 1 tbsp, chili oil 1 tbsp, sugar a little, salt',
      steps_zh:'皮蛋剥壳，用细线切成6瓣，摆放在盘子外围|嫩豆腐切片摆入开水中烫1分钟，捞出沥干摆盘中央|姜切细末，葱切花|调汁：醋、生抽、香油、辣椒油、糖、盐、姜末混合调匀|淋汁在皮蛋和豆腐上|撒葱花、花生碎和熟白芝麻即可',
      steps_en:'Peel eggs, cut into 6 wedges with thread, arrange around plate edge|Slice tofu, blanch 1 minute, drain and place in center|Mince ginger, chop scallions|Mix sauce: vinegar, soy sauce, sesame oil, chili oil, sugar, salt and ginger|Drizzle sauce over eggs and tofu|Sprinkle scallions, peanuts and white sesame'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'皮蛋4个，内脂豆腐1盒，姜1块，葱2根，蒜2瓣，红椒半个，花生碎，熟芝麻，榨菜少许，醋4勺，生抽2勺，老抽几滴，香油1勺，辣椒油1勺，花椒油几滴，糖少许，盐',
      ingredients_en:'Century eggs 4, silken tofu 1, ginger 1, scallions 2, garlic 2 cloves, red pepper half, crushed peanuts, sesame, preserved veg a little, vinegar 4 tbsp, soy sauce 2 tbsp, dark soy a few drops, sesame oil 1 tbsp, chili oil 1 tbsp, Sichuan pepper oil a few drops, sugar a little, salt',
      steps_zh:'皮蛋剥壳冲洗，用细线切成6瓣，摆盘边缘|内脂豆腐倒扣取出切成薄片，在盐水中烫30秒，捞出沥干摆盘中央|姜切细末，蒜切末，葱切花，红椒切末，榨菜切末|特调酱汁：醋、生抽、老抽、香油、辣椒油、花椒油、糖、盐、姜末、蒜末搅匀|先将酱汁淋在皮蛋和豆腐上|撒上榨菜末、红椒末、花生碎、熟芝麻和葱花|吃前拌匀',
      steps_en:'Peel and rinse eggs, cut into 6 wedges, arrange on plate edge|Invert tofu onto plate, slice, blanch in salted water 30 seconds, drain, place center|Mince ginger, garlic, scallion, red pepper and preserved veg|Mix sauce: vinegar, soy sauce, dark soy, sesame oil, chili oil, Sichuan pepper oil, sugar, salt, ginger and garlic|Drizzle sauce over eggs and tofu|Sprinkle preserved veg, red pepper, peanuts, sesame and scallions|Mix before eating'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'溏心皮蛋4个，内脂豆腐1盒，姜1块，小葱2根，蒜2瓣，红椒半个，青椒半个，花生碎，熟芝麻，榨菜，香菜，醋5勺，生抽2勺，老抽几滴，香油1勺，辣椒油1勺，花椒油几滴，白糖，盐，鸡精少许',
      ingredients_en:'Runny century eggs 4, silken tofu 1, ginger 1, scallions 2, garlic 2, red pepper half, green pepper half, crushed peanuts, sesame, preserved veg, cilantro, vinegar 5 tbsp, soy sauce 2 tbsp, dark soy a few drops, sesame oil 1 tbsp, chili oil 1 tbsp, Sichuan pepper oil a few drops, sugar, salt, chicken bouillon a little',
      steps_zh:'溏心皮蛋剥壳小心保持蛋心完整，用细线切成6瓣，摆盘外围呈放射状|内脂豆腐完整倒扣在盘中，用刀横片成两层，中间夹入少许姜末和榨菜末，再恢复原状|姜切细蓉，蒜切末，小葱切花，红椒青椒切细丁，榨菜切细末，香菜切碎|酱汁调制：姜蓉蒜末加醋、生抽、老抽、香油、辣椒油、花椒油、白糖、盐、鸡精搅匀至糖融化|先将酱汁均匀淋在豆腐上让豆腐先入味|再在皮蛋上轻刷一层酱汁|依次撒上榨菜末、青红椒丁、花生碎、熟芝麻、葱花和香菜碎|吃时从外向内拌匀',
      steps_en:'Carefully peel runny century eggs keeping yolk intact, cut into 6 wedges with thread, arrange radially on plate edge|Invert tofu onto plate, slice horizontally into 2 layers, sandwich ginger and preserved veg, restore shape|Mince ginger, garlic, scallions, dice peppers, finely chop preserved veg and cilantro|Mix sauce: ginger, garlic, vinegar, soy sauces, sesame oil, chili oil, Sichuan pepper oil, sugar, salt and chicken bouillon until sugar dissolves|Drizzle sauce over tofu first to absorb|Lightly brush sauce on eggs|Layer: preserved veg, peppers, peanuts, sesame, scallions, cilantro|Mix from outside in when eating'}
  ],

  // 27. 炒青菜 [Stir-Fried Greens]
  27: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'青菜400g，蒜3瓣，盐少许，油2勺',
      ingredients_en:'Greens 400g, garlic 3 cloves, salt a little, oil 2 tbsp',
      steps_zh:'青菜洗净，切成段|锅中放油烧热，放入蒜末爆香|放入青菜大火快速翻炒|加少许盐调味|翻炒至青菜变软即可出锅',
      steps_en:'Wash greens, cut into sections|Heat oil, sauté minced garlic until fragrant|Add greens, stir-fry on high heat|Season with a little salt|Stir-fry until softened and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'青菜500g，蒜5瓣，干辣椒2个，盐，糖少许，油2勺',
      ingredients_en:'Greens 500g, garlic 5 cloves, dried chilies 2, salt, sugar a little, oil 2 tbsp',
      steps_zh:'青菜洗净沥干水分，切段|蒜切末，干辣椒切段|锅中放油烧热，下蒜末干辣椒爆香|放入青菜大火快速翻炒约1分钟|沿锅边淋少许水产生蒸汽|加盐和少许糖调味|翻炒均匀即可出锅，保持翠绿色',
      steps_en:'Wash and drain greens, cut into sections|Mince garlic, cut chilies into segments|Heat oil, sauté garlic and chilies until fragrant|Add greens, stir-fry on high about 1 minute|Drizzle a little water along pan edge for steam|Season with salt and a little sugar|Stir well and serve, keeping bright green color'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'青菜500g，蒜5瓣，干辣椒2个，盐，糖，白胡椒粉，油2勺',
      ingredients_en:'Greens 500g, garlic 5 cloves, dried chilies 2, salt, sugar, white pepper, oil 2 tbsp',
      steps_zh:'青菜洗净沥干，切段，菜梗和菜叶分开放|蒜切末，干辣椒切段|锅中放油烧热，下蒜末和干辣椒小火爆香|先下菜梗大火翻炒30秒至变色|再下菜叶大火翻炒30秒|沿锅边淋入少许水产生蒸汽使菜更嫩|加盐、少许糖和白胡椒粉调味|大火翻炒均匀立即出锅',
      steps_en:'Wash and drain greens, cut, separate stems and leaves|Mince garlic, cut chilies|Heat oil, sauté garlic and chilies on low|Add stems first, stir-fry on high 30 seconds until color changes|Add leaves, stir-fry on high 30 seconds|Drizzle water along pan edge for steam|Season with salt, sugar and white pepper|Stir-fry on high and serve immediately'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'青菜500g，蒜6瓣，干辣椒3个，盐，糖，白胡椒粉，料酒少许，油2勺，猪油1勺',
      ingredients_en:'Greens 500g, garlic 6 cloves, dried chilies 3, salt, sugar, white pepper, wine a little, oil 2 tbsp, lard 1 tbsp',
      steps_zh:'青菜洗净沥干，菜梗斜切片，菜叶切段|蒜切片，干辣椒切段|锅中放植物油和猪油，下蒜片干辣椒爆香|先下菜梗大火翻炒至变色|加入菜叶大火翻炒，沿锅边淋少许料酒增香|沿锅边淋入少许开水产生蒸汽|加盐、糖、白胡椒粉调味|大火快速翻炒至菜叶刚变软立即出锅',
      steps_en:'Wash and drain greens, diagonally slice stems, cut leaves|Slice garlic, cut chilies|Heat vegetable oil and lard, sauté garlic and chilies|Add stems, stir-fry on high until color changes|Add leaves, drizzle wine along pan edge for aroma|Drizzle boiling water along edge for steam|Season with salt, sugar and white pepper|Stir-fry on high until leaves just soften, serve immediately'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'青菜500g，蒜8瓣，干辣椒3个，盐，糖，白胡椒粉，花雕酒少许，油2勺，猪油1勺，高汤少许',
      ingredients_en:'Greens 500g, garlic 8 cloves, dried chilies 3, salt, sugar, white pepper, huadiao wine a little, oil 2 tbsp, lard 1 tbsp, broth a little',
      steps_zh:'青菜选嫩心，洗净沥干，菜梗斜切菱形片，菜叶手撕成片|蒜切片，干辣椒剪段去籽|锅中放植物油和猪油烧至七成热，下蒜片和干辣椒段爆香至金黄|先下菜梗大火翻炒至边缘微黄|加菜叶大火快速翻炒，沿锅边淋入花雕酒产生锅气|加少许高汤盖盖焖5秒快速产生蒸汽|开盖加盐、少许糖和白胡椒粉调味|大火翻炒均匀约10秒，菜叶油亮翠绿，菜梗脆嫩入味，立即出锅装盘',
      steps_en:'Choose tender hearts, wash and drain, diagonally slice stems into diamonds, hand-tear leaves|Slice garlic, cut chilies removing seeds|Heat oil and lard to medium-high, sauté garlic and chilies until golden|Add stems, stir-fry on high until edges golden|Add leaves, drizzle huadiao wine along edge for wok hei|Add broth, cover 5 seconds for steam|Uncover, season with salt, sugar and white pepper|Stir-fry on high 10 seconds, leaves glossy green and stems crunchy, serve immediately'}
  ],

  // 28. 鱼香茄子 [Eggplant in Garlic Sauce]
  28: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'茄子3根，蒜末姜末葱花，豆瓣酱2勺，生抽2勺，糖1勺，醋1勺',
      ingredients_en:'Eggplants 3, garlic ginger scallion, chili bean paste 2 tbsp, soy sauce 2 tbsp, sugar 1 tbsp, vinegar 1 tbsp',
      steps_zh:'茄子洗净切长条|锅中放油烧热，放入茄子煎至变软|加蒜末姜末葱花炒香|加豆瓣酱炒出红油|加生抽糖醋和少许水|翻炒均匀，煮至茄子入味|撒葱花出锅',
      steps_en:'Wash eggplants, cut into long strips|Heat oil, fry eggplants until soft|Add garlic, ginger and scallion, stir until fragrant|Add chili bean paste, stir until red oil|Add soy sauce, sugar, vinegar and water|Stir well, cook until flavored|Sprinkle scallions and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'茄子3根，猪肉馅100g，蒜末姜末葱花，豆瓣酱2勺，生抽2勺，糖2勺，醋2勺，料酒，淀粉',
      ingredients_en:'Eggplants 3, ground pork 100g, garlic ginger scallion, chili bean paste 2 tbsp, soy sauce 2 tbsp, sugar 2 tbsp, vinegar 2 tbsp, wine, cornstarch',
      steps_zh:'茄子洗净切长条，撒少许盐腌10分钟去水|肉末加料酒生抽腌一下|锅中多放油，下茄子煎至两面金黄变软盛出|锅中留底油，下肉末炒散变色|加豆瓣酱、蒜末姜末炒出红油|加入茄子翻炒|调鱼香汁：生抽、糖、醋、水、淀粉调匀|倒入锅中快速翻炒，汤汁收浓即可出锅',
      steps_en:'Cut eggplants into strips, salt 10 minutes to draw water|Marinate pork with wine and soy sauce|Fry eggplants until golden and soft, set aside|Leave oil, fry pork until变色|Add chili bean paste, garlic and ginger until red oil|Return eggplants, stir|Mix sauce: soy sauce, sugar, vinegar, water and cornstarch|Pour in, stir-fry quickly until thickened, serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'茄子3根，猪肉馅150g，蒜末姜末葱花，泡椒2个，郫县豆瓣酱2勺，生抽2勺，糖2勺，醋2勺，料酒，淀粉，白胡椒粉，香油',
      ingredients_en:'Eggplants 3, ground pork 150g, garlic ginger scallion, pickled chilies 2, Pixian chili bean paste 2 tbsp, soy sauce 2 tbsp, sugar 2 tbsp, vinegar 2 tbsp, wine, cornstarch, white pepper, sesame oil',
      steps_zh:'茄子洗净切长条，加盐腌15分钟去水，挤干水分|肉馅加料酒、白胡椒粉、淀粉抓匀腌10分钟|泡椒剁碎，蒜姜切末|锅中多放油烧至六成热，下茄子炸至表面金黄变软捞出控油|锅中留底油，下肉末炒散至变色|加泡椒碎和豆瓣酱小火炒出红油|加姜末蒜末炒香|倒回茄子翻炒均匀|调鱼香汁：生抽、糖、醋、料酒、淀粉、水、香油调匀|沿锅边倒入鱼香汁大火快速翻炒至汤汁浓稠裹匀|撒葱花出锅装盘',
      steps_en:'Cut eggplant strips, salt 15 minutes, squeeze dry|Marinate pork with wine, white pepper and cornstarch 10 minutes|Chop pickled chilies, mince garlic and ginger|Deep-fry eggplant at medium-high until golden, drain|Leave oil, fry pork until变色|Add pickled chilies and chili bean paste on low until red oil|Add garlic and ginger|Return eggplant, stir|Mix sauce: soy sauce, sugar, vinegar, wine, cornstarch, water and sesame oil|Pour along pan edge, stir-fry on high until thick and coated|Sprinkle scallions and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'茄子3根，猪肉馅200g，蒜末姜末葱花，泡椒3个，郫县豆瓣酱2勺，生抽2勺，糖2.5勺，醋2.5勺，老抽半勺，料酒，淀粉，白胡椒粉，蛋清半个，香油，高汤',
      ingredients_en:'Eggplants 3, ground pork 200g, garlic ginger scallion, pickled chilies 3, Pixian chili bean paste 2 tbsp, soy sauce 2 tbsp, sugar 2.5 tbsp, vinegar 2.5 tbsp, dark soy half tbsp, wine, cornstarch, white pepper, half egg white, sesame oil, broth',
      steps_zh:'茄子切长条，加盐腌20分钟挤去黑水，表面撒薄薄一层干淀粉|肉馅加料酒、白胡椒粉、蛋清、淀粉抓匀腌15分钟|泡椒剁细蓉，姜蒜切末|调鱼香汁：生抽、老抽、糖、醋、料酒、淀粉、高汤、香油调匀|锅中多放油烧至七成热，下茄子炸至表面金黄焦香捞出控油|锅中留底油，下肉末大火炒散至金黄香酥|加泡椒蓉和豆瓣酱小火慢炒至红油透亮|下姜末蒜末葱花爆香|倒回茄子大火翻炒|沿锅边倒入鱼香汁大火快速翻炒至汤汁浓稠收紧|汤汁均匀包裹茄子时立即出锅装盘',
      steps_en:'Cut eggplant strips, salt 20 minutes, squeeze, dust with cornstarch|Marinate pork with wine, white pepper, egg white and cornstarch 15 minutes|Mash pickled chilies, mince ginger and garlic|Mix sauce: soy sauces, sugar, vinegar, wine, cornstarch, broth and sesame oil|Deep-fry eggplant at high heat until golden crispy, drain|Leave oil, fry pork on high until golden crispy|Add chili mash and bean paste on low until red oil shines|Add garlic, ginger and scallion on high|Return eggplant, stir-fry on high|Pour sauce along pan edge, stir-fry on high until thick and coats eggplant|Serve immediately when sauce wraps each piece'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'长茄子3根，猪肉馅250g，蒜末姜末葱花，泡椒4个，郫县豆瓣酱2.5勺，生抽2勺，糖3勺，醋3勺，老抽半勺，花雕酒，淀粉，白胡椒粉，蛋清半个，香油，高汤，鸡精少许',
      ingredients_en:'Long eggplants 3, ground pork 250g, garlic ginger scallion, pickled chilies 4, Pixian chili bean paste 2.5 tbsp, soy sauce 2 tbsp, sugar 3 tbsp, vinegar 3 tbsp, dark soy half tbsp, huadiao wine, cornstarch, white pepper, half egg white, sesame oil, broth, chicken bouillon a little',
      steps_zh:'茄子不去皮，切长条，淡盐水浸泡20分钟防氧化，捞出沥干撒干淀粉|猪肉馅手工剁细，加花雕酒、白胡椒粉、蛋清、淀粉、少许盐抓匀腌20分钟|泡椒剁成细蓉，姜蒜切成细米|鱼香汁：生抽2勺、糖3勺、醋3勺、老抽半勺、花雕酒1勺、淀粉1勺、高汤3勺、香油1勺、鸡精少许调匀|锅中多放油烧至七成热，下茄子炸至表皮金黄起皱捞出控油|锅中留底油，下肉末大火炒散至香酥金黄|下泡椒蓉小火炒至油红发亮|下郫县豆瓣酱继续小火炒出红油|下姜末蒜末大火爆香|倒回茄子大火翻炒至茄子完全吸收红油|沿锅边倒入调好的鱼香汁，大火快速翻炒10秒至汤汁浓稠透亮|撒葱花，快速翻匀立即出锅装盘',
      steps_en:'Keep skin on, cut strips, soak in salted water 20 minutes to prevent oxidation, drain and dust starch|Hand-chop pork for best texture, marinate with huadiao wine, white pepper, egg white, cornstarch and salt 20 minutes|Finely mash pickled chilies, mince ginger and garlic|Perfect sauce: soy sauce 2 tbsp, sugar 3 tbsp, vinegar 3 tbsp, dark soy half tbsp, huadiao wine 1 tbsp, cornstarch 1 tbsp, broth 3 tbsp, sesame oil 1 tbsp, chicken bouillon|Deep-fry eggplant at high heat until golden wrinkled, drain|Leave oil, fry pork on high until golden crispy|Fry chili mash on low until oil red and shiny|Add Pixian bean paste on low until red oil|Add garlic and ginger on high|Return eggplant, stir-fry on high until absorbs red oil|Pour sauce along pan edge, stir-fry on high for 10 seconds until thick and glossy|Sprinkle scallions, toss and serve immediately'}
  ],

  // 29. 干煸四季豆 [Dry-Fried Green Beans]
  29: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'四季豆400g，蒜3瓣，干辣椒3个，盐，生抽',
      ingredients_en:'Green beans 400g, garlic 3 cloves, dried chilies 3, salt, soy sauce',
      steps_zh:'四季豆去两头和筋，掰成段|锅中放油烧热，放入四季豆中火煎至表皮起皱|加蒜末和干辣椒炒香|加少许盐和生抽调味|翻炒均匀即可出锅',
      steps_en:'Trim green beans, break into segments|Heat oil, dry-fry beans on medium until skin wrinkles|Add garlic and chilies, stir until fragrant|Season with salt and soy sauce|Stir well and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'四季豆500g，猪肉馅100g，蒜5瓣，姜少许，干辣椒5个，花椒1勺，盐，生抽，糖少许，料酒',
      ingredients_en:'Green beans 500g, ground pork 100g, garlic 5 cloves, ginger a little, dried chilies 5, Sichuan pepper 1 tbsp, salt, soy sauce, sugar a little, wine',
      steps_zh:'四季豆去两头和筋，掰成段，沥干水分|肉馅加料酒生抽腌一下|锅中多放油，下四季豆中火煸炒至表皮起皱变软盛出|锅中留底油，下肉末炒散至金黄|加蒜末、姜末、干辣椒段、花椒炒香|倒回四季豆大火翻炒|加盐、生抽、少许糖调味|翻炒均匀即可出锅',
      steps_en:'Trim beans, break into segments, drain well|Marinate pork with wine and soy sauce|Dry-fry beans on medium until wrinkled and soft, set aside|Leave oil, fry pork until golden|Add garlic, ginger, chilies and Sichuan pepper|Return beans, stir-fry on high|Season with salt, soy sauce and a little sugar|Stir well and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'四季豆500g，猪肉馅150g，蒜6瓣，姜，干辣椒6个，花椒1.5勺，盐，生抽，老抽少许，糖，料酒，白胡椒粉，熟芝麻',
      ingredients_en:'Green beans 500g, ground pork 150g, garlic 6 cloves, ginger, dried chilies 6, Sichuan pepper 1.5 tbsp, salt, soy sauce, dark soy a little, sugar, wine, white pepper, sesame',
      steps_zh:'四季豆去筋掰成4cm长段，充分沥干水分|肉馅加料酒、白胡椒粉、少许生抽腌15分钟|锅中多放油烧至六成热，下四季豆中火煸炒至表皮起皱变软呈虎皮状盛出|锅中留底油，下肉末大火炒散至金黄酥脆|加蒜末、姜末、干辣椒段、花椒小火炒香|倒回四季豆大火翻炒|加盐、生抽、少许老抽、糖调味|大火翻炒均匀，撒熟芝麻即可出锅',
      steps_en:'Trim beans, break into 4cm segments, drain thoroughly|Marinate pork with wine, white pepper and soy sauce 15 minutes|Dry-fry beans at medium-high until wrinkled tiger-skin pattern, set aside|Leave oil, fry pork on high until golden crispy|Add garlic, ginger, chilies and Sichuan pepper on low|Return beans, stir-fry on high|Season with salt, soy sauce, dark soy and sugar|Stir well on high, sprinkle sesame and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'四季豆500g，猪肉馅200g，芽菜30g，蒜6瓣，姜，干辣椒8个，花椒2勺，盐，生抽，老抽，糖，料酒，白胡椒粉，香油，熟芝麻',
      ingredients_en:'Green beans 500g, ground pork 200g, yacai 30g, garlic 6, ginger, dried chilies 8, Sichuan pepper 2 tbsp, salt, soy sauce, dark soy, sugar, wine, white pepper, sesame oil, sesame',
      steps_zh:'四季豆去筋掰段，彻底沥干水分|肉馅加料酒、白胡椒粉、生抽、少许糖腌20分钟|芽菜切碎备用|锅中多放油烧至七成热，下四季豆炸至表皮起皱微焦，捞出控油|锅中留底油，下肉末大火炒散至金黄酥香|加芽菜碎炒出香味|加蒜末、姜末、干辣椒段、花椒小火炒出麻辣味|倒回四季豆大火翻炒|加盐、生抽、老抽、糖调味，大火翻炒均匀|淋少许香油，撒熟芝麻，翻炒几下出锅装盘',
      steps_en:'Trim beans, break, drain thoroughly|Marinate pork with wine, white pepper, soy sauce and sugar 20 minutes|Chop yacai preserved veg|Deep-fry beans at high heat until wrinkled and slightly charred, drain|Leave oil, fry pork on high until golden crispy|Add yacai, stir until fragrant|Add garlic, ginger, chilies and Sichuan pepper on low until numbing-spicy|Return beans, stir-fry on high|Season with salt, soy sauces and sugar|Drizzle sesame oil, sprinkle sesame, toss and serve'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'四季豆500g，猪肉馅250g，宜宾芽菜30g，蒜8瓣，姜，干辣椒10个，花椒2.5勺，盐，生抽，老抽，糖，花雕酒，白胡椒粉，香油，熟芝麻，鸡精少许',
      ingredients_en:'Green beans 500g, ground pork 250g, Yibin yacai 30g, garlic 8, ginger, dried chilies 10, Sichuan pepper 2.5 tbsp, salt, soy sauce, dark soy, sugar, huadiao wine, white pepper, sesame oil, sesame, chicken bouillon a little',
      steps_zh:'四季豆精选嫩豆，去筋后掰成段，用厨房纸吸干表面水分|猪肉馅选用三肥七瘦，加花雕酒、白胡椒粉、生抽、老抽腌20分钟|宜宾芽菜切碎末|锅中多放油烧至七成热180度，下四季豆炸至表皮起皱呈虎皮色约3分钟，捞出控油|锅中留底油烧热，下肉末大火炒散至金黄焦香呈酥粒状|下芽菜碎小火炒出香味|加蒜末、姜末、干辣椒段、花椒小火炒至麻辣浓郁|倒回四季豆大火快速翻炒|加盐、生抽、老抽、糖、鸡精调味，沿锅边淋少许花雕酒产生锅气|淋香油，撒熟芝麻，大火翻炒均匀立即出锅，四季豆外酥里嫩，麻辣鲜香',
      steps_en:'Choose tender beans, trim, break, pat dry with paper towel|Use 30% fat 70% lean pork, marinate with huadiao wine, white pepper, soy sauces 20 minutes|Finely chop Yibin yacai|Heat oil to 180°C, deep-fry beans until wrinkled tiger-skin (about 3 min), drain|Leave oil, fry pork on high until golden crispy granules|Add yacai on low until fragrant|Add garlic, ginger, chilies and Sichuan pepper on low until richly numbing-spicy|Return beans, stir-fry on high|Season with salt, soy sauces, sugar and chicken bouillon, drizzle huadiao wine along edge for wok hei|Drizzle sesame oil, sprinkle sesame, stir on high and serve immediately, beans crispy outside tender inside'}
  ],

  // 30. 蒜蓉小白菜 [Bok Choy with Garlic]
  30: [
    {level:1, note_zh:'新手入门级', note_en:'Beginner level',
      ingredients_zh:'小白菜400g，蒜5瓣，盐少许',
      ingredients_en:'Bok choy 400g, garlic 5 cloves, salt a little',
      steps_zh:'小白菜洗净，对半切开或整棵|蒜切末|锅中放油烧热，放入一半蒜末爆香|放入小白菜大火翻炒|加少许盐调味|炒至小白菜变软，加剩下蒜末翻炒几下即可出锅',
      steps_en:'Wash bok choy, halve or keep whole|Mince garlic|Heat oil, sauté half the garlic until fragrant|Add bok choy, stir-fry on high|Season with a little salt|Cook until soft, add remaining garlic, toss and serve'},
    {level:2, note_zh:'家常版', note_en:'Home-style',
      ingredients_zh:'小白菜500g，蒜8瓣，红椒半个，盐，糖少许',
      ingredients_en:'Bok choy 500g, garlic 8 cloves, red pepper half, salt, sugar a little',
      steps_zh:'小白菜洗净沥干，每棵对半切开|蒜切末，红椒切小丁|锅中放油烧热，下大部分蒜末爆香|放入小白菜大火快速翻炒约1分钟|沿锅边淋少许水产生蒸汽|加盐和少许糖调味|加剩下的蒜末和红椒丁|翻炒均匀即可出锅',
      steps_en:'Wash and drain bok choy, halve each|Mince garlic, dice red pepper|Heat oil, sauté most garlic until fragrant|Add bok choy, stir-fry on high about 1 minute|Drizzle water along pan edge for steam|Season with salt and a little sugar|Add remaining garlic and red pepper|Stir well and serve'},
    {level:3, note_zh:'中级提升', note_en:'Intermediate',
      ingredients_zh:'小白菜500g，蒜10瓣，红椒半个，盐，糖，白胡椒粉，蚝油少许，油',
      ingredients_en:'Bok choy 500g, garlic 10 cloves, red pepper half, salt, sugar, white pepper, oyster sauce a little, oil',
      steps_zh:'小白菜洗净沥干，较大的每棵切成四瓣|蒜切末，红椒切小丁|锅中放油烧热，下三分之二蒜末爆香至微黄|放入小白菜大火快速翻炒约1分钟|沿锅边淋少许水产生蒸汽使菜更嫩|加盐、少许糖和白胡椒粉调味|加蚝油提鲜，翻炒均匀|撒剩下的蒜末和红椒丁|大火翻炒10秒即可出锅',
      steps_en:'Wash and drain bok choy, quarter larger ones|Mince garlic, dice red pepper|Heat oil, sauté two-thirds garlic until lightly golden|Add bok choy, stir-fry on high about 1 minute|Drizzle water along edge for steam|Season with salt, sugar and white pepper|Add oyster sauce, stir well|Add remaining garlic and red pepper|Stir-fry on high 10 seconds and serve'},
    {level:4, note_zh:'高级专业', note_en:'Advanced',
      ingredients_zh:'小白菜500g，蒜12瓣，红椒半个，盐，糖，白胡椒粉，蚝油，花雕酒少许，油，猪油',
      ingredients_en:'Bok choy 500g, garlic 12 cloves, red pepper half, salt, sugar, white pepper, oyster sauce, huadiao wine a little, oil, lard',
      steps_zh:'小白菜洗净，从根部切十字刀但保持菜头相连|蒜切末，红椒切细丁|锅中放植物油和少许猪油烧热，下三分之二蒜末爆香至金黄|放入小白菜大火翻炒至变色|沿锅边淋入花雕酒增香，加少许水盖盖焖3秒产生蒸汽|开盖加盐、糖、白胡椒粉、蚝油调味|大火翻炒均匀|最后加剩下的生蒜末和红椒丁|大火快速翻炒5秒，生蒜香与熟蒜香交融，立即出锅',
      steps_en:'Wash bok choy, cut cross at root keeping head intact|Mince garlic, dice red pepper|Heat vegetable oil and lard, sauté two-thirds garlic until golden|Add bok choy, stir-fry on high until color changes|Drizzle huadiao wine along edge, add water, cover 3 seconds for steam|Uncover, season with salt, sugar, white pepper and oyster sauce|Stir on high|Add remaining raw garlic and red pepper|Stir on high 5 seconds, raw and cooked garlic aromas blend, serve immediately'},
    {level:5, note_zh:'大师级', note_en:'Master level',
      ingredients_zh:'小白菜500g，蒜15瓣，红椒半个，黄椒半个，盐，糖，白胡椒粉，蚝油，花雕酒，油，猪油，高汤少许',
      ingredients_en:'Bok choy 500g, garlic 15 cloves, red pepper half, yellow pepper half, salt, sugar, white pepper, oyster sauce, huadiao wine, oil, lard, broth a little',
      steps_zh:'小白菜选用鲜嫩整棵，洗净沥干，根部切十字刀美观易熟|蒜切末，红椒和黄椒切细丁|锅中放植物油和猪油烧至六成热，下三分之二蒜末爆香至浅金黄|放入小白菜大火翻炒至菜叶变软|沿锅边淋入花雕酒产生香气，加少许高汤盖盖焖5秒|开盖大火收一下汁，加盐、糖、白胡椒粉、蚝油调味|放入剩下的生蒜末和双色彩椒丁|大火快速翻炒均匀，生蒜的辛香与熟蒜的焦香完美融合|立即出锅装盘，小白菜翠绿鲜嫩，蒜香浓郁',
      steps_en:'Choose tender whole bok choy, wash, drain, cut cross at root for beauty and even cooking|Mince garlic, dice red and yellow peppers|Heat oil and lard to medium, sauté two-thirds garlic until light golden|Add bok choy, stir-fry on high until leaves soften|Drizzle huadiao wine along edge, add broth, cover 5 seconds|Uncover, reduce sauce on high, season with salt, sugar, white pepper and oyster sauce|Add remaining raw garlic and colorful pepper dice|Stir-fry on high, raw garlic sharpness and cooked garlic aroma perfectly blend|Serve immediately, bok choy is bright green and tender, garlic fragrance rich'}
  ]
};

db.serialize(() => {
  console.log('删除菜谱21-30旧数据...');
  db.run('DELETE FROM levels WHERE recipe_id >= 21 AND recipe_id <= 30');

  const insert = db.prepare(`INSERT INTO levels 
    (recipe_id, level, ingredients_zh, ingredients_en, steps_zh, steps_en, note_zh, note_en) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);

  let total = 0;
  for (let rid = 21; rid <= 30; rid++) {
    const levels = data[rid];
    if (!levels) continue;
    for (const l of levels) {
      insert.run(rid, l.level, l.ingredients_zh, l.ingredients_en, l.steps_zh, l.steps_en, l.note_zh, l.note_en);
      total++;
    }
  }
  insert.finalize();

  db.all('SELECT recipe_id, COUNT(*) as cnt FROM levels WHERE recipe_id>=21 AND recipe_id<=30 GROUP BY recipe_id ORDER BY recipe_id', (e, r) => {
    if (e) console.error(e);
    else {
      console.log(`\n========== 导入完成！共 ${total} 条记录 ==========`);
      r.forEach(row => console.log(`菜谱${String(row.recipe_id).padStart(2)}: ${row.cnt}个Level ✅`));
      db.all("SELECT recipe_id, level FROM levels WHERE recipe_id>=21 AND recipe_id<=30 AND (ingredients_en IS NULL OR ingredients_en='')", (e2, r2) => {
        if (r2.length === 0) console.log('\n✅ 所有英文数据均非空！');
        else r2.forEach(row => console.log(`⚠️ 菜谱${row.recipe_id} Level ${row.level} 英文数据为空`));
        db.close();
      });
    }
  });
});