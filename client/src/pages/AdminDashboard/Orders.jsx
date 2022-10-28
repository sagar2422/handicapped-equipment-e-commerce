import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminOrderCard from '../../components/AdminOrderCard';

function Orders() {
	const [orders, setOrders] = useState([]);
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
					.post(`${import.meta.env.VITE_PROXY}/admin/getOrders`)
					.then((data) => {
						setOrders(data.data);
					});
			}
		}
	}, []);
	return (
		<div className='m-10 md:m-20'>
			<div className='py-4'>
				<h2>Orders</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
				{orders.map((order) => {
					return (
						<AdminOrderCard
							key={order._id}
							id={order._id}
							productIds={order.products}
							userId={order.userId}
							address={order.address}
							createdAt={order.createdAt}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Orders;
