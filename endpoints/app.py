from flask import Flask, jsonify, request
from flask_cors import CORS
from treatment import first
app = Flask(__name__)

cors = CORS(app)

@app.route('/', methods=["POST"])
def hello():
    data = request.json
    truc = first.treat(data)
    return truc
    
