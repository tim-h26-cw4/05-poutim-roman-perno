export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type');
    this.selectedType = '';
    this.isActive = false;
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const btn = this.types[i];
      btn.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }
    event.target.classList.add('is-active');
    this.selectedType = event.target.innerText;

    this.isActive = true;

    this.updatePhoto();
  }

  updatePhoto() {
    const images = this.element.querySelector('img');
    images.classList.add('is-active');
    images.src = `..//assets/images/${this.selectedType}.png`;
  }
}
