import uuid
from http import HTTPStatus
from flask import Flask, request
import databaseService as db
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/user/<id>')
def getUser(id):
    return str(db.getUser(id))

@app.route('/user', methods=['POST'])
def createUser():
    contentType = request.headers.get('Content-Type')
    if (contentType == 'application/json'):
        user = request.json
        id = str(uuid.uuid1())
        user['id'] = id
        # set userId in local storage
        db.createUser(user)
        return HTTPStatus.CREATED
    return HTTPStatus.BAD_REQUEST

@app.route('/scores/<id>', methods=['PATCH'])
def updateHistory(id):
    db.updateHistory(id, request.json)
    return HTTPStatus.OK

@app.route('/scores/<id>')
def getHistory(id):
    return str(db.getHistory(id))

@app.route('/baseline/<id>', methods=['PATCH'])
def updateBaseline(id):
    db.updateBaseline(id, request.json)
    return HTTPStatus.OK