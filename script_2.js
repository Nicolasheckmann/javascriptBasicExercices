let myFunction2 = () => {
  let factorial = prompt("De quel nombre souhaite-tu obtenir la factorielle?")
  let getFactorial = (factorial) => {
    let result = factorial;
    for (i = 1; i < factorial; i++) {
      result *= (factorial - i)
    }
    return result;
  };
console.log(getFactorial(factorial))
};