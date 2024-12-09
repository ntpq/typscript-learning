//1
var numbers = [1, 2, 3, 4, 5, 6];
console.log('numbers :>> ', numbers);
numbers.unshift(0);
console.log('numbers :>> ', numbers);
numbers.pop();
console.log('numbers :>> ', numbers);
numbers.map(function (number, index) { return console.log("".concat(index, ". ").concat(number)); });
//2
var product = ["iPhone", 1999, false];
console.log('product :>> ', product);
product.map(function (value, index) { return console.log('Index :>> ', index, value); });
//3
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
function getSeasonMessage(season) {
    switch (season) {
        case Season.Spring: return "Nice Greeny";
        case Season.Summer: return "Let go to swimming";
        case Season.Autumn: return "Wow good for brown photo";
        case Season.Winter: return "Snow is coming";
    }
}
console.log('getSeasonMessage(Season.Winter) :>> ', getSeasonMessage(Season.Winter));
