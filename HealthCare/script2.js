function calcularLBS(elEvento){
    elEvento.preventDefault();

    var respd = 0

    if(document.getElementById('cbox1').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox2').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox3').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox4').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox5').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox6').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox7').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox8').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox9').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox10').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox11').checked){
        respd=respd+1;      
    }

    var positivo = 6;
    var negativo = 5;

        if(respd < positivo){
        window.location.href = "ResultadosTestN.html";     
    }else{
        window.location.href = "ResultadosTest.html";     
    }

    resultado.textContent = respuesta.toFixed(2)
}


    var boton = document.querySelector("#inputFormulario");
    boton.addEventListener("submit", calcularLBS);
    

