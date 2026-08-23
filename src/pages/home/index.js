import BaseLayout from "../../layouts/index.js";
import ProductCard from "../../components/product-card/index.js";
import { products } from "../../../seeds/products.js";

const template = `
   <div class="home-page__main">
    <section class="home-page__first-content">
      <div class="home-page__first-content__images">
        <img src="src/assets/images/stars-1.png" alt="Estrela decorativa" class="home-page__first-content__images--stars-1 home-img__stars" />
        <img src="src/assets/images/cake.png" alt="Nossa confeitaria" class="home-page__first-content__images__img" />
        <img src="src/assets/images/stars-2.png" alt="Estrela decorativa" class="home-page__first-content__images--stars-2 home-img__stars" />
      </div>
        <h1 class="home-page__first-content__title">
          O Doce Brasileiro na Ponta da Língua!
        </h1>
        <p class="home-page__first-content__info">
          Sabores autênticos, ingredientes naturais, feitos com amor para a sua família
        </p>

        <div class="home-page__first-content__buttons">
          <a href="/catalog" data-route>Descubra Nossos Produtos</a>
          <a href="/about-us" data-route>Sobre Nós</a>
        </div>
      </section>

      <section class="home-page__about-us">
        
        <div class="home-page__about-us__content">
          <span class="home-page__info-section">Nossa Doce Jornada DOCE JORNADA</span>
          <h2 class="home-page__title-section">O Começo de Tudo</h2>
          <p class="home-page__about-us__content-text">Começamos com uma paixão simples: transformar ingredientes especiais em momentos inesquecíveis. Cada receita nasceu do carinho pela confeitaria artesanal e pelo desejo de adoçar o dia das pessoas.</p>
          <button type="button" class="home-page__about-us__content__button">Saiba Mais</button>
        </div>

        <img src="src/assets/images/bolo-homepage.png" alt="Imagem de bolo" class="home-page__about-us__content__img" />
      </section>

      <section class="home-page__categories">
          <div class="home-page__categories__content">
            <span class="home-page__info-section home-page__info-section--center">Explore</span>
            <h2 class="home-page__title-section home-page__info-section--brown">Principais Categorias</h2>
          </div>

          <div class="home-page__categories__images">
            <img src="src/assets/images/banners/bolo.png" alt="Banner de bolos" />
            <img src="src/assets/images/banners/doce.png" alt="Banner de doces" />
            <img src="src/assets/images/banners/torta.png" alt="Banner de tortas" />
          </div>
      </section>

      <section class="home-page__products">
        <div class="home-page__products__content">
          <h2 class="home-page__title-section">Os Mais Pedidos da Casa</h2>

          <div class="home-page__products--decoration">
            <span></span>
            <i class="fa-regular fa-heart"></i>
            <span></span>
          </div>
        </div>

        <ul class="home-page__products__list">
          ${Array.from({length: 6}, (_, i) => `
            <li class="home-page__products__item">
              ${ProductCard(products[i])}
            </li>
          `).join("")}
        </ul>
      </section>

      <section class="home-page__reviews">
        <h2 class="home-page__title-section home-page__title--reviews">Avaliações que Encantam</h2>

        <div class="home-page__reviews__content">
          <article class="home-page__reviews__card">
            <div class="home-page__reviews__card-text">
              <span class="home-page__reviews__card-title">Floresta Negra</span>
              <div class="home-page__reviews__card-stars" aria-label="5 estrelas">★★★★★</div>
              <p>
                O bolo de floresta negra é simplesmente perfeito. Cada camada é uma surpresa e a massa úmida, o creme e as cerejas fazem uma combinação que não consigo esquecer.
              </p>
            </div>

            <span class="home-page__reviews__card-divider"></span>

            <div class="home-page__reviews__author">
              <img
                src="src/assets/images/avatar/avatar1.svg"
                alt="Foto da cliente Ana Martins"
                class="home-page__reviews__author-img"
              />
              <div>
                <p class="home-page__reviews__author-name">Ana Martins</p>
                <span class="home-page__reviews__author-meta">Cliente há 2 anos</span>
              </div>
            </div>
          </article>

          <article class="home-page__reviews__card">
            <div class="home-page__reviews__card-text">
              <span class="home-page__reviews__card-title">Petit Gateau</span>
              <div class="home-page__reviews__card-stars" aria-label="5 estrelas">★★★★★</div>
              <p>
                Pedi o petit gateau para uma ocasião especial e todos ficaram impressionados. O centro derretido é irresistível. Já virou o doce oficial das nossas reuniões de família.
              </p>
            </div>

            <span class="home-page__reviews__card-divider"></span>

            <div class="home-page__reviews__author">
              <img
                src="src/assets/images/avatar/avatar2.svg"
                alt="Foto do cliente Ricardo Rodrigues"
                class="home-page__reviews__author-img"
              />
              <div>
                <p class="home-page__reviews__author-name">Ricardo Rodrigues</p>
                <span class="home-page__reviews__author-meta">Cliente há 3 anos</span>
              </div>
            </div>
          </article>

          <article class="home-page__reviews__card">
            <div class="home-page__reviews__card-text">
              <span class="home-page__reviews__card-title">Tiramisu</span>
              <div class="home-page__reviews__card-stars" aria-label="5 estrelas">★★★★★</div>
              <p>
                Tiramisu delicioso! Muito bem preparado, cremoso e com um sabor marcante de café na medida certa. Entrega impecável e excelente qualidade. Recomendo!
              </p>
            </div>

            <span class="home-page__reviews__card-divider"></span>

            <div class="home-page__reviews__author">
              <img
                src="src/assets/images/avatar/avatar3.svg"
                alt="Foto da cliente Juliana Moreira"
                class="home-page__reviews__author-img"
              />
              <div>
                <p class="home-page__reviews__author-name">Juliana Moreira</p>
                <span class="home-page__reviews__author-meta">Cliente há 3 meses</span>
              </div>
            </div>
          </article>

          <article class="home-page__reviews__card">
            <div class="home-page__reviews__card-text">
              <span class="home-page__reviews__card-title">Fondue Delícia</span>
              <div class="home-page__reviews__card-stars" aria-label="5 estrelas">★★★★★</div>
              <p>
                Pedi o Fondue Delicia e superou minhas expectativas! As frutas estavam frescas, o chocolate muito cremoso e na medida certa de doçura. A apresentação é linda e chegou tudo muito bem embalado. Dá para perceber o cuidado em cada detalhe. Com certeza vou pedir novamente!
              </p>
            </div>

            <span class="home-page__reviews__card-divider"></span>

            <div class="home-page__reviews__author">
              <img
                src="src/assets/images/avatar/avatar4.svg"
                alt="Foto do cliente Lucas Martins"
                class="home-page__reviews__author-img"
              />
              <div>
                <p class="home-page__reviews__author-name">Lucas Martins</p>
                <span class="home-page__reviews__author-meta">Cliente há 1 anos</span>
              </div>
            </div>
          </article>
        </div>

        <div class="home-page__reviews__summary">
          <div class="home-page__reviews__summary-score">
            <strong>4.9</strong>
            <div class="home-page__reviews__card-stars" aria-label="5 estrelas">★★★★★</div>
            <span>+ 1200 avaliações</span>
          </div>

          <span class="home-page__reviews__summary-divider" > </span>

          <div class="home-page__reviews__summary__main">
            <div class="home-page__reviews__summary-item">
              <div class="home-page__reviews__summary-item__content">
                <span class="home-page__reviews__summary-item-circle"></span>
                <span>Sabor</span>
              </div>
              <div class="home-page__reviews__summary-bar">
                <div class="home-page__reviews__summary-bar-fill"></div>
              </div>
              <strong>98%</strong>
            </div>
            
            <div class="home-page__reviews__summary-item">
              <div class="home-page__reviews__summary-item__content">
                <span class="home-page__reviews__summary-item-circle summary-item-circle--green"></span>
                <span>Entrega</span>
              </div>
              <div class="home-page__reviews__summary-bar">
                <div class="home-page__reviews__summary-bar-fill secondary-summary-bar-fill"></div>
              </div>
              <strong>87%</strong>
            </div>
          </div>
        </div>
      </section>
   </div>
`;

const HomePage = {
  template: BaseLayout(template),
  styles: "/src/pages/home/style.css"
};

export default HomePage;

