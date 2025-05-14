from flask import Blueprint, jsonify
from app.models import Product

bp = Blueprint('products', __name__, url_prefix='/api/products')


@bp.route('/all', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'description': p.description,
        'image': p.image,
        'category': p.category
    } for p in products])
