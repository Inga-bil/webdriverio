describe('Ecommerce Application', ()=>{

    it('End to End test', ()=>{

        var products = ["Blackberry", "Nokia Edge"]

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

        const username = $("#username")
        username.setValue("rahulshettyacademy")
        const password = $("#password")
        password.setValue("learning")

        $("#signInBtn").click()

        const link = $("*=Checkout")
        link.waitForExist()
        console.log(browser.getTitle())

        let cards = $$("div[class='card h-100']")
        cards.filter(card => products.includes(card.$("div h4 a").getText()))
        .map(productCard => productCard.$(".card-footer button").click())
        link.click()

        productPrices = $$("//tr/td[4]/strong")
        //getText
        //format it and convert into integer and apply sum on all 
        const sumOfProducts = productPrices.map(productPrice =>parseInt(productPrice.getText().split(".")[1].trim()))
        .reduce((acc,price)=> acc+price, 0)
        console.log(sumOfProducts)

        browser.pause(3000)
        


        

    })
})