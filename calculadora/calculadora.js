function calculadora (n1, n2, signal) {
    if (signal === "+" ) {
        return n1 + n2;
    } else if (signal === "-" ) {
        return n1 - n2;
    } else if (signal === "*" ) {
        return n1 * n2;
    } else if (signal === "/" ) {
        return n1/n2;
    } else if (signal === "%" ) {
        return n1 - n2;
    } else if (signal === "**" ) {
        return n1 - n2;
    } else {
        return console.log("Operação inválida")
    }
}

console.log(calculadora(4,2,"+"));
console.log(calculadora(4,2,"-"));
console.log(calculadora(4,2,"*"));
console.log(calculadora(4,2,"/"));
console.log(calculadora(4,2,"%"));
console.log(calculadora(4,2,"**"));
console.log(calculadora(4,2,"$"));