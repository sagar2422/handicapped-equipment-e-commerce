import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function AdminUserCard({ id, name, email, createdAt }) {
	return (
		<div className='transition-all my-4 p-4 rounded-md shadow-md bg-white'>
			<h2 className='my-2'>Name : {name}</h2>
            <p>ID: {id}</p>
			<p>
				Account created on:
				<span className='font-bold'> {new Date(createdAt).toLocaleString('en-us', {
					timeZone: 'Asia/Kolkata',
				})} IST</span>
			</p>
			<Link to={`/admin/users/${id}`}>
                <button className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-8 py-4 mx-2 my-2 rounded-md'>Get details</button>
            </Link>
		</div>
	);
}

export default AdminUserCard;
