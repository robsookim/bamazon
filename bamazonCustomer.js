var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("table"); 

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "RoFbnkm369!?$",
  database: "bamazon"
});

var numItem = 0; 

connection.connect(function(err) {
  if (err) throw err;
  productsAll();
});

function productsAll() {
  console.log("Select all products...\n"); 
  connection.query("SELECT * FROM products", 
  function(err, res) {
    if (err) throw err;
    console.log(table.table(makeArray(res)));
    for (var i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].id); 
      console.log("Product: " + res[i].product);
      console.log("Department: " + res[i].department);
      console.log("Price: " + res[i].price); 
      console.log("Quantity Left: " + res[i].quantity); 
    } 
  start(); 
  });
}

function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw console.log("connection error:" + err); 
  inquirer 
    .prompt([
      {
        name: 'selectId',
        type: 'input',
        message: 'What is the ID of the product you would like to buy:', 
      }, 
      {
        name: 'unitsBought',
        type: 'input',
        message: 'How many units would you like to buy?', 
      }
    ]).then (function (answers) {
      var query = "SELECT * FROM products WHERE ?"; 
      connection.query(query, {
        id: answers.selectId
      }, function (err,res){

        var inStock = res[0].quantity;
        var itemBought = answers.unitsBought; 

        if (inStock >= itemBought) {
          var leftInStock = inStock - itemBought; 
          var totalPrice = res[0].price * itemBought; 
          var itemPurchased = res[0].product; 

          console.log(totalPrice + " total price of items bought"); 

          connection.query(
            "UPDATE products SET ? WHERE ?", [
              {
                quantity: leftInStock
              },
              {
                id: answers.selectId
              }
            ], 
            function (error) { 
              if (error) throw err; 
              console.log("\n\r"); 
              console.log("Order details:");
              console.log("Item bought " + itemPurchased);
              console.log("Quanity bought " + itemBought + " for $" + res[0].price);
              console.log("Total Cost: $" + totalPrice);
              console.log("\n\r");
              products(); 
            }
          ); 
        } else {
          console.log("\n\r"); 
          console.log("Sorry, not enough of that product"); 
          console.log("\n\r"); 
          products(); 
        }
       });
    });
  });
}