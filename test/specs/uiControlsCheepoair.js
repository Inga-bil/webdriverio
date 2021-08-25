describe('Ecommerce application', ()=>{

    xit('IU Controls', () =>{

        browser.url("https://www.cheapoair.com/")

       const radioButtons = $$(".custom-control")
       oneWayRadioButton = radioButtons[2]

       oneWayRadioButton.$(".custom-control-label").click()

       

        browser.pause(3000)

        
       
       

    })
})