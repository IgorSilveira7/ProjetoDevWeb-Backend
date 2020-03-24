const users = require('../database/users');

var idController = 5;

class UsersControllers {

    index(req, res) {
        res.json(users);
    }

    findById(req, res) {

        const {id} = req.params;
      
        const user = users.find(user => user.id === parseInt(id));
      
        res.json(user);
    }

    store(req, res) {
        const { name} = req.body;
        if(!(name)) {
          res.status(400).json({error:'Nome é obrigatório para o cadastramento!'});
          
        } else {
          
          const newUser = {name, idController, animes:[]};
      
          users.push(newUser);
        
          idController++;
        
          res.json(newUser);
      
        }
         
    }

    update(req, res) {
        const {name} = req.body;
        const {id} = req.params;
      
        const user = users.find(user => user.id === parseInt(id));
      
        user.name = name;
      
        res.json(user);
      
    }

    delete(req, res) {
        const {id} = req.params;
      
        const userIndex = users.findIndex(user => user.id === parseInt(id));
      
        users.splice(userIndex, 1);
      
        res.json({msg:'Usuário deletado!'});
      
    }

}

module.exports = new UsersControllers();