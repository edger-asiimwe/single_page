# SINGLE PAGE APPLICATION USING FLASK
A simple Single Page Flask Application

This project shows how to create a simple Single Page Application with HTML, CSS and Javascript. I used Python as the server language using the Flask Web Framework.

Whereas traditional applications render the whole page at once, this means that if we wanted to change the value of a sinle HTML attribute, we would have to make a new 
request to the server which would refresh the whole page again. This takes a lot of time and makes the whole experience bad.

Leveraging on AJAX - Asynchronous JavaScript And XML (Ajax is a set of web development techniques that uses various web technologies on the client-side to create asynchronous
web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page).
It is possible to create single page application without necessary using complex frontend frameworks and libraries.

### HOW TO RUN
- Create a directory on your computer using `mkdir single-page`
- Change to that directory using `cd single-page`
- Open your preferred text editor, I use Visual Studio code
- Create a virtual enviroment `python3 -m venv venv`
- Activate the enviroment
- And pip install flask
- Clone the remote Github repo
- run the application first setting the application variables
- `set FLASK_APP=application.py`
- `set FLASK_ENV=development`
- `flask run`
Checkout pictures of the final program in the `static` folder of the repo
I assume your running it on a windows computer in the terminal

`Feel free to create an issue in case you have a question`
