function max(array) {
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    }
    return console.log(maxNum);
  }

  let meuArray = [10,20,11,2];

  max(meuArray); 