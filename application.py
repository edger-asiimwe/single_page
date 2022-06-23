from cgitb import reset
from flask import Flask, render_template
from random import randint

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/item')
def item():
    return f'Your new number is: {str(randint(0, 100))}'

if __name__ == '__main__':
    app.run(debug=True)
