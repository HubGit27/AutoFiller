//https://github.com/developedbyed/vanilla-todo/blob/master/app.js

let profiles = [
    {profileName: 'TestProfile', firstname: 'Bob', lastname:'Bobby'}
];
chrome.storage.sync.get(["profiles"], (res) => {
    profiles = res.profiles
    const HTML = profiles.map( profile => `<div class="profileInList">${profile.profileName}
                                           <button class="editProfile" id=editProfile${profile.profileName}><i class="fa-solid fa-pencil"></i> </button>
                                           <button class="deleteProfile" id=deleteProfile><i class="fa fa-trash"></i> </button></div> ` ).join('');
    document.getElementById("profile-list").innerHTML = '<div>' + HTML + '</div>'
})

let sel = document.getElementById('sel');

//Create profile button; sets elements into an object and pushes it to an array; fills the select menu with the new object
document.getElementById('createProfile').addEventListener('click', function(){
    let duplicate = false
    for (i = 0; i < profiles.length; i++){
        if (profiles[i].profileName === document.getElementById("profileName").value ){
            duplicate = true
        }
    }

    if (duplicate === true){
        document.getElementById("profileName").style.color = "red"
    } else if (document.getElementById("profileName").value.length === 0){
        document.getElementById("profileName").style.color = "red"
    } else{
        document.getElementById("profileName").style.color = "black"
        const profile = { 
            profileName : document.getElementById("profileName").value,
            firstName : document.getElementById("firstName").value,
            lastName : document.getElementById("lastName").value
            };
            profiles.push(profile);
            chrome.storage.sync.set({profiles,},()=>{
            });
            lastElement = profiles[profiles.length-1];
            if(sel != null){
                sel.innerHTML += '<option value="' + lastElement.ID + '">' + lastElement['profileName'] + '</option>';
            }
        
            const HTML = profiles.map( profile => `<div class="profileInList">${profile.profileName}
                                                     <button class="editProfile" id=editProfile${profile.profileName}><i class="fa-solid fa-pencil"></i> </button>
                                                    <button class="deleteProfile" id=deleteProfile${profile.profileName}><i class="fa fa-trash"></i> </button></div> ` ).join('');
            document.getElementById("profile-list").innerHTML = '<div>' + HTML + '</div>'
            
            console.log(profiles)
    }
});

//clear profile button; emptys array; clears dropdown menu
document.getElementById('clearProfiles').addEventListener('click', function(){
    profiles = []
    chrome.storage.sync.set({profiles,},()=>{
        var i, L = sel.options.length - 1;
        for(i = L; i >= 0; i--) {
            sel.remove(i);
        }
    });

    document.getElementById("profile-list").innerHTML = '<div> </div>'
})

document.getElementById("deleteProfile").addEventListener('click', function(e){
    console.log(e.target)
    for (i = 0; i < profiles.length; i++){
        if (profiles[i].profileName === profile.profileName ){
            console.log(profileName)
        }

    }
})

