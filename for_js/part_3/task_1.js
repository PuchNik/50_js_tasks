const john = {
    name: 'John',
    age: 23,
    pet: 'dog'
}

const ann = {
    name: 'Ann',
    age: 18,
    pet: 'cat'
}

const getPerson = ({name, age, pet}) => {
    return `Меня зовут ${name}, мне ${age}, у меня есть питомец ${pet}`
}

const incrementAge = person => person.age++

for (let properties in john) {
    console.log(`${properties}: ${john[properties]}`)
}