for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["hwanhee", "sungyun", "soleeno"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "hwanhee",
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]); //=loggedInUser.name
}

let isFinished = false;
// let i = 0;
while (!isFinished) {
  isFinished = confirm('Do you want to quit?')
//   let i = 0;
  i++;
//   console.log(i);
}

console.log('Done!')