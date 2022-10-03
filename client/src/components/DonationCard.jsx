import React from 'react';
import Button from './Button';

function DonationCard({ heading, description, image, progress }) {
	return (
		<div className='transition bg-white/50 m-10 rounded-lg min-w-fit hover:-translate-y-1 '>
			<div className='grid grid-cols-2 p-4'>
				<div>
					<img src={image} alt='person' className='w-[35rem] rounded-md' />
				</div>
				<div>
					<h1>{heading}</h1>
					<p className='w-4/6'>{description}</p>
					<div className='py-4 font-bold'>
						<h3>Donation Progress</h3>
						<span>{progress}</span>
						<div className='w-full bg-dark-purple rounded-full h-2.5 '>
							<div
							style={{width:progress}}
								className={`bg-light-purple h-2.5 rounded-full `}
							></div>
						</div>
						<Button content='Donate' color={true} />
						<Button content='Know More' color={false} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default DonationCard;
