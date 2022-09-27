const quizarr = [
    {
        question:"Who is the fastest man on earth",
        a:"Ussain Bolt",
        b:"Asjad ahmad",
        c:"Mozammil alam",
        d:'Aman Sharma',
        correct:'Ussain Bolt',
    },
    {
    question: "When did India got independence",
    a:"2000",
    b:"1947",
    c:"1900",
    d:"1920",
    correct:"1947",
    },
    {
        question: "Nation bird of India",
        a:"Peacock",
        b:"Harsh",
        c:"Crow",
        d:"Apple",
        correct:"Peacock",
    },
    {
        question: "When did India got independence",
        a:"Ussain Bolt",
        b:"Asjad ahmad",
        c:"Mozammil alam",
        d:"Aman Sharma",
        correct:"Ussain Bolt",
    },
];
document.querySelector(".d-none").style.display="none";
let question=document.querySelector(".question");
let a_text=document.getElementById("label-a");
let b_text=document.getElementById("label-b");
let c_text=document.getElementById("label-c");
let d_text=document.getElementById("label-d");
let increment_btn=document.getElementById("btn");
console.log(increment_btn);
let currentquiz=0;
let score=0;
let labeltext="";

loadquiz();

function loadquiz() {
     let currentquiz_data=quizarr[currentquiz];
     question.innerText=currentquiz_data.question;
     a_text.innerText=currentquiz_data.a;
     b_text.innerText=currentquiz_data.b;
     c_text.innerText=currentquiz_data.c;
     d_text.innerText=currentquiz_data.d;
     
     currentquiz++;

}
// seleted();

increment_btn.addEventListener("click", limit );

function selected(){
    let answer=document.querySelectorAll(".input-answer");
    let labelarr=document.querySelectorAll(".radio-answer-text");
    let select=false;
    for(let i=0;i<answer.length;i++){
        if(answer[i].checked){
        select=true;
        labeltext=labelarr[i].innerText;
        // console.log(labeltext);
        answer[i].checked=false;
        }
    }

    return select;
}
let j=0;
function limit(){
    let flag=selected();
    if(flag==false){

        document.querySelector(".d-none").style.display="block";

        // document.querySelector(".d-none").classList.add("select-option");
    }
     else if(currentquiz < quizarr.length ){

        document.querySelector(".d-none").style.display="none";
        // selectoption.classList.add("display-none");
        // selectoption.classList.remove("select-option");
        console.log(quizarr[j].correct);
        console.log(labeltext);
        if(quizarr[j].correct == labeltext) {
            console.log(score);
            score++;
        } 
        j++;
        loadquiz();

     }else {
       document.querySelector(".quiz-container").innerHTML=`<h3 style="padding-left:30px;">your score is ${score}/${quizarr.length}</h3>`
     }
}