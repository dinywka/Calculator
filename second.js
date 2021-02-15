var allButs = document.querySelectorAll('.allButtons')
var siBut = document.querySelectorAll('#sign')
var numBut = document.querySelector('#num')
var outp = document.getElementById('in')
var ontp = document.getElementById('on')
var sign = ''
var sum = ''
var operator = ''
var final = []

//input
allButs.forEach(button=>button.addEventListener ('click', function (e) {
   //correctIn()
    var operator = e.target.value
    var outp = document.getElementById('in')
    outp.innerHTML += operator
    console.log(operator)
}))

function willWork() {
    operator = outp.innerHTML
    operator = operator.split('')
    var copyOp = operator
    console.log(operator)
    var signs = ['+', '-', '*', '/']
    for (var i = 0; i < signs.length; i++) {
		while (operator.includes(signs[i])) {
            operatorIndex = operator.findIndex(item => item === signs[i])
            console.log(operatorIndex)
            firstNumber = copyOp.slice(0, operatorIndex).join('')
            console.log(firstNumber)
			sign = operator[operatorIndex]
			secondNumber = copyOp.slice(operatorIndex+1).join('')
            var result = operate(firstNumber, sign, secondNumber)
            console.log(result)
            //operator = [firstNumber, sign, secondNumber]
            console.log(operator)
            //operator = arr.concat(operator[operatorIndex])
            operator.splice(operatorIndex - 1, 3, result)
            console.log(operator)
            //var showResult = document.querySelector('#on')
            outp.innerHTML = result
		}
	}
    //var showResult = document.querySelector('#on')
    //showResult.innerHTML = result
   /* if (isNaN(result) || result === undefined) {
        showResult.innerHTML = ''
    }*/
 return result  
}

function correctIn() {
    var text = outp.innerHTML
    var ar = text.split('')
    switch(ar[0]) {
        case '0':     ar.pop()
        outp.innerHTML = ''
        outp.innerHTML = ar.join('')
        break;
    }
} 


/*function prob() {
    var text = outp.innerHTML
    var ar = text.split('')
    console.log(text, ar)
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] === '+' || ar[i] === '-' || ar[i] === '*' || ar[i] === '/') {
            //ar1 = ar.slice(0, ar[i])
            ar1 = ar.slice(0, [i]) //first num
            ar2 = ar.slice([i+1]) // second num
            ar3 = [' '] //space
            ar4 = ar[i] //sign
            final = ar1.concat(ar3, ar4, ar3, ar2).join('') 
            final = final.split(' ')
              
            console.log(ar1, ar2, ar3, ar4)
            console.log(final)
       }
    }

    var signs = ['+', '-', '*', '/']
    for (var i = 0; i < signs.length; i++) {
		while (final.includes(signs[i])) {
            operatorIndex = final.findIndex(item => item === signs[i])
            console.log(operatorIndex)
            firstNumber = final[operatorIndex-1]
            console.log(firstNumber)
			sign = final[operatorIndex]
			secondNumber = final[operatorIndex+1]
            var result = operate(firstNumber, sign, secondNumber)

            console.log(final.splice(operatorIndex - 1, 3, result))
		}
	}
    var showResult = document.querySelector('#on')
    showResult.innerHTML = result
   /* if (isNaN(result) || result === undefined) {
        showResult.innerHTML = ''
    }*/
//  return result  
//}

function operate(firstNumber, sign, secondNumber) {

    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    console.log(firstNumber, secondNumber, sign)

    if (sign === '+') {
        return firstNumber + secondNumber
    } else if (sign === '-') {
       return firstNumber - secondNumber
    } else if (sign === '*') {
        return firstNumber * secondNumber
    } else if (sign === '/') {
        return firstNumber / secondNumber
    } else {}
}

/*function multioperation(operator){
    operator = outp.innerHTML
    operator = operator.split('')
    var copyOp = operator
    console.log(operator)
    var signs = ['+', '-', '*', '/']
    for (var i = 0; i < signs.length; i++) {
		while (operator.includes(signs[i])) {
            operatorIndex = operator.findIndex(item => item === signs[i])
            console.log(operatorIndex)
            firstNumber = copyOp.slice(0, operatorIndex).join('')
            console.log(firstNumber)
			sign = operator[operatorIndex]
			secondNumber = copyOp.slice(operatorIndex+1).join('')
            var result = operate(firstNumber, sign, secondNumber)
            operator.splice(operatorIndex, 3, result)
			console.log(operator.splice(operatorIndex - 1, 3, result))
		}
	}
    var showResult = document.querySelector('#on')
    showResult.innerHTML = result
   /* if (isNaN(result) || result === undefined) {
        showResult.innerHTML = ''
    }*/
 // return result  
//}

function deleteSign() {
    var text = outp.innerHTML
    var ar = text.split('')
    ar.pop()
    outp.innerHTML = ''
    outp.innerHTML = ar.join('')
}

function removeAll() {
    outp.innerHTML = ''
    ontp.innerHTML = ''
}