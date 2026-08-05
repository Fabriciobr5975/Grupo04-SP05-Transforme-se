import BaseLayout from "../../layouts/index.js";

const template = `
   <section class="about-hero">
      <h1>Nossa História</h1>
    </section>

    <section class="about-divider">
      <img src="/src/assets/images/divider.png" alt="" aria-hidden="true" />
    </section>

    <section class="about-story">
      <div class="about-story__card">
        <h2>A Doce Jornada</h2>

        <p>
          Começamos com uma paixão simples: transformar ingredientes especiais
          em momentos inesquecíveis. Cada receita nasceu do carinho pela
          confeitaria artesanal e pelo desejo de adoçar o dia das pessoas.
        </p>

        <p>
          Para nós, um bolo não é apenas uma sobremesa, mas uma receita seguida
          à risca, feita com dedicação e repleta de significado. Cada fornada
          carrega uma história, um aroma que desperta memórias e um abraço
          apertado que, às vezes, não conseguimos colocar em palavras.
        </p>

        <p>
          Escolhemos o caminho do artesanal porque acreditamos que o tempo, o
          cuidado e o toque humano são ingredientes que nenhuma máquina consegue
          substituir. Queremos fazer parte das suas celebrações, dos cafés da
          tarde e daqueles dias em que tudo o que você precisa é de um carinho
          em forma de doce.
        </p>
      </div>
    </section>

    <section class="about-love">
      <div class="about-love__image">
        <img
          src="src/assets/images/cake-chef.png"
          alt="Mascote da Nossa Confeitaria"
        />
      </div>

      <div class="about-love__content">
        <h2>Venha se apaixonar também!</h2>

        <p>
          Descubra sabores preparados com carinho, ingredientes selecionados e
          muito amor em cada detalhe.
        </p>

        <a href="#" class="about-love__button"> Conheça nossos doces </a>
      </div>
    </section>
`;

const FeedbackPage = {
  template: BaseLayout(template),
  styles: "/src/pages/feedback/style.css"
};

export default FeedbackPage;

