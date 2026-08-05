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
            <p class="profile__header-account-creation">Conta criada há: <strong>01d 02h 53m</strong></p>
            <a href="/privacy-terms" class="profile__header-terms-of-use" data-route>Termos de Uso</a>
          </section>

          <div class="profile-links">
            <h2 class="profile-links__title">Links Úteis:</h2>

            <a href="/profile/addresses" class="profile-links__item" data-route>
              <div class="profile-links__item__title">  
                <i class="fa-solid fa-location-dot"></i>
                Endereços
              </div>
              <p>
                Insira, altere ou remova seus endereços de destino
              </p>
            </a>
            <a href="/profile/orders" class="profile-links__item" data-route>
              <div class="profile-links__item__title">  
                <i class="fa-solid fa-bag-shopping"></i>
                Meus pedidos
              </div>
              <p>
                Revise ou acompanhe todos os seus pedidos
              </p>
            </a>
            <a href="/profile/feedback" class="profile-links__item">
              <div class="profile-links__item__title">  
                <i class="fa-solid fa-credit-card"></i>
                Cartões
              </div>
              <p>
                Insira, altere ou remova suas suas avaliações pós compra
              </p>
            </a>
            <a href="/profile/favorites" class="profile-links__item" data-route>
              <div class="profile-links__item__title">  
                <i class="fa-solid fa-heart"></i>
                Favoritos
              </div>
              <p>
                Salve em uma lista seus produtos favoritos
              </p>
            </a>
            <div class="profile-page__logout">
            <button type="button">
              <i class="fa-solid fa-door-open"></i>
              Sair da Conta
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const ProfilePage = {
  template: BaseLayout(template),
  styles: "/src/pages/user/profile/style.css"
};

export default ProfilePage;
