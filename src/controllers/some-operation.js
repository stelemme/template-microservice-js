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
    "Content-Length": 123,
  });

  res.status(200).json({
    supported_methods: ["GET", "POST"],
    POST_request_data: "all",
    POST_response_data: "application/json",
  });
};

const someOperationPOST = (req, res) => {
  // The data is retrieved out of the incoming HTTP POST request.
  const data = req.body;  

  // Here some operation is performed on the data.

  // The headers are defined properly. 
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
