"use strict";
// 3. Parašykite TypeScript kodą, kuris konvertuoja vieno
// tipo kintamąjį į kitą, naudodamas tipo teiginius ir tipo
// konvertavimo funkcijas, pvz., parseInt().
Object.defineProperty(exports, "__esModule", { value: true });
let skaicius = 5;
console.log(typeof skaicius.toString());
let text = skaicius.toString();
let logas = parseInt(text);
console.log(logas);
//# sourceMappingURL=uzduotis_03.js.map