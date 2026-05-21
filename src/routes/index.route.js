const homeController = require("../app/controller/home.controller");
const searchRouter = require("./search.route");

function routes(app) {
  app.use("/search", searchRouter);
  app.use("/", homeController.index);
}

module.exports = routes;
