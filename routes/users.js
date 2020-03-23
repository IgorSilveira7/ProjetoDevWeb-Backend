var express = require('express');
var router = express.Router();

var idController = 5;

var users = [
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
    {name: 'Death Note', id: 1, fav: true, currentEp: 10, currentSeason:1},
    {name: 'Super Campeões', id: 5, fav: false, currentEp: 29, currentSeason:1},
   ],
  },
  {name: 'Davi',
   id: 3,
   animes: [],
  },
  {name: 'Levi',
   id: 4,
   animes: [
    {name: 'Thundercats', id: 6, fav: true, currentEp: 40, currentSeason:1},
    {name: 'Pokemon', id: 7, fav: false,currentEp: 2, currentSeason:9},
   ],
  },
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(users);
});

router.post('/', function(req, res) {
  const { name} = req.body;
  if(!(name)) {
    res.status(400).json({error:'Nome e Id são obrigatórios para o cadastramento!'});
    
  } else {
    
    const newUser = {name, idController, animes:[]};

    users.push(newUser);
  
    idController++;
  
    res.json(newUser);

  }

 
});

router.put('/:id', function(req, res) {
  const {name} = req.body;
  const {id} = req.params;

  const user = users.find(user => user.id === parseInt(id));

  user.name = name;

  res.json(user);

} );

router.delete('/:id', function(req, res) {
  const {id} = req.params;

  const userIndex = users.findIndex(user => user.id === parseInt(id));

  users.splice(userIndex, 1);

  res.json({msg:'Usuário deletado!'});

});

module.exports = router;
