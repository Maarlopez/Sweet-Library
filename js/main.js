let ubicacionPrincipal = window.pageYOffset; /*me dice en qué parte de la página estoy*/
AOS.init();

window.addEventListener("scroll", function () {
    let desplazamientoActual = this.window.pageYOffset; //100
    if (ubicacionPrincipal >= desplazamientoActual) { // 0 > 100? 
        document.getElementsByTagName("nav")[0].style.top = "0px"
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; //100
})

// Menú

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }
    else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=true;
    }
    enlacesHeader.classList.toggle("menudos")
})

