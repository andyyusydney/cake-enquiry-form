var server = require("http-server/bin/http-server");
var Browser = require('zombie');
var assert = require('assert');
var browser = new Browser({ site: 'http://127.0.0.1:8080' });

describe('Cake Enquiry Form', function(){
	before(function(done) {
		browser.visit('/', done);
	});
	
	var error;
	describe('when data is incorrect', function () {
		before(function (done) {
			browser
				.fill('username', 'andy')
				.fill('usermail', 'zombie@underworld.dead');
			
			browser.choose('#other');
			
			var btn = browser.query("button[name='send']");
			error = browser.query('.error');
			browser.fire(btn, "click", function(){
				done();
			});
		});
	  
		it('should display error', function() {
			browser.assert.text(error, 'Please enter a value for the other celebration type');
		});
	});
})