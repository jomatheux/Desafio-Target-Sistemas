function inverterString(string) {
    let stringInvertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
    return stringInvertida;
  }
  
  const minhaString = prompt("Digite uma string:");
  const stringInvertida = inverterString(minhaString);
  console.log(`String invertida: ${stringInvertida}`);
  
  // Testes
  console.log(inverterString("exemplo")); 
  console.log(inverterString("")); 
  console.log(inverterString("a")); 