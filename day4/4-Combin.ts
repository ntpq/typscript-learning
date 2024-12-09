const isEven = (number:number)=> number%2?false:true;
function filterEvenNumbers(numbers:number[]):number[]{
    let onlyEven:number[]=[];
    for(let number of numbers){
        if(isEven(number)){
            onlyEven.push(number);
        }
    }
    return onlyEven
}

console.log('filterEvenNumbers([1,2,100,21,30,19,999,6]) :>> ', filterEvenNumbers([1,2,100,21,30,19,999,6]));