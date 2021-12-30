document.getElementById('fill').addEventListener('click', function(){
    chrome.action.onClicked.addListener((tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: testautofill,
        });
    });
});

function testautofill(){
    console.log('test');
    document.getElementById('checkout_email').value = 'test';
}