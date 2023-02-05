import pymongo as pymongo

user = "admin"
password = "Ztf0WU2q2XzmeI2o"
client = pymongo.MongoClient(f"mongodb+srv://{user}:{password}@cluster0.4pbnql3.mongodb.net/?retryWrites=true&w=majority")

users = client["moody"].get_collection("users")

def getUser(user_id):
    return users.find_one({ "id": user_id })

def createUser(user):
    users.insert_one(user)

def updateHistory(id, data):
    users.update_one({ "id": id }, { "$push": { "history": data } })

def getHistory(id):
    return users.find_one({ "id": id }, { "history": 1 })

def updateBaseline(id, data):
    return users.update_one({ "id": id }, { "$set": { "baseline": data } })