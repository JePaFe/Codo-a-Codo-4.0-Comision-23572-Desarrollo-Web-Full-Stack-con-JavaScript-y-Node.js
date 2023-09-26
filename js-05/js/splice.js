// const numeros1 = [6, 1, 8];
// const numeros2 = [5, 7];

// const numeros3 = numeros2.concat(numeros1);

// const textoNumeros = numeros3.join(", ");

// ---

// const textoNombres = "Juan, Maria, Pedro";

// const textoNombres = "Juan Maria Pedro";

// const nombres = textoNombres.split(" ");

// ---

// const nums = [6, 2, 89, 4, 7];

// const nums2 = nums.slice(1, 4);
// const nums3 = nums.slice(2);

// -- splice

// const months = ["Jan", "March", "April", "June"];

// // months[1] = "February";

// // ["Jan", "Feb", "March", "April", "June"];
// months.splice(1, 0, "Feb");

// // ["Jan", "Feb", "March", "April", "May"];
// months.splice(4, 1, "May");

// // ["Jan", "Feb", "March", "April", "May"];
// months.splice(2, 1);

// -- sort

// const months = ["Jan", "March", "April", "June"];

// console.log(months);
// months.sort().reverse();
// console.log(months);

const numeros = [10, 1, "Juan", 90, 7, "Ana", 20, 2];

// function compareFn(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

// numeros.sort(compareFn);

numeros.sort((a, b) => a - b);
