import Layout from "../../../components/layouts/index.js";
import BaseLayout from "../common/layout/BaseLayout.js";
import { Button } from "../../../components/button/index.js";

const template = `
  <div class="layout-user-page">
    <div class="layout-user-page__content">
      <header class="user-address__header">
        <h1>Meus Endereços</h1>
        <p>Você pode ter até cadastrar até 3 endereços!</p>
      </header>

      <section class="address__content">
        <article class="address__content__item">
          <div class="address__content__main">
            <h2>Praça da Sé, 123, 01001-000</h2>
            <p>Sé, São Paulo, São Paulo - SP</p>
            <p><span>Complemento:</span> Ao lado do posto de combustível e do prédio azul.</p>
          </div>

          <div class="address__manipulation">
            <button title="Editar endereço" type="button" class="address__manipulation--edit">
              <i class="fa-regular fa-pen-to-square"></i>
            </button>

            <button title="Remover endereço" type="button" class="address__manipulation--remove">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>

        </article>
        ${Button("button", `<i class="fa-solid fa-plus icon-plus__address"></i>Adicionar novo endereço`)}
      </section>
    </div>
  </div>  
`;

const UserAddressesPage = {
  template = Layout(template),
  styles: "/src/pages/user/addresses/style.css"
};

export default UserAddressesPage;