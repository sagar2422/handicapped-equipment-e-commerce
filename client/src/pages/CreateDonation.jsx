import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CreateDonation() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [user, setUser] = useState();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (token) {
			const user = JSON.parse(atob(token.split('.')[1]));
			console.log(user);
			setUser(user._id);
		} else {
			navigate('/login');
		}
		axios
			.post(`${import.meta.env.VITE_PROXY}/products/product`, { id: id })
			.then((data) => {
				console.log(data.data[0]);
				setProduct(data.data[0]);
			});
	}, []);
	async function handleSubmit(e) {
        e.preventDefault();
        await axios
			.post(`${import.meta.env.VITE_PROXY}/api/campaigns/add`, { id: user, productId: product._id, title:title, description:description, total:product.price })
			.then((data) => {
				console.log(data);
			});
        // navigate('/user')
    }
	return (
		<div className='m-10 md:mx-40'>
			<h1>Create Donation Campaign</h1>
			<form onSubmit={handleSubmit}>
				<div className='m-4'>
					<h2>Personal Information</h2>
					<div className='flex flex-col'>
						<label htmlFor='title'>Title</label>
						<input
							className='p-4 focus:outline-none rounded-md'
							type='text'
							name='title'
							id='title'
							placeholder='Title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
						<label htmlFor='description'>Message</label>
						<textarea
							className='p-4 min-h-[200px] focus:outline-none rounded-md'
							type='text'
							name='description'
							id='description'
							placeholder='Please describe your situation , Note that this message will be visible to people donating.'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						/>
					</div>
				</div>
				<div>
					<h2>Product Information</h2>
					<div className='flex gap-4 m-4 p-4'>
						<div>
							<img
								className='max-h-[180px] max-w-[180px] rounded-md'
								src={`${import.meta.env.VITE_PROXY}/${
									product.image
								}`}
								alt=''
							/>
						</div>
						<div className='flex flex-col flex-grow  flex-wrap gap-2 overflow-x-hidden'>
							<label htmlFor='product'>Product Name</label>
							<input
								className='font-bold'
								type='text'
								name='product'
								id='product'
								value={product.name}
								required
								disabled
							/>
							<label htmlFor='total'>Total Price</label>
							<input
								className='font-bold'
								type='text'
								name='total'
								id='total'
								value={'Rs ' + product.price}
								required
								disabled
							/>
						</div>
					</div>
				</div>
				<div>
					<button className='bg-dark-purple w-full text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition font-bold px-8 py-4 rounded-md'>
						Start Campaign
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateDonation;
