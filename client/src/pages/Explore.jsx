import axios from 'axios';
import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import useLazyLoad from '../hooks/useLazyLoad';
import { LoadingPosts } from '../components/LoadingCard';


function Explore() {
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');
	const searchInput = useRef();
	const triggerRef = useRef(null);
	useEffect(() => {
		axios.get(`${import.meta.env.VITE_PROXY}/products`).then((response) => {
			console.log(response);
			setProducts(response.data);
		});
	}, []);
	// const NUM_PER_PAGE = 6;
	// const TOTAL_PAGES = products.length;
	// const onGrabData = (currentPage) => {
	// 	return new Promise((resolve) => {
	// 		const data2 = products.slice(
	// 			((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
	// 			NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
	// 		);
	// 		resolve(data2);
	// 	});
	// };
	// const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

	return (
		<>
			<div className='transition-all flex flex-col md:flex-row justify-between md:px-40 pt-6 px-10 text-dark-purple'>
				<h1 className='hover:scale-105'>Products</h1>
				<div className='flex align-middle items-center'>
					<FaSearch
						className='hover:cursor-pointer'
						size={30}
						onClick={() => searchInput.current.focus()}
					/>
					<input
						className='p-4 mx-2 shadow-md rounded-md focus:outline-none focus:scale-105'
						ref={searchInput}
						value={search}
						type='text'
						placeholder='Search'
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
							console.log(search);
						}}
					/>
				</div>
			</div>
			<div className='md:mx-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
				{products
					.filter((product) => {
						if (search === '') {
							return product;
						} else if (
							product.name
								.toLowerCase()
								.includes(search.toLowerCase()) ||
							product.description
								.toLowerCase()
								.includes(search.toLowerCase())
						) {
							return product;
						}
					})
					.map((product) => {
						return (
							<Card
								key={product._id}
								id={product._id}
								name={product.name}
								description={product.description}
								price={product.price}
								image={product.image}
							/>
						);
					})}
			</div>
			{/* <div
				ref={triggerRef}
				className={clsx('trigger', { visible: loading })}
			>
				<LoadingPosts />
			</div> */}
		</>
	);
}

export default Explore;

{
	/* <h2>Categories</h2>
				<div className='flex flex-row bg-white/50 rounded-lg overflow-x-scroll scrollbar-thin scroll-p-4 scrollbar-thumb-m-2 scrollbar-thumb-rounded-md scrollbar-thumb-white/50 scrollbar-track-dark-purple'>
					{categories.categories.map((category) => {
						return (
							<div
								key={category.id}
								className='flex m-4 p-2 bg-dark-purple font-bold text-white rounded-md transition hover:scale-105'
							>
								<FaHandPaper size={20} className='mr-2' />
								{category.name}
							</div>
						);
					})}
				</div> */
}
