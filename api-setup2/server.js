const express = require("express");
const deliveryRoutes = require("./src/Employee/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/deliveryCo", deliveryRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
// psql -h localhost -p 5432 -U username beachcoders_db
