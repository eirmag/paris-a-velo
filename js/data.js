const data = {
  defaultPointsDisplayed: [
    "Pole d'échange Antibes",
    "Gare routière des Mesuges",
    "Gare SNCF Juans-les-Pin",
    "Parking Fontanette",
    "Saint-Philippe",
    "Rond-point des Bouillides",
    "Font de l'Orme",
    "Rond-point de valbonne",
    "Mouans-Sartoux",
    "Saint-Basile",
    "Bretelle de Cannes",
    "Route de la Valmasque",
    "Rond-point de Mougins le Haut",
    "Carrefour Antibes"
  ],
  lines: [
    {
      start: "Pole d'échange Antibes",
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
      start: "Pole d'échange Antibes",
      end: "Carrefour Antibes",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    },
    {
      start: "Pole d'échange Antibes",
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
      end: "Gare routière des Mesuges",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Rond-point des Bouillides",
      end: "Gare routière des Mesuges",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Ile verte",
      end: "Gare routière des Mesuges",
      difficulty: 1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Saint-Philippe",
      end: "Rond-point des Bouillides",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des Bouillides",
      end: "Font de l'Orme",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point des Bouillides",
      end: "Rond-point de valbonne",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Font de l'Orme",
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
      start: "Saint-Basile",
      end: "Mouans-Sartoux",
      difficulty: 1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Saint-Basile",
      end: "Font de l'Orme",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },{
      start: "Rond-point Coluche",
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
      end: "Rond-point Coluche",
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
      end: "Saint-Basile",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Route de la Valmasque",
      end: "Saint-Basile",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Route de la Valmasque",
      end: "Rond-point de Mougins le Haut",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Route de la Valmasque",
      end: "Rond-point des Bouillides",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Ile verte",
      end: "Saint-Philippe",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Roquefort les Pins",
      end: "Ile verte",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Roquefort les Pins",
      end: "Rond-point Coluche",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Rond-point Coluche",
      end: "Grasse",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }


  ],
  points: {
    "Gare SNCF Juans-les-Pin": {x: 2303, y: 1676},
    "Pole d'échange Antibes": {x: 2392, y: 1443},
    "Gare routière des Mesuges": {x: 1443, y: 817},
    "Parking Fontanette" : {x: 2157, y: 840},
    "Saint-Philippe" : {x: 1864, y: 942},
    "Rond-point des Bouillides": {x: 1447, y: 937},
    "Font de l'Orme": {x: 1152, y: 1029},
    "Rond-point de valbonne": {x: 988, y: 812},
    "Rond-point des quatres chemins": {x: 718, y: 583},
    "Mouans-Sartoux": {x: 663, y: 880},
    "Saint-Basile": {x: 1101, y: 1138},
    "Bretelle de Cannes": {x: 1069, y: 1432},
    "Route de la Valmasque": {x: 1417, y: 1181},
    "Rond-point de Mougins le Haut": {x: 1504, y: 1337},
    "Carrefour Antibes": {x: 1994, y: 1172},
    "Saint-Jean" : {x: 2059, y: 1438},
    "Exflora": {x: 2057, y: 1628},
    "Ile verte":  {x: 1527, y: 505},
    "Valbonne": {x: 1090, y: 537},
    "Roquefort les Pins": {x: 1499, y: 115},
    "Rond-point Coluche": {x: 857, y: 226},
    "Grasse": {x: 140, y: 350},
  },
};