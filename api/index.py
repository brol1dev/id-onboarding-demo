from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/api/validate", methods=["POST"])
def validate():
    print("json: ", request.json)
    print("data: ", request.data)
    return jsonify({"valid": True})
