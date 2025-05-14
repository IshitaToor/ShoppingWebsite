from flask import Blueprint, request, jsonify
from app.models import Order, db

bp = Blueprint('orders', __name__, url_prefix='/api/orders')


@bp.route('/', methods=['POST'])
def place_order():
    data = request.json
    order = Order(user_id=data['user_id'], product_ids=','.join(map(str, data['product_ids'])), total_price=data['total_price'])
    db.session.add(order)
    db.session.commit()
    return jsonify({'message': 'Order placed successfully'})