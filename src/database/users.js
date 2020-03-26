const users = [
    {name: 'Igor',
      id: 1,
      animes:[
        {name: 'Death Note', description:'Psicopata brincando de Deus', id: 1, fav: true, currentEp: 16, currentSeason:1 }, 
        {name: 'Fullmetal achemist', description:'saga de dois irmãos atrás de pedra', id: 2, fav: true, currentEp: 4, currentSeason:1},
        {name: 'Eyeshield21', description:'Mlk que sofre bullying corre mais q geral', id: 3, fav: false, currentEp: 30, currentSeason:1},
      ],
    },
    {name: 'Rich',
     id: 2,
     animes: [
      {name: 'He-man', description:'principe x caveirao', id: 4, fav: false, currentEp: 20, currentSeason:1},
      {name: 'Death Note', description:'Psicopata x detetive', id: 5, fav: true, currentEp: 10, currentSeason:1},
      {name: 'Super Campeões', description:'Futebol mentiroso', id: 6, fav: false, currentEp: 29, currentSeason:1},
     ],
    },
    {name: 'Davi',
     id: 3,
     animes: [],
    },
    {name: 'Levi',
     id: 4,
     animes: [
      {name: 'Thundercats', description:'Só tem lion e o resto é carregado', id: 7, fav: true, currentEp: 40, currentSeason:1},
      {name: 'Pokemon', description:'Mlk que tem 10 anos pra sempre e nunca ganha', id: 8, fav: false,currentEp: 2, currentSeason:9},
     ],
    },
  ];

  module.exports = users;