export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelectorAll('.chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll(
      '[data-component="Poutine"]'
    );
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      this.menu.push(poutine);
    }

    const btnCommande = this.element.querySelectorAll('.js-order');
    for (let i = 0; i < btnCommande.length; i++) {
      const btn = btnCommande[i];
      btn.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    console.log('test');
  }
}
