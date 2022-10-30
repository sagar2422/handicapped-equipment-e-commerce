import React from 'react';
import { Link } from 'react-router-dom';

function OrderCard({ products, id, createdAt, address }) {
	console.log(products);
	return (
		<div className=' bg-white m-2 p-4 rounded-md shadow-md'>
			<div>
				<h2>OrderId #{id}</h2>
				<p>Address: {address}</p>
				<p>
					Date:{' '}
					{new Date(createdAt).toLocaleString('en-us', {
						timeZone: 'Asia/Kolkata',
					})}{' '}
					IST
				</p>
			</div>
			<div className='m-4 grid grid-cols-1 md:grid-cols-2 gap-4 '>
				{products.map((product) => {
					return (
						<Link
							to={`/explore/${product._id}`}
							className='transition-all flex flex-row gap-4 p-4 bg-light-purple rounded-md shadow-md hover:scale-105'
							key={product._id}
						>
							<img
								src={`${import.meta.env.VITE_PROXY}/${
									product.image
								}`}
								className='max-w-[150px] max-h-[150px] rounded-md'
								alt=''
							/>
							<div>
								<p className=''>
									{product.name.slice(0, 30)}...
								</p>
								<p className='font-bold text-2xl'>
									Rs {product.price}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default OrderCard;
