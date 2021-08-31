describe('Ecommerce Application', ()=>{

    it('End to End test', ()=>{

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

        const username = $("#username")
        username.setValue("rahulshettyacademy")
        const password = $(".form-control")
        password.setValue("learning")

        $("#signInBtn").click()

        browser.pause(2000)

    })
})