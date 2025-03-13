function verificaAcesso() {
  if (localStorage.getItem('acessou') !== 'sim') {
      window.location.href = 'login.html';
  }
}

// 🌧️ Criando a chuva de corações 3D
function chuvaDeCoracoes() {
  setInterval(() => {
      let heart = document.createElement('div');
      heart.classList.add('heart-3d');
      heart.innerHTML = '❤️';

      // Define posição aleatória no topo da tela
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = '-50px';

      // Define tamanho aleatório para dar efeito 3D
      let size = Math.random() * 30 + 20;
      heart.style.fontSize = `${size}px`;

      // Define velocidade de queda aleatória
      let duration = Math.random() * 5 + 3;
      heart.style.animation = `fall ${duration}s linear forwards`;

      document.body.appendChild(heart);

      // Remove o coração após a animação terminar
      setTimeout(() => heart.remove(), duration * 1000);
  }, 500); // Ajustei para criar um coração a cada 500ms
}

// ✅ Certificando-se de que ambas as funções sejam chamadas corretamente
document.addEventListener("DOMContentLoaded", function () {
  verificaAcesso();
  chuvaDeCoracoes();
});
