const letras = ["A", "a", "B", "C", "L", "z"];
const letras1 = ["A", "e", "B", "C", "E", "z", 'e'];

let total = 0
for (const encontrandoLetra of letras) {
    if (encontrandoLetra === 'E' || encontrandoLetra === 'e') {
        total++
    }
}

let total1 = 0
for (let encontrado = 0; encontrado < letras1.length; encontrado++) {
    if (letras1[encontrado] === 'E' || letras1[encontrado] === 'e') {
        total1++
    }
}
console.log('for...of');
console.log(total === 0 ? 'Nenhuma letra "E" ou "e" foi encontrada no array 1.' : `Foram encontradas  no array 1 um total de ${total} letras "E" ou "e".`);
console.log('for');
console.log(total1 === 0 ? 'Nenhuma letra "E" ou "e" foi encontrada no array 2.' : `Foram encontradas no array 2 um total de ${total1} letras "E" ou "e".`);