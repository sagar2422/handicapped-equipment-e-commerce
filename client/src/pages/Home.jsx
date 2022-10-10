import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
	return (
		<>
			<div className='flex flex-col justify-center p-4 md:flex-row md:pt-20 md:mx-24 md:h-screen'>
				<div className=''>
					<h1 className='text-6xl font-semibold md:w-1/2 py-2'>
						Get Your Medical Aids Online!
					</h1>
					<h3 className='text-md  md:w-5/12 py-2 text-grey'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed mollis, odio eget hendrerit convallis, odio leo
						fringilla risus, eget pretium dolor urna eu mi. odio
						eget hendrerit convallis, odio leo fringilla risus, eget
						pretium dolor urna eu mi.
					</h3>
					<div className='py-2'>
						<Link to='/explore'>
							<Button content='Explore' color={true} />
						</Link>
						<Link to='/donation'>
							<Button content='Donate' color={true} />
						</Link>
					</div>
				</div>
				<div>
					<img src='hero.svg' alt='Hero'/>
				</div>
			</div>
		</>
	);
}

export default Home;
