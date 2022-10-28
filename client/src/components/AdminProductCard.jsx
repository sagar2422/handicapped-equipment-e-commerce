import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function AdminProductCard({ id, image, price, name }) {
	return (
		<div className='transition-all flex my-4 p-4 rounded-md shadow-md bg-white'>
			<div>
				<img
					src={`${import.meta.env.VITE_PROXY}/${image}`}
					alt=''
					className='max-h-[180px] max-w-[180px] '
				/>
			</div>
			<div>
				<h2 className='my-2'>{name}</h2>
				<p>
					Product ID: <span className='font-bold'> {id}</span>
				</p>
				<p>
					Price: <span className='font-bold'> Rs {price}</span>
				</p>
			</div>
		</div>
	);
}

export default AdminProductCard;
