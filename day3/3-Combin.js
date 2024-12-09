var friends = [{
        name: "Elon",
        age: 40
    }, {
        name: "CR7",
        age: 43
    }, {
        name: "Messi",
        age: 41
    }];
var oldestFriend = friends.reduce(function (oldest, friend) {
    console.log('oldest,friend :>> ', oldest, friend);
    return friend.age > oldest.age ? friend : oldest;
});
console.log("The oldest friend is ".concat(oldestFriend.name, ". He is ").concat(oldestFriend.age, " years old"));
friends.push({ name: "Rooney", age: 35 });
console.log(friends);
