import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function DonationCard({
	id,
	title,
	description,
	productId,
	completedAmount,
	total,
	progress
}) {
	const [product, setProduct] = useState({});
	useEffect(() => {
		axios
			.post(`${import.meta.env.VITE_PROXY}/products/product`, {
				id: productId,
			})
			.then((data) => {
				console.log(data.data[0]);
				setProduct(data.data[0]);
			});
	}, []);
	return (
		<Link to={`/donation/${id}`}>
			<div className='transition-all bg-white md:m-10 m-2 rounded-md shadow-md min-w-fit hover:scale-105 hover:cursor-pointer '>
				<div className='flex flex-col md:flex-row p-4 gap-4'>
					<div className='flex justify-center items-center align-middle'>
						{product !== {} ? (
							<img
								src={`${import.meta.env.VITE_PROXY}/${
									product.image
								}`}
								alt='person'
								className=' max-w-[250px] max-h-[250px] md:max-w-[500px] md:max-h-[500px] rounded-md'
							/>
						) : (
							<div className='w-[300px] h-[300px] rounded-md '></div>
						)}
					</div>
					<div>
						<h1>{title}</h1>
						<p className=''>{description}</p>
						<p className='py-4'>
							Total Amount required:
							<span className='font-bold'> Rs {total} </span>
						</p>
						<div className='py-4 font-bold'>
							<h3>Donation Progress</h3>
							<span>{progress}%</span>
							<div className='w-full bg-dark-purple rounded-full h-2.5 '>
								<div
									style={{
										width: progress+'%',
									}}
									className={`bg-light-purple h-2.5 rounded-full `}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default DonationCard;
