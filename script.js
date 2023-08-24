const quizDB = [
    {
        question: "Which country hosted the 2018 FIFA World Cup?",
        a: "Germany",
        b: "Brazil",
        c: "Russia",
        d: "France",
        ans: "ans3"
    },
    {
        question: "What is the term for a goal scored directly from a corner kick without any other player touching the ball ?",
        a: "Hat-trick",
        b: "Penalty",
        c: "Offside",
        d: "Olympic goal",
        ans: "ans4"
    },
    {
        question: "How many players are there on the field from a single team during a football match ?",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        ans: "ans3"
    },
    {
        question: "Which football club is commonly known as 'The Red Devils' ?",
        a: "FC Barcelona",
        b: "Manchester United",
        c: "Liverpool FC",
        d: "AC Milan",
        ans: "ans2"
    },
    {
        question: "In which tournament do national teams compete for the UEFA European Championship title?",
        a: "Copa America",
        b: "AFC Asian Cup",
        c: "Africa Cup of Nations",
        d: "UEFA Euro Championship",
        ans: "ans4"
    }
];
let score =0 ;
const ques = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const showscore = document.querySelector('#score');
const answers = document.querySelectorAll('.answers')
let count=0;
const loadQues = ()=>{
    const queslist = quizDB[count];
    ques.innerText = queslist.question;
    option1.innerText = queslist.a;
    option2.innerText = queslist.b;
    option3.innerText = queslist.c;
    option4.innerText = queslist.d;
}
loadQues();

const getCheckedAnswer = () =>{
    let answer;
    answers.forEach((element) => {
        if(element.checked){
            answer = element.id;
        }
    });
    return answer;
};

const deselectAll = ()=>{
    answers.forEach((element) => {
        element.checked=false;
    });
    
};

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckedAnswer();
   
    if(checkedAnswer === quizDB[count].ans){
        score++;
    }
    deselectAll();
    count++;
    if(count<quizDB.length){
        loadQues();
    }
    else{
        showscore.innerHTML = `
            <h3 style="color:green" class="qwerty">You scored ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove('scorearea');
    }
});