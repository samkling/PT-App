
class StudentController:
    def __init__(self):
        self.student = { '1': { 'id': 1, 'name': 'Sam', 'course': 'Computer Science'} }
    def getStudentById(self,id):
        return self.student[str(id)]