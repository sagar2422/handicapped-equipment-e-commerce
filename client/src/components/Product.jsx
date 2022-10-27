import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaShieldAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import Button from './Button';
// import products from '../temp/products.json';

function Product() {
	const { id } = useParams();
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	const [product, setProduct] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.post('http://localhost:3000/products/product', {
				id: id,
			})
			.then((data) => {
				console.log(data.data[0]);
				setProduct(data.data[0]);
			});
	}, []);

	function addToCart() {
		axios
			.post('http://localhost:3000/api/user/cart/add', {
				id: token._id,
				productId: id,
			})
			.then((data) => {
				navigate('/cart');
			});
	}
	function addToWishlist() {
		axios
			.post('http://localhost:3000/api/user/wishlist/add', {
				id: token._id,
				productId: id,
			})
			.then((data) => {
				navigate('/wishlist');
			});
	}
	return (
		<>
			<div className='grid md:grid-cols-2'>
				<div className='flex flex-col items-center justify-center'>
					{product.image ? (
						<img
							className='rounded-md max-w-[500px] max-h-[500px] '
							src={`${import.meta.env.VITE_PROXY}/${product.image}`}
							alt='product'
						/>
					) : (
						<div className='w-[500px] h-[500px] bg-white '></div>
					)}
					<div className='m-4 grid grid-cols-2'>
						<div onClick={addToCart}>
							<Button color={true} content='Add To Cart' />
						</div>
						<div onClick={addToWishlist}>
							<Button color={false} content='Add to Wishlist' />
						</div>
					</div>
				</div>
				<div className='my-4 mx-10'>
					<div className='flex flex-row justify-between '>
						<h1>{product.name}</h1>
					</div>
					<hr className='border-t-4 mt-2 text-dark-purple/50' />
					<div className='flex flex-row justify-between items-center my-4'>
						<h2>M.R.P.: Rs {product.price} </h2>
						<div className='flex flex-row justify-center items-center text-sm'>
							<div className='flex flex-col justify-center items-center mx-2'>
								<FaShieldAlt
									className='text-dark-purple'
									size={30}
								/>
								<p className='text-grey text-center'>
									1 year <br />
									warranty
								</p>
							</div>
							{/* <div className='flex flex-col justify-center items-center mx-2'>
								<FaShieldAlt
									className='text-dark-purple'
									size={30}
								/>
								<p className='text-grey text-center'>
									1 year <br />
									warranty
								</p>
							</div>
							<div className='flex flex-col justify-center items-center mx-2'>
								<FaShieldAlt
									className='text-dark-purple'
									size={30}
								/>
								<p className='text-grey text-center'>
									1 year <br />
									warranty
								</p>
							</div> */}
						</div>
					</div>
					<div>
						<h3 className='text-xl font-semibold'>About Item</h3>
						<hr className='border-t-4 mt-2 text-dark-purple/50' />
						<p className='text-grey p-4'>{product.description}</p>
					</div>
				</div>
			</div>
			<hr className='border-t-4 mt-2 text-dark-purple/50' />

			{/* <div className='mx-10 py-4'>
				<h2>Customer Reviews</h2>
				<hr className='border-t-4 mt-2 text-dark-purple/50' />
				<div className='flex py-2 items-center '>
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
					<p className='text-xl px-2'>4.2 out of 5 stars</p>
				</div>
				<div>
					<p className='text-xl px-2'>100,342 reviews</p>
				</div>
			</div> */}
		</>
	);
}

export default Product;
