function palindromo(string){
    if (!string) {
        return 'String inexistente'
    }
    stringReversa = string.split('').reverse().join('')     // .join('') vai reagrupar todos os elementos do array
    return (string === stringReversa)    
}

console.log(palindromo('ama'))

// Solução 02

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');