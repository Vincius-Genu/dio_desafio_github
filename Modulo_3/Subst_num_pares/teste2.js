function tracoHorizontal(simbolo){
    let resultado = ''
    for (let n = 0; n < 39; n++){
        resultado += simbolo       
    }
    console.log(resultado, '\n')
}

function tracoVertical(simbolo1, simbolo2) {
    let resultado = ''
    for (let n = 0; n < 39; n++){
        if (n === 0 || n === 37 ){
            resultado += simbolo1
        }else {
            resultado += simbolo2
        }
    }
    console.log(resultado, '\n')
}


tracoHorizontal('-')
tracoVertical('|', ' ')
tracoVertical('|', ' ')
tracoVertical('|', ' ')
tracoVertical('|', ' ')
tracoVertical('|', ' ')
tracoHorizontal('-')



