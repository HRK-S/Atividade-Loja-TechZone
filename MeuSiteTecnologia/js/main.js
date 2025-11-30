const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

if (btnMobile) {
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
}

const elementoSaudacao = document.getElementById('mensagem-boas-vindas');
if (elementoSaudacao) {
    const hora = new Date().getHours();
    let texto = "Bem-vindo à TechZone!";
    if (hora < 12) texto = "Bom dia! Confira as novidades de tecnologia.";
    else if (hora < 18) texto = "Boa tarde! Tecnologia para o seu dia.";
    else texto = "Boa noite! Ofertas noturnas na TechZone.";
    elementoSaudacao.textContent = texto;
}

const dadosProdutos = [
    { id: 1, nome: "Smartphone 5G", desc: "Conexão ultra rápida, câmeras avançadas e conectividade 5G." },
    { id: 2, nome: "Ultrabook Pro", desc: "Leveza e potência para trabalho e mobilidade." },
    { id: 3, nome: "Fone Noise Cancelling", desc: "Cancelamento de ruído para concentração e chamadas claras." },
    { id: 4, nome: "Roteador Mesh WiFi 6", desc: "Kit com múltiplas unidades para cobertura ampla e conexão estável." },
    { id: 5, nome: "Webcam 4K", desc: "Vídeo em Ultra HD para streaming e videoconferências." },
    { id: 6, nome: "Cadeira Gamer", desc: "Design ergonômico com ajuste de altura e suporte lombar." }
];

const botoesDetalhes = document.querySelectorAll('.btn-detalhes');
const divDetalhes = document.getElementById('detalhesProduto');

botoesDetalhes.forEach(botao => {
    botao.addEventListener('click', () => {
        const id = parseInt(botao.getAttribute('data-id'));
        const produto = dadosProdutos.find(p => p.id === id);
        if (produto && divDetalhes) {
            divDetalhes.innerHTML = `
                <h4>${produto.nome}</h4>
                <p>${produto.desc}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="this.parentElement.classList.add('d-none')">Fechar</button>
            `;
            divDetalhes.classList.remove('d-none');
        }
    });
});

const formContato = document.getElementById('formContato');
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const mensagemRetorno = document.getElementById('mensagemRetorno');
        if (mensagemRetorno) {
            mensagemRetorno.innerHTML = `
                <div class="alert alert-success">Obrigado, ${nome}! Mensagem recebida.</div>
            `;
        } else {
            alert(`Obrigado, ${nome}! Mensagem recebida.`);
        }
        formContato.reset();
    });
}