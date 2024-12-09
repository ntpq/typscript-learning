const friends: { name: string, age: number }[] = [{
    name: "Elon",
    age: 40
}, {
    name: "CR7",
    age: 43
},{
    name: "Messi",
    age: 41
}]

const oldestFriend = friends.reduce((oldest,friend)=>{
    console.log('oldest,friend :>> ', oldest,friend);
    return friend.age > oldest.age ? friend:oldest;
})
console.log(`The oldest friend is ${oldestFriend.name}. He is ${oldestFriend.age} years old`);

friends.push({name:"Rooney",age:35});
console.log(friends);