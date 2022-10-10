import React from 'react';
import DonationCard from '../components/DonationCard';
import donations from '../temp/donation.json';

function Donation() {
	return (
		<>
			<div>
				{donations.donations.map((donation) => {
					return (
						<DonationCard
                        key={donation.id}
							heading={donation.heading}
							description={donation.description}
							image={donation.image}
							progress={donation.progress}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Donation;
