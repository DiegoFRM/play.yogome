var monstersCards = {}

monstersCards.monsterList = function()
{
	var monster = [
        //abisCards
        {name:'Abis Earth', image:'abisCards/abis_Earth.png', card:'s', xp:100, hp:100, atk:100 }, //0
        
        {name:'Abis Fire', image: 'abisCards/abis_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //1
        
        {name:'Abis Water', image: 'abisCards/abis_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //2
        
        {name:'Abis Wind', image: 'abisCards/abis_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //3
        
        //angelaCards
        {name: 'Angela Earth', image: 'angelaCards/angela_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //4
        
        {name: 'Angela Fire', image: 'angelaCards/angela_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //5
        
        {name: 'Angela Water', image: 'angelaCards/angela_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //6
        
        {name: 'Angela Wind', image: 'angelaCards/angela_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //7
        
        //beanCards
        {name: 'Bean Earth', image: 'beanCards/bean_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //8
        
        {name: 'Bean Fire', image: 'beanCards/bean_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //9

        {name: 'Bean Water', image: 'beanCards/bean_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //10
        
        {name: 'Bean Wind', image: 'beanCards/bean_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //11
        
        //beastBotCards
        {name: 'Beast Bot Earth', image: 'beastBotCards/beastBot_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //12

        {name: 'Beast Bot Fire', image: 'beastBotCards/beastBot_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //13

        {name: 'Beast Bot Water', image: 'beastBotCards/beastBot_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //14

        {name: 'Beast Bot Wind', image: 'beastBotCards/beastBot_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //15

        //bubbleMakerCards
        {name: 'Bubble Maker Earth', image: 'bubbleMakerCards/bubbleMaker_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //16   

        {name: 'BubbleMakerFire', image: 'bubbleMakerCards/bubbleMaker_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //17

        {name: 'Bubble Maker Water', image: 'bubbleMakerCards/bubbleMaker_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //18 

        {name: 'Bubble Maker Wind', image: 'bubbleMakerCards/bubbleMaker_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //19
        
        //cicliCards
        {name: 'Cicli Earth', image: 'cicliCards/cicli_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //20
 
        {name: 'Cicli Fire', image: 'cicliCards/cicli_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //21
 
        {name: 'Cicli Water', image: 'cicliCards/cicli_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //22
 
        {name: 'Cicli Wind', image: 'cicliCards/cicli_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //23
        
        //copbotCards
        {name: 'Copbot Earth', image: 'copbotCards/copbot_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //24   
 
        {name: 'Copbot Fire', image: 'copbotCards/copbot_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //25
 
        {name: 'Copbot Water', image: 'copbotCards/copbot_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //26  
 
        {name: 'Copbot Wind', image: 'copbotCards/copbot_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //27
        
        //dinoNinjaCards
        {name: 'Dino Ninja Earth', image: 'dinoNinjaCards/dinoNinja_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //28  
 
        {name: 'Dino Ninja Fire', image: 'dinoNinjaCards/dinoNinja_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //29
 
        {name: 'Dino Ninja Water', image: 'dinoNinjaCards/dinoNinja_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //30  
 
        {name: 'Dino Ninja Wind', image: 'dinoNinjaCards/dinoNinja_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //31
        
        //dividerCards
        {name: 'Divider Earth', image: 'dividerCards/divider_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //32  
 
        {name: 'Divider Fire', image: 'dividerCards/divider_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //33
 
        {name: 'Divider Water', image: 'dividerCards/divider_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //34 
 
        {name: 'Divider Wind', image: 'dividerCards/divider_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //35
        
        //dropCards
        {name: 'Drop Earth', image: 'dropCards/drop_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //36   
 
        {name: 'Drop Fire', image: 'dropCards/drop_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //37
 
        {name: 'Drop Water', image: 'dropCards/drop_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //38
 
        {name: 'Drop Wind', image: 'dropCards/drop_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //39
        
        //dummyCards
        {name: 'Dummy Card', image: 'dummyCards/dummyCard.png', card: 's', xp: 100, hp: 100, atk: 100 }, //40   
        
        //emotiboyCards
        {name: 'Emotiboy Earth', image: 'emotiboyCards/emotiboy_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //41   
 
        {name: 'Emotiboy Fire', image: 'emotiboyCards/emotiboy_Fire.png', card: 's', xp: 100, hp: 100, atk: 100}, //42
 
        {name: 'Emotiboy Water', image: 'emotiboyCards/emotiboy_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //43 
 
        {name: 'Emotiboy Wind', image: 'emotiboyCards/emotiboy_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //44
        
        //enchantressCards
        {name: 'Enchantress Earth', image: 'enchantressCards/enchantress_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //45   
 
        {name: 'Enchantress Fire', image: 'enchantressCards/enchantress_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //46
 
        {name: 'Enchantress Water', image: 'enchantressCards/enchantress_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //47  
 
        {name: 'Enchantress Wind', image: 'enchantressCards/enchantress_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //48
        
        //fungoCards
        {name: 'Fungo Earth', image: 'fungoCards/fungo_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //49  
 
        {name: 'Fungo Fire', image: 'fungoCards/fungo_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //50
 
        {name: 'Fungo Water', image: 'fungoCards/fungo_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //51 
 
        {name: 'Fungo Wind', image: 'fungoCards/fungo_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //52
        
        //gabbroCards
        {name: 'Gabbro Earth', image: 'gabbroCards/gabbro_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //53  
 
        {name: 'Gabbro Fire', image: 'gabbroCards/gabbro_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //54
 
        {name: 'Gabbro Water', image: 'gabbroCards/gabbro_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //55 
 
        {name: 'Gabbro Wind', image: 'gabbroCards/gabbro_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //56
        
        //glusyCards
        {name: 'glusy Earth', image: 'glusyCards/glusy_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //57   

        {name: 'Glusy Fire', image: 'glusyCards/glusy_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //58

        {name: 'Glusy Water', image: 'glusyCards/glusy_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //59 
 
        {name: 'Glusy Wind', image: 'glusyCards/glusy_Wind.png', card: 's', xp: 100, hp: 100, atk: 100}, //60
 
        //goblinCards
        {name: 'Goblin Earth', image: 'goblinCards/goblin_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //61   

        {name: 'Goblin Fire', image: 'goblinCards/goblin_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //62

        {name: 'Goblin Water', image: 'goblinCards/goblin_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //63 

        {name: 'Goblin Wind', image: 'goblinCards/goblin_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //64
        
        //kingPenguinCards
        {name: 'King Penguin Earth', image: 'kingPenguinCards/kingPenguin_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //65   

        {name: 'King Penguin Fire', image: 'kingPenguinCards/kingPenguin_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //66

        {name: 'King Penguin Water', image: 'kingPenguinCards/kingPenguin_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //67 

        {name: 'King Penguin Wind', image: 'kingPenguinCards/kingPenguin_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //68
        
        //legumeCards
        {name: 'Legume Earth', image: 'legumeCards/legume_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //69

        {name: 'Legume Fire', image: 'legumeCards/legume_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //70

        {name: 'Legume Water', image: 'legumeCards/legume_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //71 

        {name: 'Legume Wind', image: 'legumeCards/legume_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //72
        
        //linCards
        {name: 'Lin Earth', image: 'linCards/lin_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //73   

        {name: 'Lin Fire', image: 'linCards/lin_Fire.png', card: 's', xp: 100, hp: 100, atk: 100}, //74

        {name: 'Lin Water', image: 'linCards/lin_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //75 

        {name: 'Lin Wind', image: 'linCards/lin_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //76
        
        //lizoCards
        {name: 'Lizo Earth', image: 'lizoCards/lizo_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //77   

        {name: 'Lizo Fire', image: 'lizoCards/lizo_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //78

        {name: 'Lizo Water', image: 'lizoCards/lizo_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //79

        {name: 'Lizo Wind', image: 'lizoCards/lizo_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //80
        
        //madBaconCards
        {name: 'Mad Bacon Earth', image: 'madBaconCards/madBacon_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //81   

        {name: 'Mad Bacon Fire', image: 'madBaconCards/madBacon_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //82

        {name: 'Mad Bacon Water', image: 'madBaconCards/madBacon_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //83 

        {name: 'MadBaconWind', image: 'madBaconCards/madBacon_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //84
        
        //magicatCards
        {name: 'Magicat Earth', image: 'magicatCards/magicat_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //85 

        {name: 'Magicat Fire', image: 'magicatCards/magicat_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //86

        {name: 'Magicat Water', image: 'magicatCards/magicat_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //87 

        {name: 'MagicatWind', image: 'magicatCards/magicat_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //88
        
        //monkeyCards
        {name: 'Monkey Earth', image: 'monkeyCards/monkey_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //89   

        {name: 'Monkey Fire', image: 'monkeyCards/monkey_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //90

        {name: 'Monkey Water', image: 'monkeyCards/monkey_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //91 

        {name: 'Monkey Wind', image: 'monkeyCards/monkey_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //92
        
        //mummyCards
        {name: 'Mummy Earth', image: 'mummyCards/mummy_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //93  
         
        {name: 'Mummy Fire', image: 'mummyCards/mummy_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //94

        {name: 'Mummy Water', image: 'mummyCards/mummy_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //95  

        {name: 'Mummy Wind', image: 'mummyCards/mummy_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //96
        
        //ogreCards
        {name: 'Ogre Earth', image: 'ogreCards/ogre_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //97   

        {name: 'Ogre Fire', image: 'ogreCards/ogre_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //98

        {name: 'Ogre Water', image: 'ogreCards/ogre_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //99 

        {name: 'Ogre Wind', image: 'ogreCards/ogre_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //100
        
        //orbotCards
        {name: 'Orbot Earth', image: 'orbotCards/orbot_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //101  

        {name: 'Orbot Fire', image: 'orbotCards/orbot_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //102

        {name: 'Orbot Water', image: 'orbotCards/orbot_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //103 

        {name: 'Orbot Wind', image: 'orbotCards/orbot_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //104
        
        //pigbotCards
        {name: 'Pigbot Earth', image: 'pigbotCards/pigbot_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //105   

        {name: 'Pigbot Fire', image: 'pigbotCards/pigbot_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //106

        {name: 'Pigbot Water', image: 'pigbotCards/pigbot_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //107 

        {name: 'Pigbot Wind', image: 'pigbotCards/pigbot_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //108
        
        //pirateCards
        {name: 'Pirate Earth', image: 'pirateCards/pirate_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //109  

        {name: 'Pirate Fire', image: 'pirateCards/pirate_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //110

        {name: 'Pirate Water', image: 'pirateCards/pirate_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //111 

        {name: 'Pirate Wind', image: 'pirateCards/pirate_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //112
        
        //pixieCards
        {name: 'Pixie Earth', image: 'pixieCards/pixie_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //113   

        {name: 'Pixie Fire', image: 'pixieCards/pixie_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //114

        {name: 'Pixie Water', image: 'pixieCards/pixie_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //115  

        {name: 'Pixie Wind', image: 'pixieCards/pixie_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //116
        
        //platypusCards
        {name: 'Platypus Earth', image: 'platypusCards/platypus_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //117   

        {name: 'Platypus Fire', image: 'platypusCards/platypus_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //118

        {name: 'Platypus Water', image: 'platypusCards/platypus_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //119 

        {name: 'Platypus Wind', image: 'platypusCards/platypus_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //120
        
        //plushBunnyCards
        {name: 'Plush Bunny Earth', image: 'plushBunnyCards/plushBunny_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //121   

        {name: 'Plush Bunny Fire', image: 'plushBunnyCards/plushBunny_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //121

        {name: 'Plush Bunny Water', image: 'plushBunnyCards/plushBunny_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //123  

        {name: 'Plush Bunny Wind', image: 'plushBunnyCards/plushBunny_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //124
        
        //ponyaCards
        {name: 'Ponya Earth', image: 'ponyaCards/ponya_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //125   

        {name: 'Ponya Fire', image: 'ponyaCards/ponya_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //126

        {name: 'Ponya Water', image: 'ponyaCards/ponya_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //127 

        {name: 'Ponya Wind', image: 'ponyaCards/ponya_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //128
        
        //reyenitoCards
        {name: 'El Reyenito Earth', image: 'reyenitoCards/reyenito_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //129   
 
        {name: 'El Reyenito Fire', image: 'reyenitoCards/reyenito_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //130
 
        {name: 'El Reyenito Water', image: 'reyenitoCards/reyenito_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //131  
 
        {name: 'El Reyenito Wind', image: 'reyenitoCards/reyenito_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //132
        
        //rinoDangerCards
        {name: 'Rino Danger Earth', image: 'rinoDangerCards/rinoDanger_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //133   
 
        {name: 'Rino Danger Fire', image: 'rinoDangerCards/rinoDanger_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //134
 
        {name: 'Rino Danger Water', image: 'rinoDangerCards/rinoDanger_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //135 
 
        {name: 'Rino Danger Wind', image: 'rinoDangerCards/rinoDanger_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //136
        
        //robotoCards
        {name: 'Roboto Earth', image: 'robotoCards/roboto_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //137   
 
        {name: 'Roboto Fire', image: 'robotoCards/roboto_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //138
 
        {name: 'Roboto Water', image: 'robotoCards/roboto_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //139 
 
        {name: 'Roboto Wind', image: 'robotoCards/roboto_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //140
        
        //sargentBearCards
        {name: 'Sargent Bear Earth', image: 'sargentBearCards/sargentBear_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //141  
        
        {name: 'Sargent Bear Fire', image: 'sargentBearCards/sargentBear_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //142

        {name: 'Sargent Bear Water', image: 'sargentBearCards/sargentBear_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //143  

        {name: 'Sargent Bear Wind', image: 'sargentBearCards/sargentBear_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //144
        
        //scalesCards
        {name: 'Scales Earth', image: 'scalesCards/scales_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //145   

        {name: 'Scales Fire', image: 'scalesCards/scales_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //146

        {name: 'Scales Water', image: 'scalesCards/scales_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //147 

        {name: 'Scales Wind', image: 'scalesCards/scales_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //148

        
        //scarecrowCards
        {name: 'Scarecrow Earth', image: 'scarecrowCards/scarecrow_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //149  

        {name: 'Scarecrow Fire', image: 'scarecrowCards/scarecrow_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //150

        {name: 'Scarecrow Water', image: 'scarecrowCards/scarecrow_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //151 

        {name: 'Scarecrow Wind', image: 'scarecrowCards/scarecrow_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //152
        
        //sergeCards
        {name: 'Serge Earth', image: 'sergeCards/serge_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //153   

        {name: 'Serge Fire', image: 'sergeCards/serge_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //154

        {name: 'Serge Water', image: 'sergeCards/serge_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //155 

        {name: 'Serge Wind', image: 'sergeCards/serge_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //156
        
        //serpentorCards
        {name: 'Serpentor Earth', image: 'serpentorCards/serpentor_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //157   

        {name: 'Serpentor Fire', image: 'serpentorCards/serpentor_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //158

        {name: 'Serpentor Water', image: 'serpentorCards/serpentor_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //159  

        {name: 'Serpentor Wind', image: 'serpentorCards/serpentor_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //160
        
        //shadowbunnyCards
        {name: 'Shadowbunny Earth', image: 'shadowbunnyCards/shadowbunny_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //161   

        {name: 'Shadowbunny Fire', image: 'shadowbunnyCards/shadowbunny_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //162

        {name: 'Shadowbunny Water', image: 'shadowbunnyCards/shadowbunny_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //163  

        {name: 'Shadowbunny Wind', image: 'shadowbunnyCards/shadowbunny_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //164
        
        //spiderOrbCards
        {name: 'Spider Orb Earth', image: 'spiderOrbCards/spiderOrb_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //165  

        {name: 'Spider Orb Fire', image: 'spiderOrbCards/spiderOrb_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //166

        {name: 'Spider Orb Water', image: 'spiderOrbCards/spiderOrb_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //167 

        {name: 'Spider Orb Wind', image: 'spiderOrbCards/spiderOrb_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //168
        
        //spikeCards
        {name: 'Spike Earth', image: 'spikeCards/spike_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //169   

        {name: 'Spike Fire', image: 'spikeCards/spike_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //170

        {name: 'Spike Water', image: 'spikeCards/spike_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //171  

        {name: 'Spike Wind', image: 'spikeCards/spike_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //172
        
        //splashCards
        {name: 'Splash Earth', image: 'splashCards/splash_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //173   

        {name: 'Splash Fire', image: 'splashCards/splash_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //174

        {name: 'splash Water', image: 'splashCards/splash_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //175  

        {name: 'Splash Wind', image: 'splashCards/splash_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //176
        
        //sunnyCards
        {name: 'Sunny Earth', image: 'sunnyCards/sunny_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //177   

        {name: 'Sunny Fire', image: 'sunnyCards/sunny_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //178

        {name: 'Sunny Water', image: 'sunnyCards/sunny_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //179

        {name: 'Sunny Wind', image: 'sunnyCards/sunny_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //180
        
        //tankCards
        {name: 'Tank Earth', image: 'tankCards/tank_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //181 

        {name: 'Tank Fire', image: 'tankCards/tank_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //182

        {name: 'Tank Water', image: 'tankCards/tank_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //183 

        {name: 'Tank Wind', image: 'tankCards/tank_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //184
        
        //teddyBearCards
        {name: 'Teddy Bear Earth', image: 'teddyBearCards/teddyBear_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //185   

        {name: 'Teddy Bear Fire', image: 'teddyBearCards/teddyBear_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //186

        {name: 'Teddy Bear Water', image: 'teddyBearCards/teddyBear_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //187  

        {name: 'Teddy Bear Wind', image: 'teddyBearCards/teddyBear_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //188
        
        //tikTokCards
        {name: 'Tik Tok Earth', image: 'tikTokCards/tikTok_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //189   

        {name: 'Tik Tok Fire', image: 'tikTokCards/tikTok_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //190

        {name: 'Tik Tok Water', image: 'tikTokCards/tikTok_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //191

        {name: 'Tik Tok Wind', image: 'tikTokCards/tikTok_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //192
        
        //toadCards
        {name: 'Toad Earth', image: 'toadCards/toad_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //193   

        {name: 'Toad Fire', image: 'toadCards/toad_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //194

        {name: 'Toad Water', image: 'toadCards/toad_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //195 

        {name: 'Toad Wind', image: 'toadCards/toad_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //196
        
        //toxicCards
        {name: 'Toxic Earth', image: 'toxicCards/toxic_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //197   

        {name: 'Toxic Fire', image: 'toxicCards/toxic_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //198

        {name: 'Toxic Water', image: 'toxicCards/toxic_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //199 

        {name: 'Toxic Wind', image: 'toxicCards/toxic_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //200
        
        //treemoCards
        {name: 'Treemo Earth', image: 'treemoCards/treemo_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //201   
         
        {name: 'Treemo Fire', image: 'treemoCards/treemo_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //202

        {name: 'Treemo Water', image: 'treemoCards/treemo_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //203  

        {name: 'Treemo Wind', image: 'treemoCards/treemo_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //204
        
        //trexCards
        {name: 'Trex Earth', image: 'trexCards/trex_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //205   

        {name: 'Trex Fire', image: 'trexCards/trex_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //206

        {name: 'Trex Water', image: 'trexCards/trex_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //207

        {name: 'Trex Wind', image: 'trexCards/trex_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //208
        
        //trimonsterCards
        {name: 'Trimonster Earth', image: 'trimonsterCards/trimonster_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //209   

        {name: 'Trimonster Fire', image: 'trimonsterCards/trimonster_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //210

        {name: 'Trimonster Water', image: 'trimonsterCards/trimonster_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //211  

        {name: 'Trimonster Wind', image: 'trimonsterCards/trimonster_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //212
        
        //tritonusCards
        {name: 'Tritonus Earth', image: 'tritonusCards/tritonus_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //213  

        {name: 'Tritonus Fire', image: 'tritonusCards/tritonus_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //214

        {name: 'Tritonus Water', image: 'tritonusCards/tritonus_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //215 

        {name: 'Tritonus Wind', image: 'tritonusCards/tritonus_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //216
        
        //twoHeadsCards
        {name: 'TwoHeads Earth', image: 'twoHeadsCards/twoHeads_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //217   

        {name: 'TwoHeads Fire', image: 'twoHeadsCards/twoHeads_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //218

        {name: 'TwoHeads Water', image: 'twoHeadsCards/twoHeads_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //219 

        {name: 'TwoHeads Wind', image: 'twoHeadsCards/twoHeads_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //220
        
        //wifiCards
        {name: 'Wifi Earth', image: 'wifiCards/wifi_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //221   

        {name: 'Wifi Fire', image: 'wifiCards/wifi_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //222

        {name: 'Wifi Water', image: 'wifiCards/wifi_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //223 

        {name: 'Wifi Wind', image: 'wifiCards/wifi_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //224
        
        //yetiCards
        {name: 'Yeti Earth', image: 'yetiCards/yeti_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //225   

        {name: 'Yeti Fire', image: 'yetiCards/yeti_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //226

        {name: 'Yeti Water', image: 'yetiCards/yeti_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //227 

        {name: 'Yeti Wind', image: 'yetiCards/yeti_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //228
        
        //zombieCards
        {name: 'Zombie Earth', image: 'zombieCards/zombie_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //229   

        {name: 'Zombie Fire', image: 'zombieCards/zombie_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //230

        {name: 'Zombie Water', image: 'zombieCards/zombie_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //231  

        {name: 'Zombie Wind', image: 'zombieCards/zombie_Wind.png', card: 's', xp: 100, hp: 100, atk: 100 }, //232
        
        //zuhlurkCards
        {name: 'Zuhlurk Earth', image: 'zuhlurkCards/zuhlurk_Earth.png', card: 's', xp: 100, hp: 100, atk: 100 }, //233  

        {name: 'Zuhlurk Fire', image: 'zuhlurkCards/zuhlurk_Fire.png', card: 's', xp: 100, hp: 100, atk: 100 }, //234

        {name: 'Zuhlurk Water', image: 'zuhlurkCards/zuhlurk_Water.png', card: 's', xp: 100, hp: 100, atk: 100 }, //235 

        {name: 'Zuhlurk Wind', image: 'zuhlurkCards/zuhlurk_Wind.png', card: 's', xp: 100, hp: 100, atk: 100}, //236
    ]
    
    return monster
}

monstersCards.getMonster = function(index){
	
	var selectMonster = monstersCards.monsterList()
     
    return selectMonster[index].image
}
