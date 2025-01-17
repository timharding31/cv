class CopyrightFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentYear = new Date().getFullYear();
    
    this.innerHTML = `
      <footer style="
        margin-top: 2rem;
        font-size: 0.875em;
        color: var(--tx-1);
      ">
       © ${currentYear} Tim Harding. All rights reserved.
      </footer>
    `;
  }
}

customElements.define('copyright-footer', CopyrightFooter);
