const path = require("path");

const descriptionGET = (req, res) => {
  var options = {
    root: path.join(__dirname, "..", "..", "public"),
    headers: {
      Server: "My Node.js Server",
      "Content-Type": "text/html",
    },
  };
  res.status(200).sendFile("some-operation.html", options);
};

const someOperationGET = (req, res) => {
  res.set({
    Server: "My Node.js Server",
    "Content-Type": "application/json",
    "Content-Length": 155,
  });

  res.status(200).json({
    message:
      "Send data to this endpoint with an HTTP POST request to activate an operation on the data.",
    accepts: "application/json",
    returns: "application/json",
  });
};

const someOperationPOST = (req, res) => {
  // The data is retreived out of the incomming HTTP POST request.
  const data = req.body;  

  // Here some operation is performed on the data.

  // The headers are properly defined.
  res.set({
    "Date": new Date(),
    "Server": "My Node.js Server",
    "Content-Type": "application/json",
    "Content-Length": 39,
  });

  // The response is sent back to the requesting party.
  res.status(200).json({ "message": "Data received successfully" });
};

module.exports = {
  descriptionGET,
  someOperationGET,
  someOperationPOST,
};
