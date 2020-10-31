const express = require('express');

const routes = express.Router();

routes.post('/users', (req,res) => {

    const {name, password, email, phone} = req.body;

    console.log(req.body);

    res.json({
        
    })

})

module.exports = routes;