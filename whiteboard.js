//! COMPLEXIDADE O(N)^
function encontrarSoma(lista, soma) {
  for (let i = 0; i < lista.length; i++) {
    const valor1 = lista[i];
    const complemento = soma - valor1;
    const valor2 = buscaBinaria(lista.slice(i + 1), complemento);

    if (valor2 === null) return true;
  }
  return false;
}

//! COMPLEXIDADE O(N)

function encontrarSoma(list) {
  // list [1234, 1234, 4321, 5432, ...]
  const hash = {};
  const repete = [];

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (hash[item]) {
      hash[item] = true; // hash {1234: true}
    } else {
      hash[item] = false; // hash {4321: false, 5432: false}
    }
  }
  for (let key in hash) {
    const value = hash[key];
    if (value === true) {
      repete.push(key);
    }
  }
  return repete;
}

function encontrarIndice(lst){
    const hash = {}

    for (let i = 0; i < lst.length; i++){
        const item = lst[i]
        if(lst[hash[item]] === lst[i]){
            return [hash[item], i]
        }
        hash[item] = i  
    }
    return false
}