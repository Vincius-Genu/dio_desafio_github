// var y = 0;
// var x = 1;

// var z = 2;

// var preco = 2;
/* var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto */

// function soma(a, b) {
//     return a + b; // 8
// }

// soma(3, 5);

// console.log("Hello World!");
// console.log('TESTANDO');

function return_even_values(array) {
    let even_nums = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            even_nums.push(array[i]);
        } 
    }
    console.log(even_nums);
}

let array = [1, 2, 4, 5, 7, 8];
return_even_values(array)