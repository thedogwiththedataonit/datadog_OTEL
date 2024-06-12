from random import randint
from flask import Flask, jsonify
from flask_cors import CORS
import logging
import sys
from ddtrace import tracer



application = Flask(__name__)
cors = CORS(application)

root = logging.getLogger()
root.setLevel(logging.DEBUG)

handler = logging.StreamHandler(sys.stdout)
handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s %(levelname)s [%(name)s] [%(filename)s:%(lineno)d] '
          '[dd.service=%(dd.service)s dd.env=%(dd.env)s dd.version=%(dd.version)s dd.trace_id=%(dd.trace_id)s dd.span_id=%(dd.span_id)s] '
          '- %(message)s')
handler.setFormatter(formatter)
root.addHandler(handler)


@application.route("/rolldice")
def roll_dice():
    logging.info("Rolling dice")
    return jsonify({"dice": do_roll()}), 200

def do_roll():
    logging.info("Doing the roll... roll... roll...")
    return randint(1, 6)

@application.route("/getRequest", methods=['GET'])
def get_request():
    logging.info("GET request received")
    return "success", 200


if __name__ == "__main__":
    application.run(host="0.0.0.0", port=5500)

    


