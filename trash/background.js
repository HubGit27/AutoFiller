// //Receiving everything to the backend
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === 'addProfile') { //adding a profile and putting it to array
//         pushProfiles.then(res => {
//             console.log("profiles pushed")
//         })
//     } else if (request.message === 'editProfile') {
//         sendResponse("profile edited");
//     } else if (request.message ==- 'deleteProfile'){
//         sendResponse('profile deleted');
//     }
// });

// let profiles = [
//     {profileName: 'TestProfile', firstname: 'Bob', lastname:'Bobby'}
// ];

// chrome.storage.sync.set({storedProfiles: profiles}, function() {
//     console.log('Value is set to ' + profiles);
//   });

// function pushProfiles(){
//     chrome.storage.local.get(value =>{
//         profiles.push(value);
//     })
// }
