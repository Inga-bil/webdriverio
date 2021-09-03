describe('Ecommerce application', ()=>{

  
    it('Login Fail page title-Smoke', () =>
    {
        //webdriverIO code
        browser.url("https://the-internet.herokuapp.com/login")
        //console.log(browser.getTitle())
       

        //check is the title is the one that we need (the correct one)
       expect(browser).toHaveTitleContaining("The Internet")

       const username = $("#username");
       username.setValue("Hello World");
       

       const password = $("//*[@name = 'password']");
       password.setValue("1212hgjhvhgv");

       const login = $("//*[@type = 'submit']");
       login.click();

       const errorMessage = $(".subheader");
       console.log (errorMessage.getText() + "is the message that is shown on the screen");

       //assersion on the text that is prsent on the screen to verify if it is the right text

       $("h4.subheader").getText();
       expect($("h4.subheader")).toHaveTextContaining("This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.")

       browser.pause(3000)
       

    })  



    xit('Login Success page title', () =>
    {

        browser.url("https://the-internet.herokuapp.com/login")

        const username = $("#username");
       username.setValue("tomsmith");
       

       const password = $("//*[@name = 'password']");
       password.setValue("SuperSecretPassword!");

       const login = $("//*[@type = 'submit']");
       login.click();
       
       $("h4").getText()
       expect($("h4")).toHaveTextContaining("Welcome to the Secure Area. When you are done click logout below.")
       //linkedText
       const link = $("=Logout")
       link.waitForExist()
       expect(browser).toHaveUrlContaining("secure")

       const success = $(".subheader");
       console.log(success.getText() + "is the message that is shown when the user loged in")
       browser.pause(3000)


    })
    
    



})  

