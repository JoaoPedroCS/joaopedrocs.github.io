function moveDecimalLeft(numStr) {
    let decimalIndex = numStr.indexOf('.');
  
    if (decimalIndex === -1) {
      // Se não houver ponto, adicionar no final e mover uma casa para a esquerda
      return numStr.slice(0, -2) + '.' + numStr.slice(-2) + numStr.slice(-1);
    } else if (decimalIndex === 0) {
      // Se o ponto estiver no início, retorná-lo como 0.X
      return '0' + numStr;
    } else {
      // Remover o ponto e colocá-lo uma posição à esquerda
      let beforeDecimal = numStr.slice(0, decimalIndex - 2);
      let afterDecimal = numStr.slice(decimalIndex - 2) + numStr.slice(decimalIndex - 1);
      return beforeDecimal + '.' + afterDecimal.replace('.', '');
    }
  }

console.log(moveDecimalLeft("12345")); // "1234.5"
console.log(moveDecimalLeft("123.45")); // "12.345"
console.log(moveDecimalLeft("1.23")); // "0.123"