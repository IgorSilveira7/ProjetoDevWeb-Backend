const users = require('../database/users');

var animeIdController = 9;

class AnimesController {

    index(req, res)  {

        const {id} = req.params;
        const user = users.find(user => user.id === parseInt(id));

        res.json(user.animes);
    }

    store(req, res) {
        const {id} = req.params;
        const {name, description} = req.body;

        if(!(name)) {
            res.status(400).json({error: 'Nome é obrigatório para o cadastramento!'});
        } else {
            if(!(description)) {
                description = '';
            }

            const newAnime = {name, description, id: animeIdController, fav:false, currentEp: 1, currentSeason: 1};
            const user = users.find(user => user.id === parseInt(id));

            user.animes.push(newAnime);

            animeIdController++;

            res.json(newAnime);
        }

    }

    update(req, res) {

        const {id, id_anime} = req.params;
        const {name, description, fav} = req.body;

        const user = users.find(user => user.id === parseInt(id));
        const anime = user.animes.find(anime => anime.id === parseInt(id_anime));

        
        if(name) {
            anime.name = name;
        }

        if(description) {
            anime.description = description;
        }

        if(fav) {
            anime.fav = fav;
        }


        res.json(anime);

    }

    delete(req, res) {
        const {id, id_anime} = req.params;

        const user = users.find(user => user.id === parseInt(id));
        const animeIndex = user.animes.findIndex(anime => anime.id === parseInt(id_anime));

        user.animes.splice(animeIndex, 1);

        res.json({msg: 'Anime deletado!'});

    }

}

module.exports = new AnimesController();