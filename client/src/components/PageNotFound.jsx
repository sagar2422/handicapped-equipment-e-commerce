import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<h1 className='text-8xl'>404</h1>
			<h1>Page Not Found!</h1>
			<h2 className='text-dark-purple underline hover:text-dark-purple/50 '>
				<Link to='/'>Go Back To Home Page</Link>
			</h2>
		</div>
	);
}

export default PageNotFound;
