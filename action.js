function logMessage(msg){
    chrome.tabs.executeScript({code:"console.log('"+msg+"')"});
}

document.getElementById('fill').addEventListener('click', function(){
    console.log("test")
    chrome.action.onClicked.addListener((tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: testautofill(),
        });
    });
});

function testautofill(){
    logMessage("logmessage")
    console.log("test autofill")
    var myvalue = "Hi";
    document.getElementById('checkout_email').value = "hi"
    document.getElementById('checkout_email').setAttribute('value', myvalue);
}