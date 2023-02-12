// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

let courseName = "Web Dev";
let priceCourse = 5000;
let courseGoals = ["1. more knowledge ", "2. repetation ", "3. firm foundation"];
// alert(userName02, ' ', priceOfCourse, ' ', goals);
alert(courseName);
alert(priceCourse);
alert(courseGoals);

let courseInfo = {
    name: courseName,
    price: priceCourse,
    goals: courseGoals,
};

alert(courseInfo.name);
alert(courseInfo.price);
alert(courseInfo.goals);

alert(courseInfo.goals[1]);

function getListItem (array, arrayIndex) {
    let arrayelement = array[arrayIndex];
    return arrayelement;
}

let firstGoal = getListItem(courseInfo.goals, 0);
alert(firstGoal);