
let userName = "Hwanhee";
let hobbies = ["Sports", "Cooking", "Reading", 1, 2, 3];
let job = {
  title: "Developer",
  place: "New York",
  salary: 500000,
};


let age = 32;
let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: 'Max', //property
  greet() { //method
    console.log('Hello')
  }
};

person.greet();