class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    const message = document.createElement("div");
    message.innerText = "Thanks for clicking me!";
    message.setAttribute("id", "message");
    this.mainContainerEl.append(message);
  }
}

module.exports = MessageView;
