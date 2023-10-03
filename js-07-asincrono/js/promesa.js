// function esperar(condicion) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (condicion) {
//         resolve("Hola");
//       } else {
//         reject("Error");
//       }
//     }, 2000);
//   });
// }

// console.log("1");

// esperar(false)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Siempre");
//   });

// console.log("2");

// ---

function multiplicar(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
      reject("Tiene que ser números");
    }
    setTimeout(() => {
      resolve({
        num1: num1,
        num2: num2,
        result: num1 * num2,
      });
    }, Math.floor(Math.random() * (3000 - 100 + 1) + 100));
  });
}

multiplicar(1, 2)
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
    return multiplicar(2, 2);
  })
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
    return multiplicar(3, 2);
  })
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
  })
  .catch((error) => console.error(error));
