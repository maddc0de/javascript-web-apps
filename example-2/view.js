class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");
    this.secondParagraph = document.querySelector(
      "#second-paragraph"
    ).textContent = "this is different!";

    this.allParagraphs = document.querySelectorAll("p");

    console.log(this.mainContainerEl);
  }

  displayTitle() {
    const h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach((h1) => {
      h1.textContent = "My amazing website";
    });
  }

  addParagraph() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent =
      "This paragraph has been dynamically added by Javascript!"; //.innerText ?

    this.mainContainerEl.append(newParagraph);
  }

  clearParagraph() {
    this.allParagraphs.forEach((paragraph) => {
      paragraph.remove();
    });
  }
}

module.exports = View;
