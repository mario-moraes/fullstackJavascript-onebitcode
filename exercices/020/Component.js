// oop and DOM manipulation exercice

class Component {
  #createdElement
  constructor(element) {
    this.createdElement = build(element);
    this.#createdElement = createdElement;
  }
  build(element) {
    const createdElement = document.createElement(element);
    return createdElement
  }
  render(fatherElement) {
    fatherElement.appendChild(this.createdElement);
  }
  getComponent() {
    console.log(this.#createdElement);
  }
}


