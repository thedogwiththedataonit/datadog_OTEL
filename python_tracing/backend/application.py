from random import randint
from flask import Flask, jsonify
from flask_cors import CORS
from opentelemetry import trace

application = Flask(__name__)
cors = CORS(application)
tracer = trace.get_tracer(__name__)

@application.route("/rolldice")
def roll_dice():
    with tracer.start_as_current_span("roll_dice"):
        print("Rolling dice")
        return jsonify({"dice": do_roll(), "trace": str(trace.get_current_span().get_span_context().trace_id)}), 200

def do_roll():
    return randint(1, 6)

@application.route("/getRequest", methods=['GET'])
def get_request():
    return "success", 200


