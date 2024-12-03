// script.js

// Inicializar EmailJS
(function () {
    emailjs.init("YOUR_USER_ID"); // Substitua pelo seu USER_ID
})();

// Função de envio do formulário
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado de forma tradicional

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const comment = formData.get('comment');

    // Definir os parâmetros para o envio
    const templateParams = {
        name: name,
        email: email,
        message: comment
    };

    // Enviar o e-mail usando EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function (response) {
            document.getElementById('responseMessage').textContent = 'Mensagem enviada com sucesso!';
        }, function (error) {
            document.getElementById('responseMessage').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
        });
});
