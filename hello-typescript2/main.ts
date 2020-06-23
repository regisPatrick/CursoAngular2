var minhaVar = 'minha variavel';

function minhaFunc1(x: any, y: any){
    return x + y;
}

// ES 6 ou ES 2015
let num1: number = 2;
const PI_1 = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});
numeros.map(valor => valor * 2 ); // ES 2015

class Matematica1 {
    soma(x: any, y: any){
        return x + y;
    }
}

var n1: any = 'sdfsdf';
n1 = 4;