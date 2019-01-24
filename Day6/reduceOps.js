let ages = [1,2,3,4,5,6,7,8,9,10];
/* let sum = 0;
ages.forEach(element => {
    sum += element;
});

console.log(sum); */

const result = ages.reduce(findSum, 0);

function findSum(accumulator, element){
    return accumulator+element;
}

console.log(result);