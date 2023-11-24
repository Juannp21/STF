document.addEventListener('DOMContentLoaded', function () {
    var contenido = [
        "Nombre de equipo: Recloth",
        "Curso N°: 450948",
        "Materia: Diseño y Desarrollo Web",
        "Docente: Patricia Litovicius"
    ];

    var homeContainer = document.querySelector('.home');

    function mostrarContenido(index) {
        if (index < contenido.length) {
            var parrafo = document.createElement('p');
            homeContainer.appendChild(parrafo);

            
            var palabraActual = contenido[index];

            
            var letraIndex = 0;

            // Función para mostrar letras 
            function mostrarLetras() {
                if (letraIndex < palabraActual.length) {
                    
                    parrafo.textContent += palabraActual.charAt(letraIndex);

                    
                    letraIndex++;

                    
                    setTimeout(mostrarLetras, 50); 
                } else {
                    
                    setTimeout(function () {
                        mostrarContenido(index + 1);
                    }, 50); 
                }
            }

            
            mostrarLetras();
        }
    }

    mostrarContenido(0);
});
document.addEventListener("DOMContentLoaded", function() {
    
    var loaderContainer = document.getElementById('loader-container');
    loaderContainer.style.display = 'none';
});
