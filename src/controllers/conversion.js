const path = require("path");

const descriptionGET = (req, res) => {
  var options = {
    root: path.join(__dirname, "..", "..", "public", "views"),
    headers: {
      Server: "Apache/2.4.41 (Unix)",
      "Content-Type": "text/html",
    },
  };
  res.status(200).sendFile("conversion.html", options);
};

const someConversionGET = (req, res) => {
  res.set({
    Server: "Apache/2.4.41 (Unix)",
    "Content-Type": "application/json",
    "Content-Length": "155",
  });

  res.status(200).json({
    message:
      "Send data to this endpoint with an HTTP POST request to convert the data to another data type.",
    accepts: "application/json",
    returns: "application/json",
  });
};

const someConversionPOST = (req, res) => {
  const data = req.body;

  // Here some conversion happens on the data, then a response is send. 
  // In this template we just return a confirmation that the data is successfully received.
  console.log(data);

  res.set({
    Server: "Apache/2.4.41 (Unix)",
    "Content-Type": "application/json",
    "Content-Length": "39",
  });

  res.status(200).json({ message: "Data received successfully" });
};

module.exports = {
  descriptionGET,
  someConversionGET,
  someConversionPOST,
};