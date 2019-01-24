const fs = require('fs');

const addNewTodoItem = (name, description) => {
    fs.readFile("todofile.txt", "UTF-8", (err) => {
        if (err) {
            fs.writeFileSync("todofile.txt", `${name}:${description}\n`);
            console.log("The Todo item has been saved.");
        }
        else {
            fs.appendFile("todofile.txt", `${name}:${description}\n`, (err) => {
                if (err) {
                    console.log("The data couldn't be saved.");
                }
                else {
                    console.log("The Todo item has been saved.");
                }
            });
        }
    });
}

module.exports = addNewTodoItem;