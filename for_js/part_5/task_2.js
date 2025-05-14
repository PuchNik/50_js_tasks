function countWords(sentence) {
  const words = sentence
    .replace(/[^\p{L}\s]+/gu, '')
    .trim()
    .split(/\s+/)
  if (sentence.length === 0) {
    return 'Пустое предложение'
  } else {
    return words.length
  }
}

console.log(countWords('Hello , how are you?'))
console.log(countWords(''))
