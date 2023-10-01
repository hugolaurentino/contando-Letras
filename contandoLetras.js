const letras = ["A", "a", "B", "C", "L", "z"];
// const letras = ["A", "e", "B", "C", "E", "z", 'e'];

let total = 0
for (const encontrandoLetra of letras) {
    if (encontrandoLetra === 'E' || encontrandoLetra === 'e') {
        total++
    }
}

console.log(total === 0 ? 'Nenhuma letra "E" ou "e" foi encontrada.' : `Foram encontradas ${total} letras "E" ou "e".`);