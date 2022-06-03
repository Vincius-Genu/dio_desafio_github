var player1 = 1;
var player2 = 0;
var placar;

// if(player1 != -1){
//     if(player1 > 0) {
//         console.log('player 1 marcou ponto');
//     }else if(player2 > 0){
//         console.log('player 2 marcou ponto');
//     } else {
//         console.log('Ninguerm marcou ponto');
//     }     
// }

player1 != -1 && player2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores são inválidos')
if(player1 > 0) {
    console.log('player 1 marcou ponto');
}else if(player2 > 0){
    console.log('player 2 marcou ponto');
} else {
    console.log('Ninguerm marcou ponto');
}

switch (placar){
    case placar = player1 > player2:
        console.log('player 1 ganhou');
        break;
    case placar = player2 > player1:
        console.log('player 2 ganhou'); 
        break;
    default:
        console.log('ninguém ganhou');
}