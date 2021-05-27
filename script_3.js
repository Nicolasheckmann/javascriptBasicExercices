let myFunction3 = () => {
  let numberOfStages = parseInt(prompt("Combien d'étages veux-tu?"))
  let buildPyramid = (numberOfStages) => {
    let result = ""
    for (i = 1; i < (numberOfStages + 1); i++) {
      result += " ".repeat(numberOfStages - i) + "#".repeat(i) + "\n"
    }
    return result;
  }
  console.log(buildPyramid(numberOfStages));
}