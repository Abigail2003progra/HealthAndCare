function calcularLBS(elEvento){
    elEvento.preventDefault();

    var edad = document.querySelector("#inputEdad").value;
    var genero = document.querySelector("#inputGenero").value;
    var kgg = document.querySelector("#inputKgg").value;
    var edad1 = 0;
    var generoh1 = 0;
    var generom1 = 0;
    var r = document.querySelector("#inputResultado");
    var respuesta = 55;
    var resultado1 = 0;
    r.textContent =  respuesta.toFixed(2);
    if(edad = "1"){
        edad1=1;
        generoh1 = generoh1+1;
        generom1 = generom1+1;
    }
    if(edad = "2"){
        edad1=1;
        generoh1 = generoh1+1;
        generom1 = generom1+1;
    }
    if(edad = "3"){
        edad1=1;
        generom1 = generom1+1;
        generoh1 = generoh1+1;
    }
    if(genero = "1"){
        generoh1=generoh1+1;
    }
    if(genero = "2"){
        generom1=generom1+1;
    }
    if(generoh1 = 2){
        respuesta = (60.9 * kgg) -54;
    }
    if(generom1 = 2){
        respuesta = (61.0 * kgg) -51;
    }



   

    var boton = document.querySelector("#inputFormulario");
    boton.addEventListener("submit", calcularLBS);
    
