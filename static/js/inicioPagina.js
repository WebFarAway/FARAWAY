function BajarContenedor() {
    setTimeout(() => {
        const contacto = document.getElementById("contenedorSeguridad");
        contacto.scrollIntoView({behavior: "smooth"});
    });
}

document.addEventListener('DOMContentLoaded', () => {
    guardarImagenesComoCookies();
});
function guardarImagenesComoCookies() {
    const imagenes = document.querySelectorAll('.Contenedor_collage img');
    let imagenesGuardadas = 0;
    imagenes.forEach((imagen, index) => {
        imagen.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imagen.width;
            canvas.height = imagen.height;
            ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
            const imageBase64 = canvas.toDataURL();
            document.cookie = `imagen${index + 1}=${imageBase64}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
            imagenesGuardadas++;
            if (imagenesGuardadas === imagenes.length) {
                console.log('Imágenes guardadas como cookies automáticamente.');
            }
        };
    });
}
