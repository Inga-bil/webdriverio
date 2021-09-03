const expectchai = require('chai').expect

describe('Functional Testing on Application', ()=>{

    xit('Scrolling and Mouse Hover', ()=>{
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")

        $("#mousehover").scrollIntoView();
        $("#mousehover").moveTo()
        $("=Top").click()
        
    })

    xit('Double click', ()=>{
        browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")

        $("button").doubleClick()
        browser.pause(3000)
        console.log(browser.isAlertOpen())
        expectchai(browser.isAlertOpen()).to.be.true
        console.log(browser.getAlertText())
        expectchai(browser.getAlertText()).to.be.equal("You double clicked me.. Thank You..")
        browser.acceptAlert()
    })

    xit('Web Tables Sort Validations', ()=>{

        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")

        $("tr th:nth-child(1) ").click()
        //step 1 (assume that the list is sorted) retrive list of veggy namesinto an array
        //step 2 sort the array A ->Array B 
        //compare array a and array b
        const veggiesLocators = $$("//tr/td[1]") //collection of locations Array
        const veggiesNames = veggiesLocators.map(veggie=>veggie.getText()) //collection of test Array

        console.log(veggiesNames)
        const sortedVeggies = veggiesNames.sort()
        console.log(sortedVeggies)
        //compare Arrays

        expectchai(veggiesNames).to.equal(sortedVeggies)



    })

    it('Web Tables Filter Validations Smoke', () =>{

        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")

        $("input[type = 'search']").setValue("tomato")
        //collect the elements provided in this filter
       const veggieLocators =  $$("tr td:nth-child(1)")
       expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
       console.log(veggieLocators[0].getText())
       expect(veggieLocators).toHaveTextContaining("Tomato")


    })



})