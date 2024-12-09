function sayHello(name:string):string{
    return `Hello ! ${name}`;
}
function isEven(number: number):boolean{
    return number%2?false:true;
}

console.log(sayHello("IQ"));
console.log(isEven(2));
console.log(isEven(3));