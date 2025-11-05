document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener elementos
    const button = document.getElementById('toggle-button');
    // **IMPORTANTE**: querySelectorAll selecciona TODAS las imágenes con esta clase
    const images = document.querySelectorAll('.carousel-image');
    
    // Si no encontramos imágenes o el botón, detenemos el script para evitar errores
    if (!button || images.length === 0) {
        console.error("Error: No se encontraron el botón o las imágenes del carrusel.");
        return; 
    }

    // Inicializar el texto del botón (se asume que la 1ra está activa)
    button.textContent = `Siguiente Imagen 🖼️`;


    button.addEventListener('click', () => {
        // 2. Encontrar la imagen actualmente visible (la que tiene 'active')
        // Usamos querySelector (singular) para obtener solo el primer elemento con ambas clases
        const currentImage = document.querySelector('.carousel-image.active');
        
        // 3. Si no hay una imagen activa (error), salimos de la función
        if (!currentImage) {
            console.error("No se encontró ninguna imagen activa. ¿La primera imagen tiene la clase 'active' en HTML?");
            return;
        }

        // 4. Determinar el índice de la imagen actual
        let currentIndex = -1;
        images.forEach((img, index) => {
            if (img === currentImage) {
                currentIndex = index;
            }
        });

        // 5. Calcular el índice de la siguiente imagen, volviendo a 0 al final
        // images.length es la cantidad total de imágenes.
        const nextIndex = (currentIndex + 1) % images.length;

        // 6. Quitar la clase 'active' de la imagen actual (la oculta)
        currentImage.classList.remove('active');
        
        // 7. Añadir la clase 'active' a la siguiente imagen (la muestra)
        images[nextIndex].classList.add('active');

        // 8. Actualizar el texto del botón
        if (nextIndex === 0) {
             button.textContent = 'Empezar de Nuevo 🔄';
        } else {
             button.textContent = `Siguiente imagen🖼️`;
        }
    });
});