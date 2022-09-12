import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar() {
	return (
		<nav className='flex flex-row justify-between p-6'>
			<h1 className='text-4xl font-bold'>DripChair</h1>
            <ul className='flex flex-row'>
                <li className='p-2'><Link to='/'> <Button content='Sign In'/> </Link></li>
                <li className='p-2'><Link to='/explore'><Button content='Log In'/></Link></li>
            </ul>
		</nav>
	);
}

export default Navbar;
