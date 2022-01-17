// Преобразование [{name : 'Name1'}, {name : 'Name2'}, {name : 'Name3'}] в Name1, Name2 & Name3; 

function list(names) {
    let arr = [];
    if (names.length > 1) {
        let lastName = names[names.length - 1].name;
        for (let i = 0; i < names.length - 1; i++) {
            arr[i] = names[i].name;
        }
        return arr.join(', ') + ' & ' + lastName;
    }
    else if (names.length == 1) {
        return names[0].name;
    }
    else {
        return '';
    }
}

console.log(list([]));



/* The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above. */

function sumDigPow(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
        let arr = String(i).split('');
        let midArr;
        let midSum;
        midArr = [];
        midSum = 0;
        for (let j = 0; j < arr.length; j++) {
            midArr.push(Math.pow(Number(arr[j]), j + 1));
        }
        for (let j = 0; j < midArr.length; j++) {
            midSum += midArr[j];
        }
        if (midSum === i) {
            result.push(i);
        }
    }
    console.log(result)
    return result;

}