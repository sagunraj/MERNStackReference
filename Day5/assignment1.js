let numArr = [1, 2, [2, 3, 4], 5];
let x = [];
let index = 0;
numArr.forEach((data, i) => {
    if (typeof (data) !== typeof (1)) {
        index = i;
        for (let j = 0; j < numArr[index].length; j++) {
            x.push(data[j]);
        }
    }
});
x.forEach((value, id) => {
    if (id == 0) {
        numArr.splice(index, 1, value);
        index++;
    }
    else {
        numArr.splice(index, 0, value);
        index++;
    }
});
console.log(numArr);