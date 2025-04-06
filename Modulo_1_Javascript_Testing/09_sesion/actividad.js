export function sumar(num1, num2){
    return num1+num2;
}

export function restar(num1, num2){
    return num1-num2;
}

export function multiplicar(num1, num2){
    return num1*num2;
}

export function dividir(num1, num2){
    if(num2===0){
        return "No se puede dividir entre 0"
    }else{
        return num1/num2;
    }
}