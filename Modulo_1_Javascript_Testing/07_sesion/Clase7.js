function obtenerUsuario(id){
    try{
        if(typeof id !=="number")throw new Error ("Debe ser un numero");
        const usuarios = {1: "Ana", 2 : "Carlos", 3: "Maria"};
        if(!usuarios[id]) throw new Error ("Usuario no encontrado");
        return `usuario encontrado: ${usuarios[id]}`
    }catch(error){
        console.error("Error:", error.message);
        return null;
    }
}

console.log(obtenerUsuario(1));
console.log(obtenerUsuario(2));
console.log(obtenerUsuario(3));
console.log(obtenerUsuario(4));
console.log(obtenerUsuario("a"));