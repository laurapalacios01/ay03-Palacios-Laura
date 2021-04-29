$(document).ready(function(){
    var boton1= $("#boton1");
    var boton0=$("#boton0");
    var boton2=$("#boton2");
    var fotoperro=$("#foto");
    var texto=$("#lista");
    var titulo=$("#bajada");

    boton0.click(function(){
        fotoperro.hide();
    })

    boton1.click(function(){
        fotoperro.show();
    })  

    boton2.click(function(){
        titulo.text("Necesita ayuda!");   
    })

    texto.mouseenter(function(){
        $(this).css("background-color","lightgreen");
    })
})