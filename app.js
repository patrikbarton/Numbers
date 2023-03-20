
//To-Do: digitsExists *(-1) so it doesnt complicates the array when number is negative
//       cut out doubbled digits  | solved 

//To-Do: add new function for CommonDigits

//Submit Number Button

document.getElementById('submitButton').onclick = function () {

    let number = document.getElementById("number").value


    //var declaration

    let resultSqrt = undefined
    let BooleanIsPoitive = undefined
    let BooleanIsSquare = undefined
    let digits = []
    let sNumber = number.toString()
    const negativeNumber = '-'

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
        //deltetes the minus out of the string if number is negative
        if (sNumber.includes(negativeNumber)) {
            sNumber = sNumber.substring(1)
        }

        //for loop to push digits into string
        for (var i = 0, len = sNumber.length; i < len; i++) {
            digits.push(+sNumber.charAt(i))

        }
    }
    //deletes all doublicates out of digits
    let uniqueDigits = [...new Set(digits)]








    function printInfos() {



        document.getElementById('isPositive').innerHTML = BooleanIsPoitive

        document.getElementById('isSquare').innerHTML = BooleanIsSquare

        document.getElementById('squareRoot').innerHTML = resultSqrt

        document.getElementById('commonDigits').innerHTML = uniqueDigits
    }


    //print infos
    printInfos()



}


//Control
console.log("BooleanIsPositive: " + BooleanIsPoitive, "BooleanIsSquare: " + BooleanIsSquare, "Sqrt: " + resultSqrt, digits)