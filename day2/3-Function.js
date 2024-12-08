function Greet(name) {
    return "Welcome ".concat(name, " !");
}
function CalculateArea(length, width) {
    return length * width;
}
var guestName = "IQ";
var areaLength = 30;
var areaWidth = 15;
console.log("".concat(Greet(guestName), ". your house area is ").concat(CalculateArea(areaLength, areaWidth)));
