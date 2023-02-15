// console.log(document);

// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);

document.body.children[1].children[0].href = 'https://google.com';
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a'); // a tag nested in p tag
anchorElement.href = 'https://naver.com';