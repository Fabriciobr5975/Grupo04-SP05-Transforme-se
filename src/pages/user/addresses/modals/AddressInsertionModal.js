
export function AddressInsertionModal() {
    return (`
    <div class="modal" id="addressModal" aria-hidden="true">
        <div class="modal__backdrop" data-close-modal></div>

        <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="addressModalTitle">
            <header class="modal__header">
                <h2 class="modal__title" id="addressModalTitle">Inserir Endereço</h2>
                <button
                    class="modal__close"
                    type="button"
                    id="closeAddressModal"
                    aria-label="Fechar modal"
                    title="Fechar"
                >
                    x
                </button>
            </header>

            <form class="modal__form" id="addressForm" method="post" autocomplete="off">
                <div class="modal__row">
                    <div class="modal__field">
                        <input
                            id="cep"
                            class="input"
                            type="text"
                            placeholder="Digite o CEP do seu endereço"
                            maxlength="9"
                            autocomplete="postal-code"
                        />
                    </div>

                    <div class="modal__field">
                        <input
                            id="addressNumber"
                            class="input"
                            type="number"
                            placeholder="Número do endereço"
                            min="0"
                        />
                    </div>
                </div>

                <div class="modal__field modal__field--full">
                    <input
                        id="addressComplement"
                        class="input"
                        type="text"
                        placeholder="Digite um complemento para seu endereço"
                        maxlength="50"
                    />
                </div>

                <section class="modal__summary" id="addressSummary" hidden>
                    <h3 class="modal__summary-title">Endereço encontrado:</h3>
                    <span class="modal__summary-text" id="addressSummaryText"></span>
                </section>

                <div class="modal__actions">
                    <button class="btn button btn--block" type="submit">
                        Inserir Endereço
                    </button>
                </div>
            </form>
        </div>
    </div>
`);
}
