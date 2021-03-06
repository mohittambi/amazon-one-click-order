var casper = require("casper").create({
  clientScripts: ["includes/jquery.js"],
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
  }
});

var d = new Date();
var n = d.getTime();

//First step is to open Amazon
casper.start().thenOpen("https://amazon.com", function() {
  console.log("Amazon website opened");
});

//Second step is to click to the Sign-in button
// casper.then(function() {
//   this.evaluate(function() {
//     document.getElementById("nav-tools").children[1].click();
//   });
// });

//Now we have to populate username and password, and submit the form

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

casper.then(function() {
  this.evaluate(function() {
    document.getElementById("ap_email").value = "deckobooks@gmail.com";
  });
});

casper.then(function() {
  this.evaluate(function() {
    document.querySelector("input[type=submit]#continue").click();
  });
});

casper.then(function() {
  this.evaluate(function() {
    document.querySelector("input[type=password]#ap_password").value =
      "oldydecker";
  });
  console.log("password enterd");
  this.capture("screenshots/" + n + "passwordEnterd.png");
});

casper.then(function() {
  this.evaluate(function() {
    document.querySelector("input[type=submit]#signInSubmit").click();
  });
});

casper.then(function() {
  this.evaluate(function() {
    document
      .querySelector(
        ".list-address-selected .address-edit-link a.a-link-normal"
      )
      .click();
  });
});

// casper.then(function () {
// 	this.capture("screenshots/" + n + "beforeEdit.png");
//   this.evaluate(function() {
//     document
//       .getElementById("address-book-entry-0")
//       .childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[1].click();
// 	});
// 	this.capture("screenshots/" + n + "afterEdit.png");
// });

casper.then(function() {
  this.evaluate(function() {
    document.querySelector(
      "input[type=text]#address-ui-widgets-enterAddressFullName"
    ).value = "Lindsey Mocek";
    document.querySelector(
      "input[type=text]#address-ui-widgets-enterAddressAddressLine1"
    ).value = "";
    document.querySelector(
      "input[type=text]#address-ui-widgets-enterAddressAddressLine2"
    ).value = "";
    document.querySelector(
      "input[type=text]#address-ui-widgets-enterAddressCity"
    ).value = "Wichita";
    document.querySelector(
      "input[type=text]#address-ui-widgets-enterAddressStateOrRegion"
    ).value = "KS";
    document.querySelector(
      "input[type=text]#address-ui-widgets-enterAddressPostalCode"
    ).value = "67203";
  });
  this.capture("screenshots/" + n + "editAddress.png");
  console.log("address edited");
});

casper.then(function() {
  this.evaluate(function() {
    document
      .querySelector(
        "input[type=submit]#address-ui-widgets-fromAddressEditToContinue"
      )
      .click();
  });
});

casper.then(function() {
  this.evaluate(function() {
    document.querySelector("input[type=submit].a-button-text").click();
  });
  this.capture("screenshots/" + n + "afterEdit.png");
  console.log("after edited");
});

casper.then(function() {
  this.evaluate(function() {
    document
      .querySelector(
        "input[type=submit]#ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"
      )
      .click();
  });
});

casper.then(function() {
  this.evaluate(function() {
    document
      .querySelector("input[type=submit]#proceedToRetailCheckout")
      .click();
  });
  this.capture("screenshots/" + n + "afterCheckout.png");
  console.log("after checkout");
});

//Wait to be redirected to the Home page, and then make a screenshot
casper.then(function() {
  console.log("Make a screenshot and save it as AfterLogin.png");
  this.capture("screenshots/" + n + "AfterLogin.png");
});

casper.run();
