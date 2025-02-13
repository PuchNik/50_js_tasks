console.log(typeof 'Hello')
console.log(typeof 10)
console.log(typeof {})

// Вернет объект, потому что это историческая неувязка из-за ошибочной реализации typeOf. Остается и по сей день, для совместимости с предыдущими версиями
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)

// Вернет объект, потому что массивы являются подтипом объектов
console.log(typeof [])
console.log(typeof (() => {}))
