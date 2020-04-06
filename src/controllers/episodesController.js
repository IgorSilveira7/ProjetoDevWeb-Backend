const users = require('../database/users');

class EpisodesController {

    update(req,res) {

        const {id, id_anime} = req.params;
        const {operacao} = req.query;

        const user = users.find(user => user.id === parseInt(id));
        const anime = user.animes.find(anime => anime.id === parseInt(id_anime));

        if(operacao === 'increment') {
            anime.currentEp++;
            res.json(anime);
        } else if(operacao === 'decrement') {
            anime.currentEp--;
            res.json(anime);
        }
    }

}

module.exports = new EpisodesController();