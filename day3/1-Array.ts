const fruits:string[] = ['Banana','Gold Kiwi','Mango'];
console.log("First =>",fruits[0],"Last =>",fruits[fruits.length-1]);
fruits.push('Cherry');
console.log("First =>",fruits[0],"Last =>",fruits[fruits.length-1]);

for(let fruit of fruits){
    console.log(fruit);
}
for(let i=0;i<fruits.length;i++){
    console.log(`Fruits[${i}]= ${fruits[i]}`);
}
for(let key in fruits){
    console.log(`${key} : ${fruits[key]}`)
}