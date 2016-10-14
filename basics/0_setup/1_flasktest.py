from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

#do not call ur application flask.py as that would conflict with flask itself

"""
(my_app_venv) [root@localhost my_app]# export FLASK_APP=flasktest.py 
(my_app_venv) [root@localhost my_app]# flask run
 * Serving Flask app "flasktest"
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)

Goto http://localhost:5000/ and we can see hello world. 

Debugging:-
	$ export FLASK_DEBUG=1
	$ flask run
	(On Windows you need to use set instead of export).

URL:-	
http://flask.pocoo.org/docs/0.11/quickstart/#what-to-do-if-the-server-does-not-start
	
"""