function compara_2numeros(num1, num2){
    const check1 = check_igualdade(num1, num2);
    const check2 = soma_2numeros(num1, num2)
    const check3 = comparar_soma_com10e20(num1, num2);

    return `${check1} ${check2} ${check3}`;
}


function check_igualdade(num1, num2){
    let check;
    (num1 === num2) ? check = 'são iguais.' : check = 'não são iguais.'

    return `Os números ${num1} e ${num2} ${check}`;     
}


function soma_2numeros(num1, num2){
    const soma = num1 + num2;

    return `Sua soma é ${soma},`;
}


function comparar_soma_com10e20(num1, num2){
    let comp10, comp20     
    const soma = soma_2numeros(num1, num2);
    (soma > 10) ? comp10 = 'maior' : comp10 = 'menor';
    (soma > 20) ? comp20 = 'maior' : comp20 = 'menor';
        
    return `que é ${comp10} que 10 e ${comp20} que 20`;
}


console.log(compara_2numeros(7, 4))