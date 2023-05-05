const path = require("path");

const descriptionGET = (req, res) => {
  var options = {
    root: path.join(__dirname, "..", "..", "public", "views"),
    headers: {
      Data: Date.now(),
      Server: "Apache/2.4.41 (Unix)",
      "Content-Type": "text/html",
    },
  };
  res.status(200).sendFile("ops.html", options);
};

const someOperationGET = (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Content-Length": "91",
  });

  res.status(200).json({
    message:
      "Send data to this endpoint with an HTTP POST request to activate an operation on the data.",
  });
};

const someOperationPOST = (req, res) => {
  const data = req.body;

  // Here some operation happens on the data, then a response is send. In this example we just return a message that the data is successfully received.
  console.log(data);

  res.set({
    "Content-Type": "application/json",
    "Content-Length": "39",
  });

  res.status(200).json({ message: "Data received successfully" });
};

module.exports = {
  descriptionGET,
  someOperationGET,
  someOperationPOST,
};
