import { expect } from 'chai';
import { fixture } from '@open-wc/testing-helpers';
import WbStation from './wb-station';

const waitForEvent = (el, eventName, trigger) => {
  let customEvent;
  el.addEventListener(eventName, (ev) => {
    customEvent = ev;
  });
  trigger(el);
  return new Promise(resolve => {
    setTimeout(() => { resolve(customEvent) });
  });
};

describe('WbStation', () => {
  before(() => {
    customElements.define("wb-station", WbStation);
  });

  it('renders', async () => {
    const el = await fixture(`<wb-station name="bob"></wb-station>`);
    expect(el.name).to.equal('bob');
    expect(el.querySelector('label').innerHTML).to.contain('bob');
  });

  it('dispatches events', async () => {
    const el = await fixture(`<wb-station name="bob"></wb-station>`);
    const weightChangeEvent = await waitForEvent(el, 'weightChange', (el) => {
      const input = el.querySelector('input');
      input.value = '5';
      input.dispatchEvent(new Event('input'));
    });
    expect(weightChangeEvent.detail.weight).to.equal(5);
  })
});