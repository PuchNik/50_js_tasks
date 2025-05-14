const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

function generateItem() {
    return `<ul>\n` +
        names.map(name => `    <li> ${name} </li>>`).join('\n')
        + `\n<ul>`
}

console.log(generateItem(names))