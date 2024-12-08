function Welcome(name:string="Guest"):string{
    return `Welcome ${name} to IQ's World`;
}
function Introduce(age?:number):string{
    if(age){
        return `you were born in ${2024-age} right ?`;
    }
    return `age doesn't matter enjoy your life !`;
}

console.log(`${Welcome()}. ${Introduce(20)}`);
console.log(`${Welcome("Elon Musk")}. ${Introduce()}`);