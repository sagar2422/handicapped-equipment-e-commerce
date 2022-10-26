import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import OrderCard from '../components/OrderCard';

function User() {
	const [user, setUser] = useState({});
	const [orders, setOrders] = useState([]);
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	useEffect(() => {
		console.log(token);
		axios
			.post('http://localhost:3000/api/user/userData', { id: token._id })
			.then((data) => {
				setUser(data.data[0]);
			});
		axios
			.post('http://localhost:3000/api/user/orders', { id: token._id })
			.then((data) => {
				console.log(data.data);
				setOrders(data.data);
			});
	}, []);
	function logout() {
		localStorage.clear();
		window.location.href = '/';
	}
	return (
		<div className='m-10'>
			<h1 className='my-10'>User Profile Page</h1>
			<div className=''>
				<p className='capitalize'>Name: {user.name} </p>
				<p>Email: {user.email} </p>
				<p>Account Created at : {new Date(user.date).toUTCString()} </p>
				<p>User ID: {user._id}</p>
			</div>
			<div className='m-2'>
			<h1>Orders</h1>
				{orders !== [] ? orders.map((order) => {
					{/* console.log(order) */}
					return (
						<OrderCard
							products={order.products}
							key={order._id}
							id={order._id}
							createdAt={order.createdAt}
						/>
					);
				}):<div>No orders Yet</div>}
			</div>
			<div onClick={logout}>
				<Button content='Logout' />
			</div>
		</div>
	);
}

export default User;
