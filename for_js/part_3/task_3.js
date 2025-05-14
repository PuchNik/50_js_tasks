const names = ['Nik', 'Pen', 'Anny', 'Aren', 'Kony']

function getNames(array) {
    for (name of names) {
        console.log(name)
    }
}

getNames(names)

names.shift()
names.pop()

getNames(names)
