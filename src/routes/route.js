const express = require("express");
const { controller } = require("../controllers");

const router = express.Router();

const routes = (app) => {
  router.get("/", controller.home);

  app.use(router);
};

module.exports = routes;