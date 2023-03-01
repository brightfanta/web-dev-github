//First Example: Sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button"); //cause first button in section tage of the HTML file
// const userNumberInputElement = document.getElementById('user-name');

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number"); // 전역으로 사용되는 변수가 아니면 함수 내부에서만 정의
  // console.dir(userNumberInputElement);
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  //   console.log(sumUpToNumber);

  const outPutResultElement = document.getElementById("calculated-sum");
  //   console.dir(outPutResultElement);
  outPutResultElement.textContent = sumUpToNumber;
  outPutResultElement.style.display = "block";
}
calculateSumButtonElement.addEventListener("click", calculateSum);

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a"); //list, array

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

//Display user data

const dummyUserData = {
  firstName: "Hwanhee",
  LastName: "Lee",
  age: 32,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

//statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  //   console.log(randomNumber);
  //   console.log(randomNumber * 6);
  console.log(randomNumber);
  return randomNumber; //Math.floor = 5.64 => 5
}

function deriveNumberofDIceRolls() {
  const userTargetNumberInputElement =
    document.querySelector("#statistics input");
  // const userTargetNumberInputElement = document.getElementById("user-target-data");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = userTargetNumberInputElement.value;
  diceRollsListElement.innerHTML = ""; //clear value for next execution.

  // let i = 0;
  let hasRolledTargetNumber = false; //reference for how to name boolean variable
  let numberofRolls = 0;
  //   while (rollDice() != enteredNumber) {
  //     // const randomNumber = 0;
  //     numberofRolls++;
  //     const newRollListItemElement = document.createElement("li");
  //     const outputText = "Roll " + numberofRolls + ":  " + rollDice();
  //     newRollListItemElement.textContent = outputText;
  //     diceRollsListElement.append(newRollListItemElement);
  //   }

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // 1. if (rolledNumber == enteredNumber) {// ===아니고 ==로 입력 (javascript가 number 입력도 value끼리만 비교한다.(변수타입 상관 X))
    //     hasRolledTargetNumber = true;
    // }
    // numberofRolls = numberofRolls + 1;
    numberofRolls++;
    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll " + numberofRolls + ":  " + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber; //2. 비교연산자 결과는 boolean value 이다. if check 필요 없음
  }

  const countNumberElement = document.getElementById("output-total-rolls");
  // countNumberElement.value = i;
  countNumberElement.textContent = numberofRolls;
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );
  // outputTargetNumberElement.value = enteredNumber;
  outputTargetNumberElement.textContent = enteredNumber;
}

rollDiceButtonElement.addEventListener("click", deriveNumberofDIceRolls);
