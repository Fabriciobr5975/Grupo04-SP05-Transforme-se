const template = `
  <section class="confirm-checkout-page">
    <div class="confirm-checkout__main">  
      <div class="confirm-checkout__header">
        <img src="/src/assets/images/image-checkout.png" alt="Logo" class="confirm-checkout__image-logo" />
        <h1 class="confirm-checkout__title">Pedido Realizado com Sucesso</h1>
        <p class="confirm-checkout__title-complement">Pedido N<sup>º</sup><strong>#10001</strong></p>
      </div>
      <div class="confirm-checkout__content">
        <p>
          Muito obrigado por escolher os nossos produtos. Seu pedido foi recebido com sucesso e já está aguardado aprovação para entrar na fila de produção. Você poderá acompanhar seu pedido na Aba <strong>Pedidos</strong>, dentro de seu perfil, além disso, você receberá e-mails sobre o status do seu pedido.
        </p>
      </div>
      <div class="confirm-checkout__buttons">
        <a href="/profile/orders" class="confirm-checkout__button confirm-checkout__button--green" data-route> 
          <i class="fa-solid fa-bag-shopping"></i>
          Ver meus pedidos
        </a>
        <a href="/" class="confirm-checkout__button confirm-checkout__button--white" data-route> 
          <i class="fa-solid fa-arrow-left"></i>
          Voltar para a loja
        </a>
      </div>
    </div>
  </section>
`;

const ConfirmMessagePage = {
  template: template,
  styles: "/src/pages/user/checkout/confirm-message/style.css"
};

export default ConfirmMessagePage;