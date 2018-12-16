
import { expect } from 'chai';
import { fixture } from '@open-wc/testing-helpers';
import WbTotalWeight from './wb-total-weight';

describe('WbTotalWeight', () => {
  before(() => {
    customElements.define("wb-total-weight", WbTotalWeight);
  });
  it('renders total weight', async () => {
    const el = await fixture(`<wb-total-weight weight="10"></wb-total-weight>`);
    expect(el.innerHTML).to.contain('10');
  });
  it('re-renders total weight', async () => {
    const el = await fixture(`<wb-total-weight weight="10"></wb-total-weight>`);
    el.setAttribute('weight', '9')
    expect(el.innerHTML).to.contain('9');
  });
});