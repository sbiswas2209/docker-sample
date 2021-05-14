'use strict';
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Server Started'
    });
});

app.listen(port , host , (err) => {
    if(err){
        console.log('An Error Occurred');
    }
    else{
        console.log(`Server Started on http://${host}:${port}`);
    }
});