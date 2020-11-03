const connection = require('../database/connection');

module.exports = {

    async create(req,res){

        const {subject_id,
        title,
        description,
        date} = req.body;

        await connection('anotations').insert({
            title,
            description,
            date,
            subject_id
        })

        res.status(204).send();
        
    },

    async list(req,res){

        const subject_id = req.headers.authorization;

        const resultado = await connection('anotations')
        .where('subject_id', subject_id)
        .select('*')

        return res.json(resultado);

    },

    async delete(req,res){

        const {id} = req.body;
        const subject_id = req.headers.authorization;

        await connection('anotations')
        .where('subject_id', subject_id)
        .where('id', id)
        .delete();

        return res.status(204).send();
    }

};