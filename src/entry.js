import WbStation from './wb-station.js';
import WbTotalWeight from './wb-total-weight';

customElements.define('wb-station', WbStation);
customElements.define('wb-total-weight', WbTotalWeight);
import { createStore } from 'wc-state-reducers';

const weightChange = (state, { station, weight }) => {
  const stations = Object.assign(state.stations || {}, {
    [station]: { station, weight}
  });
  const totalWeight = Object.keys(stations).reduce(((total, stationName) => { 
    return total + stations[stationName].weight;
  }), 0);
  return Object.assign(state, { stations, totalWeight });
};

const subscribers = {
  "wb-total-weight": ({ totalWeight }, element) => {
    element.setAttribute("weight", totalWeight);
  }
}

window.store = createStore(document, { weightChange }, subscribers);
