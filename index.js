const output = document.querySelector('output')

const div = document.createElement('div')
div.classList.add('keyboard')
document.querySelector('.calculator').appendChild(div)

'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + ( 0 ) ='.split(' ')
// пробегаемся по массиву
// для каждого символа
// создаем кнопку с помощью строкового литерала
// записываем значение символа в атрибут "value" кнопки
.map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
})

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        // по клику вызывается функция со значением кнопки в качестве параметра
        calc(this.value)
    })
})

document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
})

// функция принимает значение кнопки или ключ клавиши
function calc(value) {
    // если нажат знак равенства или Enter
    if (value.match(/=|Enter/)) {
        // пробуем выполнить операцию
        try {
            // вычисляем значение строки
            // это возможно благодаря методу "evaluate" объекта "math"
            // Math.trunc используется для округления до целого числа
            output.textContent = Math.trunc(math.evaluate(output.textContent))
            
        // если операцию выполнить невозможно
        } catch {
            // сохраняем значение поля
            let oldValue = output.textContent
            // создаем новую переменную
            let newValue = 'недопустимое выражение'
            // выводим значение новой переменной в поле
            output.textContent = newValue
            // через полторы секунды возвращаем полю старое значение
            setTimeout(() => {
                output.textContent = oldValue
            }, 1500)
        }
        
    // если нажат символ "C"
    } else if (value === 'C') {
        // очищаем поле
        output.textContent = ''
    
    // если нажат символ "СЕ" или Backspace
    } else if (value.match(/CE|Backspace/)) {
        // уменьшаем строку на один символ
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
        
    // если нажата любая другая (отфильтрованная) кнопка или клавиша
    } else {
        // записываем ее значение в поле
        output.textContent += value
    }
}

