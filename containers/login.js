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
