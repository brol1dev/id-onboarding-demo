from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/python")
def hello_world():
    print("hello world")
    return jsonify({"message": "Hello World!"})
