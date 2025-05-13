// Espera a que el contenido de la página cargue
document.addEventListener("DOMContentLoaded", function () {
    // Cambiar el color del título
    const h1 = document.querySelector("h1");
    h1.style.color = "blue";

    // Agregar un mensaje al hacer clic en cualquier párrafo
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach((p, index) => {
        p.addEventListener("click", () => {
            alert(`Has hecho clic en el párrafo ${index + 1}: "${p.textContent}"`);
        });
    });

    // Crear un botón dinámicamente para cambiar el fondo
    const boton = document.createElement("button");
    boton.textContent = "Cambiar fondo";
    boton.onclick = () => {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
    };
    document.body.appendChild(boton);
});
