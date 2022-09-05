function Question(questionText) {
    this.questionText = questionText;
}
let q1 = new Question("JavaScript Supports");
let q2 = new Question("JavaScript Supports");
let q3 = new Question("JavaScript Supports");
let q4 = new Question("JavaScript Supports");
let q5 = new Question("JavaScript Supports");

function Answer(answerText) {
    this.answerText = answerText;

}
let a1 = new Answer("Functions");
let a2 = new Answer("CSS");
let a3 = new Answer("Django");
let a4 = new Answer("PHP");
let a5 = new Answer("Programming Language");

function QuestionAnswerPair(question, answer, answerChoices) {
    this.question = question;
    this.answer = answer;
    this.answerChoices = answerChoices;
    this.isACorrectAnswer = function(userAnswer) {

    };
    answerText === userAnswer;


}

let qaPair1 = new QuestionAnswerPair(q1, a1, [a1, new Answer("XHTML"), new Answer("CSS"), new Answer("HTML")]);
let qaPair2 = new QuestionAnswerPair(q2, a2, [new Answer("HTML"), new Answer("JQuery"), a2, new Answer("ZML")]);
let qaPair3 = new QuestionAnswerPair(q3, a3, [new Answer("Python Script"), new Answer("JQuery"), a3, new Answer("NodeJS")]);
let qaPair4 = new QuestionAnswerPair(q4, a4, [a4, new Answer("HTML"), new answer(JS), new Answer("All")]);
let qaPair5 = new QuestionAnswerPair(q5, a5, [new Answer("Language"), a5, new Answer("Development"), new Answer("All")]);

for (let i = 1; i <= 4; i++) {
    let buttonID = "divButton" + i;
    let answerChoiceButtonElement = document.getElemenntByID(buttonID);
    answrChoiceButtonElement.onclick = function(event) {
        let eventTarget = event.currentTarget;
        let userProvidedAnswe = eventTarget.innerHTML;
        let qaPairObject = this.qaPairArray[this.pageIndex];
        console.log("User Provided Answer-->" + userProvidedAnswer);
        this.next();
    }
}