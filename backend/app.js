require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const { sequelize } = require("./models/index");
// sequelize.sync({ alter: true });

const app = express();
app.use(cors());

//routes
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const medicineDocRoute = require("./routes/medicineDocRoutes");
const ivFluidRoute = require("./routes/ivFluidRoute");
const cprCycleRoute = require("./routes/cprCycleRoute");
const cprTimeRoute = require("./routes/cprTimeRoute");
const ekgRoute = require("./routes/ekgRoute");
const etTubeRoute = require("./routes/etTube");
const cLineRoute = require("./routes/cLineRote");
const adrenalineRoute = require("./routes/adrenalineTimeRoute");
const medicineTakeRoute = require("./routes/medicineTakeRoute");
const userRoute = require("./routes/userRoute");
const authController = require("./controllers/authController");

//middleware
const errorMiddleware = require("./middlewares/error");
const notFoundMiddleware = require("./middlewares/notFound");
const authenticate = require("./middlewares/authenticate");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//login and register
app.use("/login", loginRoute);
app.use("/register", registerRoute);

//user
app.use("/users", authenticate, userRoute);
//medicineDoc
app.use("/medicineDoc", medicineDocRoute);

//ivFluid
app.use("/ivFluid", ivFluidRoute);

//cprCycle
app.use("/cprCycle", cprCycleRoute);

//cprTime
app.use("/cprTime", cprTimeRoute);

//ekg
app.use("/ekg", ekgRoute);

//etTube
app.use("/etTube", etTubeRoute);

//c-line
app.use("/cLine", cLineRoute);

//adrenalineTime
app.use("/adrenalineTime", adrenalineRoute);

//medicineTake
app.use("/medicineTake", medicineTakeRoute);

//use err
app.use(errorMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server` + port));
