const users = [
    {name: 'Igor',
      id: 1,
      animes:[
        {name: 'Death Note', id: 1, fav: true, currentEp: 16, currentSeason:1 }, 
        {name: 'Fullmetal achemist', id: 2, fav: true, currentEp: 4, currentSeason:1},
        {name: 'Eyeshield21', id: 3, fav: false, currentEp: 30, currentSeason:1},
      ],
    },
    {name: 'Rich',
     id: 2,
     animes: [
      {name: 'He-man', id: 4, fav: false, currentEp: 20, currentSeason:1},
      {name: 'Death Note', id: 5, fav: true, currentEp: 10, currentSeason:1},
      {name: 'Super Campeões', id: 6, fav: false, currentEp: 29, currentSeason:1},
     ],
    },
    {name: 'Davi',
     id: 3,
     animes: [],
    },
    {name: 'Levi',
     id: 4,
     animes: [
      {name: 'Thundercats', id: 7, fav: true, currentEp: 40, currentSeason:1},
      {name: 'Pokemon', id: 8, fav: false,currentEp: 2, currentSeason:9},
     ],
    },
  ];

  module.exports = users;