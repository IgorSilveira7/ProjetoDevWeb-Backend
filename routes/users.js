var express = require('express');
var router = express.Router();

var users = [
  {'nome': 'Igor',
    'id':'igorsa',
    'animes':['Death note', 'Fullmetal alchemist', 'pokemon'],
  },
  {'nome': 'Rich',
  'id':'richecrboy',
  'animes':['Sete pecados capitais', 'dragon ball'],
  },
  {'nome': 'Davi',
  'id':'Dumbass',
  'animes':[],
  },
  {'nome': 'Levi',
  'id':'LeRios',
  'animes':['pokemon', 'digimon', 'thundercats', 'caverna do dragão'],
  },
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
