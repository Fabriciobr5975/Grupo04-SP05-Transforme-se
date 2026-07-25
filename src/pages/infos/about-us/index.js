import BaseLayout from "../../../layouts/index.js";

const template = `
  <section class="about-us__main">
    <article class="about-us__content">
      <div class="about-us__title">
        <h1>
          Nossa História
        </h1>
      </div>

      <div class="about-us__sections">
              <div class="about-us__image-decoration"></div>

        <section class="about-us__section-content">
          <h2 class="about-us__section__title">A Doce Jornada</h2>
          <p class="about-us__section__paragraph">
            Começamos com uma paixão simples: transformar ingredientes especiais em momentos inesquecíveis. Cada receita nasceu do carinho pela confeitaria artesanal e pelo desejo de adoçar o dia das pessoas. Para nós, um bolo não é apenas uma sobremesa, e um doce não é apenas uma receita seguida à risca. Cada fornada carrega uma história, um aroma que desperta memórias e o abraço apertado que às vezes não conseguimos dar em palavras.
          </p>
          <p class="about-us__section__paragraph">
            Escolhemos o caminho do artesanal porque acreditamos que o tempo, o cuidado e o toque humano são os ingredientes secretos que nenhuma máquina consegue replicar. Queremos fazer parte das suas celebrações, dos seus cafés da tarde e daqueles dias em que tudo o que você precisa é de um carinho em forma de doce.
          </p>
        </section>

        <div class="about-us__section__img">
          <img src="src/assets/images/cake.png" alt="Imagem decorativa" />
          <span class="about-us__section__img--span">Venha se apaixonar também !</span>
        </div>

        <section class="about-us__section-content about-us__section-content--green">
          <h2 class="about-us__section__title">A Experiência</h2>
          <p class="about-us__section__paragraph">
            Acreditamos que a confeitaria tem o poder mágico de pausar o tempo. Da cozinha para a sua mesa, nosso propósito é criar mais do que doces: queremos moldar memórias afetivas que permanecem muito depois da última mordida.
          </p>
          <p class="about-us__section__paragraph">
            O estalar de uma crosta crocante, o recheio cremoso que derrete na boca e o perfume de baunilha que invade o ambiente são nossa forma de arte. Trabalhamos com paciência e respeito aos ciclos de cada ingrediente, transformando o açúcar e a farinha em pura poesia comestível. Afinal, a vida é feita de pequenos detalhes, e nós estamos aqui para garantir que os seus sejam deliciosamente inesquecíveis.
          </p>
        </section>

        <div class="about-us__section__img">
          <span class="about-us__section__img--span">Feitos com ingredientes de primeira!</span>
          <img src="src/assets/images/chef.png" alt="Imagem decorativa" />
        </div>

        <section class="about-us__section-content about-us__section-content--pink">
          <h2 class="about-us__section__title">Pequenos Momentos</h2>
          <p class="about-us__section__paragraph">
            Mais do que misturar farinha, açúcar e afeto, nosso trabalho é criar pontes entre as pessoas. Acreditamos que a mesa de doces é o coração de qualquer encontro, o lugar onde os sorrisos se multiplicam e as conversas ganham mais sabor.
          </p>
          <p class="about-us__section__paragraph">
            Cada detalhe que sai do nosso forno é pensado para ser o ponto alto do seu dia. Não importa se é para comemorar uma grande conquista ou simplesmente para deixar uma terça-feira comum mais bonita; nós colocamos a alma em cada processo artesanal. Afinal, adoçar a vida de alguém é uma responsabilidade linda, e nós escolhemos fazer isso com o máximo de respeito, dedicação e, claro, uma pitada generosa de amor.
          </p>
        </section>

        <div class="about-us__image-decoration"></div>

        <div class="about-us__section__img about-us__img--last">
        <img src="src/assets/images/logo.svg" alt="Imagem decorativa" />
          <span class="about-us__section__img--span">Cada receita, uma história, cada doce, uma lembrança.</span>
        </div>
        
      </div>
    </article> 
  <section>
`;

const AboutUsPage = {
  template: BaseLayout(template),
  styles: "src/pages/infos/about-us/style.css"
};

export default AboutUsPage;


