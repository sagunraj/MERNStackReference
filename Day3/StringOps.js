let str = "RamBahadur";
// console.log(str.length);
// console.log(str.charAt(2));
// console.log(str.charCodeAt(1));
// console.log(str.indexOf("m"));
// console.log(str.substring(1, 3));

let arr = [1,2,4,5];
// console.log(arr.length);

let sentence = "This is a good person talking to you.";
// console.log(sentence.split(" "));
let sen = sentence.split(" ");
// console.log(sen.join("*"));

let personName = "  Sagun";
// console.log(personName.trim());

let newsentence = "I am a person";
let newsen = newsentence.split(" ");
newsen.forEach(element => {
    console.log(element.replace(element.charAt(0),element.charAt(0).toUpperCase()));
});
