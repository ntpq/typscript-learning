function Welcome(name) {
    if (name === void 0) { name = "Guest"; }
    return "Welcome ".concat(name, " to IQ's World");
}
function Introduce(age) {
    if (age) {
        return "you were born in ".concat(2024 - age, " right ?");
    }
    return "age doesn't matter enjoy your life !";
}
console.log("".concat(Welcome(), ". ").concat(Introduce(20)));
console.log("".concat(Welcome("Elon Musk"), ". ").concat(Introduce()));
