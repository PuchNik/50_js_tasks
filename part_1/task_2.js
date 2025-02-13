// Повторный вывод в консоль выдаст ошибку, потому что const нельзя изменить, она постоянна
// const a = 100;
// a = 20;
// console.log(a);

// Вызов приведет к ошибке потому что сам вызов идет до объявления переменной
// console.log(a)
// let a = 15;
// console.log(a);

// Из-за применения var происходит hosting, который позволяет поднимать объявление переменных в верхнюю область видимости, за счет этого мы можем объявлять переменные до их вызова
// console.log(a);
// var a;
// a = 10;
// console.log(a);

