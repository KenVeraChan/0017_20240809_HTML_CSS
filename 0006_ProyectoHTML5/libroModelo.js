$(document).ready(function() 
    {
        var paginaMovimiento=0; //Variable para controlar la página en la que estamos
        let posicionX=0;
        let posicionY=0;
        let guardaPagina=0;
        for(var index=0;index<$('.pagina').length;index++){
            $(".pagina").each(function(index) {    //Coloca las paginas en orden de colocación de etiqueta HTML
                $(this).css("z-index", $('.pagina').length-index);
            });
        }
        $('.pagina').click(function(event){
            //Primero detecta la posición del raton dentro del elemento a fin de poder saber si es pagina siguiente o anterior
            posicionX = event.pageX;
            posicionY = event.pageY;
            //alert("Posición X dentro del libro: " + posicionX + " Posición Y dentro del libro: " + posicionY);
            if(posicionX >= (($("#libroAbierto").width()/2)+(parseInt($("#libroAbierto").css("margin-left")))) && posicionX<=(($("#libroAbierto").width())+(parseInt($("#libroAbierto").css("margin-left")))))
            {  
            // Si la posición X del clic es mayor que la mitad del libro (clic en la izquierda) y menor que el ancho total + el margin left del #libroAbierto
            //Si se posiciona en otra zona en vertical, trabajar con la variable Y
            //Pasa la pagina siguiente
            $(this).toggleClass('rotado');
            $(this).toggleClass('decolorado');
            $(this).toggleClass('invisible');
            $('.abrirLibro:eq('+paginaMovimiento+')').toggleClass('desaparece');
                guardaPagina=paginaMovimiento;
            paginaMovimiento++;   
            $(this).css("z-index", $('.pagina').length+paginaMovimiento); //Ajusta el z-index para que las paginas ya pasadas queden debajo
            }
            else if(posicionX < (($("#libroAbierto").width()/2)+(parseInt($("#libroAbierto").css("margin-left")))) && posicionX>=0)
            {  
            // Si la posición X del clic es menor que la mitad del libro (clic en la izquierda) pero mayor que cero + el margin left del #libroAbierto
            //Si se posiciona en otra zona en vertical, trabajar con la variable Y
            //Pasa la pagina anterior
            $(this).toggleClass('rotado');
            $(this).toggleClass('decolorado');
            $(this).toggleClass('invisible');
            paginaMovimiento--;
                if(guardaPagina===paginaMovimiento)
                {
                    $('.abrirLibro:eq('+paginaMovimiento+')').toggleClass('aparece');
                }
            $(this).css("z-index", $('.pagina').length-paginaMovimiento); //Ajusta el z-index para que las paginas ya pasadas queden debajo
            }
            //alert("Página número: " + paginaMovimiento + "Pagina guardada: " + guardaPagina );
        });
    });
