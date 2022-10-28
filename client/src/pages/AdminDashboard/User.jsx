import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminOrderCard from '../../components/AdminOrderCard';
import AdminProductCard from '../../components/AdminProductCard';

function AdminUser() {
	const [user, setUser] = useState({});
	const [orders, setOrders] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	useEffect(() => {
		if (token) {
			const user = JSON.parse(atob(token.split('.')[1]));
			console.log(user);
			if (!user.admin) {
				navigate('/404');
			} else {
				axios
					.post(`${import.meta.env.VITE_PROXY}/api/user/UserData`, {
						id: id,
					})
					.then((data) => {
						console.log(data.data[0]);
						setUser(data.data[0]);
						setWishlist(data.data[0].wishlist)
					});
				axios
					.post(`${import.meta.env.VITE_PROXY}/api/user/orders`, {
						id: id,
					})
					.then((data) => {
						setOrders(data.data);
					});
			}
		}
	}, []);
	return (
		<div className='m-10 md:m-20'>
			<h1>Name: {user.name}</h1>
			<div className='p-4'>
				<h2>Personal Information</h2>
				<p>
					Account Created On:
					<span className='font-bold'>
						{' '}
						{new Date(user.createdAt).toLocaleString('en-us', {
							timeZone: 'Asia/Kolkata',
						})}{' '}
						IST
					</span>
				</p>
				<p>
					Email: <span className='font-bold'>{user.email}</span>
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div className=''>
					<h2>Orders</h2>
					<div className='p-4'>
						{orders.map((order) => {
							return (
								<AdminOrderCard
									key={order._id}
									id={order._id}
									userId={order.userId}
									address={order.address}
									createdAt={order.createdAt}
								/>
							);
						})}
					</div>
				</div>
				<div className=''>
					<h2>Wishlist</h2>
					<div className='p-4'>
						{user ? (
							<>
								{wishlist.map((product) => {
									return (
										<AdminProductCard
											key={product._id}
											id={product._id}
											name={product.name}
											image={product.image}
											price={product.price}
										/>
									);
								})}
							</>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminUser;
