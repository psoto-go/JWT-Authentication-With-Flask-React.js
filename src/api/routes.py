"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/sign_up', methods=['POST'])
def sign_up_user():

    body_params = request.get_json()
    name = body_params.get("name",None)
    last_name = body_params.get("lastName", None)
    email = body_params.get("email", None)
    phone_number = body_params.get("phoneNumber", None)
    password = body_params.get("password", None)
    city = body_params.get("city", None)

    user1 = User(name=name, last_name=last_name, email=email, phone_number=phone_number, password=password, city=city)
    db.session.add(user1)
    db.session.commit()


    return jsonify({"msg":  "Usuario creado exitosamente"}), 200

@api.route('/sign_in', methods=['POST'])
def sign_in_user():

    body_params = request.get_json()

    email = body_params.get("email", None)
    password = body_params.get("password", None)

    if email == None or password == None:
        return jsonify({"msg" : "Error en el email o en la contraseña"}), 401
    
    user = User.query.filter_by(email=email).one_or_none()
    if not user or not user.check_password(password):
        return jsonify("Your credentials are wrong, please try again"), 401

    access_token = create_access_token(identity=user.serialize())
    return jsonify({"access_token":  access_token}), 200

@api.route("")