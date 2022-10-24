import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function User() {
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	useEffect(() => {
		console.log(token);
		axios
			.post('http://localhost:3000/api/user/userData', { id: token._id })
			.then((data) => {
				setUser(data.data[0]);
			});
	}, []);
	function logout() {
		localStorage.clear();
		navigate('/');
	}
	return (
		<div className='m-10'>
			<h1 className='my-10'>User Profile Page</h1>
			<div className=''>
				<p className='capitalize'>Name: {user.name} </p>
				<p>Email: {user.email} </p>
				<p>Account Create at : {new Date(user.date).toUTCString()} </p>
				<p>User ID: {user._id}</p>
			</div>
			<div onClick={logout}>
				<Button content='Logout' />
			</div>
		</div>
	);
}

export default User;
