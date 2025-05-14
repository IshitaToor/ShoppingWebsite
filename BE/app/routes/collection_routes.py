from flask import Blueprint, jsonify
from app.models import Collection

bp = Blueprint('collection_routes', __name__, url_prefix='/api/collections')

@bp.route('/all', methods=['GET'])
def get_collections():
    collections = Collection.query.all()
    return jsonify([{
        "id": collection.id,
        "name": collection.name,
        "description": collection.description,
        "image": collection.image,
    } for collection in collections])