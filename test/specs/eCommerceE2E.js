const expectchai = require('chai').expect

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
        const totalValue = $("//h3/strong").getText()
        const totalIntValue = parseInt(totalValue.split(".")[1].trim())
        expectchai(sumOfProducts).to.equal(totalIntValue)

        $(".btn-success").click()
        $("#country").setValue("Unit")
        $(".lds-ellipsis").waitForExist({reverse:true})
        $("=United States of America").click()
        $("input[type='submit']").click()
        expect($(".alert-success")).toHaveTextContaining("Success")



        browser.pause(3000)
        


        

    })
})