let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["IQ", "BOB", "MUSK"];
console.log('numbers,names :>> ', numbers, names);
numbers.push(9)
console.log('numbers :>> ', numbers);
names.pop();
console.log('names :>> ', names);
numbers.shift();
names.unshift("WANG");
console.log('numbers,names :>> ', numbers, names);
const double: number[] = numbers.map((value, index) => value * 2);
console.log('numbers,double :>> ', numbers, double);
const isEven: number[] = numbers.filter((value, index) => value % 2 == 0);
console.log('isEven :>> ', isEven);
const sum:number = numbers.reduce((previousValue,currentValue)=>previousValue+currentValue,0)
console.log('sum of  :>> ', sum);