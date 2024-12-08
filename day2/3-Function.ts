function Greet(name:string):string{
    return `Welcome ${name} !`;
}
function CalculateArea(length:number, width:number):number{
    return length*width;
}
const guestName: string="IQ";
const areaLength = 30;
const areaWidth = 15;

console.log(`${Greet(guestName)}. your house area is ${CalculateArea(areaLength,areaWidth)}`)