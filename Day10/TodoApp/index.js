const fs = require('fs');
const readline = require('readline');
const deleteATodoItem = require('./deleteATodoItem');
const addNewTodoItem = require('./addNewTodoItem');
const displayAllTodoItems = require('./displayAllTodoItems');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Welcome to Todo app!
-----------------------------------
Press 1 to add a new Todo item.
Press 2 to display all Todo items.
Press 3 to delete a Todo item.
Press 4 to exit.`);

takeInput();

function takeInput() {
    rl.on("line", (answer) => {
        checkSwitch(answer);
    });
}

function checkSwitch(answer) {
    if (answer == "1") {
        rl.question("Give the name and description of the Todo item (separated by a comma):", (ans) => {
            let [name, description] = ans.split(",");
            addNewTodoItem(name, description);
        });
    }
    else if (answer == "2") {
        displayAllTodoItems();
    }
    else if (answer == "3") {
        rl.question("Give the number of the Todo item to be deleted:", (ans) => {
            deleteATodoItem(ans);

        });
    }
    else if (answer == "4") {
        console.log("Program exited!")
        process.exit();
    }
    else {
        console.log("Invalid selection!");
    }
}



