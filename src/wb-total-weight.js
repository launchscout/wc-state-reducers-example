class WbTotalWeight extends HTMLElement {

  get weight() {
    return this.getAttribute("weight");
  }

  static get observedAttributes() {
    return ['weight'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <div>Total Weight: ${this.weight || ""}</div>
    `;
  }

}

export default WbTotalWeight;