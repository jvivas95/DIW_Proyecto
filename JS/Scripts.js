function modalBienvenida(){
    document.getElementById("ModalBienvenida").style.display="block";
    document.getElementById("TituloHeroImage").style.animationPlayState = "paused";
    document.getElementById("SubtituloHeroImage").style.animationPlayState = "paused";
    document.documentElement.style.overflow="hidden";
}

function cerrarMBB(){
    document.getElementById("ModalBienvenida").style.display="none";
    document.getElementById("TituloHeroImage").style.animationPlayState = "running";
    document.getElementById("SubtituloHeroImage").style.animationPlayState = "running";
    document.documentElement.style.overflow="auto";
}

//SLIDE SHOW AUTOMATICO
var bgCounter=0;
function heroSlideShow(){

    var listaImgBg=[
        "url('Media/HeroImage.jpg')",
        "url('Media/HeroImage_2.jpg')",
        "url('Media/HeroImage_3.jpg')",
        "url('Media/HeroImage_4.jpg')"
    ];

    bgCounter++;

    if (bgCounter==listaImgBg.length){
        bgCounter=0;
    }
    
    document.getElementById("HeroImage").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),"+listaImgBg[bgCounter];
    
    
}


function ModalReserva(){
    document.getElementById("ModalDeReserva").style.display="block";
    document.documentElement.style.overflow="hidden";

    var nombre = document.getElementById("FormNombre").value;
    var telefono = document.getElementById("FormTelefono").value;
    var mail = document.getElementById("FormEmail").value;
    var texto = document.getElementById("FormMensaje").value;

    var mensaje;

    (function FormCheck(){
        if(!document.getElementById("FormNombre").checkValidity()){
            mensaje = "Debes introducir tu nombre.";
            document.getElementById("MensajeReserva").innerHTML=mensaje;
        }
            else if(!document.getElementById("FormTelefono").checkValidity()){
                mensaje = "Debes introducir un teléfono de contacto.";
                document.getElementById("MensajeReserva").innerHTML=mensaje;
            }
                else if(!document.getElementById("FormEmail").checkValidity()){
                    mensaje = "Debes introducir un eMail.";
                    document.getElementById("MensajeReserva").innerHTML=mensaje;
                }
                else{
                    mensaje = nombre+", hemos recibido tus datos! Tan pronto nos sea posible nos pondremos en contacto al teléfono "+telefono+" o al mail "+mail+".";
                    document.getElementById("MensajeReserva").innerHTML=mensaje;
                }
    })();
}

function CerrarMBR(){
    document.getElementById("ModalDeReserva").style.display="none";
    document.documentElement.style.overflow="auto";

    document.getElementById("FormNombre").value = "";
    document.getElementById("FormTelefono").value = "";
    document.getElementById("FormEmail").value = "";
    document.getElementById("FormMensaje").value = "";

}

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {EsconderMostrarNavbar()};

function EsconderMostrarNavbar() {
    var PosActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll > PosActualScroll) {
        // Si el scroll es hacia arriba
        document.getElementById("NavBarP").style.top = "0";

        if (PosActualScroll > 400) {
            // Si ya ha pasado la posición de 400px al desplazarse hacia arriba
            document.getElementById("NavBarP").style.height = "80px";
            document.getElementById("NavBarP").style.fontSize = "28px";
            document.getElementById("NavBarP").style.paddingTop = "13px";
            // Hacer que desaparezcan los iconos y el teléfono
            document.getElementById("telefono").style.display = "none";
            document.getElementById("ImgLogo").style.display = "none";
            document.getElementById("rrss").style.display = "none";
            //SUBNAVBAR
            document.getElementById("SubNavbar").style.paddingLeft = "18px";
            document.getElementById("SubNavbar").style.fontSize = "20px";


        } else {
            // Si está por debajo de la posición de 400px al desplazarse hacia arriba
            document.getElementById("NavBarP").style.height = "285px";
            document.getElementById("NavBarP").style.fontSize = "36px";
            // Restaurar la visibilidad de la parte
            document.getElementById("telefono").style.display = "flex";
            document.getElementById("ImgLogo").style.display = "flex";
            document.getElementById("rrss").style.display = "flex";
            //SUBNAVBAR
            document.getElementById("SubNavbar").style.paddingLeft = "0px";
            document.getElementById("SubNavbar").style.fontSize = "36px";
        }
    } else {
        // Si el scroll es hacia abajo
        if (PosActualScroll < 400) {
            // Si está por debajo de la posición de 200px al desplazarse hacia abajo
            document.getElementById("NavBarP").style.height = "80px";
            document.getElementById("NavBarP").style.fontSize = "28px";
            document.getElementById("NavBarP").style.paddingTop = "13px";
            // Hacer que desaparezca la parte
            document.getElementById("telefono").style.display = "none";
            document.getElementById("ImgLogo").style.display = "none";
            document.getElementById("rrss").style.display = "none";
            //SUBNAVBAR
            document.getElementById("SubNavbar").style.paddingLeft = "18px";
            document.getElementById("SubNavbar").style.fontSize = "20px";
        } else {
            // Si ya ha pasado la posición de 200px al desplazarse hacia abajo
            document.getElementById("NavBarP").style.top = "-285px";
            //SUBNAVBAR
            document.getElementById("SubNavbar").style.paddingLeft = "0px";
            document.getElementById("SubNavbar").style.fontSize = "36px";
        }
    }

    posPreviaScroll = PosActualScroll;
}

/* FUNCIONES PARA GALERIA IMAGENES */

/* function ModalLightBoxG(){
    document.getElementById("ModalLightBoxG").style.display="block";
    document.documentElement.style.overflow="hidden";

    var ListaImg = document.getElementsByClassName("ImgServ");

    for (var i=0; i<ListaImg.length;i++){
        ListaRutaImg.push(ListaImg[i].src);
    }
    
    document.getElementById("ImageToShow").innerHTML = "<img class='ImageLightBox' src='Media/OK_ConsultaGeneral.jpg'>";

} */


var ListaRutaImg = [];
var numeroImg=0;


function readyLightbox(){

    var ListaImg = document.getElementsByClassName("ImgServ");

    for (var i=0; i<ListaImg.length;i++){
        ListaRutaImg.push(ListaImg[i].src);
    }

    for (var i=0; i<ListaImg.length; i++){
        ListaImg[i].addEventListener('click', OpenLigthbox);
    }

    function OpenLigthbox(){
        var rutaImgClicada = event.currentTarget.src;
        numeroImg = ListaRutaImg.indexOf(rutaImgClicada);
        //console.log(temp);

        document.getElementById("ImageToShow").innerHTML = "<img class='ImageLightBox' src=" + ListaRutaImg[numeroImg] + ">";

        document.getElementById("ModalLightBoxG").style.display="block";
        document.documentElement.style.overflow="hidden";

        closeLightbox();
    }

    function closeLightbox(){
        window.addEventListener("click", function(event){
            if (!event.target.matches(".ImageLightBox") && !event.target.matches(".ImgServ") && !event.target.matches(".LbButtons") && !event.target.matches(".fa-solid")){
                console.log("Se puede cerrar");
                document.getElementById("ModalLightBoxG").style.display="none";
                document.documentElement.style.overflow="auto";
            }
        })
    }

}

function nextImg(){
    numeroImg ++;

    if(numeroImg == ListaRutaImg.length){
        numeroImg=0;
    }

    document.getElementById("ImageToShow").innerHTML = "<img class='ImageLightBox' src=" + ListaRutaImg[numeroImg] + ">";

    //console.log(numeroImg);
}

function prevImg(){
    numeroImg --;

    if(numeroImg <0){
        numeroImg=ListaRutaImg.length-1;
    }

    document.getElementById("ImageToShow").innerHTML = "<img class='ImageLightBox' src=" + ListaRutaImg[numeroImg] + ">";

    //console.log(numeroImg);
}

/* SCRIPT PARA LAS PESTAÑAS */
function marcarPestana(contenedorAMostrar, tabClicada){
    var listaConPestanas = document.getElementsByClassName("ContenedorPestana");

    for(var i=0; i<listaConPestanas.length; i++){
        listaConPestanas[i].style.display="none";
    }

    document.getElementById(contenedorAMostrar).style.display="flex";

    var tabLinks= document.getElementsByClassName("EtiquetaPestanas");
    for (var i=0; i<tabLinks.length; i++){
        tabLinks[i].classList.remove("PestanaActiva");
    }

    document.getElementById(tabClicada).classList.add("PestanaActiva");


    var Servicio= document.getElementsByClassName("servicios");
    for (var i=0; i<Servicio.length; i++){
        Servicio[i].classList.remove("servicioAnimado");
    }

    var serviciosC = document.getElementById(contenedorAMostrar).children;

    for(var i=0; i<serviciosC.length; i++){
        serviciosC[i].classList.add("servicioAnimado");
    }

}