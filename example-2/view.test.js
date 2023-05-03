/**
 * @jest-environment jsdom
 */
// JSDoc comment telling Jest to use the jsdom environment
// which is a headless browser environment implemented in pure JS, to run the tests.

// imports builtin Node.js `fs` module - provides API for interacting with file system
const fs = require("fs");
const View = require("./view");

describe("A test for my web page", () => {
  // use the beforeEach() hook to set the jest `document` HTML before each test
  beforeEach(() => {
    // sets document.body.innerHTML to have same content of the "real" webpage
    // .readFileSync simulates the rendering of the webpage in browser env
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays a title", () => {
    // 1. Arrange - instantiate our View class
    const view = new View();

    // 2. Act - call any method that modifies the page
    view.displayTitle("My amazing website");

    // 3. Assert - we assert the page contains what it should.
    expect(document.querySelector("h1").textContent).toBe("My amazing website");
  });

  it("adds a paragraph", () => {
    const view = new View();

    view.addParagraph(
      "This paragraph has been dynamically added by JavaScript!"
    );

    expect(document.querySelectorAll("p").length).toBe(3);
  });
});

// initial test example
// describe("Page view", () => {
//   it("displays 2 paragraphs", () => {
//     document.body.innerHTML = fs.readFileSync("./index.html");
//     const view = new View();
//     expect(document.querySelectorAll("p").length).toBe(2);
//   });
// });
