
//To-Do: digitsExists *(-1) so it doesnt complicates the array when number is negative
//       cut out doubbled digits

//To-Do: commonDigits



//var declaration
let number = 25
let resultSqrt
let BooleanIsPoitive = undefined
let BooleanIsSquare = undefined
let digits = []
let sNumber = number.toString();


//function execution

isPositive()

isSquare()

digitExists()


//Checking for Positivity of Number
//@out 
//true if number bigger than 0
function isPositive() {
    if (number >= 0) {
        BooleanIsPoitive = true
    } else {
        BooleanIsPoitive = false
    }
}


//Checks for Sqrt if number >= 0
//@out 
//  BooleanIsSquare
//@return
//   squareRoot

function isSquare() {
    if (number < 0) {
        BooleanIsSquare = false
    } else if (Number.isInteger(Math.sqrt(number))) {
        BooleanIsSquare = true
    } else {
        BooleanIsSquare = false
    }
    if (BooleanIsSquare) {
        squareRoot()
    }
}

//Checks for Square Root when number = perfectly Square
//@out
//   resultSqrt
function squareRoot() {
    if (BooleanIsSquare) {
        resultSqrt = Math.sqrt(number)
    }
}



//compares digits converts them into string and gives them back as an array
//@out
//  digits 

function digitExists() {
    
        for (var i = 0, len = sNumber.length; i < len; i++) {
            digits.push(+sNumber.charAt(i))
        }
    }
        










//Control
console.log("BooleanIsPositive: " +BooleanIsPoitive,"BooleanIsSquare: " + BooleanIsSquare, "Sqrt: " + resultSqrt, digits)
