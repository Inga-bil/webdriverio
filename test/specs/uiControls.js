describe('Ecommerce application', ()=>{

    it('IU Controls', () =>{

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
        dropdown.getValue() //stud chail is one library which supports assertions(compares values and strings)
        expect(dropdown.getValue()).

        
       
       

    })
})