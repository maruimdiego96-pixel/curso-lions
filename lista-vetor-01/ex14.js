let a = [1, 2, 3, 4, 5, 6, 7, 8, 5]
let b = 5;
let indice = -1;
for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
        indice = i;
   break;
    }
}
console.log(indice)