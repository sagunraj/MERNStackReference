let numberArr = [1,2,3,4,5,6];
console.log(...numberArr);
let newArr = [...numberArr,7,8,9]; // extract the data of numberArr and add them in newArr and also add 7, 8 and 9
newArr = [0,1,...newArr];
console.log(newArr);

