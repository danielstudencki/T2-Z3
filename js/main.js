var urlAddr = "https://jsonplaceholder.typicode.com/users";

function fetchCloned(url, success, error){

    var xhr = new XMLHttpRequest();

    xhr.onload = function(e) {
        success(this.response);
    }; 

    xhr.onerror = function(e) {
        var msg = "Not loaded, because there are errors",
            srvResponse = this.response;
        error({
            message: msg,
            response: srvResponse
        })
    };

    xhr.open("GET", url)
    xhr.send();   
    
}