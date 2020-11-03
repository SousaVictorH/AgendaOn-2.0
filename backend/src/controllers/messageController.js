const connection = require('../database/connection');

module.exports = {

    async create(req,res){

        const {username,
        email,
        phone,
        message} = req.body;

        await connection('messages').insert({
            username,
            email,
            phone,
            message
        })

        res.status(204).send();
        
    },

};