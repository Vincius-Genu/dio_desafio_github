function excluirNumPar(array) {
    if (!array){
        return -1;                 // Verificar se o array existe (Null)
    }
    if (!array.length) return -1          // Verificar se o array tem valor(empty)
    for (let num = 0; num < array.length; num++) {
        if (array[num] % 2 === 0 && array[num] !== 0) {            
            array[num] = 0;    
    }           
    }
    return array;    
}


let arrayx = [1, 3, 4, 6, 80, 33, 23, 90];
let arrayz = [];

console.log(excluirNumPar(arrayz));