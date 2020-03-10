var casper = require("casper").create();

casper.start("http://phantomjs.org", function() {
  this.echo(this.getTitle());
});

casper.run();