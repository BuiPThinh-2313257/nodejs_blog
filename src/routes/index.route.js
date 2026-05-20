const searchRouter = require("./search.route");

function routes(app) {
  app.get("/", (req, res) => {
    return res.render("home");
  });

  app.use("/search", searchRouter);
}

module.exports = routes;
