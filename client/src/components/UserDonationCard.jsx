import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function UserDonationCard({
	id,
	title,
	description,
	productId,
	completedAmount,
	total,
	progress,
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
			<div className='transition-all bg-white m-2 p-2 rounded-md shadow-md min-w-fit hover:scale-105 hover:cursor-pointer '>
                <h2 className='px-2'>Campaign ID: #{id}</h2>
				<div className='flex flex-col md:flex-row p-4 gap-4'>
					<div className='flex justify-center items-center align-middle'>
						{product !== {} ? (
							<img
								src={`${import.meta.env.VITE_PROXY}/${
									product.image
								}`}
								alt='person'
								className=' max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px] rounded-md'
							/>
						) : (
							<div className='w-[200px] h-[200px] rounded-md '></div>
						)}
					</div>
					<div>
						<h1>{title}</h1>
						<p className=''>{description.slice(0,100)}</p>
						<p className='py-4'>
							Total Amount required:
							<span className='font-bold'> Rs {total} </span>
						</p>
                        <p className='pb-4'>
							Amount completed:
							<span className='font-bold'> Rs {completedAmount} </span>
						</p>
						<div className='py-4 font-bold'>
							<h3>Donation Progress</h3>
							<span>{progress}%</span>
							<div className='w-full bg-dark-purple rounded-full h-2.5 '>
								<div
									style={{
										width: progress + '%',
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

export default UserDonationCard;
