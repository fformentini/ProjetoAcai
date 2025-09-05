function placeOrder() {
      const product = document.getElementById('product').value;
      const size = document.getElementById('size').value;
      const filling = document.getElementById('filling').value;

      // Complementos selecionados
      const selectedComplements = Array.from(document.querySelectorAll('.complement:checked'))
        .map(input => input.value);

      // Coberturas selecionadas
      const selectedToppings = Array.from(document.querySelectorAll('.topping:checked'))
        .map(input => input.value);

      const complementText = selectedComplements.join(', ') || 'Nenhum complemento';
      const toppingText = selectedToppings.join(', ') || 'Nenhuma cobertura';

      //  mensagem do WhatsApp
      const whatsappMessage = `Olá, gostaria de pedir um Açaí \nSabor: ${product}.\nTamanho: ${size}.\nRecheio: ${filling}\nComplementos: ${complementText}\nCobertura: ${toppingText}`;
      const whatsappLink = `https://wa.me/${TELEFONE}?text=${encodeURIComponent(whatsappMessage)}`;

      // Abre o WhatsApp com a mensagem
      window.open(whatsappLink, '_blank');
    }