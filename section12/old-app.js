// console.log(document);

// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);

// document.body.children[1].children[0].href = 'https://google.com';
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a'); // a tag nested in p tag
anchorElement.href = 'https://naver.com';

//1. Create new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!';

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// Remove Elements
// 1. Select the element that should be removed

let firstH1Element = document.querySelector('h1');

// 2. Remove it!

firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); // 옛날 브라우저에서는 .remove() 못읽을 수도 있으니까 알아두셈

firstParagraph.parentElement.append(firstParagraph);

//innerHTML
console.log(firstParagraph.innerHTML);

// firstParagraph.innerHTML = 'Hi, This is <strong>important</strong>'
firstParagraph.textContent = 'Hi, This is <strong>important</strong>'