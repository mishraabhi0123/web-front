const upbtn = document.querySelector(".upBtn button");
var countNum = document.querySelector(".countNum h2");
const downbtn = document.querySelector(".downBtn button");

upbtn.addEventListener('click', countup);
downbtn.addEventListener('click', countdown);

function countup(){
    countNum.innerHTML++;
}

function countdown(){
    countNum.innerHTML--;
}