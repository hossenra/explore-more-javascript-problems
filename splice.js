const friends = [12, 45, 32, 22, 24, 44, 62, 29, 69, 87];

const partial = friends.splice(2, 5, 99, 555, 7777);
console.log(partial);
console.log(friends);