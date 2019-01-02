import { expect } from 'chai';
import { fixture, oneEvent, aTimeout } from '@open-wc/testing-helpers';
import WbFuel from './wb-fuel';

const waitForEvent = (el, eventName, trigger) => {
  const promise = new Promise(resolve => {
    el.addEventListener(eventName, (customEvent) => {
      resolve(customEvent);
    });
  });
  trigger(el);
  return promise;
};

describe('WbFuel', () => {
  before(() => {
    customElements.define("wb-fuel", WbFuel);
  });

  it('renders', async () => {
    const el = await fixture(`<wb-fuel></wb-fuel>`);
    expect(el.querySelector('label').innerHTML).to.contain('Fuel');
  });

  it('dispatches events', async () => {
    const el = await fixture(`<wb-fuel></wb-fuel>`);
    const weightChangeEvent = await waitForEvent(el, 'weightChange', (el) => {
      const input = el.querySelector('input');
      input.value = '5';
      input.dispatchEvent(new Event('input'));
    });
    expect(weightChangeEvent.detail.weight).to.equal(30);
  })
});