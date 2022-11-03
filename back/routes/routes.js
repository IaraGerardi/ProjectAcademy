const adminRouter = require("./adminRouter");
const loginRouter = require("./loginRouter");
const counselorRouter = require("./counselorRouter");
const eventsRouter = require("./eventsRouter");
const orientedRouter = require("./orientedRouter");
const newsRouter = require("./newsRouter");
const imagesRouter = require("../routes/imagesRouter")

module.exports = {
  adminRouter,
  loginRouter,
  counselorRouter,
  eventsRouter,
  orientedRouter,
  newsRouter,
  imagesRouter
};
