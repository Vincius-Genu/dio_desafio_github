// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];

// array.forEach(function(item, index){console.log(item, index)});

// array.push([]);('novo item')

// array.pop();

// array.shift();

// array.unshift();

// console.log(array.indexOf(true));

// array.splice(0, 3);

// console.log();

// let novoArray = array.slice(0, 3);

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectinterno: {objectinterno: 'objeto interno'}};

// var array = object.array;
// console.log(array);

var {string, boolean, objectinterno} = object;
console.log(string, boolean, objectinterno)