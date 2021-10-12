function calcularLBS(elEvento){
    elEvento.preventDefault();

    var sexo = document.querySelector("#inputSexo").value;
    var actividad = document.querySelector("#inputLibras").value;
    var tmb = document.querySelector("#inputTmb").value;
    var resultado = document.querySelector("#resultado");
    var respuesta;
    var a1 = 0;
    var a2 = 0;
    var a3 = 0;
    var a4 =0;

    if (sexo="1") {
        a1 = 1;
        a2 = 1;
        a3 = 1;
        a4 = 1;
    }
    if (sexo="2") {
        a1 = 3;
        a2 = 3;
        a3 = 3;
        a4 = 3;
    }

    if (actividad="1") {
        a1 = a1+1;
    }

    if (actividad="2") {
        a2 = a2+1;
    }

    if (actividad="3") {
        a3 = a3+1;
    }

    if (actividad="4") {
        a4 = a4+1;
    }

    if (a1=2) {
        respuesta = tmb * 1.2;
    }
    if (a2=2) {
        respuesta = tmb * 1.56;
    }
    if (a3=2) {
        respuesta = tmb * 1.78;
    }
    if (a4=2) {
        respuesta = tmb * 2.81;
    }


    if (a1=4) {
        respuesta = tmb * 1.2;
    }
    if (a2=4) {
        respuesta = tmb * 1.55;
    }
    if (a3=4) {
        respuesta = tmb * 1.64;
    }
    if (a4=4) {
        respuesta = tmb * 1.82;
    }

    resultado.textContent = respuesta.toFixed(2)
}
    var boton = document.querySelector("#inputFormulario");
    boton.addEventListener("submit", calcularLBS);
    
