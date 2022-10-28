import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function AdminOrderCard({ id, userId, address, createdAt }) {
	return (
		<div className='transition-all my-4 p-4 rounded-md shadow-md bg-white'>
			<h2 className='my-2'>Order ID: {id}</h2>
            <p>Address: {address}</p>
            <p>User ID: {userId}</p>
			<p>
				Date and Time:
				<span className='font-bold'> {new Date(createdAt).toLocaleString('en-us', {
					timeZone: 'Asia/Kolkata',
				})} IST</span>
			</p>
			<Link to={`/admin/orders/${id}`}>
                <button className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-8 py-4 mx-2 my-2 rounded-md'>Get details</button>
            </Link>
		</div>
	);
}

export default AdminOrderCard;
