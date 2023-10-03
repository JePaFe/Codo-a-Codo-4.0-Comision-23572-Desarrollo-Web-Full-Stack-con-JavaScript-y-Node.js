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

const tabla = async () => {
  try {
    let res = await multiplicar(1, 2);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    res = await multiplicar(2, 2);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    res = await multiplicar(3, 2);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Siempre");
  }
};

tabla();
