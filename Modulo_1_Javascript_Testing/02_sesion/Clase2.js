let intentos= 0;
let contraseña= "12345";
let contraseña_ingresada;

while (intentos <3){
    contraseña_ingresada=prompt("Ingresa la contraseña");
    if (contraseña===contraseña_ingresada){
        console.log ("La contraseña es correcta");
        break;
    }else {
        console.log("Contraseña incorrecta");
    }
    intentos++;
}

if(intentos===3){
    console.log("Sus intentos se han agotado");
}
