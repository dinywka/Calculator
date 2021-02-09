

var siBut = document.querySelector('.sign')
var outp = document.getElementById('in')
var ontp = document.getElementById('on')


function showS (value) {
    var outp = document.getElementById('in')
    outp.innerHTML += value
    var a = outp.innerHTML
    var regex = /\+|\-|\/|\*/
    var splited = a.split(regex)
    console.log(splited)
    console.log(a)
    var firstNumber = Number(splited[0])
    var secondNumber = Number(splited[1])
    console.log(firstNumber, secondNumber)
    operate(firstNumber, secondNumber)
}

function operate(firstNumber, secondNumber) {
    var str = outp.innerHTML
    if (str.includes('+')) {
        var sum = firstNumber + secondNumber
    } else if (str.includes('-')) {
        var sum = firstNumber - secondNumber
    } else if (str.includes('*')) {
        var sum = firstNumber * secondNumber
    } else if (str.includes('/')) {
        var sum = firstNumber / secondNumber
    } else {}
    console.log(sum)
    var showResult = document.querySelector('#on')
    showResult.innerHTML = sum
}


function deleteSign() {
    var text = outp.innerHTML
    var ar = text.split('')
    ar.pop()
   // console.log(ar.join(''))
    outp.innerHTML = ''
    outp.innerHTML = ar.join('')
}

function removeAll() {
    outp.innerHTML = ''
    ontp.innerHTML = ''
}

siBut.addEventListener ('click', function (e) {
    var operator = e.target.value
 console.log(operator)
})

