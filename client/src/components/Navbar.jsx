import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='flex flex-row justify-between p-6'>
			<h1 className='text-4xl'>DripChair</h1>
            <ul className='flex flex-row'>
                <li className='p-2'><Link to='/'>Home</Link></li>
                <li className='p-2'><Link to='/explore'>Explore</Link></li>
            </ul>
		</nav>
	);
}

export default Navbar;
