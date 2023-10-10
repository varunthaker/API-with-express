const express = require("express");
const dbConnect = require("./db/connect.js");
const routes = require("./routes/routes.js");

const app = express();
const PORT = 3000;
dbConnect();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${PORT}`);
});
