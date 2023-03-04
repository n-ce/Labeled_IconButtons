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
  <button type="button">
    <img
      src="https://img.icons8.com/color/512/web-components.png"
      alt="webcomponent logo"
    >
    <p><slot></slot></p>
  </button>
`;

class IconButton extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    shadow.append(template.content.cloneNode(true));

  }
}
customElements.define("ico-btn", IconButton)