var fs = require("fs");
console.log("Starting");
fs.writeFile("./files/write_sync.txt", "Hello world! Synchronous!");
console.log("Finished!");