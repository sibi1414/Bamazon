DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop","Electronics",500.00,20),
("TV","Electronics",800.00,10),
("Water Bottle","Health",10.00,100),
("Ball","Toy",1.00,80),
("Shampoo","Beauty",15.00,60),
("Table","Home",50.00,40),
("Tape","Office",3.00,300),
("Shirt","Clothing",5.00,150),
("Shorts","Clothing",10.00,200),
("Jeans","Clothing",20.00,100);

SELECT * FROM products;