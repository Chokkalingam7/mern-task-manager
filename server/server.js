const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Task Manager Backend is running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
