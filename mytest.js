describe ("it is sample test", function(){
	
	it("where we actually test",function(){

		browser.get("https://core.opentext.com/users/#/signin");
        browser.driver.manage().window().maximize();
		element(by.css("#emailInput")).sendKeys("npotha@opentext.com");
        element(by.css("#passwordInput")).sendKeys("Opentext@1");
        element(by.css(".btn.btn-default")).click();

		element(by.css(".profile-display-name>span:nth-child(1)")).getText().then(function(text){
		console.log('login successful with user : '+text);
		})
   
	
	});
});
