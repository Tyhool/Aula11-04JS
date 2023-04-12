function isUniform(arr) {
    // Verifica se o array está vazio ou possui apenas um elemento
    if (arr.length <= 1) {
      return console.log(true);
    }
  
    // Armazena o primeiro elemento do array para comparar com os demais
    const firstItem = arr[0];
  
    // Percorre os elementos do array a partir do segundo elemento
    for (let i = 1; i < arr.length; i++) {
      // Se algum elemento for diferente do primeiro, retorna falso
      if (arr[i] !== firstItem) {
        return console.log (false);
      }
    }
  
    // Se chegou até aqui, todos os elementos são iguais, então retorna verdadeiro
    return console.log(true);
  }
  let meuArray = ["b","b","b"];

  isUniform(meuArray);  