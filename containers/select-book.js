casper.thenOpen(
  "https://www.amazon.com/gp/offer-listing/0134580990/ref=dp_olp_used?ie=UTF8&condition=used",
  function() {
    this.capture("screenshots/" + n + "productPage.png");
    console.log("product page opened");
  }
);

casper.then(function() {
  this.evaluate(function() {
    document
      .getElementById("a-autoid-0")
      .querySelector(".a-button-inner")
      .querySelector(".a-button-input")
      .click();
  });
  console.log("clicked on product");
});

casper.then(function() {
  this.evaluate(function() {
    document.getElementById("hlb-ptc-btn-native").click();
  });
  this.capture("screenshots/" + n + "productProceed.png");
  console.log("proceed to checkout");
});
