const express = require("express");
const newsController =  require("../app/controllers/news.controller");

const newsRoute = express.Router();

newsRoute.get("/search", newsController.search)
newsRoute.get("/", newsController.index);

module.exports = newsRoute;