import BaseLayout from "../../../layouts/index.js";

const template = `
  <div class="layout-user-page">
    <div class="layout-user-page__content">
      <div class="profile-page">
        <div class="profile-page__content">
          <section class="profile__content__main">
            <div class="profile__header">
              <div class="profile__header__badge">J</div>
              <div class="profile__header__main">
                <h1>João Silva</h1>
                <p>joaosilva@teste.com</p>
              </div>
            </div>
            <button title="Editar perfil" type="button" class="profile__header__btn">
              <i class="fa-regular fa-pen-to-square"></i>
              <span>Editar perfil</span>
            </button>
          </section>
          <div class="profile-links">
            <a href="/addresses" class="profile-links__item" data-route>
              <i class="fa-solid fa-location-dot"></i>
              Endereços
            </a>
            <a href="/profile/orders" class="profile-links__item" data-route>
              <i class="fa-solid fa-bag-shopping"></i>
              Meus pedidos
            </a>
            <a href="#" class="profile-links__item">
              <i class="fa-solid fa-credit-card"></i>
              Cartões
            </a>
            <a href="#" class="profile-links__item">
              <i class="fa-solid fa-heart"></i>
              Favoritos
            </a>
          </div>
        </div>
      </div>
    </div>
      <div class="profile-page__logout">
        <button type="button">
          <i class="fa-solid fa-door-open"></i>
          Sair da Conta
        </button>
    </div>
  </div>
`;

const ProfilePage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/profile/style.css"
};

export default ProfilePage;
