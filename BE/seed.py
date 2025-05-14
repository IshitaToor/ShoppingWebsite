from app import create_app, db
from app.models import Product

app = create_app()

products = [
    {"id": 1, "name": "White T-Shirt", "price": 450, "category": "Tops", "image": "images/white-tshirt.webp", "description": "A classic white t-shirt made from 100% cotton.", "is_featured": True},
    {"id": 2, "name": "Denim Jeans", "price": 700, "category": "Bottoms", "image": "images/denim-jeans.webp", "description": "Stylish and durable denim jeans for everyday wear.", "is_featured": True},
    {"id": 3, "name": "Formal Blazer", "price": 1400, "category": "Formal", "image": "images/formal-blazer.webp", "description": "A sleek formal blazer perfect for office or events.", "is_featured": False},
    {"id": 4, "name": "Running Shoes", "price": 800, "category": "Shoes", "image": "images/running-shoes.webp", "description": "Comfortable running shoes for all your fitness needs.", "is_featured": True},
    {"id": 5, "name": "Sunglasses", "price": 500, "category": "Accessories", "image": "images/sunglasses.webp", "description": "Stylish sunglasses to protect your eyes from the sun.", "is_featured": False},
    {"id": 6, "name": "Oversized", "price": 550, "category": "Hoodies", "image": "images/over-sized.webp", "description": "A cozy oversized hoodie for casual outings.", "is_featured": True},
    {"id": 7, "name": "Faux Leather Skirt", "price": 700, "category": "Outwear", "image": "images/faux-leather.jpg", "description": "A chic faux leather skirt for a bold fashion statement.", "is_featured": False},
]


with app.app_context():
    db.session.query(Product).delete()
    for product in products:
        db.session.add(Product(**product))
    db.session.commit()
    print("Database seeded successfully!")