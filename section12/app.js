// let paragraphElement = document.querySelector('p');
let paragraphElement = document.body.children[0];
let inputElement = document.querySelector("input");

console.dir(document);
// console.log(paragraphElement);
let a = 0;

function changeParagraphText(event) {
  if (event.target.textContent == "Clicked!") {
    event.target.textContent = "Click me!";
  } else {
    event.target.textContent = "Clicked!";
  }
  //   a++;
  //   console.log(event);

  //   paragraphElement.textContent = "Clicked!";
}

let someString;

function retreiveUserInput(event) {
  //   let enteredText = inputElement.value;
  let enteredText;
  // console.log(enteredText.length);
  enteredText = event.target.value; //외부 변수 상관 없이 함수 내 자체 호출 가능
  //   console.log(enteredText);
  return enteredText;
}

// paragraphElement.addEventListener('click', changeParagraphText());
paragraphElement.addEventListener("click", changeParagraphText);
inputElement.addEventListener("input", retreiveUserInput);
// console.log(someString);

let firstParagraph = document.querySelector("p");

firstParagraph.append(someString.length);

//let someString = 'Hwanhee';
//let stringLength = someString.length;
