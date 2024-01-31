const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("donw with this task");
      }
    );
  });
});
console.log("starting next task");
