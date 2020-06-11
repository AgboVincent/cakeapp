
it('should get the pages', function() {
    browser.get('http://localhost:4200');

    browser.get('http://localhost:4200/login');
    browser.get('http://localhost:4200/member');
    browser.get('http://localhost:4200/objective');
    browser.get('http://localhost:4200/keyResult');
    browser.get('http://localhost:4200/default');
    browser.get('http://localhost:4200/posts');



    
    // itTO('should run longer than protractors default', async () => {
    //     await delay(14000);
    // }, 15000);
    
    // const delay = ms => new Promise(res => setTimeout(res, ms))
});
