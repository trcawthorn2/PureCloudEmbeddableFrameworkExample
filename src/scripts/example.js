document.addEventListener('DOMContentLoaded',function(){
    
    document.getElementById("clickToDial").addEventListener("click", clickToDial);
    document.getElementById("addAssociation").addEventListener("click", addAssociation);
    document.getElementById("addAttribute").addEventListener("click", addAttribute);
    
    window.addEventListener("message", function(event) {
        var message = JSON.parse(event.data);
        if(message){
            if(message.type == "screenPop"){
                document.getElementById("screenPopPayload").value = event.data;
            } else if(message.type == "processCallLog"){
                document.getElementById("processCallLogPayLoad").value = event.data;
            }
        }

    });

    function clickToDial() {
        console.log('process click to dial');
        document.getElementById("softphone").contentWindow.postMessage(JSON.stringify({
            type: 'clickToDial',
            data: { number: '3172222222', autoPlace: true }
        }), "*");
    }

    function addAssociation() {
        console.log('process add association');
        document.getElementById("softphone").contentWindow.postMessage(JSON.stringify({
            type: 'addAssociation',
            data: JSON.parse(document.getElementById("associationPayload").value)
        }), "*");
    }

    function addAttribute() {
        console.log('process add attribute');
        document.getElementById("softphone").contentWindow.postMessage(JSON.stringify({
            type: 'addAttribute',
            data: JSON.parse(document.getElementById("attributePayload").value)
        }), "*");
    }

})
