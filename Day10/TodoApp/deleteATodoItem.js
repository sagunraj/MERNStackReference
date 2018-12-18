const fs = require('fs');

const deleteATodoItem = (number) => {
    let text = fs.readFileSync("todofile.txt").toString('utf-8').split("\n");
    text = text.filter(text => text != "");
    text.splice(number - 1, 1);
    fs.writeFileSync("todofile.txt", text.join("\n"));
    console.log("Item deleted.");
}

module.exports = deleteATodoItem;