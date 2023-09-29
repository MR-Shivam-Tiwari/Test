const express = require("express");
const MongoDB = require("./db");
const app = express();
const port = 5000;

MongoDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json())

app.use('/api', require("./Routes/NewUser"))

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
