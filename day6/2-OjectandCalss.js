var user = {
    name: "IQ",
    age: 30,
    greet: function () {
        return "Hello,My name is ".concat(this.name);
    }
};
console.log('user.name,user.greet() :>> ', user.name, user.greet());
