var correctAnswerArray = [true];


function calculateResult() {

    document.getElementById('name').innerHTML = localStorage.getItem("userName").toLocaleUpperCase() + " your result : ";
    let userAnswer = localStorage.getItem("userAnswer");
    let correctCount = 0;
    let wrongCount = 0;
    for (let i = 0; i < correctAnswerArray.length; i++) {
        if (correctAnswerArray[i] === Boolean(userAnswer[i])) {
            correctCount += 1;
        } else {
            wrongCount += 1;
        }
    }


    document.getElementById('correct').innerHTML = 'Total correct answer : ' + correctCount;
    document.getElementById('wrong').innerHTML = 'Total wrong answer : ' + wrongCount;


}

window.onload = calculateResult();
