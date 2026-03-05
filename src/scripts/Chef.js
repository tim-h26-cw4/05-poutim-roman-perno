import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');
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
    this.container.innerHTML = '';
    let choix = false;
    let total = 0;

    for (let i = 0; i < this.menu.length; i++) {
      const choixMenu = this.menu[i];

      if (choixMenu.isActive == true) {
        choix = true;
        total++;
      }
    }

    const listItem = document.createElement('p');
    listItem.textContent = `Nombre total de poutine(s) : ${total}`;
    this.container.appendChild(listItem);
  }
}
