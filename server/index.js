const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//get all sizes

app.get("/", async (req, res) => {
  try {
    const allSizes = await pool.query("SELECT * FROM CustomerSize");
    res.json(allSizes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create a size

app.post("/size", async (req, res) => {
  try {
    const {
      c_name,
      c_tall,
      c_shoulder,
      c_arm,
      c_neck,
      c_width,
      c_description,
      c_fabric_name,
      c_phone,
    } = req.body;
    const newSize = await pool.query(
      "INSERT INTO CustomerSize (c_name,c_tall,c_shoulder,c_arm,c_neck,c_width,c_description,c_fabric_name,c_phone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
      [
        c_name,
        c_tall,
        c_shoulder,
        c_arm,
        c_neck,
        c_width,
        c_description,
        c_fabric_name,
        c_phone,
      ]
    );

    res.json(newSize.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get a size of a customer (summary)

app.get("/size/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const size = await pool.query(
      "SELECT * FROM customersize WHERE c_id = $1",
      [id]
    );

    res.json(size.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
