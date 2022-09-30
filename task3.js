var fs = require("fs");

fs.readFile("welcome.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("the text file contains :" + data.toString());
});
console.log("Loading....");
