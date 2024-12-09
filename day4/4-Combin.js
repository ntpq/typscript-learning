var isEven = function (number) { return number % 2 ? false : true; };
function filterEvenNumbers(numbers) {
    var onlyEven = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (isEven(number)) {
            onlyEven.push(number);
        }
    }
    return onlyEven;
}
console.log('filterEvenNumbers([1,2,100,21,30,19,999,6]) :>> ', filterEvenNumbers([1, 2, 100, 21, 30, 19, 999, 6]));
