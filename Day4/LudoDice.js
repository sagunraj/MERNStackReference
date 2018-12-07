let diceValue = Math.floor(Math.random()*(5+1))+1;

if(diceValue===1 || diceValue===6){
    console.log("You won with dice value: "+diceValue);
}
else{
    console.log("Bad luck! You lost with dice value: "+diceValue);
}