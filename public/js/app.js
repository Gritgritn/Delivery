import Tabs from './components/tabs.js';
export default class App {
    init() {
      const tabs = new Tabs(`.js_tabs-block`, `.js_tab`);
      tabs.init();
    }
  }