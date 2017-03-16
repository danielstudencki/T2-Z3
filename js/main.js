var urlAddr = "https://jsonplaceholder.typicode.com/users";

function fetchCloned(url, success, error){

    var xhr = new XMLHttpRequest();

    if(success) {

        xhr.onload = function(e) {
            success(this.response);
        };

        if(error) {
            xhr.onerror = function(e) {
                var msg = "Error, not loaded",
                    srvResponse = this.response;
                error({
                    message: msg,
                    response: srvResponse
                })
            };
        };

    };
    
        xhr.open("GET", url)
        xhr.send();

};

console.log('Pobierz dane z serwera za pomocą funkcji fetchCloned([url] [, success] [, error])');