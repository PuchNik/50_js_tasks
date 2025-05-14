function calc(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default:
            return 'Введите операцию'
    }
}

console.log(calc(6, 10, '/'))