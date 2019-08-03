CREATE DATABASE IF NOT EXISTS shopping_app;
USE shopping_app;

CREATE TABLE IF NOT EXISTS product (
    prod_name VARCHAR(32) PRIMARY KEY,
    price DECIMAL(16,2),
    category VARCHAR(32),
    image_path VARCHAR(128)
);


INSERT INTO product
VALUES 
('Banana', 2.15, 'Fruit', 'banana.jpg'),
('Broccoli', 3.5, 'Vegetable', 'broccoli.jpg'),
('Carrot', 4.99, 'Vegetable', 'carrot.jpg'),
('Lemon', 9.99, 'Fruit', 'lemon.jpg'),
('Watermelon', 20.01, 'Fruit', 'watermelon.jpg');

