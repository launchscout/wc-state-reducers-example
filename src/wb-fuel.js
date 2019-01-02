import {html, render} from 'lit-html';
class WbFuel extends HTMLElement {

  update() {
    const template = (data) => html`<div><label>Fuel</label><input type="number" value="${data.amount}" /> * 6 = <span>${data.weight}</span></div>`;
    render(template({weight: this.weight, amount: this.amount}), this);
  }

  connectedCallback() {
    this.weight = 0;
    this.amount = 0;
    this.update();
    this.querySelector("input").addEventListener("input", (event) => {
      this.weight = Number(event.target.value) * 6;
      this.amount = Number(event.target.value);
      this.update();
      this.dispatchEvent(new CustomEvent("weightChange", {
        bubbles: true,
        detail: {
          station: this.name,
          weight: this.weight
        }
      }));
    })
  }
}

export default WbFuel;