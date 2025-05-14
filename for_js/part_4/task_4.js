function getNumberDigit(number, digitPosition) {
    let arrayNumbers = []

    while (number > 0) {
        arrayNumbers.unshift(number % 10)
        number = Math.floor(number / 10)
    }

    if (digitPosition >= 0 && digitPosition < arrayNumbers.length) {
        return console.log(`Индекс числа ${digitPosition} = ${arrayNumbers[digitPosition]}`)
    } else {
        return console.log(undefined)
    }
}

    getNumberDigit(123, 0) // 1
    getNumberDigit(123, 1) // 2
    getNumberDigit(123, 2) // 3
    getNumberDigit(1, 2) // undefined