document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".contenido");
    const buttonsAntSig = document.querySelectorAll(".botones-ant-sig button");
    const buttonsUnidades = document.querySelectorAll(".buttons-unidades li a");

    buttonsAntSig.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const currentSection = document.querySelector(".contenido.active");
            let index = Array.from(sections).indexOf(currentSection);

            if (button.id.includes("anteriorBtn")) {
                index = (index - 1 + sections.length) % sections.length;
            } else if (button.id.includes("siguienteBtn")) {
                index = (index + 1) % sections.length;
            }

            currentSection.classList.remove("active");
            sections[index].classList.add("active");

            // Actualizar el botón activo en buttons-unidades
            updateActiveButton(index);
        });
    });

    buttonsUnidades.forEach((button, i) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = button.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach((section) => {
                section.classList.remove("active");
            });

            targetSection.classList.add("active");

            // Actualizar el botón activo en buttons-unidades
            updateActiveButton(i);
        });
    });

    function updateActiveButton(index) {
        buttonsUnidades.forEach((button, i) => {
            if (i === index) {
                button.parentElement.classList.add("active");
            } else {
                button.parentElement.classList.remove("active");
            }
        });
    }
});
