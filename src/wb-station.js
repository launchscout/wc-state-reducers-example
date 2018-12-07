class WbStation extends HTMLElement {

  get name() {
    return this.getAttribute("name");
  }

  connectedCallback() {
    this.innerHTML = `
      <label>${this.name}</label><input type="number" />
    `;
    this.querySelector("input").addEventListener("input", (event) => {
      this.dispatchEvent(new CustomEvent("weightChange", {
        bubbles: true,
        detail: {
          station: this.name,
          weight: Number(event.target.value)
        }
      }));
    })
  }
}

export default WbStation;