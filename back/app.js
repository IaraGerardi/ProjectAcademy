const express = require("express");

const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {
  adminRouter,
  loginRouter,
  counselorRouter,
  eventsRouter,
  orientedRouter,
  newsRouter,
  imagesRouter
} = require("./routes/routes");
const db = require("./database/models");

// seteamos el path del .env
dotenv.config({ path: ".env" });
// el puerto se coloca en las variables de entorno sino se utilizara 8000
const PORT = process.env.PORT || "8000";
// Para poder utilizar cors
app.use(
  cors({
    credentials: true,
    origin: [`http://localhost:${process.env.FRONT_PORT}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// Para poder utilizar json
app.use(express.json());
// Para traer datos como objetos(req.params / req.body)
app.use(express.urlencoded({ extended: true }));
// Para poder utilizar cookie-parser
app.use(cookieParser());
// carpeta para archivos publicos
app.use(express.static(path.join(__dirname, "public")));
// routes
app.use("/", loginRouter);
app.use("/admins", adminRouter);
app.use("/counselor", counselorRouter);
app.use("/oriented", orientedRouter);
app.use("/news", newsRouter);
app.use("/events", eventsRouter);
app.use("/images", imagesRouter)

// verificacion de conexion a la base de datos
const dbStatus = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(`Database connected`);
    app.listen(PORT, () => {
      console.log(
        `SERVER UP running in http://localhost:${PORT} and front in ${process.env.FRONT_PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
dbStatus();
