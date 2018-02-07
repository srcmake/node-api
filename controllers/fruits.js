// POST to Add function
module.exports.add = function(req, res)
	{
	console.log("Add function of Fruits called.");

	/* Insert code here to parse input for fruitname and quantity */

	/* Insert code here to update the fruit in the database */

	res.status = 200;
	var response = { status: "Success" };
	res.send(response);
	};

// POST to Subtract function
module.exports.subtract = function(req, res)
	{
	console.log("Subtract function of Fruits called.");

	/* Insert code here to parse input for fruitname and quantity */

	/* Insert code here to update the fruit in the database */

	res.status = 200;
	var response = { status: "Success" };
	res.send(response);
	};

// GET from Check function
module.exports.check = function(req, res)
	{
	console.log("Check function of Fruits called.");
	
	// Read the parameters. 
	var fruitname = req.query.fruitname;
	console.log(fruitname);

	// Prepare the status code and response.
	res.status = 200;
	var response;

	// Instead of implementing the database, let's just return some hard coded responses.
	if(fruitname == "apple") { response = { fruitname: "apple", quantity: 500 }; }
	if(fruitname == "banana") { response = { fruitname: "banana", quantity: 14 }; }
	if(fruitname == "peach") { response = { fruitname: "peach", quantity: 3 }; }
	if(fruitname == "grape") { response = { fruitname: "grape", quantity: 0 }; }
	if(fruitname == "orange") { response = { fruitname: "orange", quantity: 22 }; }

	// Send the response.
	res.send(response);
	};
