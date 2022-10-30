import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WishlistCard from '../components/WishlistCard';

function Wishlist() {
	const [items, setItems] = useState([]);
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	useEffect(() => {
		axios
			.post(`${import.meta.env.VITE_PROXY}/api/user/wishlist`, { id: token._id })
			.then((data) => {
				console.log(data.data[0].wishlist);
				setItems(data.data[0].wishlist);
			});
		// items.forEach(((item)=>{
		// 	console.log(total)
		// 	setTotal((prevValue)=> prevValue+parseInt(item.price))
		// }))
	}, []);
	return (
		<div>
			<h1 className='m-10'>Wishlist Page</h1>
			{items.length !== 0 ? (
				<div className='grid grid-cols-1 md:grid-cols-2 mx-20 md:mx-40'>
					{items.map((item) => (
						<WishlistCard
							key={item._id}
							id={item._id}
							name={item.name}
							price={item.price}
							image={item.image}
						/>
					))}
				</div>
			) : (
				<div className='flex items-center justify-center align-middle m-20 md:m-40'>
					<h1>No items in wishlist</h1>
				</div>
			)}
		</div>
	);
}

export default Wishlist;
