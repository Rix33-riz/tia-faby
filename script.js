// Formulário WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Olá! Meu nome é ${name}. Telefone: ${phone}. Mensagem: ${message}`;
    const whatsappUrl = `https://wa.me/5518997581200?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    this.reset();
});

// Botões de ação
document.querySelectorAll('.btn-primary, .btn-schedule').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = this.getAttribute('href') || '#contato';
        if (target.startsWith('#')) {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
