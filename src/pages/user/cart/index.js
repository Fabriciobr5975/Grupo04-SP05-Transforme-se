import Layout from "../../../components/layouts/index.js";
import BaseLayout from "../common/layout/BaseLayout.js";

const template = `
  <div class="layout-user-page">
    <div class="layout-user-page__content">
      <header class="cart-page__header">
        <div class="cart-page__header-text">
          <h1>Meu Carrinho</h1>
          <p>Reveja seus itens, ajuste a quantidade e finalize sua compra.</p>
        </div>

        <div class="cart-page__header-actions">
          <span>3 itens</span>
          <button type="button" class="cart-page__button cart-page__button--ghost">
            Limpar carrinho
          </button>
        </div>
      </header>

      <section class="cart-page__content">
        <div class="cart-page__items">
          <article class="cart-page__item">
            <div class="cart-page__item-image">
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80" alt="Imagem do produto" />
            </div>

            <div class="cart-page__item-body">
              <div class="cart-page__item-heading">
                <h2>Box de Trufas Premium</h2>
                <span>R$ 79,90</span>
              </div>

              <p class="cart-page__item-meta">Doces • 420g</p>

              <div class="cart-page__item-actions">
                <div class="cart-page__quantity">
                  <span>Quantidade:</span>
                  <div class="cart-page__quantity-control">
                    <button type="button" aria-label="Diminuir quantidade">−</button>
                    <span>1</span>
                    <button type="button" aria-label="Aumentar quantidade">+</button>
                  </div>
                </div>

                <button type="button" class="cart-page__button cart-page__button--link">
                  <i class="fa-regular fa-trash-can"></i>
                  Remover
                </button>
              </div>

              <p class="cart-page__item-freight">
                <span>Frete:</span>
                <strong class="cart-page__item-freight--free">Grátis</strong>
              </p>
            </div>
          </article>

          <article class="cart-page__item">
            <div class="cart-page__item-image">
              <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80" alt="Imagem do produto" />
            </div>

            <div class="cart-page__item-body">
              <div class="cart-page__item-heading">
                <h2>Mini Cheesecake de Morango</h2>
                <span>R$ 42,50</span>
              </div>

              <p class="cart-page__item-meta">Sobremesas • 200g</p>

              <div class="cart-page__item-actions">
                <div class="cart-page__quantity">
                  <span>Quantidade:</span>
                  <div class="cart-page__quantity-control">
                    <button type="button" aria-label="Diminuir quantidade">−</button>
                    <span>2</span>
                    <button type="button" aria-label="Aumentar quantidade">+</button>
                  </div>
                </div>

                <button type="button" class="cart-page__button cart-page__button--link">
                  <i class="fa-regular fa-trash-can"></i>
                  Remover
                </button>
              </div>

              <p class="cart-page__item-freight">
                <span>Frete:</span>
                <strong class="cart-page__item-freight--paid">R$ 12,00</strong>
              </p>
            </div>
          </article>
        </div>

        <aside class="cart-page__summary">
          <h3>Resumo da compra</h3>

          <div class="cart-page__summary-row">
            <span>Produtos (3)</span>
            <strong>R$ 122,40</strong>
          </div>

          <div class="cart-page__summary-row">
            <span>Valor do frete</span>
            <strong>R$ 12,00</strong>
          </div>

          <div class="cart-page__summary-total">
            <span>Total</span>
            <strong>R$ 134,40</strong>
          </div>

          <button type="button" class="cart-page__button cart-page__button--primary">
            Finalizar a compra
          </button>
        </aside>
      </section>
    </div>
  </div >
`;

const UserCartPage = {
  template = Layout(template),
  styles: "/src/pages/user/cart/style.css"
};

export default UserCartPage;