import BaseLayout from "../../../layouts/index.js";
import { useOrders } from "./OrderService.js";

const { orderCount, productsCount, userOrders } = useOrders();

const template = `
  <div class="layout-user-page">
    <div class="user-page__topbar">
      <button type="button" class="user-page__back-button" onclick="window.history.back()">
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
            <span>${productsCount} itens • ${orderCount} pedidos</span>
          </div>
        </header>

        <section class="orders-page__content">
          ${Array.isArray(userOrders) && userOrders.length > 0 ?
            userOrders.map(order => `
              <article class="orders-page__card">
                <div class="orders-page__card-header">
                  <div>
                    <h3>Pedido #${order.orderId} • Realizado em ${order.orderData}</h3>
                    <p class="orders-page__card-status orders-page__card-status--delivered">
                      Entrega prevista: ${order.deliveryTime}
                    </p>
                  </div>

                  <div class="orders-page__card-actions">
                    <span class="orders-page__badge ${order.status === "ENTREGUE" ? "orders-page__badge--green" : "orders-page__badge--orange"}">${order.status}</span>
                  </div>
                </div>

                <div class="orders-page__items">
                  ${Array.isArray(order.products) && order.products.length > 0 ? order.products.map(p => `
                    <div class="orders-page__item">
                      <img src="${p.image || ''}" alt="${p.name}" />

                      <div class="orders-page__item-body">
                        <div class="orders-page__item-heading">
                          <h4>${p.name}</h4>
                          <span>R$ ${Number(p.unitPrice).toFixed(2).replace(".", ",")}</span>
                        </div>

                        <p class="orders-page__item-meta">${p.productDescription || ''}</p>
                        <p class="orders-page__item-quantity">Quantidade: ${p.quantity}</p>

                        <div class="orders-page__item-buttons">
                          <a href="/product" class="orders-page__button orders-page__button--secondary" data-route>
                            Ver detalhes do produto
                          </a>
                          <button 
                            data-order-id=${order.orderId}
                            data-product-id="${p.productId}"
                            type="button" 
                            class="orders-page__button orders-page__button--ghost"
                          >
                            Avaliar Produto
                          </button>
                        </div>
                      </div>
                    </div>
                  `).join('') : ''}
                </div>

                <div class="orders-page__footer">
                  <div>
                    <p class="orders-page__footer-label">Total do Pedido</p>
                    <p class="orders-page__footer-value">${order.products.length} item(s) • Frete <span class="orders-page__freight ${order.freight === 0 ? 'orders-page__freight--free' : 'orders-page__freight--paid'}">${order.freight === 0 ? 'Grátis' : `R$ ${order.freight.toFixed(2)}`}</span></p>
                  </div>
                  <span class="orders-page__total">R$ ${Number(order.totalOrderValue).toFixed(2).replace(".", ",")}</span>
                </div>
              </article>
            `).join("") : `<div>Você ainda não tem pedidos!</div>`}
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
