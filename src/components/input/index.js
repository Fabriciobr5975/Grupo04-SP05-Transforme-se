
export function Input(label = "Campo",
  type = "text",
  id = null,
  placeholder = "Campo") {

  id = id || `input-${Math.floor(Math.random() * 10000)}`;

  return (`
      <style>
        .input-component {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.275rem;
        }
          
        .input-component__header {
          display: flex;
          padding-inline: 0.25rem;
        }
          
        .input-component__header label {
          text-align: start;
          font: 500 1rem/1.5 "Manrope";
          letter-spacing: 0.025rem;
        }
          
        .input-component__input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          background-color: white;
          letter-spacing: 0.025rem;
          padding-inline: 1rem;
          padding-block: 0.625rem;
          outline: none;
          border-radius: 0.5rem;
          border: 2px solid black;
          transition: 100ms ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          font: 600 1rem "Manrope";
        }
          
        .input-component__input input {
          flex: 1;
          appearance: none;
          border: none;
          outline: none;
          box-shadow: none;
          font: inherit;
          letter-spacing: inherit;
        }
          
        .input-component__input input::placeholder {
          color: #6a7282;
          font: inherit;
          letter-spacing: inherit;
        }
          
        .input-component__input:focus-within {
          border: 2px solid #b2aa98;
        }
          
        .input-component__input:focus {
          outline: 2px solid #dbeafe;
        }
      </style>

      <div class="input-component">
        <div class="input-component__header">
          <label for="${id}">${label}</label>
        </div>
        <div class="input-component__input">
          <input type="${type}" id="${id}" placeholder="${placeholder}" />
        </div>
      </div>
    `);
}

