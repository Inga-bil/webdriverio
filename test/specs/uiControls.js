const expectchai = require('chai').expect

describe('Ecommerce application', ()=>{

    xit('IU Controls', () =>{

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

        const username = $("//input[@name = 'username']")
        username.setValue("rahulshettyacademy")
        const password = $("#password")
        password.setValue("learning")

        const radioButtons = $$(".customradio")
        userDropDown = radioButtons[1]
        userDropDown.$(".radiotextsty").click()

        const modal = $(".modal-body")
        modal.waitForDisplayed()
        $("#cancelBtn").click()

        console.log(userDropDown.$(".radiotextsty").isSelected())

        userDropDown.$(".radiotextsty").click()
        //modal = $(".modal-body")
        modal.waitForDisplayed()
        $("#okayBtn").click()
        radioButtons[0].$(".radiotextsty").click()

        //check if the popup is not displayed. we use assertion
        expect(modal).not.toBeDisplayed() //negation assertion
        

        const dropdown = $("select.form-control")
        dropdown.selectByAttribute('value', 'teach')
        dropdown.selectByVisibleText('Consultant')
        dropdown.selectByIndex(0)
        //assertion
        dropdown.getValue() 
        //stud chail is one library which supports assertions(compares values and strings)
        expectchai(dropdown.getValue()).to.equal("stud")
    })

    it('Dynamic dropdown controls Smoke',() =>{


        browser.url("/AutomationPractice/")

        $("#autocomplete").setValue("ind")
        browser.pause(2000)

        let items = $$("[class='ui-menu-item'] div")
       // for(var i = 0; i<items.length; i++)
        //{
        //    console.log(items[i].getText())
        //}
        const desiredLocator = items.filter(item => item.getText() === "Indonesia")
        desiredLocator[0].click()
        browser.pause(2000)

    })

    xit('Checkbox Identification', () => {

        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")

        const element = $$("input[type = 'checkbox']")
        element[1].click()
        console.log(element[1].isSelected())

        browser.saveScreenshot("screenshot.png")



    })
})