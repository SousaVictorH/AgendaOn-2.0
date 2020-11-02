const connection = require('../database/connection');

module.exports = {

    async create(req,res){
        
        const {name, description} = req.body;
        const user_id = req.headers.authorization;

        const aux = await connection('subjects')
        .where('name', name).first();

        if(aux){
            return res.status(400).json('ja existe!');
        }

        nota1 = -1;
        nota2 = -1;
        nota3 = -1;

        const result = await connection('subjects').insert({
            name,
            description,
            nota1,
            nota2,
            nota3,
            user_id
        })

        console.log(result[0]);

        return res.status(200).json("ok");
    },

    async list(req,res){

        const user_id = req.headers.authorization;

        const subjects = await connection('subjects')
        .where('user_id',user_id)
        .select('*')

        return res.json(subjects);

    },

    async addNote(req,res){

        const {subject, note} = req.body;

        const resultado = await connection('subjects')
        .where('name', subject).first();

        if(!resultado){
            return res.status(400).json('Não existe!');
        }

        console.log(resultado);

        return res.status(200).json("OK");

    }

};