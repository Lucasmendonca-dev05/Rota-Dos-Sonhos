function openTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  const activeTab = document.getElementById(tabName);
  activeTab.classList.add('active');
}

// Exemplo de inicialização (certifique-se de que a "Home" é a aba ativa ao carregar)
document.addEventListener('DOMContentLoaded', () => {
  openTab('home');
});
// Função para alternar entre as abas
function openTab(tabName) {
  // Esconde todas as abas
  var tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(function(tab) {
    tab.style.display = 'none';
  });

  // Mostra a aba selecionada
  var activeTab = document.getElementById(tabName);
  activeTab.style.display = 'block';
}

// Quando a página carrega, abre a primeira aba
document.addEventListener('DOMContentLoaded', function() {
  openTab('home'); // Abre a aba Home por padrão
});

