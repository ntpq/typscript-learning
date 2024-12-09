//1
const numbers:number[]= [1,2,3,4,5,6];
console.log('numbers :>> ', numbers);
numbers.unshift(0);
console.log('numbers :>> ', numbers);
numbers.pop();
console.log('numbers :>> ', numbers);
numbers.map((number,index)=>console.log(`${index}. ${number}`));
//2
const product:[string,number,boolean]= ["iPhone",1999,false];
console.log('product :>> ', product);
product.map((value,index)=>console.log('Index :>> ', index,value))

//3
enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
}
function getSeasonMessage(season:Season):string{
    switch(season){
        case Season.Spring: return "Nice Greeny"
        case Season.Summer: return "Let go to swimming"
        case Season.Autumn: return "Wow good for brown photo"
        case Season.Winter: return "Snow is coming"
    }
}
console.log('getSeasonMessage(Season.Winter) :>> ', getSeasonMessage(Season.Winter));