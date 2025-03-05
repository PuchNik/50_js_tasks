function isPerfectNumber(num) {
    const nums = []

    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            nums.push(i)
        }
    }
    const sum = nums.reduce((acc, num) => acc + num, 0)
    nums.splice(0, nums.length)
    return sum === num
}

console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(16));  // false