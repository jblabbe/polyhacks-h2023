import time
from flask import Flask
from flask import request
import databaseService as db

app = Flask(__name__)

@app.route('/user/<id>')
def getUser(id):
    return { 'user': db.getUser(id) }

@app.route('/user', methods=['POST'])
def createUser():
    # db.createUser(request.json)
    return { 'user': "" }

@app.route('/scores/<user>', methods=['PATCH'])
def updateHistory(user):
    # mongo service to add score to the user
    return { 'user': "" }

@app.route('/scores/<user>')
def getHistory(user):
    # mongo service to get scores for the user
    return { 'user': "" }