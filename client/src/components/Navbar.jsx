import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaRegUser, FaRegHeart, FaShoppingBag, FaHome } from 'react-icons/fa';

function Navbar() {
	return (
		<nav className='flex flex-col md:flex-row justify-between px-6 py-6 md:px-10  '>
			<h1 className='font-bold flex items-center transition hover:-translate-y-1 hover:scale-105 hover:text-dark-purple'>
				<Link to='/'>DripChair</Link>
			</h1>
			<ul className='flex flex-row items-center text-dark-purple'>
				<li className='p-2 transition hover:-translate-y-1 hover:scale-105'>
					{/* <i><FaSearch size={30} /></i> */}
					<input
						className='h-12 w-32 p-2 rounded-md focus:outline-0 font-bold text-dark-purple'
						type='text'
						placeholder='Search'
					/>
				</li>
				<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
					<NavLink to='/'>
						<FaHome size={30} />
					</NavLink>
				</li>
				<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
					<NavLink to='/user'>
						<FaRegUser size={30} />
					</NavLink>
				</li>
				<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
					<NavLink to='/wishlist'>
						<FaRegHeart size={30} />
					</NavLink>
				</li>
				<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
					<NavLink to='/bag'>
						<FaShoppingBag size={30} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
