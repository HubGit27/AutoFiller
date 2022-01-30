
let sel = document.getElementById('sel');

//loads up all the stored profiles and displays them on dropdown menu
chrome.storage.sync.get(["profiles"], (res) => {
    profiles = res.profiles
    profiles.forEach(function(b) {
        sel.innerHTML += '<option value="' + b.profileName + '">' + b['profileName'] + '</option>';
        })
})

function currentProfile() { //grabs selected profile
    selected = sel.options[sel.selectedIndex].index;
    return profiles[selected];
}

//Fill button; 
document.getElementById('fill').addEventListener('click', function(){
    current = currentProfile()
    firstName = current.firstName
    lastName = current.lastName
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            firstName: firstName,
            lastName: lastName
        }, function(response) {
            console.log(response.status);
        });
      });
})

//settings button to open options;
document.getElementById('settings').addEventListener("click", function(){
    chrome.runtime.openOptionsPage();
})


    // return new Promise(function(resolve,reject){
    //     chrome.runtime.sendMessage('addProfile', (response) => {
    //         console.log('Profiles sent to backend');
    //         resolve(); 
    //     });
    // })