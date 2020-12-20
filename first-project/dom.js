// Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Lister";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.images);

// GETELEMENTBYID // 
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASS NAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// items[1].textContent = 'Hello2'
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "blue";

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENT BY TAG NAME
// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[3]);
// items[1].textContent = 'Hello2'
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "blue";

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//  QUERYSELECTOR //
// var header = document.querySelector('#main-header')
// console.log(header);
// header.style.borderBottom ='solid 5px gray';
// var input = document.querySelector('input');
// // input.value = "write something here";
// input.maxLength = 10;
// input.minLength = 3;
// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "send";

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = "green";

// QUERYSELECTOR //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'ello there might!';

var odds = document.querySelectorAll('li');

for(var i = 0; i < odds.length; i++){
    odds[i].style.backgroundColor = "lightgray"
    odds[i].style.height = '20px';
    odds[i].style.padding = 0;
    odds[i].textContent = `Item ${i+1}`;
}
