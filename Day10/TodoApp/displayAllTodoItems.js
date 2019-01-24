const fs = require('fs');

const displayAllTodoItems = () => {
    let text = fs.readFileSync("todofile.txt").toString('utf-8').split("\n");
    text = text.filter(text => text != "");
    text.forEach((element, i) => {
        console.log(`${i + 1}. ${element}`);
    });
}

module.exports = displayAllTodoItems;