const arr = [1, 50, 20, 75, 90]

function sum(array) {
    const sum = arr.reduce((acc, num) => acc + num, 0)
    console.log(sum)
}

sum(arr)
