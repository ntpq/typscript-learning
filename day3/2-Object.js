var person = {
    name: "IQ",
    age: 30,
    hobby: "Codding"
};
console.log("My name is ".concat(person.name, ". I am ").concat(person.age, ".My hobby is ").concat(person.hobby, "."));
person["favoriteColor"] = "Red";
console.log(person);
