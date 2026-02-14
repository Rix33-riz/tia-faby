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

// Botões de ação - Scroll suave para seção de contato
document.querySelectorAll('.btn-primary, .btn-schedule, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Se for um link, deixa o comportamento padrão
        if (this.tagName === 'A') {
            return;
        }
        
        // Para botões, faz scroll para contato
        e.preventDefault();
        const contactSection = document.getElementById('contato');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Links de navegação - Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
