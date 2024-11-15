document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const to = document.getElementById('to').value;
        const cc = document.getElementById('cc').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const jsonData = JSON.stringify(formData);

        // Enviar los datos al backend
        fetch('http://localhost:8080/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            alert('Correo enviado con éxito!');
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error al enviar el correo');
        });

       
    });
});