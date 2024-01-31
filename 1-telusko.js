var express = require("express");
var app = express();
app.get("/", function (req, res) {
  //   console.log("Hello World");
  res.send("Hello World");
});
app.get("/valli", function (req, res) {
  res.send("Welcome back valli");
});
app.get("/alien/:id", function (req, res) {
  const id = req.params.id;
  res.send("Hey Valli " + id);
});
app.get("/alien", function (req, res) {
    const id = req.query.id;
    res.send("Welcome Valli " + id);
  });
app.listen(3030, function (req, res) {
  console.log("Running..");
});
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write("Welcome Back Alien!!!")
//     res.end();
// }).listen(9090)
// import calc from "./calc.js";
// let calc = require("./calc.js");
// result = calc.add(4, 5);
// console.log("The output is " + result);
// var fs = require("fs");
// fs.readFile('calc.js','utf-8',function(err,data){
//     console.log(data)
// })
// fs.writeFile('calc.js','console.log("done")',function(err){
//     console.log('Data Saved');
// })
// fs.appendFile('calc.js','console.log("done")',function(err){
//     console.log('Data Saved');
// })
// fs.unlink("calc1.js", function (err) {
//   console.log("File Deleted");
// });
