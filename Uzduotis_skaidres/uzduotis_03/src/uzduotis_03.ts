// 3. Parašykite TypeScript kodą, kuris konvertuoja vieno
// tipo kintamąjį į kitą, naudodamas tipo teiginius ir tipo
// konvertavimo funkcijas, pvz., parseInt().

let skaicius: number = 5;

console.log(typeof skaicius.toString());

let text = skaicius.toString();

let logas = parseInt(text);

console.log(logas);
