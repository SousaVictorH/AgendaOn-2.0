const connection = require('../database/connection');

module.exports = {

    async create(req,res){

        const {userId, password} = req.body;
        
        const user = await connection('users')
        .where('id',userId)
        .where('password',password)
        .select('name')
        .first();

        if(!user){
            // Bad request
            return res.status(400).json({error: "Cheque seus dados e tente novamente."});
        }

        return res.json(user);
    }

};