import BaseLayout from "../../../layouts/index.js";

const template = `
  <section class="help-center__main">
    <article class="help-center__content">
      <div class="help-center__title">
        <h1>
          Suporte e Central de Ajuda
        </h1>
        <p>
          Aqui você encontra respostas para perguntas frequentes, guias de uso e formas de contato com nossa equipe de suporte. Estamos comprometidos em garantir que sua experiência com a <strong class="help-center__title--important">Nossa Confeitaria</strong> seja excelente!
        </p>
      </div>

      <section class="help-center__suport-info">
        <div class="help-center__suport-info__title">
          <h2>
            Dicas para entrar em contato com o suporte
          </h2>
        </div>

        <div class="help-center__suport-info__content">
          <p class="help-center__suport-info__text">
            Para que possamos te ajudar, precisamos de algumas informações. Por favor, forneça detalhes sobre o problema que está enfrentando e nossa equipe de suporte entrará em contato com você o mais breve possível. Para isso, você pode nos enviar um e-mail para <strong>suporte@nossaconfeitaria.com.br</strong>, entrar em contato através do nosso do <strong>WhatsApp</strong> ou preenchendo um formulário para entrar em contato com nossa equipe
          </p>
        </div>

        <div class="help-center__suport-contact">
          <a
            href="#"
            target="_blank"
            rel="external noreferrer noopener"
            class="help-center__suport-contact__link"
          >
            <i class="fa-brands fa-whatsapp contact__link--icon whatsapp"></i>  
            <strong>(11) 91111-1111</strong>
          </a>
          <a
            href="#"
            rel="external noreferrer noopener"
            target="_blank"
            class="help-center__suport-contact__link"
          >
            <i class="fa-solid fa-envelope contact__link--icon email"></i>
            <strong>suporte@nossaconfeitaria.com.br</strong>
          </a>
        </div>

        <div class="help-center__suport-info__content">
          <p class="help-center__suport-info__text">
            Abaixo você encontrará algumas dicas para facilitar o processo de
            suporte e garantir que sua solicitação seja atendida de forma
            eficiente. Siga as orientações para obter a melhor assistência
            possível.
          </p>

          <ul class="help-center__suport__list-tips">
            <li class="help-center__list-item" >
              Entre em contato com nossa equipe de suporte informando seu nome completo e email
            </li>

            <li class="help-center__list-item" >
              Forneça detalhes sobre o problema, sendo claro e especificando o tipo de problema
            </li>

            <li class="help-center__list-item" >
              Em caso de compras, informe a data da compra e número do pedido (Ex.: #12345)
            </li>

            <li class="help-center__list-item" >
              Para devoluções, leia antes sobre nossas políticas e informe o motivo da devolução e anexe imagens do produto
            </li>

            <li class="help-center__list-item" >
              Em caso de dúvidas, não hesite em perguntar
            </li>
          </ul>
        </div>
      </section>
    </article> 
  <section>
`;

const HelpCenterPage = {
  template: BaseLayout(template),
  styles: "/src/pages/help-center/style.css"
};

export default HelpCenterPage;

