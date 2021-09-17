const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db");

const PORT = process.env.PORT || 5000;

// const { createProxyMiddleware } = require("http-proxy-middleware");

//middleware
app.use(cors());
app.use(express.json());

// const proxy = require("http-proxy-middleware");

// app.use("/", proxy({ target: "http://localhost:5000", changeOrigin: true }));

// app.get('/', (req, res) => {
//   res.status(200).json({message: 'Hello from Express Server!'})
// });

//get all user info
app.get("/", async (req, res) => {
  console.log("helloooo");
  try {
    const { rows } = await db.query("SELECT * FROM users");
    // console.log("user :", user);
    res.send(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/photos", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM photos");
    // console.log("user :", user);
    res.send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
