const login = require("facebook-chat-api");
 
// Create simple echo bot
login({email: "something@gmail.com", password: "password"}, (err, api) => {
    if(err) return console.error(err);
 
    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});