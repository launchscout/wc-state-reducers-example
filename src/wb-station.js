class WbStation extends HTMLElement {

  get name() {
    return this.getAttribute("name");
  }

  get arm() {
    return Number(this.getAttribute("arm"));
  }

  connectedCallback() {
    this.innerHTML = `
      <label>${this.name}<input type="number" /></label>
    `;
    this.querySelector("input").addEventListener("input", (event) => {
      this.dispatchEvent(new CustomEvent("weightChange", {
        bubbles: true,
        detail: {
          station: this.name,
          arm: this.arm,
          weight: Number(event.target.value)
        }
      }));
    })
  }
}

export default WbStation;