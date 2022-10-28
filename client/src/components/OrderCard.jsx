import React from 'react';
import { Link } from 'react-router-dom';

function OrderCard({ products, id, createdAt, address }) {
	console.log(products);
	return (
		<div className=' bg-white p-4 m-4 rounded-md shadow-md'>
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
			<div className='m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
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
								className='max-w-[200px] max-h-[200px] rounded-md'
								alt=''
							/>
							<div>
								<p className=''>
									{product.name.slice(0, 50)}...
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
