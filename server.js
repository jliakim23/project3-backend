const express = require("express");
const app = express();
const morgan = require("morgan");
const authRoutes = require("./controllers/authController");
const planController = require('./controllers/planController');

const session = require("express-session");
app.use(
  session({ secret: "somestring", cookie: { maxAge: 3600000 } })
);

const cors = require("cors");
require("dotenv").config();

// app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(authRoutes);

app.use((req, res, next) => {
  if (!req.session.userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  next();
});

app.use("/plan", planController)

app.get("/", (req, res) => {
  res.json({ message: "home route" });
});


const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log("listening on", PORT));