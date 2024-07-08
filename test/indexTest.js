require ( './helpers.js' );

describe("index.html", () => {
  describe("after index.js is processed", () => {
    // Test: no longer has DOM node 'main#main'
    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main#main'), "Make sure you remove the <main> with id 'main'").to.not.exist;
    });

    // Test: has a 'newHeader' variable that points to an <h1> node
    it("has a 'newHeader' variable that points to an <h1> node", () => {
      expect(
        newHeader.nodeName,
        "Make sure you create an <h1> and assign it to the 'newHeader' variable"
      ).eql("H1");
    });

    // Test: the 'newHeader' variable that points to the <h1> node has an id of 'victory'
    it("the 'newHeader' variable that points to the <h1> node has an id of 'victory'", () => {
      expect(
        newHeader.id,
        "Make sure the id of your <h1> is set to 'victory'"
      ).eql("victory");
    });

    // Test: the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" inside it
    it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"YOUR-NAME is the champion\" inside it", () => {
      expect(newHeader.innerHTML.toLowerCase(), "Make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it").to.include("is the champion".toLowerCase());
    });

  });
});
