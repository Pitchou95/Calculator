const numSigns = [...document.querySelectorAll('.numbers, .sign')]
const clearBtn = document.querySelector('.clear')
const equalsBtn = document.querySelector('.equals')
const input = document.querySelector('#input')
let result = ""
clearBtn.addEventListener('click', clearResult)
equalsBtn.addEventListener('click', calculetResult)
function clearResult() {
    freeze = false
    result = ""
    input.value = "0"
}
numSigns.forEach((numSign) => {
    numSign.addEventListener('click', actionBTN)
})
function actionBTN(e) {
    if (freeze) {
        e.preventDefault()
        return
    }
    const value = e.target.value
    if (input.value === 0 && value === 0) {
        return
    }

    if (result.length === 0) {
        input.value = ""
    }
    const Operators = ['/', '*', '-', '+']
    if (Operators.includes(result[result.length - 1]) && Operators.includes(value)) {
        input.value = input.value.replace(/.$/, value);
        result = input.value.replace(/.$/, value);
        return
    }
    result += value
    input.value += value
}
function calculetResult() {
    try {
        input.value = eval(result)

    } catch (error) {
        input.value = "ERROR"
        freeze = true
        setTimeout(() => {
            if (confirm("rak ghalt")) {
                clearResult()
            }
        }, 0);
    }
}
