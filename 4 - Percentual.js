function calcularPercentuais(faturamentos) {
    const total = Object.values(faturamentos).reduce((acc, valor) => acc + valor, 0);
    const percentuais = {};
    for (const estado in faturamentos) {
      percentuais[estado] = (faturamentos[estado] / total) * 100;
    }
    return percentuais;
  }
  
  const faturamentos = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  const percentuais = calcularPercentuais(faturamentos);
  
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
  }