import { Recipe } from '../types/recipe';

export const initialRecipes: Recipe[] = [
  // --- PASTA & ITALIENSKT ---
  {
    id: 'vodka-ndujapasta-burrata',
    title: 'Krämig Vodka- & Ndujapasta med Burrata',
    description: 'En riktig knockout till helgmiddag. Stark nduja och vodka kokas ihop med grädde till en silkeslen sås och toppas med en hel krämig burrata.',
    source: {
      name: 'Instagram @merikwidegren',
      url: 'https://www.instagram.com/reel/DJyz94jNcV3/',
    },
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Pasta',
    tags: ['Pasta', 'Helglyx', 'Under 30 min', 'Nduja', 'Burrata'],
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍝',
    featured: true,
    ingredientGroups: [
      {
        name: 'Pasta & Sås',
        ingredients: [
          { name: 'Pasta (rigatoni, paccheri eller penne)', amount: 400, unit: 'g' },
          { name: 'Nduja', amount: 100, unit: 'g', notes: 'mer om du gillar hetta' },
          { name: 'Schalottenlökar', amount: 2, unit: 'st', notes: 'finhackade' },
          { name: 'Vitlöksklyftor', amount: 2, unit: 'st', notes: 'finhackade' },
          { name: 'Vodka', amount: 0.5, unit: 'dl' },
          { name: 'Tomatpuré', amount: 4, unit: 'msk' },
          { name: 'Vispgrädde', amount: 4, unit: 'dl' },
          { name: 'Parmigiano Reggiano', amount: 2, unit: 'dl', notes: 'färskriven' },
          { name: 'Rödvins- eller vitvinsvinäger', amount: 1, unit: 'tsk', notes: 'några stänk för syra' },
          { name: 'Olivolja', amount: 2, unit: 'msk', notes: 'till pannan' },
          { name: 'Färsk basilika', amount: 2, unit: 'msk', notes: 'grovhackad' },
          { name: 'Salt & svartpeppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Topping',
        ingredients: [
          { name: 'Burrata', amount: 2, unit: 'st', notes: 'delade på mitten' },
          { name: 'Extra riven parmesan & basilika', notes: 'snåla inte!' }
        ]
      }
    ],
    steps: [
      {
        title: 'Pastavattnet på!',
        text: 'Koka upp rikligt med saltat vatten och koka pastan al dente (dra av 1–2 minuter från paketet). Spara 1–2 dl av pastavattnet innan du häller av!'
      },
      {
        title: 'Mjukstek löken',
        text: 'Hetta upp olivolja i en djup panna på medelvärme. Fräs schalottenlök och vitlök mjukt utan att det tar färg. Stänk i lite vinäger.'
      },
      {
        title: 'I med nduja & tomatpuré',
        text: 'Klicka i tomatpurén och låt den steka med i nån minut så den tappar råheten. Tillsätt ndujan och låt den smälta samman med löken.'
      },
      {
        title: 'Vodkan & grädden',
        text: 'Häll i vodkan och låt den ånga av i 30 sekunder. Slå på vispgrädden, rör ihop och låt såsen sjuda ihop på låg värme i 3–5 minuter tills den blir tjock och krämig.'
      },
      {
        title: 'Blanda ihop allt',
        text: 'Vänd ner riven parmesan i såsen. Smaka av med salt och peppar. Släng ner den nykokta pastan direkt i såsen, häll i en skvätt pastavatten och rör runt ordentligt så såsen kramar om varje pastabit.'
      },
      {
        title: 'Servera!',
        text: 'Lägg upp i djupa tallrikar. Toppa med en halv burrata, färsk basilika och riv över extra parmesan.'
      }
    ],
    chefTips: [
      'Nduja är mjuk kalabrisk salamifärs med rejält tryck i. Börja med 100g och öka om du vill svettas lite mer.',
      'Alkoholen kokar bort direkt men hjälper till att runda av och binda ihop tomaterna och grädden perfekt.'
    ]
  },
  {
    id: 'kramig-salsicciapasta',
    title: 'Krämig Salsicciapasta med Citron & Salvia',
    description: 'En av mina absoluta favoriter. Kryddig salsiccia, krispig salvia, vitlök och citronzest som skär genom den fylliga gräddsåsen.',
    source: {
      name: 'Mikaels Favorit',
    },
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Pasta',
    tags: ['Snabbt', 'Under 30 min', 'Helglyx', 'Pasta'],
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍝',
    featured: false,
    ingredientGroups: [
      {
        name: 'Ingredienser',
        ingredients: [
          { name: 'Rigatoni eller mezze maniche', amount: 400, unit: 'g' },
          { name: 'Färsk salsicciakorv (eller färs)', amount: 450, unit: 'g', notes: 'klämd ur skinnet' },
          { name: 'Vitlöksklyftor', amount: 2, unit: 'st', notes: 'finrivna' },
          { name: 'Schalottenlök', amount: 2, unit: 'st', notes: 'finhackade' },
          { name: 'Vispgrädde (40%)', amount: 2.5, unit: 'dl' },
          { name: 'Torrt vitt vin', amount: 1, unit: 'dl', notes: 'eller matlagningsvin' },
          { name: 'Kalvfond eller kycklingfond', amount: 1.5, unit: 'msk' },
          { name: 'Färsk salvia', amount: 1, unit: 'kruka', notes: 'strimlad' },
          { name: 'Citron', amount: 1, unit: 'st', notes: 'finrivet skal & 1 msk saft' },
          { name: 'Parmigiano Reggiano', amount: 2, unit: 'dl', notes: 'färskriven' },
          { name: 'Olivolja & smör', amount: 2, unit: 'msk', notes: 'till stekning' },
          { name: 'Salt & nymalen svartpeppar', notes: 'efter smak' },
        ]
      }
    ],
    steps: [
      {
        title: 'Koka pastan',
        text: 'Koka pastan i saltat vatten 2 minuter kortare än vad paketet säger. Häll inte bort pastavattnet – spara ett par deciliter!'
      },
      {
        title: 'Bryn salsiccian',
        text: 'Hetta upp olivolja i en djup stekpanna. Nyp ner små bitar av salsiccian och stek på bra värme tills den fått riktigt fin färg och krisp.'
      },
      {
        title: 'I med lök, salvia & vin',
        text: 'Sänk värmen lite, vänd ner schalottenlök, vitlök och salvia. Låt fräsa med i ett par minuter utan att brännas. Häll i vinet och låt det koka ner till hälften.'
      },
      {
        title: 'Grädden och pastasammanfogning',
        text: 'Slå på grädde och fond, låt puttra i 3–4 minuter. Vänd ner pastan direkt i såsen tillsammans med 0.5 dl pastavatten och hälften av parmesanen. Rör runt energiskt så det blir krämigt och glansigt.'
      },
      {
        title: 'Toppa och njut',
        text: 'Rör i citronzest, citronsaft, nymalen svartpeppar och smaka av med lite salt. Servera med resten av parmesanen.'
      }
    ],
    chefTips: [
      'Pastavattnet är nyckeln! Stärkelsen gör att såsen och osten emulgerar ihop perfekt istället för att bli rinnig.',
      'Släng i en nypa chiliflakes med vitlöken om du vill ha lite extra sting.'
    ]
  },
  {
    id: 'pasta-flaskfile-cheddar-purjo',
    title: 'Pasta med Fläskfilé, Purjolök & Cheddar',
    description: 'Enkel, krämig och riktigt god vardagspasta med strimlad fläskfilé, smält cheddar och massor av färsk basilika.',
    source: {
      name: 'Tasteline / Notion',
      url: 'https://www.tasteline.com/recept/pasta-med-flaskfile/',
    },
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Pasta',
    tags: ['Pasta', 'Vardag', 'Snabbt', 'Fläskfilé'],
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍝',
    featured: false,
    ingredientGroups: [
      {
        name: 'Ingredienser',
        ingredients: [
          { name: 'Penne eller rigatoni', amount: 400, unit: 'g' },
          { name: 'Fläskfilé', amount: 500, unit: 'g', notes: 'putsad och strimlad' },
          { name: 'Purjolök', amount: 0.5, unit: 'st', notes: 'strimlad' },
          { name: 'Vitlöksklyftor', amount: 2, unit: 'st', notes: 'finhackade' },
          { name: 'Crème fraîche (34%)', amount: 2, unit: 'dl' },
          { name: 'Lagrad cheddarost', amount: 75, unit: 'g', notes: 'riven' },
          { name: 'Färsk basilika', amount: 1, unit: 'kruka', notes: 'grovhackad' },
          { name: 'Smör eller rapsolja', amount: 2, unit: 'msk', notes: 'till stekning' },
          { name: 'Salt & nymalen svartpeppar', notes: 'efter smak' }
        ]
      }
    ],
    steps: [
      {
        title: 'Koka pastan',
        text: 'Koka penne i saltat vatten tills den är al dente.'
      },
      {
        title: 'Fräs kött och lök',
        text: 'Hetta upp en klick smör i pannan och bryn fläskfilé, purjolök och vitlök på medelhög värme tills köttet fått fin färg och är genomstekt.'
      },
      {
        title: 'Krämig cheddarsås',
        text: 'Krydda med salt och svartpeppar. Rör ner crème fraîche och riven cheddar. Låt sjuda ihop på låg värme i ett par minuter så osten smälter fint.'
      },
      {
        title: 'Slå ihop och servera',
        text: 'Vänd ner den nykokta pastan och massor av grovhackad basilika direkt i såsen. Servera genast!'
      }
    ],
    chefTips: [
      'Ta en vällagrad cheddar för extra djup och sälta.',
      'Färska champinjoner som får steka med purjon sitter aldrig fel här.'
    ]
  },

  // --- VARDAG & MEALPREP ---
  {
    id: 'chili-cheese-frysburritos',
    title: 'Chili Cheese Frysburritos',
    description: 'Bästa mealpreppen! Proteintäta burritos med nötfärs, jalapeño och krämig philadelphiaost som du fryser in och har redo i frysen.',
    source: {
      name: 'Instagram @christineshalas',
      url: 'https://www.instagram.com/reel/Dbx_VNDoE-h/',
    },
    servings: 6,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Vardag',
    tags: ['Matlåda', 'Mealprep', 'Frysmat', 'Proteinrikt', 'Burrito'],
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80',
    emoji: '🌯',
    featured: false,
    ingredientGroups: [
      {
        name: 'Färsröran',
        ingredients: [
          { name: 'Nötfärs', amount: 500, unit: 'g' },
          { name: 'Jalapeños', amount: 4, unit: 'st', notes: 'finhackade' },
          { name: 'Philadelphiaost light (eller vanlig)', amount: 200, unit: 'g' },
          { name: 'Gula paprikor', amount: 2, unit: 'st', notes: 'tärnade' },
          { name: 'Gul lök', amount: 1, unit: 'st', notes: 'finhackad' },
          { name: 'Krossade tomater med chili', amount: 390, unit: 'g', notes: '1 förp' },
          { name: 'Tomatpuré', amount: 1, unit: 'msk' },
          { name: 'Rapsolja', amount: 1, unit: 'tsk', notes: 'till pannan' },
          { name: 'Lökkrydda & Vegeta/buljongpulver', amount: 1, unit: 'tsk', notes: 'vardera' },
          { name: 'Salt & nymalen svartpeppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Bröd',
        ingredients: [
          { name: 'Stora tortillabröd', amount: 6, unit: 'st' },
        ]
      }
    ],
    steps: [
      {
        title: 'Bryn färsen',
        text: 'Hetta upp lite olja i pannan och bryn nötfärsen. Krydda med vegeta/allkrydda, lökkrydda, salt och svartpeppar. Lägg över på en tallrik.'
      },
      {
        title: 'Fräs grönsakerna',
        text: 'Stek hackad lök och paprika tills de mjuknat och fått lite färg. Vänd tillbaka färsen och tillsätt jalapeños och tomatpuré. Låt allt fräsa ihop i 2–3 minuter.'
      },
      {
        title: 'Kräma ihop fyllningen',
        text: 'Häll i chilitomaterna och klicka i philadelphiaosten. Rör runt på medelvärme så osten smälter in till en tjock, fyllig röra. Låt sjuda i 5 minuter och låt den sedan svalna helt.'
      },
      {
        title: 'Rulla och frys in',
        text: 'Fördela röran på tortillabröden. Vik in kortsidorna och rulla ihop till täta burritos. Slå in i smörgåspapper eller folie och släng in i frysen.'
      },
      {
        title: 'När suget slår till',
        text: 'Tina upp i kylen. Värm i mikron i 2–3 minuter eller kör i airfryer på 180°C i 6 minuter för extra krispigt bröd. (Ta bort ev. folie innan mikron!).'
      }
    ],
    chefTips: [
      'Ca 455 kcal och 26 g protein per burrito – svårslagen snabbmat efter träningspasset.',
      'Låt alltid röran svalna innan du rullar, annars blir brödet fuktigt i frysen.'
    ]
  },
  {
    id: 'kyckling-rostad-potatis-aioli',
    title: 'Citronkyckling med Rostad Potatis & Hemgjord Aioli',
    description: 'Enkel vardagslyx med citron- och timjansmarinerad kycklingfilé, krispiga potatisskivor och en snabb hemvispad aioli som lyfter hela rätten.',
    source: {
      name: 'ViktVäktarna / Notion',
      url: 'https://www.viktvaktarna.se/se/recept/kyckling-rostad-potatis-och-hemgjord-aioli/5fc79816186dc12ff4f7a45d',
    },
    servings: 4,
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    difficulty: 'Lätt',
    category: 'Vardag',
    tags: ['Vardag', 'Kyckling', 'Aioli', 'Ugn'],
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍗',
    featured: false,
    ingredientGroups: [
      {
        name: 'Kyckling & Marinad',
        ingredients: [
          { name: 'Kycklingbröstfilé', amount: 600, unit: 'g' },
          { name: 'Citron', amount: 1, unit: 'st', notes: 'skal & saft' },
          { name: 'Vitlöksklyfta', amount: 1, unit: 'st', notes: 'finriven' },
          { name: 'Honung', amount: 1, unit: 'msk' },
          { name: 'Olivolja', amount: 1, unit: 'msk' },
          { name: 'Torkad timjan', amount: 1, unit: 'tsk' },
        ]
      },
      {
        name: 'Potatis & Grönt',
        ingredients: [
          { name: 'Potatis', amount: 800, unit: 'g', notes: 'skivad ca 0.5 cm' },
          { name: 'Haricots verts', amount: 200, unit: 'g' },
          { name: 'Rapsolja', amount: 2, unit: 'msk' },
          { name: 'Salt & peppar', notes: 'efter smak' }
        ]
      },
      {
        name: 'Snabb Hemgjord Aioli',
        ingredients: [
          { name: 'Äggula', amount: 1, unit: 'st', notes: 'rumstempererad' },
          { name: 'Vitvinsvinäger', amount: 2, unit: 'tsk' },
          { name: 'Dijonsenap', amount: 1, unit: 'tsk' },
          { name: 'Rapsolja', amount: 1, unit: 'dl', notes: 'neutral' },
          { name: 'Vitlöksklyfta', amount: 1, unit: 'st', notes: 'finriven' },
          { name: 'Salt', amount: 1, unit: 'krm' }
        ]
      }
    ],
    steps: [
      {
        title: 'Marinera kycklingen',
        text: 'Blanda citronskal, citronsaft, vitlök, honung, olja och timjan i en plastpåse. Lägg i kycklingen och låt dra i minst 20–30 minuter.'
      },
      {
        title: 'Bryn och baka kycklingen',
        text: 'Sätt ugnen på 150°C. Hetta upp en stekpanna och bryn kycklingen med lite färg. Kör klart i ugnen tills innertemperaturen når 72°C (ca 20 min). Vira in i folie och låt vila.'
      },
      {
        title: 'Rosta potatisen',
        text: 'Dra upp ugnen till 225°C. Vänd potatisskivorna i olja, salt och peppar och sprid ut på en plåt. Rosta i ca 20 minuter tills de är krispiga. Släng med haricots verts sista 5 minuterna.'
      },
      {
        title: 'Vispa aiolin',
        text: 'Lägg äggula, vinäger och senap i en bunke. Vispa ner oljan droppvis i början och sedan i en tunn stråle tills du har en tjock majonnäs. Rör ner riven vitlök och smaka av med salt.'
      },
      {
        title: 'Servera',
        text: 'Skiva upp den saftiga kycklingen och servera med de krispiga potatisskivorna, gröna bönor och en rejäl klick aioli.'
      }
    ],
    chefTips: [
      'Ha alltid samma temperatur på äggulan och oljan så skär sig inte majonnäsen.',
      'Rosta potatisen på hög värme så skivorna blir riktigt krispiga i kanterna.'
    ]
  },
  {
    id: 'raggmunkar-kalkonbacon-lingon',
    title: 'Klassiska Raggmunkar med Bacon & Lingon',
    description: 'En av våra bästa husmansrätter. Frasigt stekta raggmunkar gjorda på riven potatis, serverade med knaperstekt bacon och rårörda lingon.',
    source: {
      name: 'ViktVäktarna / Notion',
      url: 'https://www.viktvaktarna.se/se/recept/raggmunkar-med-kalkonbacon-och-rarorda-lingon/5c4591cb3b05c90016e45e5a',
    },
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Lätt',
    category: 'Vardag',
    tags: ['Husmanskost', 'Vardag', 'Potatis', 'Klassiker'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    emoji: '🥔',
    featured: false,
    ingredientGroups: [
      {
        name: 'Raggmunkssmet',
        ingredients: [
          { name: 'Fast potatis', amount: 800, unit: 'g', notes: 'skalad & grovriven' },
          { name: 'Ägg', amount: 2, unit: 'st' },
          { name: 'Vetemjöl', amount: 2, unit: 'dl' },
          { name: 'Mjölk', amount: 4, unit: 'dl' },
          { name: 'Salt', amount: 1, unit: 'tsk' },
          { name: 'Smör eller olja', amount: 2, unit: 'msk', notes: 'till stekning' }
        ]
      },
      {
        name: 'Tillbehör',
        ingredients: [
          { name: 'Kalkonbacon (eller klassiskt sidfläsk)', amount: 200, unit: 'g' },
          { name: 'Rårörda lingon', amount: 2, unit: 'dl' }
        ]
      }
    ],
    steps: [
      {
        title: 'Vispa pannkakssmeten',
        text: 'Vispa ihop ägg, vetemjöl och hälften av mjölken till en klumpfri smet. Häll i resten av mjölken och saltet.'
      },
      {
        title: 'I med potatisen',
        text: 'Riv potatisen grovt. Krama ur vätskan ordentligt med händerna och vänd ner potatisen direkt i smeten så den inte hinner missfärgas.'
      },
      {
        title: 'Frasstek raggmunkarna',
        text: 'Hetta upp rikligt med smör i en stekpanna. Klicka i smet och platta ut. Stek i 2–3 minuter per sida på medelhög värme tills kanterna är frasiga och gyllene.'
      },
      {
        title: 'Servera nystekt',
        text: 'Knaperstek baconet och servera direkt tillsammans med de varma raggmunkarna och kalla sötsyrliga lingon.'
      }
    ],
    chefTips: [
      'Krama ur potatisen stenhårt – ju mindre vätska i smeten, desto krispigare raggmunkar!'
    ]
  },

  // --- BASRECEPT & GRUNDER ---
  {
    id: 'italiensk-pizzadeg',
    title: 'Italiensk Pizzadeg',
    description: 'Den perfekta grunddegen för hemgjord pizza. Krispig botten, fina luftbubblor och fantastisk smak.',
    source: {
      name: 'Tasteline / Notion',
      url: 'https://www.tasteline.com/recept/italiensk-pizzadeg/',
    },
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 60,
    difficulty: 'Lätt',
    category: 'Basrecept',
    tags: ['Basrecept', 'Pizza', 'Dega', 'Italienskt'],
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍕',
    featured: false,
    ingredientGroups: [
      {
        name: 'Degen (ca 4 pizzor)',
        ingredients: [
          { name: 'Vetemjöl special (eller Tipo 00)', amount: 550, unit: 'g', notes: 'ca 9 dl' },
          { name: 'Fingervarmt vatten (ca 37°C)', amount: 3.5, unit: 'dl' },
          { name: 'Färsk jäst', amount: 25, unit: 'g', notes: 'halvt paket' },
          { name: 'Olivolja', amount: 3, unit: 'msk' },
          { name: 'Flingsalt', amount: 1.5, unit: 'tsk' },
        ]
      }
    ],
    steps: [
      {
        title: 'Lös upp jästen',
        text: 'Smula jästen i bunken, häll på fingervarmt vatten och rör om så det löser sig. Tillsätt olivolja och salt.'
      },
      {
        title: 'Knåda degen',
        text: 'Tillsätt mjölet lite i taget. Knåda ordentligt i maskin i ca 8 minuter (eller 12 min för hand) tills degen är elastisk, smidig och släpper från kanten.'
      },
      {
        title: 'Jäsning',
        text: 'Täck bunken med en bakduk och låt degen jäsa i rumstemperatur i minst 45–60 minuter till dubbel storlek.'
      },
      {
        title: 'Baka ut',
        text: 'Dela i 4 bollar. Dra eller kavla ut till tunna bottnar, toppa med dina favoriter och grädda på högsta värme (250–275°C) i 7–10 minuter.'
      }
    ],
    chefTips: [
      'Använd gärna ett bakstål eller en förvärmd plåt längst ner i ugnen för krispig botten.',
      'Testa att kalljäsa i kylen över natten med bara 10 g jäst för ännu djupare smak!'
    ]
  },
  {
    id: 'tomatsas-farska-tomater',
    title: 'Tomatsås på Färska Tomater',
    description: 'Mustig och aromatisk tomatsås kokad från grunden på solmogna tomater, vitlök, olivolja och färsk basilika. Perfekt till pizza och pasta.',
    source: {
      name: 'Receptfavoriter / Notion',
      url: 'https://receptfavoriter.se/recept/tomatsas-med-farska-tomater',
    },
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    difficulty: 'Lätt',
    category: 'Basrecept',
    tags: ['Basrecept', 'Sås', 'Tomater', 'Italienskt', 'Vegetariskt'],
    imageUrl: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍅',
    featured: false,
    ingredientGroups: [
      {
        name: 'Tomatsås',
        ingredients: [
          { name: 'Mogna färska tomater (gärna plommontomater)', amount: 800, unit: 'g', notes: 'hackade' },
          { name: 'Gul lök eller schalottenlök', amount: 1, unit: 'st', notes: 'finhackad' },
          { name: 'Vitlöksklyftor', amount: 3, unit: 'st', notes: 'skivade' },
          { name: 'Olivolja', amount: 3, unit: 'msk' },
          { name: 'Tomatpuré', amount: 1.5, unit: 'msk' },
          { name: 'Färsk basilika', amount: 0.5, unit: 'kruka' },
          { name: 'Strösocker eller honung', amount: 0.5, unit: 'tsk', notes: 'balanserar syran' },
          { name: 'Salt & svartpeppar', notes: 'efter smak' }
        ]
      }
    ],
    steps: [
      {
        title: 'Fräs lök och vitlök',
        text: 'Hetta upp olivolja i en kastrull och fräs löken och vitlöken på medelvärme så de mjuknar. Rör ner tomatpurén och låt fräsa med i 1 minut.'
      },
      {
        title: 'Sjud tomaterna',
        text: 'Tillsätt hackade tomater, basilikastjälkar, en nypa socker, salt och peppar. Låt koka upp och sjuda under lock på svag värme i 20–25 minuter.'
      },
      {
        title: 'Mixa och smaksätt',
        text: 'Mixa slät med stavmixer eller behåll lite rustik textur. Rör ner hackade färska basilikablad och smaka av.'
      }
    ],
    chefTips: [
      'Gör gärna dubbel sats och frys in i små glasburkar så har du alltid världens godaste pastasås till hands.'
    ]
  },
  {
    id: 'frasvafflor-klassiska',
    title: 'Klassiska Frasvåfflor',
    description: 'Gyllene och superfrasiga våfflor som passar lika bra till söndagsfikat som till förrätt med rom och crème fraiche.',
    source: {
      name: 'Mikaels Notion',
    },
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Basrecept',
    tags: ['Basrecept', 'Fika', 'Våfflor', 'Enkelt'],
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=80',
    emoji: '🧇',
    featured: false,
    ingredientGroups: [
      {
        name: 'Våffelsmet (ca 8–10 laggar)',
        ingredients: [
          { name: 'Vetemjöl', amount: 3.5, unit: 'dl' },
          { name: 'Bakpulver', amount: 2, unit: 'tsk' },
          { name: 'Mjölk', amount: 4.5, unit: 'dl' },
          { name: 'Smör', amount: 100, unit: 'g', notes: 'smält och avsvalnat' },
          { name: 'Strösocker', amount: 0.5, unit: 'tsk' },
          { name: 'Salt', amount: 2, unit: 'krm' }
        ]
      },
      {
        name: 'Servering',
        ingredients: [
          { name: 'Vispad grädde, sylt eller bär', notes: 'till fikat' },
          { name: 'Crème fraiche, rödlök & stenbitsrom', notes: 'till förrätt' }
        ]
      }
    ],
    steps: [
      {
        title: 'Blanda det torra',
        text: 'Rör ihop mjöl, bakpulver, socker och salt i en skål.'
      },
      {
        title: 'Vispa smeten',
        text: 'Häll i hälften av mjölken och vispa till en helt slät smet. Tillsätt resten av mjölken och det smälta smöret. Låt stå och svälla i 10 minuter.'
      },
      {
        title: 'Grädda',
        text: 'Värm våffeljärnet ordentligt. Grädda varje lagg tills den är djupt gyllenbrun och krispig.'
      },
      {
        title: 'Viktigt för fraset!',
        text: 'Lägg alltid de färdiga våfflorna på ett galler istället för på hög på en tallrik, så behåller de sitt krisp!'
      }
    ],
    chefTips: [
      'Byt ut 1 dl av mjölken mot iskallt kolsyrat vatten för extra luftigt och frasigt resultat.'
    ]
  },

  // --- KÖTT & HUSMANSKOST ---
  {
    id: 'algbiffar-kantarellsas-potatismos',
    title: 'Älgbiffar med Kantarellgräddsås & Potatismos',
    description: 'En riktig festmåltid! Saftiga viltfärsbiffar kryddade med mortlade enbär, serverade med len potatismos, kantarellsås och rårörda lingon.',
    source: {
      name: 'Mikaels Notion',
    },
    servings: 4,
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    difficulty: 'Medel',
    category: 'Kött',
    tags: ['Vilt', 'Husmanskost', 'Helglyx', 'Kantareller'],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    emoji: '🥩',
    featured: true,
    ingredientGroups: [
      {
        name: 'Älgbiffar',
        ingredients: [
          { name: 'Älgfärs (eller annan viltfärs)', amount: 500, unit: 'g' },
          { name: 'Ägg', amount: 1, unit: 'st' },
          { name: 'Vispgrädde', amount: 1, unit: 'dl' },
          { name: 'Dijonsenap', amount: 1, unit: 'msk' },
          { name: 'Gul lök', amount: 1, unit: 'st', notes: 'finriven' },
          { name: 'Enbär', amount: 4, unit: 'st', notes: 'fint mortlade' },
          { name: 'Paprikapulver', amount: 1, unit: 'tsk' },
          { name: 'Mald koriander', amount: 1, unit: 'krm' },
          { name: 'Salt & svartpeppar', amount: 1, unit: 'tsk' },
          { name: 'Smör', amount: 2, unit: 'msk', notes: 'till stekning' }
        ]
      },
      {
        name: 'Kantarellgräddsås',
        ingredients: [
          { name: 'Färska eller förvällda kantareller', amount: 1.5, unit: 'dl', notes: 'hackade' },
          { name: 'Smör', amount: 1, unit: 'msk' },
          { name: 'Vispgrädde', amount: 4, unit: 'dl' },
          { name: 'Torrt vitt vin', amount: 2, unit: 'msk' },
          { name: 'Kalvfond', amount: 1.5, unit: 'msk' },
          { name: 'Maizena', amount: 1, unit: 'msk', notes: 'vid behov' },
          { name: 'Salt & svartpeppar', notes: 'efter smak' }
        ]
      },
      {
        name: 'Hemgjort Mos & Tillbehör',
        ingredients: [
          { name: 'Mjölig potatis', amount: 800, unit: 'g' },
          { name: 'Smör', amount: 50, unit: 'g' },
          { name: 'Varm mjölk', amount: 1, unit: 'dl' },
          { name: 'Rårörda lingon & persilja', notes: 'till servering' }
        ]
      }
    ],
    steps: [
      {
        title: 'Blanda biffsmeten',
        text: 'Blanda älgfärs, ägg, grädde, dijonsenap, finriven lök och de mortlade kryddorna. Arbeta snabbt ihop till en smidig smet.'
      },
      {
        title: 'Stek biffarna',
        text: 'Forma biffar med fuktade händer. Stek i rikligt med smör på medelhög värme så de får fin stekyta. Efterstek i ugnen på 150°C i ca 10 minuter.'
      },
      {
        title: 'Kantarellsås i pannan',
        text: 'Fräs kantarellerna i samma panna med 1 msk smör. Slå på grädde, vin och kalvfond. Låt koka ihop 3–4 minuter och smaka av med salt och peppar.'
      },
      {
        title: 'Gör moset',
        text: 'Koka potatisen mjuk, häll av och mosa med smör och varm mjölk till ett krämigt mos. Krydda med salt och vitpeppar.'
      },
      {
        title: 'Servering',
        text: 'Lägg upp biffarna med potatismos, ös över kantarellsåsen och toppa med rårörda lingon och persilja.'
      }
    ],
    chefTips: [
      'Eftersom älgfärs är väldigt magert gör grädden och smöret underverk för saftigheten.'
    ]
  },
  {
    id: 'drombullar-kottbullar-graddsas',
    title: 'Mikaels Drömbullar med Gräddsås & Potatis',
    description: 'Saftiga klassiska köttbullar rullade med kärlek, serverade med en fyllig gräddsås kokad direkt på stekskyn i pannan.',
    source: {
      name: 'Mikaels Notion',
    },
    servings: 4,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Kött',
    tags: ['Husmanskost', 'Köttbullar', 'Klassiker', 'Vardag'],
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    emoji: '🧆',
    featured: false,
    ingredientGroups: [
      {
        name: 'Drömbullar',
        ingredients: [
          { name: 'Blandfärs eller nötfärs', amount: 500, unit: 'g' },
          { name: 'Gul lök', amount: 0.5, unit: 'st', notes: 'finriven på rivjärn' },
          { name: 'Ströbröd', amount: 1.5, unit: 'msk' },
          { name: 'Mjölk', amount: 0.75, unit: 'dl' },
          { name: 'Ägg', amount: 1, unit: 'st' },
          { name: 'Salt', amount: 1.5, unit: 'tsk' },
          { name: 'Svartpeppar', notes: 'efter smak' },
          { name: 'Smör', amount: 2, unit: 'msk', notes: 'till stekning' }
        ]
      },
      {
        name: 'Klassisk Gräddsås',
        ingredients: [
          { name: 'Vispgrädde', amount: 3, unit: 'dl' },
          { name: 'Köttbuljongtärning eller fond', amount: 1, unit: 'st' },
          { name: 'Sojasås (kinesisk)', amount: 1, unit: 'tsk' },
          { name: 'Salt & vitpeppar', notes: 'efter smak' }
        ]
      }
    ],
    steps: [
      {
        title: 'Blanda smeten',
        text: 'Låt ströbrödet svälla i mjölken i 5 minuter. Blanda sedan ner färsen, riven lök, ägg, salt och peppar.'
      },
      {
        title: 'Rulla och stek',
        text: 'Rulla jämna bullar med fuktiga händer. Stek i rikligt med smör i en het panna tills de är genomstekta och vackert brynta. Lyft ur bullarna.'
      },
      {
        title: 'Koka gräddsåsen i pannan',
        text: 'Häll grädden direkt i den varma pannan så all god steksky följer med. Tillsätt buljongtärning och soja, låt småkoka i 3–5 minuter.'
      },
      {
        title: 'Servera',
        text: 'Lägg tillbaka bullarna i såsen och servera med nykokt potatis och rårörda lingon.'
      }
    ],
    chefTips: [
      'Genom att riva löken fint slipper man lökbitar och får köttbullar som håller ihop och blir supersaftiga.'
    ]
  },
  {
    id: 'krispig-smashburgare',
    title: 'Dubbel Smashburgare med Karamelliserad Lök & Tryffelmajo',
    description: 'Krispiga kanter, dubbel smält cheddar, sötstekt lök och hemgjord tryffelmajo i smörstekt brioche. Burgarlycka när den är som bäst.',
    source: {
      name: 'Streetfood Style',
    },
    servings: 4,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: 'Medel',
    category: 'Kött',
    tags: ['Helglyx', 'Burgare', 'Streetfood'],
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍔',
    featured: false,
    ingredientGroups: [
      {
        name: 'Kött & Bröd',
        ingredients: [
          { name: 'Nötfärs (högrevsfärs, 20% fett)', amount: 640, unit: 'g', notes: 'rullad till 8 st bollar' },
          { name: 'Brioche hamburgerbröd', amount: 4, unit: 'st' },
          { name: 'Cheddarost av bra kvalitet', amount: 8, unit: 'skivor' },
          { name: 'Salt & grovmalen svartpeppar', notes: 'rikligt' },
          { name: 'Smör', amount: 2, unit: 'msk', notes: 'till bröden' },
        ]
      },
      {
        name: 'Lök & Tryffelmajo',
        ingredients: [
          { name: 'Gul lök', amount: 3, unit: 'st', notes: 'tunt skivade' },
          { name: 'Majonnäs', amount: 1.5, unit: 'dl' },
          { name: 'Tryffelolja', amount: 1, unit: 'tsk' },
          { name: 'Citronsaft', amount: 1, unit: 'tsk' },
        ]
      }
    ],
    steps: [
      {
        title: 'Karamellisera löken',
        text: 'Stek den skivade löken långsamt i smör på medellåg värme i 15–20 minuter tills den är mörk och söt.'
      },
      {
        title: 'Tryffelmajo & bröd',
        text: 'Rör ihop majonnäs, tryffelolja, lite citronsaft och peppar. Smörstek snittytan på briochebröden i en het torr panna.'
      },
      {
        title: 'Smasha burgarna',
        text: 'Hetta upp gjutjärnspannan till max. Lägg i färsbollarna och smasha till papperstunna puckar direkt. Salta och peppra rikligt.'
      },
      {
        title: 'Ost och montering',
        text: 'Stek i 90 sekunder tills kanterna är krispiga och bubbliga. Vänd, lägg på cheddar och låt smälta. Montera: botten, tryffelmajo, dubbla puckar, karamelliserad lök och lock.'
      }
    ],
    chefTips: [
      'Snåla inte med fetthalten – minst 20% fett krävs för de där krispiga, frasiga smash-kanterna.'
    ]
  },

  // --- FISK & SKALDJUR ---
  {
    id: 'lojromspizza-lyx',
    title: 'Löjromspizza med Crème Fraiche & Dill',
    description: 'Den ultimata festpizzan! Krispig botten med smält ost som toppas med kall syrlig crème fraiche, löjrom, rödlök och lite citronzest.',
    source: {
      name: 'Tasteline / Notion',
      url: 'https://www.tasteline.com/recept/lojromspizza/',
    },
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    difficulty: 'Lätt',
    category: 'Fest & Helg',
    tags: ['Helglyx', 'Pizza', 'Löjrom', 'Fest', 'Fisk & Skaldjur'],
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍕',
    featured: false,
    ingredientGroups: [
      {
        name: 'Pizzabotten',
        ingredients: [
          { name: 'Pizzadeg', amount: 1, unit: 'st', notes: 'ca 400 g' },
          { name: 'Crème fraîche (34%)', amount: 1.5, unit: 'dl', notes: 'till botten' },
          { name: 'Parmesan eller Västerbottensost', amount: 1.5, unit: 'dl', notes: 'riven' },
        ]
      },
      {
        name: 'Kall Topping',
        ingredients: [
          { name: 'Löjrom (eller stenbitsrom)', amount: 100, unit: 'g' },
          { name: 'Crème fraîche', amount: 1, unit: 'dl', notes: 'till klickar' },
          { name: 'Rödlök', amount: 1, unit: 'st', notes: 'mycket finhackad' },
          { name: 'Färsk gräslök & dill', amount: 1, unit: 'kruka' },
          { name: 'Citronzest & svartpeppar', notes: 'efter smak' }
        ]
      }
    ],
    steps: [
      {
        title: 'Ugnen på max',
        text: 'Värm ugnen till 250–275°C. Kavla ut degen tunt på bakplåtspapper.'
      },
      {
        title: 'Grädda botten',
        text: 'Bred på ett lager crème fraiche och toppa med osten. Grädda i 8–12 minuter tills botten är gyllene och frasig.'
      },
      {
        title: 'Toppa kallt',
        text: 'Ta ut pizzan. Klicka genast ut kall crème fraiche och löjrom. Strö över finhackad rödlök, gräslök, dill och lite riven citronzest. Skär upp och servera direkt!'
      }
    ],
    chefTips: [
      'Lägg aldrig på löjrommen i ugnen – den ska alltid på kall efteråt!'
    ]
  },
  {
    id: 'smorstekt-torsk-farskpotatis',
    title: 'Smörstekt Torsk med Citrongräddsås & Färskpotatis',
    description: 'En riktig sommardröm. Smörstekt torskrygg med frasig yta, nykokt potatis och en frisk gräddsås smaksatt med brynt smör och citron.',
    source: {
      name: 'Matinspo / Notion',
      url: 'https://matinspo.se/recipe/smorstekttorsk-med-farskpotatis-graddsas-med-brynt-smor-och-sockerartor/',
    },
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Lätt',
    category: 'Fisk & Skaldjur',
    tags: ['Fisk', 'Sommarmat', 'Under 30 min', 'Färskpotatis', 'Klassiker'],
    imageUrl: 'https://images.unsplash.com/photo-1673436977947-0787164a9abc?auto=format&fit=crop&w=1200&q=80',
    emoji: '🐟',
    featured: false,
    ingredientGroups: [
      {
        name: 'Torsk & Potatis',
        ingredients: [
          { name: 'Torskrygg', amount: 600, unit: 'g' },
          { name: 'Färskpotatis', amount: 800, unit: 'g' },
          { name: 'Sugar snaps', amount: 150, unit: 'g' },
          { name: 'Smör', amount: 3, unit: 'msk', notes: 'till stekning' },
          { name: 'Rom & dill', notes: 'till servering' }
        ]
      },
      {
        name: 'Citrongräddsås med brynt smör',
        ingredients: [
          { name: 'Smör', amount: 50, unit: 'g', notes: 'brynt' },
          { name: 'Vispgrädde', amount: 3, unit: 'dl' },
          { name: 'Crème fraîche', amount: 1.5, unit: 'dl' },
          { name: 'Citron', amount: 1, unit: 'st', notes: 'färskpressad saft' },
          { name: 'Salt', amount: 1, unit: 'tsk' }
        ]
      }
    ],
    steps: [
      {
        title: 'Koka potatisen',
        text: 'Koka färskpotatisen mjuk i saltat vatten med dill.'
      },
      {
        title: 'Koka ihop såsen',
        text: 'Bryn smöret i en kastrull tills det doftar nötigt. Vispa ner grädde, crème fraîche, citronsaft och salt. Låt småputtra på svag värme i 10 minuter.'
      },
      {
        title: 'Stek torsken',
        text: 'Torka fisken torr med hushållspapper och salta. Stek i smör i 2–3 minuter per sida tills den fått fin färg och precis börjar skiva sig.'
      },
      {
        title: 'Servera',
        text: 'Lägg upp torsken med potatis, snabbkokta sugar snaps och ringla över den varma citronsåsen.'
      }
    ],
    chefTips: [
      'Torka alltid torsken helt torr med papper innan den åker i pannan för bästa stekyta.'
    ]
  },

  // --- BAKAT & SÖTT ---
  {
    id: 'kladdkaka-med-brynt-smor',
    title: 'Mikaels Kladdkaka med Brynt Smör & Flingsalt',
    description: 'Världens godaste kladdkaka. Det brynta smöret ger en nötig kolaton som tillsammans med mörk kakao och flingsalt gör den helt oemotståndlig.',
    source: {
      name: 'Mikaels Bakfavorit',
    },
    servings: 8,
    prepTimeMinutes: 15,
    cookTimeMinutes: 18,
    difficulty: 'Lätt',
    category: 'Bakat & Sött',
    tags: ['Fika', 'Choklad', 'Enkelt', 'Efterrätt'],
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍫',
    featured: false,
    ingredientGroups: [
      {
        name: 'Smeten',
        ingredients: [
          { name: 'Smör', amount: 150, unit: 'g', notes: 'brynt' },
          { name: 'Ägg', amount: 3, unit: 'st' },
          { name: 'Strösocker', amount: 2.5, unit: 'dl' },
          { name: 'Kakao av god kvalitet', amount: 1, unit: 'dl' },
          { name: 'Vetemjöl', amount: 1.5, unit: 'dl' },
          { name: 'Vaniljsocker', amount: 2, unit: 'tsk' },
          { name: 'Flingsalt', amount: 1, unit: 'tsk', notes: 'hälften i, hälften ovanpå' },
        ]
      },
      {
        name: 'Servering',
        ingredients: [
          { name: 'Lättvispad grädde eller vaniljglass', notes: 'ett måste' },
          { name: 'Färska hallon', notes: 'valfritt' }
        ]
      }
    ],
    steps: [
      {
        title: 'Bryn smöret',
        text: 'Smält smöret och låt det koka under vispning tills det tystnar, doftar kola och fått gyllenbruna prickar i botten. Låt svalna lite.'
      },
      {
        title: 'Rör ihop smeten',
        text: 'Rör (vispa inte för luftigt) ihop ägg och socker. Sikta ner kakao, mjöl, vaniljsocker och lite salt. Häll i det brynta smöret och vänd runt till en glansig smet.'
      },
      {
        title: 'Grädda',
        text: 'Häll i en smord springform. Grädda mitt i ugnen på 175°C i 16–18 minuter. Mitten ska fortfarande vara dallrig!'
      },
      {
        title: 'Låt sätta sig',
        text: 'Strö över flingsalt. Låt svalna – den är allra godast efter några timmar i kylen då den blir perfekt seg och krämig.'
      }
    ],
    chefTips: [
      'Vispa aldrig med elvisp! Vi vill ha en seg och tung kladdkaka, inte en sockerkaka.',
      'Låt den gärna stå i kylen över natten för ultimat fudge-konsistens.'
    ]
  },

  // --- LÄTT & NYTTIGT (BOWLS, FISK & FRÄSCHT) ---
  {
    id: 'sesambakad-laxbowl-ponzu',
    title: 'Sesambakad Laxbowl med Ponzu, Avokado & Edamame',
    description: 'En färgsprakande och fräsch bowl med perfekt ugnsbakad sesamlax, krämig avokado, krispiga edamamebönor och en syrlig ponzodressing som binder ihop allt.',
    source: {
      name: 'Mikaels Favorit',
    },
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    difficulty: 'Lätt',
    category: 'Sallader & Bowls',
    tags: ['Fisk', 'Sallader & Bowls', 'Under 30 min', 'Nyttigt', 'Asiatiskt'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍣',
    featured: true,
    ingredientGroups: [
      {
        name: 'Sesamlax',
        ingredients: [
          { name: 'Laxfilé (i portionsbitar)', amount: 600, unit: 'g' },
          { name: 'Japansk soja', amount: 2, unit: 'msk' },
          { name: 'Sesamolja', amount: 1, unit: 'tsk' },
          { name: 'Sesamfrön (gärna svarta & vita)', amount: 2, unit: 'msk' },
          { name: 'Flingsalt & nymalen svartpeppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Bas & Grönt',
        ingredients: [
          { name: 'Sushiris, quinoa eller matvete', amount: 3, unit: 'dl', notes: 'okokt mått' },
          { name: 'Avokado', amount: 2, unit: 'st', notes: 'tärnade' },
          { name: 'Edamamebönor (tinade)', amount: 250, unit: 'g' },
          { name: 'Gurka', amount: 0.5, unit: 'st', notes: 'halverad och tunt skivad' },
          { name: 'Mango (färsk eller tinad fryst)', amount: 200, unit: 'g', notes: 'tärnad' },
          { name: 'Salladslök', amount: 3, unit: 'st', notes: 'finslantad' },
        ]
      },
      {
        name: 'Ponzodressing & Topping',
        ingredients: [
          { name: 'Japansk soja', amount: 3, unit: 'msk' },
          { name: 'Färskpressad limejuice', amount: 2, unit: 'msk' },
          { name: 'Ingefära', amount: 1, unit: 'msk', notes: 'finriven' },
          { name: 'Honung eller lönnsirap', amount: 1, unit: 'tsk' },
          { name: 'Sesamolja', amount: 1, unit: 'tsk' },
          { name: 'Srirachamajonnäs', notes: 'att ringla över' },
          { name: 'Färsk koriander', notes: 'valfritt' },
        ]
      }
    ],
    steps: [
      {
        title: 'Koka basen & sätt på ugnen',
        text: 'Sätt ugnen på 200°C. Koka riset, quinoan eller matvetet enligt anvisning på förpackningen.'
      },
      {
        title: 'Skjuts in laxen',
        text: 'Lägg laxbitarna i en ugnsform. Pensla med soja och sesamolja, strö över rikligt med sesamfrön och lite flingsalt. Baka mitt i ugnen i 10–12 minuter tills laxen är saftig och precis genomstekt.'
      },
      {
        title: 'Blanda snabbdressingen',
        text: 'Vispa ihop soja, limejuice, finriven ingefära, honung och sesamolja i en liten skål.'
      },
      {
        title: 'Preppa krispet',
        text: 'Tärna avokado och mango, skiva gurka och slanta salladslöken.'
      },
      {
        title: 'Bygg bowlen!',
        text: 'Fördela basen i djupa skålar. Arrangera grönsaker, mango och edamame snyggt runt om och toppa med en bit sesamlax. Ringla över ponzodressingen och lite srirachamajjo.'
      }
    ],
    chefTips: [
      'Har du extra ont om tid? Byt ut ugnsbakad lax mot färdig varmrökt lax eller salmalax i skivor!',
      'Gillar du hetta? Toppa med lite tunt skivad röd chili eller extra sriracha.'
    ]
  },
  {
    id: 'grekisk-kycklingbowl-tzatziki',
    title: 'Grekisk Lemon & Herb Kycklingbowl med Tzatziki',
    description: 'Saftig kyckling stekt med citron, vitlök och oregano som serveras på en bas av matvete, krispig tomatsallad, kalamataoliver och en svalkande vitlökstzatziki.',
    source: {
      name: 'Mikaels Favorit',
    },
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Kyckling',
    tags: ['Kyckling', 'Grekiskt', 'Nyttigt', 'Snabbt', 'Sallader & Bowls'],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍗',
    featured: false,
    ingredientGroups: [
      {
        name: 'Citron- & örtkyckling',
        ingredients: [
          { name: 'Kycklingbröstfilé eller lårfilé', amount: 600, unit: 'g', notes: 'strimlad' },
          { name: 'Olivolja', amount: 2, unit: 'msk' },
          { name: 'Torkad oregano', amount: 1.5, unit: 'msk' },
          { name: 'Vitlöksklyftor', amount: 2, unit: 'st', notes: 'pressade' },
          { name: 'Citron (zest & saft)', amount: 1, unit: 'st' },
          { name: 'Salt & svartpeppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Hemgjord Tzatziki',
        ingredients: [
          { name: 'Grekisk yoghurt (10%)', amount: 2.5, unit: 'dl' },
          { name: 'Gurka', amount: 0.5, unit: 'st', notes: 'grovriven och urkramad' },
          { name: 'Vitlöksklyfta', amount: 1, unit: 'st', notes: 'finriven' },
          { name: 'Olivolja', amount: 1, unit: 'msk' },
          { name: 'Flingsalt & svartpeppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Salladsbas & Tillbehör',
        ingredients: [
          { name: 'Matvete, bulgur eller quinoa', amount: 3, unit: 'dl', notes: 'kokt enligt paket' },
          { name: 'Körsbärstomater', amount: 250, unit: 'g', notes: 'halverade' },
          { name: 'Gurka', amount: 0.5, unit: 'st', notes: 'tärnad' },
          { name: 'Rödlök', amount: 0.5, unit: 'st', notes: 'tunt skivad' },
          { name: 'Kalamataoliver', amount: 1, unit: 'dl' },
          { name: 'Fetaost', amount: 150, unit: 'g', notes: 'smulad' },
          { name: 'Färsk persilja eller mynta', notes: 'grovhackad' },
        ]
      }
    ],
    steps: [
      {
        title: 'Koka basen',
        text: 'Koka matvete eller bulgur i saltat vatten. Låt svalna en aning så det är ljummet vid servering.'
      },
      {
        title: 'Rör ihop tzatzikin',
        text: 'Riv gurkan grovt, strö på lite salt och krama ur all vätska ordentligt i handen. Blanda med grekisk yoghurt, riven vitlök, olivolja, salt och peppar. Låt dra i kylen.'
      },
      {
        title: 'Stek kycklingen saftig',
        text: 'Blanda kycklingstrimlorna med olivolja, oregano, vitlök, citronzest, citronsaft, salt och peppar. Hetta upp en stekpanna och stek kycklingen på medelhög värme i 6–8 minuter tills den fått gyllene färg och är genomstekt.'
      },
      {
        title: 'Blanda tomatsalladen',
        text: 'Vänd ihop halverade tomater, tärnad gurka, skivad rödlök och oliver med en skvätt olivolja och lite salt.'
      },
      {
        title: 'Servera!',
        text: 'Grunda djupa tallrikar med matvete. Lägg på kycklingen och tomatsalladen, klicka över generöst med tzatziki, smula över fetaost och toppa med färska örter.'
      }
    ],
    chefTips: [
      'Glöm inte att krama ur gurkvattnet till tzatzikin riktigt hårt – då blir såsen tjock och krämig istället för vattnig!',
      'Gör dubbel sats kyckling och tzatziki så har du morgondagens lunchlåda säkrad.'
    ]
  },
  {
    id: 'vietnamesisk-kycklingsallad-goi-ga',
    title: 'Vietnamesisk Krispig Kycklingsallad (Goi Ga)',
    description: 'Superlätt och krispig sallad med strimlad kyckling, fint hyvlad spetskål, massor av färska örter, hackade jordnötter och en pigg lime- och chilidressing.',
    source: {
      name: 'Mikaels Favorit',
    },
    servings: 4,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: 'Lätt',
    category: 'Sallader & Bowls',
    tags: ['Kyckling', 'Asiatiskt', 'Krispigt', 'Under 30 min', 'Nyttigt'],
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    emoji: '🥗',
    featured: false,
    ingredientGroups: [
      {
        name: 'Kyckling',
        ingredients: [
          { name: 'Kycklingbröstfilé (eller färdiggrillad kyckling)', amount: 500, unit: 'g' },
          { name: 'Olja till stekning', amount: 1, unit: 'msk' },
          { name: 'Salt & peppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Sallad & Krisp',
        ingredients: [
          { name: 'Spetskål eller vitkål', amount: 0.5, unit: 'st', notes: 'mycket fint strimlad' },
          { name: 'Morötter', amount: 2, unit: 'st', notes: 'skurna i tunna tändstickor (julienne)' },
          { name: 'Gurka', amount: 0.5, unit: 'st', notes: 'strimlad' },
          { name: 'Rödlök', amount: 0.5, unit: 'st', notes: 'tunt skivad' },
          { name: 'Färsk koriander', amount: 1, unit: 'kruka', notes: 'grovhackad' },
          { name: 'Färsk mynta', amount: 0.5, unit: 'kruka', notes: 'grovhackad' },
          { name: 'Rostade saltade jordnötter', amount: 1, unit: 'dl', notes: 'grovhackade' },
          { name: 'Rostad lök', amount: 0.5, unit: 'dl', notes: 'valfritt för extra krisp' },
        ]
      },
      {
        name: 'Vietnamesisk Nuoc Cham Dressing',
        ingredients: [
          { name: 'Färskpressad limejuice', amount: 3, unit: 'msk' },
          { name: 'Fisksås', amount: 2.5, unit: 'msk' },
          { name: 'Rörsocker eller honung', amount: 1.5, unit: 'msk' },
          { name: 'Vatten', amount: 2, unit: 'msk' },
          { name: 'Vitlöksklyfta', amount: 1, unit: 'st', notes: 'finhackad' },
          { name: 'Röd chili', amount: 1, unit: 'st', notes: 'finhackad' },
        ]
      }
    ],
    steps: [
      {
        title: 'Fixa kycklingen',
        text: 'Stek kycklingfiléerna i lite olja tills de är genomstekta och fått färg (eller använd färdiggrillad kyckling). Låt vila i några minuter och strimla eller dra sedan isär köttet med två gafflar.'
      },
      {
        title: 'Vispa ihop dressingen',
        text: 'Rör ihop limejuice, fisksås, socker/honung och vatten tills sockret löst sig helt. Rör ner finhackad vitlök och chili. Smaka av – balansen mellan syra, sälta och sötma ska vara magisk!'
      },
      {
        title: 'Strimla grönsakerna',
        text: 'Hyvla spetskålen så tunt du bara kan med mandolin eller osthyvel. Strimla morot och gurka, skiva rödlöken och grovhacka örterna.'
      },
      {
        title: 'Blanda och servera',
        text: 'Lägg kål, morot, gurka, lök, örter och den strimlade kycklingen i en stor skål. Häll över dressingen och vänd runt ordentligt så allt täcks. Toppa med rikligt med hackade jordnötter och rostad lök.'
      }
    ],
    chefTips: [
      'Vill du ha salladen matigare? Koka 100g risnudlar eller glasnudlar och vänd ner tillsammans med kålen.',
      'Massera gärna den strimlade kålen lätt med händerna innan du blandar i dressingen så blir den mjukare och suger åt sig smakerna ännu bättre.'
    ]
  },
  {
    id: 'ugnslax-pa-plat-medelhavsgronsaker',
    title: 'Lax på Plåt med Medelhavsgrönsaker & Fetaost',
    description: 'Vardagsmiddagen som sköter sig själv i ugnen! Laxfiléer bakade tillsammans med körsbärstomater, zucchini, rödlök och sparris, toppat med smulad fetaost.',
    source: {
      name: 'Mikaels Favorit',
    },
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Fisk & Skaldjur',
    tags: ['Fisk', 'Plåtmat', 'Under 30 min', 'Nyttigt', 'Enkelt'],
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    emoji: '🐟',
    featured: false,
    ingredientGroups: [
      {
        name: 'Plåten',
        ingredients: [
          { name: 'Laxfiléer', amount: 4, unit: 'st', notes: 'ca 500-600g' },
          { name: 'Zucchini', amount: 1, unit: 'st', notes: 'halverad och skivad i halvmånar' },
          { name: 'Körsbärstomater', amount: 250, unit: 'g', notes: 'hela eller halverade' },
          { name: 'Grön sparris eller haricots verts', amount: 200, unit: 'g', notes: 'ansad' },
          { name: 'Rödlök', amount: 1, unit: 'st', notes: 'skuren i klyftor' },
          { name: 'Kalamataoliver', amount: 1, unit: 'dl' },
          { name: 'Fetaost', amount: 150, unit: 'g', notes: 'smulad över' },
        ]
      },
      {
        name: 'Marinad & Smaksättning',
        ingredients: [
          { name: 'Olivolja av bra kvalitet', amount: 3, unit: 'msk' },
          { name: 'Citron', amount: 1, unit: 'st', notes: 'skivad i tunna skivor + lite saft' },
          { name: 'Torkad oregano eller timjan', amount: 1, unit: 'msk' },
          { name: 'Vitlöksklyftor', amount: 2, unit: 'st', notes: 'finrivna' },
          { name: 'Flingsalt & nymalen svartpeppar', notes: 'efter smak' },
        ]
      }
    ],
    steps: [
      {
        title: 'Ugnen på & plåten fram',
        text: 'Sätt ugnen på 200°C varmluft. Klä en plåt med bakplåtspapper.'
      },
      {
        title: 'Skär grönsakerna',
        text: 'Skiva zucchini, klyfta rödlöken och ansa sparrisen. Sprid ut grönsakerna och körsbärstomaterna jämnt över plåten.'
      },
      {
        title: 'Placera laxen & krydda',
        text: 'Gör plats för laxfiléerna mellan grönsakerna. Ringla olivolja över allt. Strö över riven vitlök, oregano, flingsalt och nymalen svartpeppar. Lägg citronskivor på laxbitarna.'
      },
      {
        title: 'Baka i ugnen',
        text: 'Kör in plåten i ugnen i 10 minuter. Ta ut, smula över fetaosten och oliverna, och baka i ytterligare 4–5 minuter tills laxen är saftig och osten fått lite värme.'
      },
      {
        title: 'Servera!',
        text: 'Ställ fram hela plåten mitt på bordet. Servera direkt som den är eller tillsammans med en klick tzatziki, kokt potatis eller en bit surdegsbröd.'
      }
    ],
    chefTips: [
      'Passa tiden i ugnen så laxen behåller sin fina kärna och inte blir torr – 12–15 minuter brukar vara helt optimalt!',
      'Gillar du potatis? Koka små delikatesspotatisar i förväg och krossa dem lätt på plåten tillsammans med grönsakerna.'
    ]
  },
  {
    id: 'spicy-raktacos-mangosalsa',
    title: 'Spicy Räktacos med Mangosalsa & Avokadokräm',
    description: 'Fräscha tacos med heta chilimarinerade räkor, söt mangosalsa med koriander och en krämig lime- och avokadoröra. Perfekt fredagslyx på bara 15 minuter.',
    source: {
      name: 'Mikaels Favorit',
    },
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    difficulty: 'Lätt',
    category: 'Fisk & Skaldjur',
    tags: ['Skaldjur', 'Tacos', 'Snabbt', 'Under 30 min', 'Helglyx'],
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80',
    emoji: '🦐',
    featured: false,
    ingredientGroups: [
      {
        name: 'Spicy Räkor',
        ingredients: [
          { name: 'Handskalade räkor (eller råa scampi)', amount: 500, unit: 'g' },
          { name: 'Olivolja', amount: 1, unit: 'msk' },
          { name: 'Spiskummin', amount: 1, unit: 'tsk' },
          { name: 'Rökt paprikapulver', amount: 1, unit: 'tsk' },
          { name: 'Chiliflakes eller cayennepeppar', amount: 0.5, unit: 'tsk' },
          { name: 'Vitlöksklyfta', amount: 1, unit: 'st', notes: 'finriven' },
          { name: 'Flingsalt', notes: 'efter smak' },
        ]
      },
      {
        name: 'Krämig Avokadoröra',
        ingredients: [
          { name: 'Mogna avokador', amount: 2, unit: 'st' },
          { name: 'Crème fraîche eller grekisk yoghurt', amount: 2, unit: 'msk' },
          { name: 'Färskpressad limejuice', amount: 1, unit: 'msk' },
          { name: 'Salt & peppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Mangosalsa & Montering',
        ingredients: [
          { name: 'Mango (färsk eller tinad)', amount: 250, unit: 'g', notes: 'fint tärnad' },
          { name: 'Rödlök', amount: 0.5, unit: 'st', notes: 'finhackad' },
          { name: 'Färsk koriander', amount: 0.5, unit: 'kruka', notes: 'hackad' },
          { name: 'Röd chili (t.ex. jalapeño eller spansk)', amount: 0.5, unit: 'st', notes: 'urkärnad & finhackad' },
          { name: 'Små majs- eller vetetortillas', amount: 8, unit: 'st' },
          { name: 'Fint strimlad rödkål eller sallad', amount: 2, unit: 'dl' },
          { name: 'Limeklyftor', amount: 4, unit: 'st' },
        ]
      }
    ],
    steps: [
      {
        title: 'Blanda mangosalsan',
        text: 'Vänd ihop tärnad mango, finhackad rödlök, chili och koriander i en skål. Pressa över lite limesaft och en nypa salt.'
      },
      {
        title: 'Mosa avokadokrämen',
        text: 'Mosa avokadon med en gaffel tillsammans med crème fraîche/yoghurt, limejuice och salt till en slät kräm.'
      },
      {
        title: 'Fräs räkorna snabbt',
        text: 'Hetta upp olivolja i en panna. Vänd ner spiskummin, paprikapulver, chili och riven vitlök i 30 sekunder. Lägg i räkorna och stek snabbt på hög värme i 1–2 minuter (de ska bara bli varma och ta smak, inte bli sega!).'
      },
      {
        title: 'Värm tortillabröden',
        text: 'Värm tortillabröden i en torr het stekpanna i några sekunder per sida så de blir mjuka och puffiga.'
      },
      {
        title: 'Montera tacos!',
        text: 'Bred en klick avokadokräm i botten på varje bröd. Toppa med strimlad kål, de kryddiga räkorna och den söta mangosalsan. Pressa över färsk lime och njut direkt!'
      }
    ],
    chefTips: [
      'Använder du färska handskalade räkor behöver de bara vändas runt i de varma kryddorna i 30–60 sekunder så behåller de sin fina spänst.',
      'Värm alltid tortillabröden i torr panna – det gör hela skillnaden för konsistensen och smaken.'
    ]
  },
  {
    id: 'kramig-rod-linscurry-spenat',
    title: 'Krämig Röd Linscurry med Ingefära & Spenat',
    description: 'En värmande, mättande och näringsrik vardagscurry med röda linser, kokosmjölk, riven ingefära och färsk spenat. Klart på 20 minuter och suverän i matlådan.',
    source: {
      name: 'Mikaels Favorit',
    },
    servings: 4,
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    difficulty: 'Lätt',
    category: 'Vegetariskt',
    tags: ['Vegetariskt', 'Veganskt', 'Gryta', 'Matlåda', 'Under 30 min'],
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    emoji: '🍲',
    featured: false,
    ingredientGroups: [
      {
        name: 'Currybasen',
        ingredients: [
          { name: 'Röda torkade linser (sköljda)', amount: 3, unit: 'dl' },
          { name: 'Kokosmjölk (fyllig)', amount: 400, unit: 'ml', notes: '1 burk' },
          { name: 'Krossade tomater (gärna finkrossade)', amount: 400, unit: 'g', notes: '1 burk' },
          { name: 'Grönsaksbuljong (vatten + tärning)', amount: 4, unit: 'dl' },
          { name: 'Gul lök', amount: 1, unit: 'st', notes: 'finhackad' },
          { name: 'Vitlöksklyftor', amount: 3, unit: 'st', notes: 'finhackade' },
          { name: 'Färsk ingefära', amount: 2, unit: 'msk', notes: 'finriven' },
          { name: 'Röd currypasta eller garam masala', amount: 2, unit: 'msk' },
          { name: 'Gurkmeja & spiskummin', amount: 1, unit: 'tsk', notes: 'vardera' },
          { name: 'Olja till stekning', amount: 1.5, unit: 'msk' },
        ]
      },
      {
        name: 'Avslutning & Tillbehör',
        ingredients: [
          { name: 'Färsk babyspenat', amount: 100, unit: 'g' },
          { name: 'Färskpressad limejuice', amount: 1, unit: 'msk' },
          { name: 'Salt & peppar', notes: 'efter smak' },
          { name: 'Basmatiris eller naanbröd', notes: 'till servering' },
          { name: 'Färsk koriander & matlagningsyoghurt', notes: 'valfritt tillbehör' },
        ]
      }
    ],
    steps: [
      {
        title: 'Fräs aromaterna',
        text: 'Hetta upp olja i en gryta eller djup kastrull. Fräs lök, vitlök, riven ingefära, currypasta, gurkmeja och spiskummin på medelvärme i 2–3 minuter tills det doftar fantastiskt i hela köket.'
      },
      {
        title: 'I med vätska & linser',
        text: 'Häll i de sköljda röda linserna, kokosmjölken, krossade tomaterna och grönsaksbuljongen. Rör om ordentligt.'
      },
      {
        title: 'Låt puttra',
        text: 'Låt grytan koka upp och sänk sedan värmen. Låt sjuda under lock i 12–15 minuter tills linserna är mjuka och grytan blivit krämig och fyllig. Rör om då och då så det inte bränner i botten.'
      },
      {
        title: 'Vänd ner spenat & smaka av',
        text: 'Ta av från värmen. Vänd ner färsk babyspenat och låt den mjukna i såsen. Smaka av med färskpressad limejuice och salt.'
      },
      {
        title: 'Servera!',
        text: 'Servera i djupa skålar med fluffigt ris eller varmt naanbröd. Toppa med färsk koriander och en klick yoghurt om du vill.'
      }
    ],
    chefTips: [
      'Röda linser kokar sönder lite och gör grytan naturligt tjock och krämig utan att du behöver reda den.',
      'Perfekt rätt för matlådor – smakar nästan ännu godare dagen efter när kryddorna fått gosa ihop sig!'
    ]
  },
  {
    id: 'italiensk-ostsoppa-pasta-skinka',
    title: 'Italiensk Ostsoppa med Pasta & Skinka',
    description: 'En riktig nostalgitripp och ultimat comfort food! Krämig ostsoppa med makaroner, strimlad rökt skinka och en mustig toscansk örtblandning som värmer gott.',
    source: {
      name: 'Skolklassiker med italiensk touch',
    },
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    difficulty: 'Lätt',
    category: 'Vardag',
    tags: ['Soppa', 'Pasta', 'Vardagsfavorit', 'Barnfavorit', 'Comfort food', 'Under 30 min', 'Snabbt'],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    emoji: '🥣',
    featured: false,
    ingredientGroups: [
      {
        name: 'Soppbas & Fyllning',
        ingredients: [
          { name: 'Okokta makaroner (eller snäckor/gobbetti)', amount: 180, unit: 'g' },
          { name: 'Strimlad rökt skinka', amount: 100, unit: 'g' },
          { name: 'Ostcrème eller mjukost (25–30 % fett)', amount: 150, unit: 'g', notes: 'ca 1,5 dl' },
          { name: 'Mellanmjölk', amount: 6, unit: 'dl' },
          { name: 'Vatten', amount: 2.5, unit: 'dl' },
          { name: 'Hönsbuljongpulver (eller 1 tärning)', amount: 1, unit: 'tsk' },
          { name: 'Rapsolja till stekning', amount: 2, unit: 'tsk' },
          { name: 'Salt & nymalen svartpeppar', notes: 'efter smak' },
        ]
      },
      {
        name: 'Toscansk kryddblandning',
        ingredients: [
          { name: 'Torkad rosmarin', amount: 1, unit: 'tsk' },
          { name: 'Torkad timjan', amount: 1, unit: 'tsk' },
          { name: 'Paprikapulver', amount: 1, unit: 'tsk' },
          { name: 'Vitlökspulver', amount: 1, unit: 'tsk' },
          { name: 'Torkad oregano', amount: 1, unit: 'tsk' },
          { name: 'Torkad basilika', amount: 1, unit: 'tsk' },
        ]
      }
    ],
    steps: [
      {
        title: 'Koka pastan',
        text: 'Koka makaronerna al dente i rikligt saltat vatten enligt anvisning på paketet. Häll av i durkslag och ställ åt sidan.'
      },
      {
        title: 'Blanda kryddorna',
        text: 'Mät upp torkad rosmarin, timjan, paprikapulver, vitlökspulver, oregano och basilika i en liten skål och rör ihop.'
      },
      {
        title: 'Bryn skinkan lätt',
        text: 'Hetta upp rapsolja i en rymlig kastrull på medelvärme och fräs den strimlade skinkan lätt i nån minut så smakerna vaknar.'
      },
      {
        title: 'I med vätska, ost & kryddor',
        text: 'Slå på mjölk, vatten, hönsbuljong och klicka i ostcrèmen/mjukosten. Tillsätt den toscanska kryddblandningen och en nypa svartpeppar. Rör runt ordentligt med en visp så osten smälter ut fint.'
      },
      {
        title: 'Låt sjuda',
        text: 'Låt soppan koka upp under omrörning och sänk sedan värmen. Låt sjuda försiktigt på låg värme i 5–10 minuter så smakerna hinner sätta sig ordentligt. Smaka av med lite salt om det behövs (skinkan och buljongen ger redan sälta).'
      },
      {
        title: 'Vänd ner pastan & servera!',
        text: 'Vänd ner de kokta makaronerna precis före servering så de blir genomvarma. Häll upp i djupa skålar och servera genast, gärna med ett gott surdegsbröd och lite färska örter på toppen.'
      }
    ],
    chefTips: [
      'Förvara gärna makaronerna och soppan separat om du gör matlådor! Annars suger pastan åt sig all soppa över natten.',
      'Vill du ha ännu mer fyllighet och lyx? Byt ut 1 dl av mjölken mot vispgrädde eller riv i lite extra parmesan precis vid servering.',
      'Föredrar du en mildare smak för de allra minsta? Börja med halva mängden av örtblandningen och smaka av.'
    ]
  }
];
