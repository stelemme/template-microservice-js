const express = require("express");

const app = express();

//const PORT = process.env.PORT;
const PORT = 4000

app.use(express.json())
app.use(express.static("./public"));

const opsRouter = require("./routes/operations");
app.use("/ops", opsRouter);

const cnvRouter = require("./routes/conversion");
app.use("/cnv", cnvRouter);

app.listen(PORT, () => {
  console.log(`Microservice available at: http://localhost:${PORT}/`);
});
