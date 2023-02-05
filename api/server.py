import uuid
# from http import HTTPStatus
import json
from flask import Flask, request
import databaseService as db
import model.model as model
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

@app.route('/history/<id>', methods=['POST'])
def addHistory(id):
    user = db.getUser(id)

    newHistory = request.json
    user['history'].append(newHistory)

    processBaseline = model.get_actions(user['history'])
    user['baseline']['sleep'] = processBaseline['sleep_mean']
    user['baseline']['exercise'] = processBaseline['exercise_mean']
    user['baseline']['screentime'] = processBaseline['screentime_mean']

    user['actions']['sleep'] = str(processBaseline['sleep_action'])
    user['actions']['exercise'] = str(processBaseline['exercise_action'])
    user['actions']['screentime'] = str(processBaseline['screentime_action'])

    db.updateUser(id, user)

    return "200"

@app.route('/users/names')
def getUserNames():
    return json.dumps(db.getUsersNames());
