const user:User = {
    name: "IQ",
    age: 30,
    greet: function():string{
        return `Hello,My name is ${this.name}`;
    }
}

console.log('user.name,user.greet() :>> ', user.name,user.greet());

interface User{
    name:string,
    age:number,
    greet():string,
}