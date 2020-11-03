const connection = require('../database/connection');

module.exports = {

    async existSubject(subjectName){

        const aux = await connection('subjects')
            .where('name', subjectName).first();
    
        if (aux) {
            return true;
        }
    
        return false;
    }

}