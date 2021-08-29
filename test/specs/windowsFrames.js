describe('Windows and Frames Miscellanous', ()=>{

    it('Parent and Child window switch', ()=> {

        $("[onclick*='openWindow']").click()
        let handles = browser.getWindowHandle()
        //0 index first window, 1 index child window
        browser.switchToWindow(handles[1])
        console.log(browser.getTitle())


    })
})