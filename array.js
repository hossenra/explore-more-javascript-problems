const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: "Arafat"};
const friends = [13, 14, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(Array.isArray(friends));
// check array using Array.isArray()
console.log(typeof student);
console.log(typeof add);
// ......
console.log(friends.includes(19));
console.log(friends.includes(13));


// if(friends.indexOf(19) !== -1;){

// }

// concat : 
const newFriendsAge = [12, 13, 11, 14]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
