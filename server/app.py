from deepface import DeepFace
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/validate", methods=["POST"])
def validate():
    request_json = request.get_json()
    print("Received new request with json body")

    print("About to compare images")
    # Deepface accepts b64 encoded images
    result = DeepFace.verify(request_json["frontImg"], request_json["photoImg"])

    if "verified" not in result:
        print("verified key not present in Deepface result")
        return jsonify({"valid": False})

    verified = result["verified"]
    print("Compared images successfully: ", verified)

    if verified:
        return jsonify({"valid": True})
    return jsonify({"valid": True})


@app.route("/api/statuz")
def statuz():
    return jsonify({"status": "ok"})
