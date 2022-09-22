import React from 'react';
import { FaHandPaper } from 'react-icons/fa';
import Card from './Card';
import categories from '../temp/categories.json';
import products from '../temp/products.json';

function Explore() {
	return (
		<>
			<div className='md:mx-24 mx-10'>
				<h2>Categories</h2>
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
				</div>
			</div>
			<div className='md:mx-20 grid sm:grid-cols-2 md:grid-cols-3'>
				{products.products.map((product) => {
					return (
						<Card
							key={product.id}
							id={product.id}
							name={product.name}
							description={product.description}
							price={product.price}
							image={product.image}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Explore;
