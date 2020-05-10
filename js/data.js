const data = {
  defaultPointsDisplayed: [
    "Pole d'echange Antibes",
    "Gare routiere des Mesuges",
    "Gare SNCF Juans-les-Pin",
    "Parking Fontanette",
    "Saint-Philippe",
    "Rond-point des bouillides",
    "Font de l'orme",
    "Rond-point de valbonne",
    "Mouans-Sartoux",
    "Saint-basile",
    "Bretelle de Cannes",
    "Route de la valmasque",
    "Rond-point de Mougins le Haut",
    "Carrefour Antibes"
  ],
  lines: [
    {
      start: "Pole d'echange Antibes",
      end: "Gare SNCF Juans-les-Pin",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 5,
      //times: { hard: 9, easy: 7 },
      align: "top", //bottom
    },
    {
      start: "Gare SNCF Juans-les-Pin",
      end: "Exflora",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 5,
      //times: { hard: 9, easy: 7 },
      align: "top", //bottom
    },
    {
      start: "Exflora",
      end: "Saint-Jean",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 5,
      //times: { hard: 9, easy: 7 },
      align: "top", //bottom
    },
    {
      start: "Saint-Jean",
      end: "Carrefour Antibes",
      difficulty: -1, 
      displayMin: true, //false
      time: 5,
      times: { hard: 9, easy: 5 },
      align: "top", //bottom
    },
    {
      start: "Pole d'echange Antibes",
      end: "Carrefour Antibes",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    },
    {
      start: "Pole d'echange Antibes",
      end: "Parking Fontanette",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    },
    {
      start: "Carrefour Antibes",
      end: "Saint-Philippe",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Saint-Philippe",
      end: "Gare routiere des Mesuges",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Rond-point des bouillides",
      end: "Gare routiere des Mesuges",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Ile verte",
      end: "Gare routiere des Mesuges",
      difficulty: 1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Saint-Philippe",
      end: "Rond-point des bouillides",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des bouillides",
      end: "Font de l'orme",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des bouillides",
      end: "Rond-point de valbonne",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Font de l'orme",
      end: "Rond-point de valbonne",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Parking Fontanette",
      end: "Saint-Philippe",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Ile verte",
      end: "Parking Fontanette",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des quatres chemins",
      end: "Mouans-Sartoux",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Saint-basile",
      end: "Mouans-Sartoux",
      difficulty: 1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Saint-basile",
      end: "Font de l'orme",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Rond-point coluche",
      end: "Valbonne",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des quatres chemins",
      end: "Valbonne",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des quatres chemins",
      end: "Rond-point de valbonne",
      difficulty: 1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point de valbonne",
      end: "Valbonne",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des quatres chemins",
      end: "Rond-point coluche",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Ile verte",
      end: "Valbonne",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    
    {
      start: "Bretelle de Cannes",
      end: "Saint-basile",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Route de la valmasque",
      end: "Saint-basile",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Route de la valmasque",
      end: "Rond-point de Mougins le Haut",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Route de la valmasque",
      end: "Rond-point des bouillides",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }
    
  ],
  points: {
    "Gare SNCF Juans-les-Pin": {x: 2303, y: 1676},
    "Pole d'echange Antibes": {x: 2392, y: 1443},
    "Gare routiere des Mesuges": {x: 1443, y: 817},
    "Parking Fontanette" : {x: 2157, y: 840},
    "Saint-Philippe" : {x: 1864, y: 942},
    "Rond-point des bouillides": {x: 1447, y: 937},
    "Font de l'orme": {x: 1152, y: 1029},
    "Rond-point de valbonne": {x: 988, y: 812},
    "Rond-point des quatres chemins": {x: 718, y: 583},
    "Mouans-Sartoux": {x: 663, y: 880},
    "Saint-basile": {x: 1101, y: 1138},
    "Bretelle de Cannes": {x: 1069, y: 1432},
    "Route de la valmasque": {x: 1417, y: 1181},
    "Rond-point de Mougins le Haut": {x: 1504, y: 1337},
    "Carrefour Antibes": {x: 1994, y: 1172},
    "Saint-Jean" : {x: 2059, y: 1438},
    "Exflora": {x: 2057, y: 1628},
    "Ile verte":  {x: 1527, y: 505},
    "Valbonne": {x: 1090, y: 537},
    "Roquefort les pins": {x: 1499, y: 115},
    "Rond-point coluche": {x: 857, y: 226}
  },
};