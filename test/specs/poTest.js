const loginPage = require('../pageObjects/loginPage')
const LoginPage =  require ('../pageObjects/loginPage')
const shopPage = require('../pageObjects/shop')
const reviewPage = require('../pageObjects/reviewPage')
const expectchai = require('chai').expect
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eCredentials = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Page Object test', ()=>{
    

    credentials.forEach( ({username, password})  =>{
    xit('Login page', ()=>{

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        loginPage.Login(username, password)
        console.log(loginPage.alert.getText() + "is the text I am seeng on the screen")

        browser.waitUntil(()=>loginPage.signIn.getAttribute('value') === 'Sign In',
        {timeout: 4000, timeoutMsg: 'Error message did not appear'})
        console.log(loginPage.alert.getText() + "is the text I am seeng on the screen")
        browser.pause()

        


    })})


    e2eCredentials.forEach(({products})=>{

    
    xit('End to End test', ()=>{

        //var products = ["Blackberry", "Nokia Edge"]

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

        loginPage.Login("rahulshettyacademy","learning" )
        shopPage.checkout.waitForExist()
        shopPage.addProductToCart(products)
        shopPage.checkout.click()

       const sumOfProducts = reviewPage.sumOfProducts()
        const totalIntValue = reviewPage.totalFormatedPrice()
        expectchai(sumOfProducts).to.equal(totalIntValue)

        $(".btn-success").click()
        $("#country").setValue("Unit")
        $(".lds-ellipsis").waitForExist({reverse:true})
        $("=United States of America").click()
        $("input[type='submit']").click()
        expect($(".alert-success")).toHaveTextContaining("Success")



        browser.pause(3000)

    })})
})