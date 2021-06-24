import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { LoginContext } from './../context/login';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../reducer/login';
import axios from 'axios';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const state = useSelector((state) => {
		// specify which state to subscribe to (state tree => reducer => state name )
		return {
			token: state.loginReducers.token,
		};
	});

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState('');

	// function saveToken(token) {
	// 	const user = jwt.decode(token);
	// 	if (user) {
	// 		dispatch(setToken(token));
	// 		setUserId(user.userId);
	// 		localStorage.setItem('token', token);
	// 	}
	// }

	const handleSubmit = () => {

		axios.post('http://localhost:5000/login', {
			email,
			password,
		})
			.then((result)=>{
                // saveToken(result.data.token);
				dispatch(setToken(result.data.token));
				history.push('/dashboard');
			})
			.catch((err) => {
				setMessage(err.response.data);
			})
		
	};


	return (
		<>
			<form onSubmit={handleSubmit}>
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
				<button>Login</button>
			</form>
			{message && <div>{message}</div>}
		</>
	);
};

export default Login;
