function multiplicar(num1, num2, callback) {
  setTimeout(() => {
    callback(num1, num2, num1 * num2);
  }, Math.floor(Math.random() * (3000 - 100 + 1) + 100));
}

multiplicar(1, 2, (num1, num2, result) => {
  console.log(`${num1} * ${num2} = ${result}`);

  multiplicar(2, 2, (num1, num2, result) => {
    console.log(`${num1} * ${num2} = ${result}`);

    multiplicar(3, 2, (num1, num2, result) => {
      console.log(`${num1} * ${num2} = ${result}`);

      multiplicar(4, 2, (num1, num2, result) => {
        console.log(`${num1} * ${num2} = ${result}`);

        multiplicar(5, 2, (num1, num2, result) => {
          console.log(`${num1} * ${num2} = ${result}`);
        });
      });
    });
  });
});
