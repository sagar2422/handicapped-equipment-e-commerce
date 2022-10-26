import React from 'react';
import { Link } from 'react-router-dom';

function OrderCard({ products, id, createdAt }) {
	console.log(products);
	return (
		<div className=' bg-white p-4 m-4 rounded-md shadow-md'>
			<div>
				<h2>OrderId #{id}</h2>
				<p>Date: {new Date(createdAt).toUTCString()}</p>
			</div>
			<div className='m-4 grid grid-cols-3 gap-4 '>
				{products.map((product) => {
					return (
						<Link
							to={`/explore/${product._id}`}
							className='trasition-all flex flex-row gap-4 p-4 bg-light-purple rounded-md shadow-md hover:scale-105'
							key={product._id}
						>
							<img
								src={`${import.meta.env.VITE_PROXY}/${
									product.image
								}`}
								className='max-w-[300px] max-h-[300px] rounded-md'
								alt=''
							/>
							<div>
								<p className=''>{product.name}</p>
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
