function NextItem() {

    //Create an XMLHttp object.
    //This object has many methods that allow you to a couple of things including

    //.open - which creates a request to the server
    //.send - which sends the request
    //.onload - this has the data from the server once its returned
    xhttp = new XMLHttpRequest();

    //Define a callback function which will be called once we have a response from the server
    //A callback function can be called inside another function
    xhttp.onload = function() {
        //User JS DOM to manipulate the contents of the HTML
        document.getElementById("content").innerHTML = this.responseText;
    }


    //Create a connection to the localhost. Replace it with the URL of your flask application
    xhttp.open("GET", "http://127.0.0.1:5000/item");

    //This makes the actual call to the server
    xhttp.send();
}