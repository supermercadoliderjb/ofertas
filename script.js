let progressBar = document.querySelector('.progress');
let totalTime = 5000; // 5 segundos
let intervalTime = 50; // Atualiza a cada 50ms
let increment = intervalTime / totalTime * 100;
let width = 0;

let progressInterval = setInterval(() => {
    width += increment;
    progressBar.style.width = width + '%';
    if (width >= 100) {
        clearInterval(progressInterval);
    }
}, intervalTime);

// Redireciona para o WhatsApp após 5 segundos
setTimeout(function() {
    window.location.href = "https://chat.whatsapp.com/AtgD0NW61ls2luONB3WoOI";
}, totalTime);
