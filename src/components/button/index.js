
export function Button(type = "button", children) {
  return (`
     <style>
      .comp__button {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font: 600 1rem "Manrope";
        background-color: #224435;
        border: 2px solid #05271d;
        color: #fff5e8;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: 300ms;
        box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.3);
      }

      .comp__button:hover {
          background-color: #fff5e8;
          color: #224435;
      }

      .comp__button:disabled {
          cursor: not-allowed;
          opacity: 0.9;
      }
    </style>

    <button class="comp__button" type=${type}>${children}</button>`
  );
}
