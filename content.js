chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try{
            document.getElementById("checkout_shipping_address_first_name").value = request.firstName;
            document.getElementById("checkout_shipping_address_last_name").value = request.lastName;
            document.getElementById("checkout_shipping_address_address1").value = "address"
            sendResponse({status: "Success!"});
        } catch (error){
            console.log(error);
            sendResponse({status: "Exception occurred!"});
        }
    }
);

