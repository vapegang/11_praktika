import {TestController} from "./TestController.js";

const init = () => {
    const testController = new TestController([
        {
            question: 'Какие циклы есть в языке JavaScript?',
            variants: ['for, forMap, foreach, while', 'for, forMap, foreach, while, do while', 'for, while, do while', 'for, while, do while, foreach'],
            result: 2
        },
        {
            question: 'В чем отличие между локальной и глобальной переменной?',
            variants: ['Локальные видны повсюду, глобальные только в функциях', 'Отличий нет', 'Глобальные можно переопределять, локальные нельзя', 'Глобальные видны повсюду, локальные только в функциях', 'Локальные можно переопределять, глобальные нельзя'],
            result: 3
        },
        {
            question: 'Где верно указан вывод данных?',
            variants: ['console.log("Hello");', 'prompt("Hello")', 'documentWrite("Hello");', 'write("Hello");', 'print(Hello);'],
            result: 0
        },
        {
            question: 'Где верно указан запуск всплывающего окна?',
            variants: ['Нет верных вариантов', 'new alert ("Hi")', 'info ("Hi")', 'alert ("Hi")'],
            result: 3
        },
        {
            question: 'Какие функции выполняет JS?',
            variants: ['Отвечает за функции на стороне клиента', 'Выполняет работу с сервером', 'Создает разметку на странице сайта', 'Отвечает за работу с базами данных', 'Создает стилевое оформление сайта'],
            result: 2
        },
    ]);
    testController.start()
}

init()