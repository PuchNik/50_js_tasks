function compareNumber(num, min, max) {
    if (num < min) {
        return min ** 2
    } else if (num > max) {
        return max ** 2
    } else if (num < max - (max - min) / 2) {
        return num ** 2
    } else {
        return Math.floor(num)
    }
}

console.log(compareNumber(3, 1, 10)); // 9
console.log(compareNumber(15, 1, 10)); // 100
console.log(compareNumber(5, 1, 10)); // 25
console.log(compareNumber(8.5, 1, 10)); // 8