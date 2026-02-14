document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contato-form');
  const msgSucesso = document.getElementById('sucesso-msg');

  if (form && msgSucesso) {
    form.addEventListener('submit', function() {
      // Mostra mensagem de sucesso na mesma página
      msgSucesso.style.display = 'block';
      form.reset(); // limpa campos do formulário
    });
  }
});
