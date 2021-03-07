import {Timer} from "./Timer.js";

export class Question {
    constructor(id, question, variants, submitQuestion) {
        this.id = id
        this.question = question
        this.variants = variants
        this.submitQuestion = submitQuestion

        renderQuestion(id, question, variants, submitQuestion, this.clearTimer.bind(this))

        this.timer = new Timer(this.id, this.submitQuestion, this.clearTimer.bind(this), 30)
        this.timerId = this.timer.timerId
        this.intervalId = this.timer.intervalId
    }

    clearTimer() {
        clearInterval(this.intervalId)
        clearTimeout(this.timerId)
    }
}

function renderQuestion(id, question, variants, submitQuestion, clearTimer) {
    const $content = document.getElementById('content')

    // Clear #content before each
    $content.innerHTML = ''

    // Question Title
    const $title = document.createElement('h1')
    $title.innerText = question

    // Question radio buttons list
    const $variantsList = document.createElement('div')
    variants.forEach((variant, index) => {
        const $variant = document.createElement('div')

        const $variantRadio = document.createElement('input')
        $variantRadio.setAttribute("type", "radio");
        $variantRadio.setAttribute(`name`, `variant`);
        $variantRadio.setAttribute("id", `variant${index}`);

        const $variantLabel = document.createElement('label')
        $variantLabel.innerText = variant;
        $variantLabel.setAttribute("for", `variant${index}`);

        $variant.appendChild($variantRadio)
        $variant.appendChild($variantLabel)

        $variantsList.appendChild($variant)
    })

    // Submit button
    const $submitButton = document.createElement('button')
    $submitButton.innerText = "Submit"
    $submitButton.addEventListener('click', () => {
        clearTimer()
        submitQuestion(id, getResult())
    })

    // Append all child nodes
    $content.appendChild($title)
    $content.appendChild($variantsList)
    $content.appendChild($submitButton)
}

export function getResult() {
    const $content = document.getElementById('content')
    const radioButtons = $content.querySelectorAll('input')
    const checkedValuesFromRadioButtons = [];

    radioButtons.forEach(radioButton => {
        checkedValuesFromRadioButtons.push(radioButton.checked)
    })

    let result = [];
    checkedValuesFromRadioButtons.find((value, index) => {
        value === true && result.push(index)
    })

    return result[0]
}