const fs = require('fs');

/* fs.writeFile('newFile.txt', 'Hello, I am new file.', (err, success) => {
    if (err) {
        console.log("Error!");
    }
    else {
        console.log("File saved.");
    }
}); */


/* fs.appendFile('newFile.txt', "This is appended at the end of the file.", (err, success) => {
    if(err){
        console.log("Error!");
    }
    else {
        console.log("Text appended in the file.");
    }
}); */

/* fs.readFile('newFile.txt', "UTF-8", (err, success)=> {
    if(err){
        console.log("Failed.");
    }
    else {
        console.log(success);
    }
});
 */

/* fs.rename('newFile.txt', 'newlyNamedFile.txt', (err, success) => {
    if(err){
        console.log("Failed.");
    }
    else {
        console.log("File renamed.");
    }
});
 */
fs.unlink('newlyNamedFile.txt', (err, success) => {
    if(err){
        console.log("Failed.");
    }
    else {
        console.log("Deleted.");
    }
});