import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import useLazyLoad from '../hooks/useLazyLoad';
import { LoadingPosts } from '../components/LoadingCard';
//import products from '../temp/products.json';
// import categories from '../temp/categories.json';

function Explore() {
	const [products, setProducts] = useState([]);
	const triggerRef = useRef(null);
	useEffect(() => {
		axios.get('http://localhost:3000/products').then((response) => {
			console.log(response);
			setProducts(response.data);
		});
	}, []);
	const NUM_PER_PAGE = 6;
	const TOTAL_PAGES = products.length;
	const onGrabData = (currentPage) => {
        return new Promise((resolve) => {
            const data2 = products.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            resolve(data2);
        });
    };
	const {data , loading } = useLazyLoad({triggerRef,onGrabData});
	function arrayBufferToBase64(buffer) {
		var binary = '';
		var bytes = [].slice.call(new Uint8Array(buffer));
		bytes.forEach((b) => (binary += String.fromCharCode(b)));
		return window.btoa(binary);
		// console.log(binary)
	}
	return (
		<>
			<div className='md:mx-24 mx-10'>
				{/* <h2>Categories</h2>
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
				</div> */}
			</div>
			<div className='md:mx-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
				{data.map((product) => {
					return (
						<Card
							key={product._id}
							id={product._id}
							name={product.name}
							description={product.description}
							price={product.price}
							image={arrayBufferToBase64(product.image.data.data)}
						/>
					);
				})}
			</div>
			<div
				ref={triggerRef}
				className={clsx('trigger', { visible: loading })}
			>
				<LoadingPosts />
			</div>
		</>
	);
}

export default Explore;
