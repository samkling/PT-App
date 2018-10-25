from bottle import Bottle, run
#class
from Controller.StudentController import StudentController

app = Bottle()

@app.route('/hello')
def hello():
    return "Hello World!"

@app.route('/student')
def main():
    return StudentController().getStudentById(1)

run(app, host='localhost', port=8080)