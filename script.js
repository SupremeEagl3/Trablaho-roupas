
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site da Kolene carregado com sucesso!');
    
    // Adiciona efeito de hover nos botões de produto (já feito no CSS, mas podemos adicionar JS se necessário)
    const productButtons = document.querySelectorAll('.btn-secondary');
    productButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Simula adicionar ao carrinho com alert
    const addToCartButtons = document.querySelectorAll('.btn-secondary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`${productName} adicionado ao carrinho! (Funcionalidade simulada)`);
        });
    });
    
    // Animação simples para elementos ao rolar a página (opcional)
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        heroSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Quando a página carregar, mostra a hero section
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Menu mobile toggle (se quisermos implementar no futuro)
    // Por enquanto, só um log para mostrar que o JS está funcionando
    console.log('JavaScript inicializado - Pronto para adicionar mais funcionalidades');
});
