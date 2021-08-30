describe('Windows and Frames Miscellanous', ()=>{

    xit('Parent and Child window switch', ()=> {

        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")

        $("#openwindow").click()
        let handles = browser.getWindowHandles()
        //0 index first window, 1 index child window
        browser.switchToWindow(handles[1])
        console.log(browser.getTitle())

        browser.switchToWindow(handles[0])
        console.log(browser.getTitle())


    })

    xit('Switch windows and grab text', ()=>{


        browser.url("https://rahulshettyacademy.com/#/index")
        const title = browser.getTitle()
        console.log(title)

        browser.newWindow("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("#name").setValue(title)

        browser.switchWindow(title)

        browser.pause(3000)

    })

    it('Frames switch',()=>{

        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")

        $("#mousehover").scrollIntoView()
        console.log($$("a").length)
        browser.switchToFrame($("[id ='courses-iframe']"))
        console.log($("=Courses").getTagName())
        console.log($$("a").length)
        browser.switchToFrame(null)
        console.log($$("a").length)

    })
})