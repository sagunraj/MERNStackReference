// Given an array of numbers, write a function to find the second maximum element in the array.
"use strict"
let numberArray = [100, 2, 40, 5, 50, 30, 300];

const secondMax = function (numberArray) {
    numberArray = numberArray.sort(function (a, b) {
        return b - a;
    });
    console.log(numberArray[1]);
}

secondMax(numberArray);

