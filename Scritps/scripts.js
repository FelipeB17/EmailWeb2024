document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const to = document.getElementById('to').value;
        const cc = document.getElementById('cc').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Aquí iría la lógica para enviar el correo
        console.log('Correo enviado:', { to, cc, subject, message });

        // Ejemplo de cómo podrías mostrar un mensaje de éxito
        alert('Correo enviado con éxito!');

        // Opcionalmente, limpiar el formulario
        form.reset();
    });
});