import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BagCard from '../components/BagCard';

function Bag() {
	const [items, setItems] = useState([]);
	const [total ,setTotal] = useState(2000);
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	useEffect(() => {
		axios
			.post('http://localhost:3000/api/user/cart', { id: token._id })
			.then((data) => {
				console.log(data.data[0].cart);
				setItems(data.data[0].cart);
			});
			// items.forEach(((item)=>{
			// 	console.log(total)
			// 	setTotal((prevValue)=> prevValue+parseInt(item.price))
			// }))
	}, []);
	return (
		<div className='flex flex-col'>
			<div className='text-4xl font-bold md:mx-40 mx-20 mt-20'>Cart</div>
			<div className='grid grid-cols-1  md:grid-cols-2 gap-8 px-20 py-5 md:px-40 md:py-10'>
				<div className='flex flex-col'>
				{items.map((item,index) => {
					return <BagCard key={index} id={item._id} name={item.name} price={item.price} image={item.image} />;
				})}
				</div>
				<div className='text-4xl font-bold px-20'>
					Total
					<p>{total}</p>
				</div>
			</div>
		</div>
	);
}

export default Bag;
