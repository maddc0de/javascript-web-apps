class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");
    this.delButtonEl = document.querySelector("#hide-message-button");
    this.mainContainerEl = document.querySelector("#main-container");
    this.inputEl = document.querySelector("#message-input");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });

    this.delButtonEl.addEventListener("click", () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const message = document.createElement("div");
    message.innerText = this.inputEl.value;
    message.setAttribute("id", "message"); // message.id = 'message'
    this.mainContainerEl.append(message);
  }

  hideMessage() {
    const message = document.querySelector("#message");
    message.remove();

    // messages.forEach((message) => {
    //   message.remove();
    // });
  }
}

module.exports = MessageView;
