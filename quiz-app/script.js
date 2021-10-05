const quizData = [
    { 
        question: 'How old is Bruno?',
        a: '16',
        b: '24',
        c: '30',
        d: '27',
        correct: 'd'
    },
    { 
        question: 'What is the most programming language in 2021?',
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'Delphi',
        correct: 'b'
    },
    { 
        question: 'Who is the President of Brazil',
        a: 'Lula',
        b: 'Bolsonaro',
        c: 'Bush',
        d: 'Gandhi',
        correct: 'b'
    },
    { 
        question: 'What does HTML stand for?', 
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters',
        correct: 'a'
    },
    { 
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '2016',
        c: '1990',
        d: '1995',
        correct: 'd'
    }
]

const questionEl = document.getElementById('question')
const answersEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const quiz = document.getElementById('quiz')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData [currentQuiz]

    questionEl.innerText= currentQuizData.question
    a_text.innerText= currentQuizData.a
    b_text.innerText= currentQuizData.b
    c_text.innerText= currentQuizData.c
    d_text.innerText= currentQuizData.d

    
}

function getSelected(){
    

    let answer = undefined

    answersEls.forEach((answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    }))
    return answer
}

function deselectAnswer(){
    answersEls.forEach((answerEl) =>{        
            answerEl.checked = false        
})}


submitBtn.addEventListener("click",() =>{    
    const answer = getSelected()
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++   
               
        if(currentQuiz < quizData.length){                
                loadQuiz();
        } else {
                quiz.innerHTML = `<h2>Você fez ${score}/5 pontos!</h2>`
        }        
        
    }      
})