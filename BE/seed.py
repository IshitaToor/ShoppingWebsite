from app import create_app, db
from app.models import Product

app = create_app()

with app.app_context():
    product1 = Product(name="T-Shirt", price=19.99, description="Comfortable cotton t-shirt", image_url="tshirt.jpg")
    product2 = Product(name="Jeans", price=49.99, description="Stylish denim jeans", image_url="jeans.jpg")
    product3 = Product(name="Sneakers", price=79.99, description="Durable running sneakers", image_url="sneakers.jpg")

    db.session.add_all([product1, product2, product3])
    db.session.commit()

    print("Database seeded successfully!")