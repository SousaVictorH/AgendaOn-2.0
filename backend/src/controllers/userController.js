const crypto = require('crypto');
const { get } = require('http');

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
    },

    async getName(req,res){

        const {userId} = req.body;

        const userName = await connection('users')
        .where('id', userId)
        .select('name')
        .first();

        return res.json(userName);

    }

};