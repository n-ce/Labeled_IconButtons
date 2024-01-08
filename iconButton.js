customElements.define('ico-btn',
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
      const $ = document.createElement.bind(document);
      
      const link = $('link');
      link.rel = 'stylesheet';
      link.href = 'iconButton.css';

      const div = $('div');

      const button = $('button');
      button.style.display='none';
      
      const img = $('img');
      img.addEventListener('load', () => {
        div.style.display = 'none';
        button.style.display='block';
      });
      img.src = this.dataset.icon;

      const slot = $('slot');

      button.append(img, slot);
      button.addEventListener('click', () => {
        const iconUrl = prompt('Enter Icon Link');
        if (!iconUrl) return;
        const name = prompt('Enter Button Name');
        if (!name) return;
        const icoBtn = $('ico-btn');
        icoBtn.dataset.icon = iconUrl;
        icoBtn.textContent = name;
        this.parentElement.appendChild(icoBtn);
      });

      shadow.append(link, div, button);
    }
  }
);