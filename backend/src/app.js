const express = require("express");
const cors = require("cors");

const blueprintRoutes = require("./routes/blueprintRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Backend running" });
});

// Blueprint APIs
app.use("/api/blueprints", blueprintRoutes);

module.exports = app;
