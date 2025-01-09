function calcularFaturamento(dados) {
    if (!Array.isArray(dados) || dados.length === 0) {
      return "Dados inválidos ou vazios.";
    }
  
    const faturamentos = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);
  
    if (faturamentos.length === 0) {
        return "Não há faturamentos válidos para calcular."
    }
  
    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);
    const mediaMensal = faturamentos.reduce((acc, valor) => acc + valor, 0) / faturamentos.length;
    const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaMensal).length;
  
    return { menorFaturamento, maiorFaturamento, diasAcimaDaMedia, mediaMensal };
  }
  

  const dadosFaturamento = [
      { dia: 1, valor: 22174.1664 },
      { dia: 2, valor: 24537.6698 },
      { dia: 3, valor: 26139.6134 },
      { dia: 4, valor: 0.0 },
      { dia: 5, valor: 0.0 },
      { dia: 6, valor: 26742.6612 },
      { dia: 7, valor: 0.0 },
      { dia: 8, valor: 26895.3198 },
      { dia: 9, valor: 0.0 },
      { dia: 10, valor: 27200.7538 },
      { dia: 11, valor: 0.0 },
      { dia: 12, valor: 27717.9144 },
      { dia: 13, valor: 0.0 },
      { dia: 14, valor: 37874.9800 },
      { dia: 15, valor: 0.0 },
      { dia: 16, valor: 26624.9698 },
      { dia: 17, valor: 0.0 },
      { dia: 18, valor: 27352.5374 },
      { dia: 19, valor: 0.0 },
      { dia: 20, valor: 26784.7940 },
      { dia: 21, valor: 0.0 },
      { dia: 22, valor: 27963.8584 },
      { dia: 23, valor: 0.0 },
      { dia: 24, valor: 25119.5318 },
      { dia: 25, valor: 0.0 },
      { dia: 26, valor: 45456.6200 },
      { dia: 27, valor: 0.0 },
      { dia: 28, valor: 26738.1652 },
      { dia: 29, valor: 0.0 },
      { dia: 30, valor: 26972.5028 }
  ];
  
  const resultados = calcularFaturamento(dadosFaturamento);
  console.log(`Menor faturamento: R$${resultados.menorFaturamento.toFixed(2)}`);
  console.log(`Maior faturamento: R$${resultados.maiorFaturamento.toFixed(2)}`);
  console.log(`Dias acima da média (${resultados.mediaMensal.toFixed(2)}): ${resultados.diasAcimaDaMedia}`);
