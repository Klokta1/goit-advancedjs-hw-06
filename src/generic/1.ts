/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>(data: T[]): Promise<T[]> {
  return new Promise((resolve) => {
    resolve(data);
  });
}

getPromise(['Text', 50])
  .then((data) => {
    console.log(data);
  });

export {};