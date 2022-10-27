import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DonationCard from '../components/DonationCard';
// import donations from '../temp/donation.json';

function Donation() {
	const [campaigns, setCampaigns] = useState([]);
	useEffect(() => {
		axios
			.post(`${import.meta.env.VITE_PROXY}/api/campaigns`)
			.then((data) => {
				console.log(data.data);
				setCampaigns(data.data);
			});
	}, []);
	return (
		<div className='md:m-8'>
			<div className='m-4'>
				<h1>Donation Campaigns</h1>
			</div>
			<div className='md:m-4'>
				{campaigns.map((donation) => {
					return (
						<DonationCard
							key={donation._id}
							id={donation._id}
							title={donation.title}
							description={donation.description}
							productId={donation.productId}
							user={donation.userId}
							total={donation.total}
							completedAmount={donation.completedAmount}
							createdAt = {donation.createdAt}
							progress= {((donation.completedAmount / donation.total) * 100).toFixed(2)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Donation;
