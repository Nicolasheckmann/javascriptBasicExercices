let myFunction7 = () => {
  let userInput = prompt("Qu'est-ce qui y'a?");
  let botResponse = (userInput) => {
    if (userInput.endsWith("?")) {
      return "Ouais Ouais...";
    } else if (userInput === userInput.toUpperCase() && userInput.match(/\w/)) {
      return "Pwa, calme-toi...";
    } else if (userInput.toLowerCase().includes('fortnite')) {
      return "on s' fait une partie soum-soum ?";
    } else if (userInput == "") {
      return "t'es en PLS ?";
    } else {
      return "balek."; 
    }
  };
  console.log(botResponse(userInput))
}