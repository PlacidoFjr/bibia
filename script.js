const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

// Movimento do botão "Não"
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight - 20);

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Redirecionamento do botão "Sim"
yesButton.addEventListener('click', (e) => {
  e.target.disabled = true; // Evita múltiplos cliques
  e.target.textContent = 'Carregando...'; // Feedback ao usuário
  alert('Prepare-se para uma música especial! 💖');
  window.location.href = 'https://www.youtube.com/watch?v=Yze41XDW8x0';
});

// Reajuste do botão "Não" ao redimensionar a janela
window.addEventListener('resize', () => {
  noButton.style.left = '0px';
  noButton.style.top = '0px';
});
