DROP DATABASE IF EXISTS bamazon; 

CREATE DATABASE bamazon; 
USE bamazon; 

CREATE TABLE products 
(
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (50),
    department_name VARCHAR (50),
    price DECIMAL (10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('OXO On Barista Brain', "Kitchen Appliances", 199.95, 73); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('OXO Brew Conical Burr Coffee Grinder', "Kitchen Appliances", 99.95, 87); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Medelco #4 Cone Permanent Coffee Filter', "Kitchen Appliances", 7.35, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Chefs Star MF-2 Premier Automatic Milk Frother', "Kitchen Appliances", 39.99, 109); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Death Wish Ground Coffee', "Grocery", 19.99, 107);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Oatly Oat Milk Barista Edition', "Grocery", 32.00, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Califa Farms Almond Milk Creamer', "Grocery", 25.17, 32);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Laird Superfood Coffee Creamer Unsweetened', "Grocery", 23.74, 96);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hiware 9-Inch Long Handle Stirring Spoons', "Kitchen Appliances", 6.99, 125); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hummingbird Reusuable Glass Straws', "Kitchen Appliances", 24.99, 45);

SELECT * FROM products; 
