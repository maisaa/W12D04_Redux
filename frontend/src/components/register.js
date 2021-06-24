import React, {  useState } from 'react';
// import { RegisterContext } from './../context/register';
import axios from 'axios';

const Register = () => {
	// const registerContext = useContext(RegisterContext);


	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState(0);
	const [counrty, setCountry] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('60a881b61c678a049ca406fe');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:5000/users', {
				firstName,
				lastName,
				age,
				counrty,
				email,
				password,
				role,
			});
			console.log("....res front..",res.data);

			setMessage('The user has been created successfully');
		} catch (error) {
			setMessage('Error happened while register, please try again');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="firstName here"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="lastName here"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<input
					type="number"
					placeholder="age here"
					onChange={(e) => setAge(e.target.value)}
				/>
				<input
					type="text"
					placeholder="country here"
					onChange={(e) => setCountry(e.target.value)}
				/>
				<input
					type="email"
					placeholder="email here"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password here"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Register</button>
			</form>

			{message && <div>{message}</div>}
		</>
	);
};

export default Register;
