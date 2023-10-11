const express = require("express");
const app = express();
app.use(express.json());

const dbConnect = require("./db/connect.js");
dbConnect();
const routes = require("./routes/routes.js");
app.use("/api/v1", routes);

const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
