import BaseLayout from "../../../layouts/index.js";

const template = `
  <div class="layout-user-page">
    <div class="user-page__topbar">
      <button type="button" class="user-page__back-button">
        <i class="fa-solid fa-arrow-left user-page-icon"></i>
        Voltar
      </button>
    </div>

    <div class="layout-user-page__content">
      <section class="orders-page">
        <header class="orders-page__header">
          <div class="orders-page__header-text">
            <h1>Meus Pedidos</h1>
            <p>Reveja suas compras e acompanhe as datas de entrega.</p>
          </div>

          <div class="orders-page__header-meta">
            <span>4 itens • 2 pedidos</span>
          </div>
        </header>

        <section class="orders-page__content">
          <article class="orders-page__card">
            <div class="orders-page__card-header">
              <div>
                <h3>Pedido #1025 • Realizado em 15/07/2026</h3>
                <p class="orders-page__card-status orders-page__card-status--delivered">
                  Entregue: 18/07/2026
                </p>
              </div>

              <div class="orders-page__card-actions">
                <span class="orders-page__badge orders-page__badge--green">ENTREGUE</span>
              </div>
            </div>

            <div class="orders-page__items">
              <div class="orders-page__item">
                <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80" alt="Produto do pedido" />

                <div class="orders-page__item-body">
                  <div class="orders-page__item-heading">
                    <h4>Box de Trufas Premium</h4>
                    <span>R$ 79,90</span>
                  </div>

                  <p class="orders-page__item-meta">Doces • 420g</p>
                  <p class="orders-page__item-quantity">Quantidade: 1</p>

                  <div class="orders-page__item-buttons">
                    <button type="button" class="orders-page__button orders-page__button--secondary">
                      Ver detalhes do produto
                    </button>
                    <button type="button" class="orders-page__button orders-page__button--ghost">
                      Comprar novamente
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="orders-page__footer">
              <div>
                <p class="orders-page__footer-label">Total do Pedido</p>
                <p class="orders-page__footer-value">1 item • Frete <span class="orders-page__freight orders-page__freight--free">Grátis</span></p>
              </div>
              <span class="orders-page__total">R$ 79,90</span>
            </div>
          </article>

          <article class="orders-page__card">
            <div class="orders-page__card-header">
              <div>
                <h3>Pedido #1024 • Realizado em 11/07/2026</h3>
                <p class="orders-page__card-status orders-page__card-status--pending">
                  Previsão de entrega: 16/07/2026
                </p>
              </div>

              <div class="orders-page__card-actions">
                <span class="orders-page__badge orders-page__badge--orange">EM TRANSITO</span>
              </div>
            </div>

            <div class="orders-page__items">
              <div class="orders-page__item">
                <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80" alt="Produto do pedido" />

                <div class="orders-page__item-body">
                  <div class="orders-page__item-heading">
                    <h4>Mini Cheesecake de Morango</h4>
                    <span>R$ 42,50</span>
                  </div>

                  <p class="orders-page__item-meta">Sobremesas • 200g</p>
                  <p class="orders-page__item-quantity">Quantidade: 2</p>

                  <div class="orders-page__item-buttons">
                    <button type="button" class="orders-page__button orders-page__button--secondary">
                      Ver detalhes do produto
                    </button>
                    <button type="button" class="orders-page__button orders-page__button--ghost">
                      Comprar novamente
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="orders-page__footer">
              <div>
                <p class="orders-page__footer-label">Total do Pedido</p>
                <p class="orders-page__footer-value">2 itens • Frete <span class="orders-page__freight orders-page__freight--paid">R$ 12,00</span></p>
              </div>
              <span class="orders-page__total">R$ 97,00</span>
            </div>
          </article>
        </section>
      </section>
    </div>
  </div>
`;

const UserOrderPage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/orders/style.css"
};

export default UserOrderPage;
