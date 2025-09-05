document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.querySelector("#order-button"); 
    const closedMessage = document.querySelector("#closed-message"); 
    const whatsAppLink = "https://wa.me/5551999999999"; // Link do WhatsApp

    // Função para verificar se está dentro do horário de funcionamento
    function isWithinBusinessHours() {
      const now = new Date();
      const currentHour = now.getHours();

      // Horário de funcionamento
      return currentHour >= 12 && currentHour < 22;
    }

    // Atualiza o botão de acordo com o horário de funcionamento
    function updateButtonState() {
      if (isWithinBusinessHours()) {
        orderButton.href = whatsAppLink; // Adiciona o link do WhatsApp
        orderButton.style.pointerEvents = "auto"; // Permite o clique
        orderButton.style.cursor = "pointer"; 
        closedMessage.style.display = "none"; 
      } else {
        orderButton.href = "#"; // Remove o link do WhatsApp
        orderButton.style.pointerEvents = "none"; // Impede o clique
        orderButton.style.cursor = "not-allowed"; 
        closedMessage.style.display = "block"; 
      }
    }

    // Inicializa o estado do botão
    updateButtonState();

    // Atualiza o botão em intervalos regulares 
    setInterval(updateButtonState, 60000); // Verifica a cada 1 minuto
  });