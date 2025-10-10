const express = require('express');
const newRoutes = require('./news');

const rootRoute = express.Router();

rootRoute.use('/news', newRoutes);
rootRoute.use('/', (req, res) => {
    res.render('home');
})

module.exports = rootRoute;