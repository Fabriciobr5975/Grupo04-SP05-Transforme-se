export default function HeadingSection (heading, text) {
    return (`
       <header class="auth-header__section">
          <div class="auth-header__title">
            <h1>${heading}</h1>
            <p>${text}</p>
          </div>

          <button title="Voltar" class="auth-header__button" type="button" onclick="window.history.back()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 86 86"
              fill="none"
            >
              <path
                d="M33.7867 54.825H50.2268C55.9073 54.825 60.5186 50.0084 60.5186 44.075C60.5186 38.1415 55.9073 33.325 50.2268 33.325H27.605"
                stroke="#000"
                stroke-width="5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.7092 38.5929L25.0834 32.9313L30.7092 27.3054"
                stroke="#000"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </header> 
    `);
}