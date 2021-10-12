function calcularLBS(elEvento){
    elEvento.preventDefault();

    var kilogramo = 0.453592
    var libras = document.querySelector("#inputLibras").value;
    var resultado = document.querySelector("#resultado");
    var respuesta = (libras*kilogramo)

    resultado.textContent = respuesta.toFixed(2)
}
    var boton = document.querySelector("#inputFormulario");
    boton.addEventListener("submit", calcularLBS);
    
