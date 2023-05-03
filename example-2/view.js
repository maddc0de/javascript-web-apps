class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");
    this.secondParagraph = document.querySelector(
      "#second-paragraph"
    ).textContent = "this is different!";

    this.allParagraphs = document.querySelectorAll("p");

    console.log(this.mainContainerEl);
  }

  displayTitle(text) {
    const h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach((h1) => {
      h1.textContent = text;
    });
  }

  addParagraph(text) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = text; //.innerText ?

    this.mainContainerEl.append(newParagraph);
  }

  clearParagraph() {
    this.allParagraphs.forEach((paragraph) => {
      paragraph.remove();
    });
  }
}

module.exports = View;
