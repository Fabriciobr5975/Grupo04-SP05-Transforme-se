import BaseLayout from "../../../layouts/index.js";
import { renderTermsSections } from "../common/SectionsService.js";
import privacyPoliciesSections from "./SectionsService.js";

const template = `
    <section class="legal-page">
      <article class="legal-page__content">
        <header class="legal-page__header">
          <h1 class="legal-page__title">
            Política de Privacidade e Segurança
          </h1>

          <p class="legal-page__updated-on">
            Atualizado em:
            <time datetime="2026-07-23">23 DE JUNHO DE 2026</time>
          </p>

          <p class="legal-page__intro">
            A sua privacidade é muito importante para nós. Esta Política explica
            como coletamos, usamos, armazenamos e protegemos seus dados pessoais
            ao utilizar nosso site e realizar compras conosco, em conformidade com
            a <strong>Lei nº 13.709/2018 – LGPD</strong>.
          </p>
        </header>

        ${renderTermsSections(privacyPoliciesSections)}
      </article>
    </section>
`;

const PrivacyPoliciesPage = {
  template: BaseLayout(template),
  styles: "/src/pages/legal/style.css"
}

export default PrivacyPoliciesPage;

