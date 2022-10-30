import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';
import UserDonationCard from '../components/UserDonationCard';

function User() {
	const [user, setUser] = useState({});
	const [orders, setOrders] = useState([]);
	const [campaigns, setCampaigns] = useState([]);
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	useEffect(() => {
		console.log(token);
		axios
			.post(`${import.meta.env.VITE_PROXY}/api/user/userData`, { id: token._id })
			.then((data) => {
				setUser(data.data[0]);
			});
		axios
			.post(`${import.meta.env.VITE_PROXY}/api/user/orders`, { id: token._id })
			.then((data) => {
				console.log(data.data);
				setOrders(data.data);
			});
		axios
			.post(`${import.meta.env.VITE_PROXY}/api/campaigns/user`, { id: token._id })
			.then((data) => {
				console.log(data.data);
				setCampaigns(data.data);
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
				<p>
					Account Created at :{' '}
					{new Date(user.createdAt).toLocaleString('en-us', {
						timeZone: 'Asia/Kolkata',
					})}{' '}
					IST
				</p>
				<p>User ID: {user._id}</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='m-2'>
					<h1>Orders</h1>
					{orders.length !== 0 ? (
						orders.map((order) => {
							return (
								<OrderCard
									products={order.products}
									key={order._id}
									id={order._id}
									createdAt={order.createdAt}
									address={order.address}
								/>
							);
						})
					) : (
						<div className='m-8 p-8 text-center'>
							<h2>No orders Yet</h2>
						</div>
					)}
				</div>
				<div className='m-2'>
					<h1>Donation Campaigns</h1>
					{campaigns.length !== 0 ? (
						campaigns.map((campaign) => {
							return (
								<UserDonationCard
									key={campaign._id}
									id={campaign._id}
									title={campaign.title}
									description={campaign.description}
									productId={campaign.productId}
									completedAmount={campaign.completedAmount}
									total={campaign.total}
									progress={(
										(campaign.completedAmount /
											campaign.total) *
										100
									).toFixed(2)}
								/>
							);
						})
					) : (
						<div className='m-8 p-8 text-center'>
							<h2>No campaigns Yet</h2>
						</div>
					)}
				</div>
			</div>
			<div className='text-center p-8'>
				<h2>Danger</h2>
				<div className='p-8'>
					<button
						content='Logout'
						className='bg-dark-purple text-white hover:bg-white/0 w-full hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-8 py-4 mx-2 my-2 rounded-md'
						onClick={logout}
					>
						LogOut
					</button>
				</div>
			</div>
		</div>
	);
}

export default User;
