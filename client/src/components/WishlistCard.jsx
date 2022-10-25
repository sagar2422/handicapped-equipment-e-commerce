import axios from 'axios';
import React from 'react';
import {Link , useNavigate} from 'react-router-dom';

function WishlistCard({ id, name, price, image }) {
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	const navigate = useNavigate();
	async function removeItem() {
		await axios
			.post('http://localhost:3000/api/user/wishlist/delete', {
				id: token._id,
				productId: id,
			})
			.then((data) => {
				console.log(data);
				window.location.reload();
			});
	}
	
	async function addToCart() {
		const token = JSON.parse(
			atob(localStorage.getItem('token').split('.')[1])
		);
		await axios
			.post('http://localhost:3000/api/user/cart/add', {
				id: token._id,
				productId: id,
			})
			.then((data) => {
				navigate('/cart');
			});
	}

	return (
		<div className='flex flex-col md:p-10 m-4 p-2 bg-white rounded-md shadow-md'>
			<img
				src={image}
				alt='product'
				className='rounded-t-md max-w-[300px] '
			/>
			<div className='flex flex-col justify-center text-left'>
				<Link to={`/explore/${id}`}>
					<h2>{name}</h2>
				</Link>
				<h3 className='text-xl'>Rs. {price}</h3>
				<button
					onClick={removeItem}
					className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-8 py-4 mx-2 my-2 rounded-md'
				>
					Delete
				</button>
				<button
					onClick={addToCart}
					className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-8 py-4 mx-2 my-2 rounded-md'
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
}

export default WishlistCard;
