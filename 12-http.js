const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  // res.write("Welcome to our home page");
  res.end(`<h1>Oops!!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">back home</a>`);
});
server.listen(8080);

//telusko method
// http
//   .createServer(function (req, res) {
//     console.log("Hello World");
//     res.write("Hello World Valli");
//     res.end();
//   })
//   .listen(8000);
