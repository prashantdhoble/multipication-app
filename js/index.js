let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl =document.getElementById("score")

let scores = JSON.parse(localStorage.getItem("score"))

if(!scores) {
   scores = 0;
}

scoreEl.innerText =`score: ${scores}`

questionEl.innerText =`What is ${num1} Multiply by ${num2} ?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
   const userAns = ++inputEl.Value;
  if(userAns === correctAns){
   scores++;
   updateLocalStorage();
  }else{
   scores--;
   updateLocalStorage();
  }

});

function updateLocalStorage(){
   localStorage.setItem("score", JSON.stringify(scores))
}

