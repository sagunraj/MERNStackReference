const ages = [10,20,30,40,50,60,70,80];

const filteredArray = ages.filter((age)=>{
    if(age>50){
        return false;
    }
    else{
        return true;
    }
});

console.log(filteredArray); // the values that returned true were stored in the new array filteredArray