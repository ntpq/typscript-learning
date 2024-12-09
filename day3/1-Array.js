var fruits = ['Banana', 'Gold Kiwi', 'Mango'];
console.log("First =>", fruits[0], "Last =>", fruits[fruits.length - 1]);
fruits.push('Cherry');
console.log("First =>", fruits[0], "Last =>", fruits[fruits.length - 1]);
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruits[".concat(i, "]= ").concat(fruits[i]));
}
for (var key in fruits) {
    console.log("".concat(key, " : ").concat(fruits[key]));
}
