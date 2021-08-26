const expectchai = require('chai').expect

describe('Functional Testing on Application', ()=>{

    xit('Scrolling and Mouse Hover', ()=>{
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")

        $("#mousehover").scrollIntoView();
        $("#mousehover").moveTo()
        $("=Top").click()
        
    })

    it('Double click', ()=>{
        browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")

        $("button").doubleClick()
        browser.pause(3000)
        console.log(browser.isAlertOpen())
        expectchai(browser.isAlertOpen()).to.be.true
        console.log(browser.getAlertText())
        expectchai(browser.getAlertText()).to.be.equal("You double clicked me.. Thank You..")
        browser.acceptAlert()
    })



})