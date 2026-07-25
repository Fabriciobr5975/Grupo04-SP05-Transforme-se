import BaseLayout from "../../../layouts/index.js";
import { renderTermsSections } from "../common/SectionsService.js";
import termsSections from "./SectionsService.js";

const template = `
    <section class="legal-page">
      <article class="legal-page__content">
        <header class="legal-page__header">
          <h1 class="legal-page__title">
            Termos e Diretrizes de Uso do Site
          </h1>

          <p class="legal-page__updated-on">
            Atualizado em:
            <time datetime="2026-07-23">23 DE JUNHO DE 2026</time>
          </p>

          <p class="legal-page__intro">
            Ao acessar ou utilizar este site, criar uma conta, realizar pedidos,
            publicar avaliações ou utilizar quaisquer funcionalidades da
            plataforma, você declara estar ciente e concorda com estes
            <strong>Termos de Uso</strong>.
          </p>
        </header>

        ${renderTermsSections(termsSections)}
      </article>
    </section>
`;

const TermofUsePage = {
  template: BaseLayout(template),
  styles: "/src/pages/legal/style.css"
}

export default TermofUsePage;

