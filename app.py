import os
from flask import Flask, render_template, request, redirect, url_for, flash
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
# Required for flash messages; change to a secure random value
app.secret_key = os.getenv('secret_key')

# Get the password from the .env file
PASSWORD = os.getenv('PASSWORD')

if not PASSWORD:
    raise ValueError("Password not set. Define PASSWORD in the .env file.")


@app.route('/', methods=['GET', 'POST'])
def password():
    if request.method == 'POST':
        entered_password = request.form.get('password')
        if entered_password == PASSWORD:
            return redirect(url_for('protected'))
        else:
            flash('Incorrect password. Please try again.')
    return render_template('password.html')


@app.route('/protected')
def protected():
    return render_template('protected.html')


if __name__ == '__main__':
    app.run(debug=True)
