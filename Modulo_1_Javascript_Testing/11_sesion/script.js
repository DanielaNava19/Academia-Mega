document.getElementById("formularioNotas").addEventListener("submit",function (e) {
    e.preventDefault();

    const nota1= parseFloat(document.getElementById("nota1").value);
    const nota2= parseFloat(document.getElementById("nota2").value);
    const nota3= parseFloat(document.getElementById("nota3").value);

    const resultado=document.getElementById("resultado");

    try{
        const promedio = calcularPromedio(nota1, nota2, nota3);
        resultado.textContent =promedio.toFixed(2);
        resultado.style.color= promedio>=6?"green": "orange";
    }catch(error){
        console.log(error.message);
        resultado.textContent=error.message
        resultado.style.color="red";
    }
})


function calcularPromedio (n1, n2, n3){
    console.log ("Calculando promedio...");

    if([n1, n2, n3].some(isNaN)){
        throw new Error ("Todas las notas deben ser numero");
    }
    if([n1, n2, n3].some(a=>a<0 || a>10)){
        throw new Error ("Las notas deben ser entre 0 y 10");
    }

    //Sesion 12: Agregar 3 validaciones mas

    if ([n1, n2, n3].some(n => (n.toString().split('.')[1] || '').length > 2)) {
        throw new Error("Solo se permiten 2 cifras de decimales en las notas")
    }

    if (n1===0 && n2===0 && n3===0) {
        throw new Error("Valida las notas, has ingresado todas las notas en 0")
    }

    if (([n1, n2, n3].filter(n=> n<=5)).length>=2) {
        throw new Error("Valida las notas, se obtendrá un promedio muy bajo")
    }

    return (n1+n2+n3)/3;

}