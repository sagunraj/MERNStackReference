const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req,res,next)=>{
        return res.send('Speakers');
    });

    router.get('/:name', (req,res,next)=>{
        return res.send(`Speaker Detail page for ${req.params.name}`);
    });

    return router;
};