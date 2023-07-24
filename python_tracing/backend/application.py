from random import randint
from flask import Flask

application = Flask(__name__)

@application.route("/rolldice")
def roll_dice():
    return str(do_roll())

def do_roll():
    return randint(1, 6)

@application.route("/getRequest", methods=['GET'])
def get_request():
    return "success", 200