function sendAjaxQuery(url, data) {
    var stringifieddata = JSON.stringify(data);
    $.ajax({
        url: url ,
        data: stringifieddata,
        contentType: 'application/json',
        type: 'POST',
        success: function (dataR) {
            // no need to JSON parse the result, as we are using
            // dataType:json, so JQuery knows it and unpacks the
            // object for us before returning it
            var ret = dataR;
            // in order to have the object printed by alert
            // we need to JSON stringify the object
            document.getElementById('results').innerHTML = ""; //JSON.stringify(ret)
            if (ret.length>0){
                var element = document.createElement("div");

                for(var i=0; i<ret.length; i++){
                    element.appendChild("Test: " + results[i].test_title);
                    element.appendChild("Marks: " + results[i].marks);
                }
                document.getElementById('results').appendChild(element);
            }
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

function onSubmit(url) {
    var formArray = $("form").serializeArray();
    var data = {};
    for (index in formArray) {
        data[formArray[index].name] = formArray[index].value;
    }

    sendAjaxQuery(url, data);
    event.preventDefault();
}