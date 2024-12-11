function findMax() {
    var parameter = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameter[_i] = arguments[_i];
    }
    return Math.max.apply(Math, parameter);
}
console.log('FindMax :>> ', findMax(1, 2, 3, 100, 20, 19, 3.1, 4, 99999));
