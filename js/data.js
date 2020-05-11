const data = {
  defaultPointsDisplayed: [
    "Pole d'échange Antibes",
    "Gare routière des Messugues",
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
      end: "Gare routière des Messugues",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Rond-point des Bouillides",
      end: "Gare routière des Messugues",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Ile verte",
      end: "Gare routière des Messugues",
      difficulty: 1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
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
    }, {
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
    }, {
      start: "Saint-Basile",
      end: "Mouans-Sartoux",
      difficulty: 1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Saint-Basile",
      end: "Font de l'Orme",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 15,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
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
    }, {
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
      start: "Roquefort les Pins",
      end: "Le Rouret",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    {
      start: "Le Rouret",
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
    }, {
      start: "Roquefort les Pins",
      end: "Villeneuve-Loubet",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    },
    , {
      start: "Villeneuve-Loubet Plage",
      end: "Villeneuve-Loubet",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Polygone",
      end: "Villeneuve-Loubet",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Polygone",
      end: "Vers Vence",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Polygone",
      end: "Vers La Colle-Sur-Loup",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Polygone",
      end: "Promenade de Cagnes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Polygone",
      end: "Promenade de Cagnes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Cap 3000",
      end: "Promenade de Cagnes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Villeneuve-Loubet Plage",
      end: "Promenade de Cagnes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Villeneuve-Loubet Plage",
      end: "Biot SNCF",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Parking Fontanette",
      end: "Biot SNCF",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }, {
      start: "Pole d'échange Antibes",
      end: "Biot SNCF",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 15 },
      align: "top", //bottom
    }
    , {
      start: "Rond-point Coluche",
      end: "Chateauneuf de Grasse",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Pegomas",
      end: "Mouans-Sartoux",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Pegomas",
      end: "La Roquette-Sur-Siagne",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "La Roquette-Sur-Siagne",
      end: "Mouans-Sartoux",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Cannes",
      end: "Cannes Est",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Golfe-Juan",
      end: "Cannes Est",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Golfe-Juan",
      end: "Vallauris",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Golfe-Juan",
      end: "Exflora",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Vallauris",
      end: "Rond-point de Mougins le Haut",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Vallauris",
      end: "Pont A8",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Pont A8",
      end: "Route de la Valmasque",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Pont A8",
      end: "Rond-point des Bouillides",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Pont A8",
      end: "Carrefour Antibes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Saint-Jean",
      end: "Pole d'échange Antibes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Auchan",
      end: "Mouans-Sartoux",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Auchan",
      end: "Grasse",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Mandelieu A8",
      end: "La Roquette-Sur-Siagne",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      align: "top", //bottom
    }, {
      start: "Bas du Cannet",
      end: "Bretelle de Cannes",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Bas du Cannet",
      end: "Cannes",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Cannes",
      end: "Mandelieu Plage",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Cannes",
      end: "Vallauris",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Vallauris",
      end: "Saint-Jean",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Grasse",
      end: "Pegomas",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Mandelieu A8",
      end: "Mandelieu Plage",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Mandelieu A8",
      end: "Cannes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "La Roquette-Sur-Siagne",
      end: "Bretelle de Cannes",
      difficulty: 0, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }, {
      start: "Bas du Cannet",
      end: "Rond-point de Mougins le Haut",
      difficulty: -1, //-1, 1
      displayMin: true, //false
      time: 14,
      times: { hard: 20, easy: 10 },
      align: "top", //bottom
    }


  ],
  points: {
    "Gare SNCF Juans-les-Pin": { x: 2303, y: 1676 },
    "Pole d'échange Antibes": { x: 2392, y: 1443 },
    "Gare routière des Messugues": { x: 1443, y: 817 },
    "Parking Fontanette": { x: 2157, y: 840 },
    "Saint-Philippe": { x: 1864, y: 942 },
    "Rond-point des Bouillides": { x: 1447, y: 937 },
    "Font de l'Orme": { x: 1152, y: 1029 },
    "Rond-point de valbonne": { x: 988, y: 812 },
    "Rond-point des quatres chemins": { x: 718, y: 583 },
    "Mouans-Sartoux": { x: 690, y: 945 },
    "Saint-Basile": {x: 1039, y: 1137},
    "Bretelle de Cannes": { x: 1069, y: 1432 },
    "Route de la Valmasque": { x: 1417, y: 1181 },
    "Rond-point de Mougins le Haut": { x: 1504, y: 1337 },
    "Carrefour Antibes": { x: 1994, y: 1172 },
    "Saint-Jean": { x: 2059, y: 1438 },
    "Exflora": { x: 2057, y: 1628 },
    "Ile verte": { x: 1527, y: 505 },
    "Valbonne": { x: 1090, y: 537 },
    "Roquefort les Pins": { x: 1499, y: 115 },
    "Rond-point Coluche": { x: 857, y: 226 },
    "Grasse": { x: 140, y: 350 },
    "Golfe-Juan": { x: 1846, y: 1724 },
    "Vallauris": { x: 1655, y: 1594 },
    "Pont A8": { x: 1729, y: 1154 },
    "Cannes Est": { x: 1539, y: 2058 },
    "Cannes": { x: 1149, y: 1994 },
    "Mandelieu Plage": { x: 397, y: 2313 },
    "Bas du Cannet": { x: 1190, y: 1696 },
    "La Roquette-Sur-Siagne": { x: 516, y: 1508 },
    "Pegomas": { x: 178, y: 1319 },
    "Biot SNCF": { x: 2477, y: 1013 },
    "Villeneuve-Loubet Plage": { x: 2651, y: 550 },
    "Promenade de Cagnes": { x: 2841, y: 339 },
    "Cap 3000": { x: 3267, y: 221 },
    "Polygone": { x: 2534, y: 199 },
    "Vers Vence": { x: 2482, y: 7 },
    "Vers La Colle-Sur-Loup": { x: 2412, y: 7 },
    "Villeneuve-Loubet": { x: 2414, y: 297 },
    "Vers Nice Promenade": { x: 3353, y: 168 },
    "Le Rouret": { x: 1084, y: 23 },
    "Chateauneuf de Grasse": { x: 768, y: 14 },
    "Mandelieu A8": { x: 456, y: 1911 },
    "Croix des Gardes": { x: 862, y: 1844 },
    "Auchan": { x: 438, y: 661 }

  },
};