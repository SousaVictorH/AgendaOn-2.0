const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {

    async create(req,res){
        const {name, password, email, phone} = req.body;
        const id = crypto.randomBytes(4).toString('hex');
    
        await connection('users').insert({
            id,
            name,
            password,
            email,
            phone
        })
    
        return res.status(200).json({id});
    },

    async list(req,res){

        const users = await connection('users').select('*');
    
        return res.json(users);
    }

};