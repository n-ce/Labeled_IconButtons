const template = document.createElement("template");

template.innerHTML = `
  <style>
  button,img,p {margin:0;padding:0;}
  button {
    background-color: #7777;
    border:none;
    border-radius:1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  img {width:50%}
  p{
    line-height:2rem;
    width:100%;
    background-color:#fff7;
    border-radius:1rem;
  }
  </style>
  <button>
    <img>
    <p><slot></slot></p>
  </button>
`;

class IconButton extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('img').src = this.dataset.icon;
    
    
  }
}
window.customElements.define("ico-btn", IconButton)