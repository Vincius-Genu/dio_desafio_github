// EXEMPLO 01
function mediaAprovados(array, media) {
    let alunosAprovados = [];
    
    for(let i = 0; i < array.length; i++) {
        if (array[i].nota >= media ) {
            alunosAprovados.push(array[i].nome);
        }
    }
    return alunosAprovados;
}

// EXEMPLO 02 OBJECT DESTRUCTURING
function aprovados(array, media) {
    let alunosAprovados = [];
    for (let i = 0; i < array.length; i++) {
        const {nota, nome} = array[i];
        if (nota >= media ) {
            alunosAprovados.push(nome);
        }
    }
    return alunosAprovados;
}

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Ronaldo',
		nota: 4,
		turma: '2C',
	},
];

console.log(aprovados(alunos, 6));