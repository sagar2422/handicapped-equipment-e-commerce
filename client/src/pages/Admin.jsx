import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import AdminOrderCard from '../components/AdminOrderCard';
import AdminUserCard from '../components/AdminUserCard';

function Admin() {
	const [orders, setOrders] = useState([]);
	const [users, setUsers] = useState([]);
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
				axios
					.post(`${import.meta.env.VITE_PROXY}/admin/getUsers`)
					.then((data) => {
						setUsers(data.data);
					});
			}
		}
	}, []);
	return (
		<div className='m-10 md:m-20'>
			<h1>Admin Dashboard</h1>
			<div className='m-10 grid xl:grid-cols-2 grid-cols-1 gap-4'>
				<div className=''>
					<div className='flex align-middle justify-between items-center pr-8'>
						<h2>Recently Created Orders</h2>
						<Link to='/admin/orders'>
                        <button className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-6 py-2 mx-2 my-2 rounded-md'>
							See All
						</button>
                        </Link>
					</div>
					<div>
						{orders
							.filter((order) => {
								const dateNow = new Date();
								const dateOrder = new Date(order.createdAt);
								if (dateOrder.getDate() == dateNow.getDate()) {
									return order;
								}
							})
							.map((order) => {
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
				<div>
					<div className=''>
                    <div className='flex align-middle justify-between items-center pr-8'>
						<h2>Recently Created Users</h2>
						<Link to='/admin/users'>
                        <button className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-6 py-2 mx-2 my-2 rounded-md'>
							See All
						</button>
                        </Link>
					</div>
						<div>
							{users
								.filter((user) => {
									const dateNow = new Date();
									const dateUser = new Date(user.createdAt);
									if (
										dateUser.getDate() == dateNow.getDate() && !user.admin
									) {
										return user;
									}
								})
								.map((user) => {
									return (
										<AdminUserCard
											key={user._id}
											id={user._id}
											name={user.name}
											email={user.email}
											createdAt={user.createdAt}
										/>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
