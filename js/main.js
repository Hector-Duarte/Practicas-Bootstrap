document.addEventListener("DOMContentLoaded", function () {
    // Asegúrate de que Plausible está cargado
    if (typeof window.plausible !== "undefined") {
        // Seleccionar los botones
        const button1 = document.getElementById("boton1");
        const button2 = document.getElementById("boton2");

        // Agregar eventos de clic
        button1.addEventListener("click", function () {
            window.plausible("ButtonClick", { props: { id: "boton1" } });
        });

        button2.addEventListener("click", function () {
            window.plausible("ButtonClick", { props: { id: "boton2" } });
        });
    }
});
