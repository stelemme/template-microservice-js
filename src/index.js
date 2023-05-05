const express = require("express");

const app = express();

//const PORT = process.env.PORT;
const PORT = 4000

app.use(express.json())
app.use(express.static("./public"));

const opsRouter = require("./routes/operation");
app.use("/op", opsRouter);

app.listen(PORT, () => {
  console.log(`Microservice available at: http://localhost:${PORT}/`);
});
