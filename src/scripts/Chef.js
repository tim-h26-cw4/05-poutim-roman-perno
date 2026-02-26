import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll(
      '[data-component="Poutine"]'
    );
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const btnCommande = this.element.querySelectorAll('.js-order');
    for (let i = 0; i < btnCommande.length; i++) {
      const btn = btnCommande[i];
      btn.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    const nbPoutines = this.menu.length;
    console.log(nbPoutines);
  }
}
