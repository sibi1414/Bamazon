const Product = function(id,name,dept,price,qty) {
	let data = {id,name,dept,price,qty};
	data.print = () => {
		return `ID: ${data.id} \tName: ${data.name} \tDept: ${data.dept} \tPrice: \$${data.price.toFixed(2)} \tQuantity: ${data.qty}`;
	};
	return data;
}

module.exports = Product;