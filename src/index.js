const express = require("express");

const app = express();

//const PORT = process.env.PORT;
const PORT = 4000

const opsRouter = require("./routes/operations");

app.use(express.json())
app.use(express.static("./public"));
app.use("/ops", opsRouter);

app.listen(PORT, () => {
  console.log(`Microservice available at: http://localhost:${PORT}/`);
});
