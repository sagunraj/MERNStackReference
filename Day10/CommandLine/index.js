const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("You can write your CLI commands.");

rl.on("line", (answer) => {
    let [command, fileName, newName = ""] = answer.split(' '); // divide the input given and break them down and assign them to the variables
    executeCommand(command, fileName,newName);
});

const executeCommand = (command, fileName,newName='') => {
    switch(command) {
        case 'touch':
            createFile(fileName);
            break;
        case 'delete':
            deleteFile(fileName);
            break;
        case 'rename':
            renameFile(fileName, newName);
            break;
        default:
            console.log("Invalid command.");
            rl.close();
    }
};


const createFile = (fileName) => {
    fs.writeFile(fileName, '', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File created successfully.");
        }
    });
}

const renameFile = (fileName, newName = "newName.txt") => {
    fs.rename(fileName, newName, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File renamed successfully.");
        }
    });
}

const deleteFile = (fileName) => {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File deleted successfully.");
        }
    });
}