"use strict";
// 4. Parašykite TypeScript kodą, kuris deklaruoja
// konkretaus duomenų tipo masyvą. Parašykite įprastas
// masyvo operacijas, tokias kaip elementų pridėjimas ar
// pašalinimas iš masyvo, taip pat masyvo elementų
// pateikimas konsolėje.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [];
numbers.push(5, 7, 9);
console.log("After push:", numbers); // Should show [5, 7, 9]
const newNumbers = numbers.splice(-1, 1);
console.log("Removed element(s):", newNumbers); // Should show [9]
console.log("Remaining array:", numbers); // Should show [5, 7]
//# sourceMappingURL=uzduotis_04.js.map