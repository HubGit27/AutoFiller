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

function search(find){
    var word = find,
    queue = [document.body],
    curr
    ;
    while (curr = queue.pop()) {
        if (!curr.textContent.match(word)) continue;
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE : // 3
                    if (curr.childNodes[i].textContent.match(word)) {
                        console.log("Found!");
                        console.log(curr);
                        // you might want to end your search here.
                    }
                    break;
                case Node.ELEMENT_NODE : // 1
                    queue.push(curr.childNodes[i]);
                    break;
            }
        }
    }
}

search("Profile Name");