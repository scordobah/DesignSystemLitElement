import { LitElement, html, css } from 'lit-element';

class MyButton extends LitElement {
    static get properties() {
      return {
        label: { type: String }
      };
    }
  
    constructor() {
      super();
      this.label = 'Button';
    }
    
    static get styles() {
        return css`
          button {
            position: absolute;
            left: 37.19%;
            background-color: #0A1E8C;
            color: #FFFFFF;
            padding: 8px 16px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            font-family: 'Segoe UI';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 19px;
          }
    
          button:hover {
            background-color: #0A46DC;
          }
        `;
    }

    handleClick() {
        console.log('Button clicked!');
    }

    render() {
        return html`
          <button @click=${this.handleClick}>${this.label}</button>
        `;
      }      
}

customElements.define('my-button', MyButton);