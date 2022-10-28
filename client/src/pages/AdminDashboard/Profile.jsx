import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminProfile() {
	const [user, setUser] = useState({});
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
						id: user._id,
					})
					.then((data) => {
						console.log(data.data[0]);
						setUser(data.data[0]);
					});
			}
		}
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
				})} IST
				</p>
				<p>User ID: {user._id}</p>
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

export default AdminProfile;
