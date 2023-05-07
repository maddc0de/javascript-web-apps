/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("clicks the button and displays the message of your choice", () => {
    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    const inputEl = document.querySelector("#message-input");
    inputEl.value = "Hey!";

    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
    expect(document.querySelector("#message").textContent).toEqual("");
    expect(document.querySelector("#message").innerText).toEqual("Hey!");
  });

  it("deletes the message", () => {
    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    const delButtonEl = document.querySelector("#hide-message-button");
    delButtonEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
