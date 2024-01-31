document.addEventListener('DOMContentLoaded', function () {
    const contenidoSections = document.querySelectorAll('.contenido');
    const buttons = document.querySelectorAll('.buttons-nosotros li a');
    const botonesAntSigs = document.querySelectorAll('.botones-ant-sig button');

    // Mostrar por defecto el contenido y botón activo
    contenidoSections[0].classList.add('active');
    buttons[0].parentElement.classList.add('active');

    // Función para mostrar la sección correspondiente al botón clicado
    function mostrarContenido(targetIndex) {
        // Oculta todos los contenidos y desactiva todos los botones
        contenidoSections.forEach(contenido => contenido.classList.remove('active'));
        buttons.forEach(boton => boton.parentElement.classList.remove('active'));

        // Muestra el contenido y activa el botón correspondiente al botón clicado
        contenidoSections[targetIndex].classList.add('active');
        buttons[targetIndex].parentElement.classList.add('active');
    }

    // Añadir oyentes de clic a los botones "Nosotros"
    buttons.forEach((button, index) => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetIndex = Array.from(contenidoSections).findIndex(section => section.id === targetId);
            mostrarContenido(targetIndex);
        });
    });

    // Añadir oyentes de clic a los botones "anterior" y "siguiente"
    botonesAntSigs.forEach(boton => {
        boton.addEventListener('click', function () {
            const currentSection = document.querySelector('.contenido.active');
            const indiceActual = Array.from(contenidoSections).indexOf(currentSection);
            let nuevoIndice;

            if (this.id.includes('anteriorBtn')) {
                nuevoIndice = (indiceActual - 1 + contenidoSections.length) % contenidoSections.length;
            } else if (this.id.includes('siguienteBtn')) {
                nuevoIndice = (indiceActual + 1) % contenidoSections.length;
            }

            mostrarContenido(nuevoIndice);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las galerías en la página
    var galerias = document.querySelectorAll(".galeria-nosotros");

    galerias.forEach(function(galeria) {
        var galeriaLista = galeria.querySelector(".galeria-lista");
        var startX;
        var isMouseDown = false;

        galeriaLista.addEventListener("mousedown", function(e) {
            isMouseDown = true;
            startX = e.pageX - galeriaLista.offsetLeft;
        });

        document.addEventListener("mouseup", function() {
            isMouseDown = false;
        });

        document.addEventListener("mousemove", function(e) {
            if (!isMouseDown) return;

            var x = e.pageX - startX;

            galeriaLista.style.transform = "translateX(" + x + "px)";
        });

        // Deshabilitar el comportamiento predeterminado de la selección de texto durante el deslizamiento
        galeriaLista.addEventListener("selectstart", function(e) {
            e.preventDefault();
            return false;
        });
    });
});
