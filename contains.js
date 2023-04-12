function contains(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return console.log(true);
      }
    }
    return console.log(false);
  }

  let meuArray = ["hello","bye"];

  contains(meuArray,"bye"); 