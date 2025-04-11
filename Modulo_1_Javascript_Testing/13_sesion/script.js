function expect(actual){
    return{
        toBe(expected){
            if(actual===expected){
                console.log(`Paso: ${actual}===${expected}`);
            }else{
                console.log(`Fallo: se esperaba ${expected} pero se obtuvo ${actual}`);
            }
        },
        toEqual(expected){
            const passed= JSON.stringify(actual) === JSON.stringify(expected);
            if(passed){
                console.log("Paso: objetos iguales")
            }else{
                console.log("Fallo; objetos diferentes")
            }
        }
    }
}

function sumar (a,b){
    return a+b;
}

function validarUsuario(usuario){
    return usuario.nombre && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo);
}

//LLAMADA A FUNCIONES

console.log("SUMA");
expect(sumar(10,0)).toBe(10);
expect(sumar(3,3)).toBe(5);

console.log("--------------------");

const usuarioValido={nombre:"Ana", correo: "ana@gmail.com"}
const usuarioValido2={nombre:"Ana", correo: "ana@gmail.com"}
const usuarioInvalido={nombre:"Daniela", correo: "danielagmail.com"}

console.log("VALIDACION DE USUARIOS");
expect(validarUsuario(usuarioValido)).toBe(true); // expect (true).toBe(true)
expect(validarUsuario(usuarioInvalido)).toBe(true); // expect (false).toBe(true)


console.log("--------------------");


console.log("COMPARACION DE USUARIOS");
expect(usuarioValido).toEqual(usuarioValido2);
expect(usuarioValido).toEqual(usuarioInvalido);


