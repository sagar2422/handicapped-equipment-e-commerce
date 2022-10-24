import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function BagCard({ id, name, price, image }) {
	const navigate = useNavigate();
	function removeItem() {
		axios.delete('http://localhost:3000/api/user/cart/delete',{id:id})
			.then((data)=> {
				console.log(data);
				navigate('/cart');
			}
			)
	}
	return (
			<div className='flex flex-col md:flex-row md:justify-between md:p-4 p-2 bg-white rounded-md shadow-md'>
				<img
					src={image}
					alt='product'
					className='rounded-t-md max-w-[300px] '
				/>
				<div className='flex flex-col justify-center text-left'>
					<h1>{name}</h1>
					<h2 className='text-xl'>Rs. {price}</h2>
					<button onClick={removeItem} className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-8 py-4 mx-2 my-2 rounded-md'>
						Delete
					</button>
				</div>
			</div>
	);
}

export default BagCard;
