//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){
    link.addEventListener(`click`,function(eval){
        eval.preventDefault();

        let content = document.querySelector('.content');
        
        //Quitarle las clases de animaciòn que ya tiene
        content.classList.remove('swing');
        content.classList.remove('animated');

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add('fadeOutUp');
        content.classList.add('animated');

        setTimeout(function(){
            location.href = "/";
        },600);
        
        return false
    })
})
