import Tabs from './components/tabs.js';
import Map from './components/map.js';
import Pickup from './components/pickup.js';

export default class App {
  init() {
    const tabs = new Tabs(`.js_tabs-block`, `.js_tab`);
    tabs.init();

    const map = new Map();
    map.init();

    const pickup = new Pickup(map);
    pickup.init();



  }
}