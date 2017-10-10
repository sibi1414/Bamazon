const mysql = require("mysql");
const inquirer = require("inquirer");
const Product = require("./product");

const products = [];

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: " ",
	database: "bamazon"
});

connection.connect(function(err) {
	if(err) throw err;
	getAllProducts();
});


function getAllProducts() {
	connection.query("SELECT * FROM products", function(err,res) {
		for(let i = 0; i < res.length; i++) {
			// console.log(res[i]);
			let newProduct = Product(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
			console.log(newProduct.print());
			products.push(newProduct);
		}

		userPrompt();
	});
}

function userPrompt() {
	inquirer.prompt([ {
		type: "input",
		name: "id",
		message: "What is the ID# of the product you want to buy?"
	}, {
		type: "input",
		name: "qty",
		message: "How many units do you want to buy?"
	}]).then(function(answers) {
		let chosenItem = products.find(function(item) {
			return item.id == answers.id;
		});

		if(answers.qty <= chosenItem.qty) {
			let newQty = chosenItem.qty - answers.qty;
			// query update SQL
			connection.query("UPDATE products SET ? WHERE ?", [{
				stock_quantity: newQty
			},{
				item_id: answers.id
			}]);

			console.log(`Total: \$${(answers.qty*chosenItem.price).toFixed(2)}`);
		} else {
			console.log("Insufficient quantity! Please chose a smaller quantity.");
		}

		connection.end();
	});

}