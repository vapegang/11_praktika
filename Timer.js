import {getResult} from "./Question.js";

export class Timer {
    constructor(questionIndex, submitQuestion, clearTimer, timeInSeconds) {
        this.timeLeft = timeInSeconds;
        this.updateTimer()

        this.intervalId = setInterval(() => {
            this.timeLeft--;
            this.updateTimer()
        }, 1000);

        this.timerId = setTimeout(() => {
            clearTimer()
            submitQuestion(questionIndex, getResult())
        }, timeInSeconds * 1000)
    }

    updateTimer() {
        const $timer = document.getElementById('timer')
        if (this.timeLeft < 10) $timer.classList.add('red')

        $timer.innerText = this.timeLeft
    }
}