function fibonacci(num) {
    if (num < 0) {
      return "Número inválido. Insira um número não negativo.";
    }
  
    const sequencia = [0, 1];
  
    if (sequencia.includes(num)) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
  
    while (sequencia[sequencia.length - 1] < num) {
      const proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
      sequencia.push(proximo);
    }
  
    if (sequencia.includes(num)) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  const numeroInput = parseInt(prompt("Digite um número:"));
  const resultado = fibonacci(numeroInput);
  console.log(resultado);
  
  // Testes
  console.log(fibonacci(5)); 
  console.log(fibonacci(7)); 
  console.log(fibonacci(0)); 
  console.log(fibonacci(1)); 
  console.log(fibonacci(-1)); 