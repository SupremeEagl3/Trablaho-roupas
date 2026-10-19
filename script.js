let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nomeProduto, preco) {
    carrinho.push({ nome: nomeProduto, preco: preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContador();
    alert(nomeProduto + " foi adicionado ao seu carrinho com sucesso!");
}

function atualizarContador() {
    const contadores = document.querySelectorAll('.cart-counter');
    for (let contador of contadores) {
        contador.innerText = carrinho.length; 
    }
}

const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function(event) {
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;
        const nivel = document.getElementById('nivel').value;
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('assunto', assunto);
        localStorage.setItem('mensagem', mensagem);
        localStorage.setItem('nivel', nivel);
        
        if (nome !== "" && email !== "") {
            document.getElementById('area-formulario').style.display = 'none';
            const feedback = document.getElementById('mensagem-feedback');
            
            feedback.innerHTML = `
                <div style="font-size: 60px; color: #10b981; margin-bottom: 20px;">✓</div>
                <h3 style="font-size: 1.5rem; color: #111827; margin-bottom: 10px;">Obrigado, ${nome}!</h3>
                <p style="color: #4b5563; font-size: 1.1rem;">
                    Sua mensagem foi enviada com sucesso. Retornaremos no e-mail: <strong>${email}</strong>.
                </p>
                <button onclick="location.reload()" class="btn-primary" style="margin-top: 20px;">Nova mensagem</button>
            `;
            feedback.style.display = 'block';
        }
    });
}

function renderizarCarrinho() {
    const containerItens = document.getElementById('itens-carrinho');
    const elementoTotal = document.getElementById('total-carrinho');
    
    if (!containerItens) return;
    containerItens.innerHTML = '';
    let total = 0;
    if (carrinho.length === 0) {
        containerItens.innerHTML = '<p style="text-align: center; color: #4b5563;">Seu carrinho está vazio.</p>';
        elementoTotal.innerText = '0.00';
        return;
    }
    carrinho.forEach(function(item, index) {
        total += item.preco; 
        containerItens.innerHTML += `
            <div class="carrinho-item">
                <span style="font-weight: bold;">${item.nome}</span>
                <span>R$ ${item.preco.toFixed(2)}</span>
                <button onclick="removerDoCarrinho(${index})" class="btn-remover">X</button>
            </div>
        `;
    });

    elementoTotal.innerText = total.toFixed(2);
}
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove 1 item na posição do índice
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Salva no LocalStorage
    atualizarContador();
    renderizarCarrinho(); // Redesenha a tela
}
function limparCarrinho() {
    carrinho = [];
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContador();
    renderizarCarrinho();
}
window.onload = function() {
    atualizarContador();
    renderizarCarrinho();
};
