import uuid
# from http import HTTPStatus
import json
from flask import Flask, request
import databaseService as db
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/user/<id>')
def getUser(id):
    return json.dumps(db.getUser(id))

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