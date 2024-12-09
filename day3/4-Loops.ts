for(let i=1;i<=10;i++){
    console.log('i :>> ', i);
}
const items:string[] = ["Red","Blue","Yellow","Green"];
for(let item of items){
    console.log(item);
}
const product:{name:string,price:number,inStock:boolean}={name:"Milk",price:7,inStock:false};
for(let key in product){
    console.log('key :>> ', key,product[key]);
}