import React from 'react';
import { Link } from 'react-router-dom';

function Card({ name, description, price, id, image }) {
	console.log(`${import.meta.env.VITE_PROXY}/${image}`)
	return (
		<Link
			to={`/explore/${id}`}
			className='transition bg-white/50 m-10 rounded-lg min-w-fit hover:-translate-y-1 hover:scale-105'
		>
			<div className='rounded-t-md w-full h-[300px] bg-white flex items-center align-middle justify-center '>
				<img
					src={`${import.meta.env.VITE_PROXY}/${image}`}
					alt='product'
					className='rounded-t-md max-h-[300px] '
				/>
			</div>
			<div className='p-4'>
				<p className='text-xl'>Rs. {price}</p>
				<h2>{name}</h2>
				<p className='text-grey'>{`${description.slice(0,50)}...`}</p>
				{/* <div className='flex py-2'>
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
					<img src='/star.svg' alt='star' />
				</div> */}
			</div>
		</Link>
	);
}

export default Card;
