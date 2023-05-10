const express = require("express");

const app = express();

// The port on which the Microservice runs
const PORT = process.env.PORT;

// Assigning the routes to the "/" URI
const homeRouter = require("./routes/home");
app.use("/", homeRouter);

// Assigning the routes to the "/op" URI
const opRouter = require("./routes/op");
app.use("/op", opRouter);

app.listen(PORT, () => {
  console.log(`Microservice available at: http://localhost:${PORT}/`);
});
