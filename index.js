
var quizdata = [
    {
        question: "which of this framework is related to JS",
        a:".net",
        b:"flash",
        c:"react",
        d:"django",
        correct:"c",

    },

    {
        question: "which of this is not a framework",
        a:"react",
        b:"Javascript",
        c:"angular",
        d:"laravel",
        correct:"b",

    },

    {
        question: "which of this is not programming language",
        a:"HTML",
        b:"Javascript",
        c:"Python",
        d:"Java",
        correct:"a",

    },

    {
        question: "what is the full meaning of css",
        a:"cascad style sheet",
        b:"cross style subject",
        c:"cross style sheet",
        d:"Cascading Style Sheets",
        correct:"a",

    },
]

var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answer =  document.querySelectorAll(".answer");
var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");
var submitBtn = document.getElementById("submit");

var currentQuestion =0;
var quizScore= 0;

loadquiz()

function loadquiz(){
deselect()

    question.innerHTML = quizdata[currentQuestion].question;
    option_a.innerText =quizdata[currentQuestion].a
    option_b.innerText =quizdata[currentQuestion].b
    option_c.innerText =quizdata[currentQuestion].c
    option_d.innerText =quizdata[currentQuestion].d
}

function deselect(){
    answer.forEach(answer => answer.checked= false)
}

submitBtn.addEventListener("click" , () => {
    var selectedoption;
    answer.forEach(answer=> {
        if(answer.checked){
            selectedoption = answer.id
        }
    })
if(selectedoption==quizdata[currentQuestion].correct)
{
    quizScore = quizScore+1
}
currentQuestion = currentQuestion+1

if(currentQuestion == quizdata.length){
 document.getElementById("quizdiv").innerHTML=`<h1>
 You have answered ${quizScore} 
 correctly out of ${quizdata.length} </h1>`
}
else{
    loadquiz()
}
})