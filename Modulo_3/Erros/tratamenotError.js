function checkTamanho(array, num){
    try {
        if (!array && !num) throw new ReferenceError('Envie os parâmetros');

        if (typeof array !== 'object') throw new TypeError('Array deve ser do tipo object');

        if (typeof num !== 'number') throw new TypeError('Número deve ser do tipo number');

        if (array.length !== num) throw new RangeError('Tamanho inválido');

        return array;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError');
            console.log(e.message); 
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(e.message);
        } else {
            console.log('Erro não esperado' + e);
        }
    }
}

console.log(checkTamanho([1, 2, 3, 4, 5],5));