function imc(altura, peso, sexo) {
    let resultado = peso / (altura ** 2);
    let imc = resultado.toFixed(2)
    

    if (sexo === "F") {
        if (imc < 19.1) {
            return console.log(`O resultado foi ${imc}. Está abaixo do peso.`)
        }else if (imc < 25.8) {
            return console.log(`O resultado foi ${imc}. Está no peso normal.`)
        } else if (imc < 27.3) {
            return console.log(`O resultado foi ${imc}. Está marginalmente acima do peso.`)
        } else if (imc < 32.3) {
            return console.log(`O resultado foi ${imc}. Está acima do peso ideal.`)
        } else {
            return console.log(`O resultado foi ${imc}. Está obesa.`)      
        }
    } else if (sexo === "M") {
        if (imc < 20.7) {
            return console.log(`O resultado foi ${imc}. Está abaixo do peso.`)
        }else if (imc < 26.4) {
            return console.log(`O resultado foi ${imc}. Está no peso normal.`)
        } else if (imc < 27.8) {
            return console.log(`O resultado foi ${imc}. Está marginalmente acima do peso.`)
        } else if (imc < 31.1) {
            return console.log(`O resultado foi ${imc}. Está acima do peso ideal.`)
        } else {
            return console.log(`O resultado foi ${imc}. Está obeso.`)      
        }
    } else {
        return console.log("Sexo inválido");
    }
}

console.log(imc(1.66, 70, "F"));
console.log(imc(1.66, 80, "M"));
console.log(imc(1.80, 120, "G"));
console.log(imc(1.56, 50, "F"));