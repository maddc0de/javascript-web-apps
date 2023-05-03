class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");
    this.secondParagraph = document.querySelector(
      "#second-paragraph"
    ).textContent = "this is different!";

    this.allParagraphs = document.querySelectorAll("p");

    console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = text; //.innerText ?

    this.mainContainerEl.append(newParagraph);
  }
}

module.exports = View;
