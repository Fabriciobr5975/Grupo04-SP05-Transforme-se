import BaseLayout from "../../../layouts/index.js";
import Button from "../../../components/button/index.js";

export default function FeedbackPage() {
  const product = JSON.parse(sessionStorage.getItem("feedbackProduct")) || {};
  const productImage = product.image || product.images?.[0] || "";

  const template = `
   <div class="feedback-page">
       <div class="feedback-page__topbar">
         <button type="button" class="feedback-page__back-button" onclick="window.history.back()">
           <i class="fa-solid fa-arrow-left feedback-page__back-icon"></i>
           Voltar
         </button>
       </div>
       
       <div class="feedback-page__content">
         <header class="feedback-page__header">
           <h1 class="feedback-page__title">Feedback</h1>
           <p class="feedback-page__description">Deixe registrado suas experiência de compra para ajudar outros usuário a escolherem melhor nossos produtos!</p>
         </header>
   
         <section class="feedback-page__form">
          <article class="feedback-page__product">
            <div class="feedback-page__product-image">
              <img src="${productImage}" alt="${product.name || "Produto avaliado"}" />
            </div>

            <div class="feedback-page__product-content">
              <span class="feedback-page__product-label">Produto avaliado</span>
              <h2 class="feedback-page__product-name">${product.name || "Produto não encontrado"}</h2>
              <p class="feedback-page__product-description">${product.description || "Registre sua experiência com este produto."}</p>
            </div>
          </article>

           <section class="feedback-page__section">
              <div class="feedback-page__section-title">
                <span class="feedback-page__section-number">1</span>
                <h2 class="feedback-page__section-question">Como você avalia sua experiência?</h2>
              </div>
              <div class="feedback-page__stars"> 
                ${Array.from({ length: 5 }).map((_, i) =>
                  `<button type="button" class="feedback-page__star-button">
                     <i id="feedback-page__star-${i + 1}" class="fa-regular fa-star feedback-page__star-icon"></i>
                   </button>
                `).join("")}
              </div> 
           </section>

           <section class="feedback-page__section">
              <div class="feedback-page__section-title">
                <span class="feedback-page__section-number">2</span>
                <h2 class="feedback-page__section-question">Conte-nos mais sobre sua experiência?</h2>
              </div>
              <div class="feedback-page__text-area"> 
                <textarea 
                  class="feedback-page__text-area-field" 
                  placeholder="Deescreva o que você mais gostou ou que podemos melhorar...."
                ></textarea>
                <p class="feedback-page__text-area-length">0/500</p>
              </div> 
           </section>
           <div class="feedback-page__buttons">
            ${Button({ id: "feedback-page__insert-button", type: "button", innerText: "Inserir Avaliação" })}
            ${Button({ id: "feedback-page__remove-button", type: "button", innerText: "Remover Avaliação", disabled: true })}
           </div>
         </section>
       </div>
     </div> 
`;

  return {
    template: BaseLayout(template),
    styles: "/src/pages/user/feedback/style.css",
    scripts: "/src/pages/user/feedback/FeedbackService.js"
  };
}

