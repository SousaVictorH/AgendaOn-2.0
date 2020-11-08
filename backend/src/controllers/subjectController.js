const connection = require('../database/connection');
const util = require('./util');

module.exports = {

    async create(req, res) {

        const { name, description } = req.body;

        const user_id = req.headers.authorization;
        
        const nota1 = null;
        const nota2 = null;
        const nota3 = null;

        await connection('subjects').insert({
            name,
            description,
            nota1,
            nota2,
            nota3,
            user_id
        })

        return res.status(200).send();
    },

    async list(req, res) {

        const user_id = req.headers.authorization;

        const subjects = await connection('subjects')
            .where('user_id', user_id)
            .select('*')

        return res.json(subjects);

    },

    async addNote(req, res) {

        const { subject, note } = req.body;

        if (! await util.existSubject(subject)) {
            return res.status(400).json('Não existe!');
        }

        const user_id = req.headers.authorization;

        const resultado = await connection('subjects')
            .where({ user_id, name: subject })
            .first();

        if (!resultado.nota1) {

            await connection('subjects')
                .where({ user_id, name: subject })
                .first().update({ nota1: note })

        } else if (!resultado.nota2) {

            await connection('subjects')
                .where({ user_id, name: subject })
                .first().update({ nota2: note })

        } else if (!resultado.nota3) {

            await connection('subjects')
                .where({ user_id, name: subject })
                .first().update({ nota3: note })

        } else {
            return res.status(400).json('Limite atingido!');
        }

        return res.status(204).send();

    },


};
