let firstArray = [1,2,3,4,5,6];

let secondArray = firstArray.slice(); // copy the DATA to secondArray, not the REFERENCE
secondArray.push(7);
console.log(firstArray);