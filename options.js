let profiles = [
    {profileName: 'TestProfile', firstname: 'Bob', lastname:'Bobby'}
];

let sel = document.getElementById('sel');

//Create profile button; sets elements into an object and pushes it to an array; fills the select menu with the new object
document.getElementById('createProfile').addEventListener('click', function(){
    console.log("button works");
    const profile = { 
    profileName : document.getElementById("profileName").value,
    firstName : document.getElementById("firstName").value,
    lastName : document.getElementById("lastName").value
    };
    profiles.push(profile);
    chrome.storage.sync.set({profiles,},()=>{
        console.log(profiles);
    });
    lastElement = profiles[profiles.length-1];
    sel.innerHTML += '<option value="' + lastElement.ID + '">' + lastElement['profileName'] + '</option>';
});

//clear profile button; emptys array; clears dropdown menu
document.getElementById('clearProfile').addEventListener('click', function(){
    profiles = []
    chrome.storage.sync.set({profiles,},()=>{
        var i, L = sel.options.length - 1;
        for(i = L; i >= 0; i--) {
            sel.remove(i);
        }
    });
})

