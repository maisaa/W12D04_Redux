const usersModel = require('./../../db/models/users');

const createNewAuthor = (req, res) => {
	const { firstName, lastName, age, country, email, password, role } = req.body;
	console.log(".......new user controller....",req.body)

	const user = new usersModel({
		firstName,
		lastName,
		age,
		country,
		email,
		password,
		role,
	});

	user
		.save()
		.then((result) => {
			console.log(".......new user controller....",result)
			res.status(201).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	createNewAuthor,
};
