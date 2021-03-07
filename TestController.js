import {Question} from "./Question.js";

export class TestController {
    constructor(questions) {
        this.questions = questions
        this.results = [];
    }

    saveResult(questionIndex, result) {
        this.results.push(this.questions[questionIndex].result === result)
    }

    _addNewQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex]
        return new Question(this.currentQuestionIndex, currentQuestion.question, currentQuestion.variants, this.nextQuestion.bind(this))
    }

    start() {
        this.currentQuestionIndex = 0;
        this.question = this._addNewQuestion();
    }

    nextQuestion(questionIndex, result) {
        this.saveResult(questionIndex, result)

        if (this.currentQuestionIndex > this.questions.length - 2) {
            this.cancelTest()
        } else {
            this.currentQuestionIndex++;

            this.question = this._addNewQuestion();
        }
    }

    cancelTest() {
        document.body.innerHTML = ''

        const filteredArray = this.results.filter(result => result === true)
        const percentRightAnswers = (filteredArray.length / this.questions.length) * 100

        const mark = getMarkFromPercent(percentRightAnswers)

        const $resultTitle = document.createElement('h1')
        $resultTitle.innerText = `Ваша оценка ${mark}`
        if (mark === 5) {
            $resultTitle.classList.add('green')
        } else if (mark === 4) {
            $resultTitle.classList.add('yellow')
        } else if (mark === 3) {
            $resultTitle.classList.add('orange')
        } else if (mark === 2) {
            $resultTitle.classList.add('red')
        }

        document.body.append($resultTitle)
    }
}

function getMarkFromPercent(percent) {
    if (percent < 60) {
        return 2
    } else if (percent < 75) {
        return 3
    } else if (percent < 90) {
        return 4
    } else if (percent >= 90) {
        return 5
    }
}