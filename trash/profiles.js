// let profiles = [
//     {profileName: 'TestProfile', firstname: 'Bob', lastname:'Bobby'}
// ];

// //Creates profile object and pushes it to array on 'create' button
//     document.getElementById('createProfile').addEventListener('click', function(){
//         let profile = {
//             profileName : document.getElementById("profileName").value,
//             firstname : document.getElementById("firstName").value,
//             lastname : document.getElementById("lastName").value
//         }
//         if (profiles.some(e => e.profileName === profile.profileName)){
//             console.log("profile already exist")
//         }else {
//             profiles.push(profile);
//             populateSelect();
//         }
        
//     });

// var ele = document.getElementById('sel');
// //Putting in one profile into profiles[]
// function populateSelect(){
//     lastElement = profiles[profiles.length-1];
//     ele.innerHTML += '<option value="' + lastElement.ID + '">' + lastElement['profileName'] + '</option>';
// }
// //Updating The Drop down menu with a profile from profiles[]
// function populateAll() {
//     profiles.forEach(function(b) {
//     ele.innerHTML += '<option value="' + b.profileName + '">' + b['profileName'] + '</option>';
//     })
// }
// populateAll()

