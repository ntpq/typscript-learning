for (var i = 1; i <= 10; i++) {
    console.log('i :>> ', i);
}
var items = ["Red", "Blue", "Yellow", "Green"];
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    console.log(item);
}
var product = { name: "Milk", price: 7, inStock: false };
for (var key in product) {
    console.log('key :>> ', key, product[key]);
}
