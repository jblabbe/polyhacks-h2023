import uuid
# from http import HTTPStatus
from flask import Flask, request
import databaseService as db

app = Flask(__name__)

@app.route('/user/<id>')
def getUser(id):
    return str(db.getUser(id))

@app.route('/user', methods=['POST'])
def createUser():
    user = request.json
    id = str(uuid.uuid1())
    user['id'] = id
    # set userId in local storage
    db.createUser(user)
    return "201"


@app.route('/user/<id>', methods=['PATCH'])
def updateUser(id):
    db.updateUser(id, request.json)
    return "200"