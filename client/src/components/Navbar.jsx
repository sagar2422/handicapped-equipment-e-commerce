import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import {
	FaRegUser,
	FaRegHeart,
	FaShoppingBag,
	FaHome,
	FaDonate,
} from 'react-icons/fa';
import { MdOutlineExplore, MdMenu } from 'react-icons/md';

function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	// const [user,setUser]=  useState({});
	// useEffect(()=> {
	// const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));

	// 	axios
	// 		.post('http://localhost:3000/api/user/userData', { id: token._id })
	// 		.then((data) => {
	// 			setUser(data.data[0]);
	// 		});
	// },[])
	return (
		<nav className='transition-all relative flex flex-wrap items-center justify-between p-4  mb-3 text-dark-purple'>
			<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
				<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
					<h1 className='font-bold flex items-center transition hover:-translate-y-1 hover:scale-105 hover:text-dark-purple'>
						<Link to='/'>MedUnit</Link>
					</h1>
					<button
						className='cursor-pointer text-xl leading-none px-3 py-1 block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<MdMenu size={30} />
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-center' +
						(navbarOpen ? ' flex' : ' hidden')
					}
					id='example-navbar-danger'
				>
					<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center font-bold align-middle gap-2  hover:scale-105'
								to='/'
							>
								<FaHome size={20} />
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center font-bold align-middle gap-2  hover:scale-105'
								to='/explore'
							>
								<MdOutlineExplore size={20} />
								Explore
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center align-middle gap-2 font-bold  hover:scale-105'
								to='/donation'
							>
								<FaDonate size={20} />
								Donate
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center align-middle gap-2 font-bold  hover:scale-105'
								to='/wishlist'
							>
								<FaRegHeart size={20} />
								Wishlist
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center align-middle gap-2 font-bold  hover:scale-105'
								to='/cart'
							>
								<FaShoppingBag size={20} />
								Cart
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center align-middle gap-2 font-bold  hover:scale-105'
								to='/user'
							>
								<FaRegUser size={20} />
								<span className='capitalize'> User</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

// return (
// 	<nav className='flex flex-col md:flex-row justify-between font-bold px-6 py-6 md:px-10 '>
// 		<h1 className='font-bold flex items-center transition hover:-translate-y-1 hover:scale-105 hover:text-dark-purple'>
// 			<Link to='/'>MedUnit</Link>
// 		</h1>
// 		<ul className='flex flex-row items-center text-dark-purple'>
// 			{/* <li className='p-2 transition hover:-translate-y-1 hover:scale-105'>
// 				 <i><FaSearch size={30} /></i>
// 				<input
// 					className='h-12 w-32 p-2 rounded-md focus:outline-0 font-bold text-dark-purple'
// 					type='text'
// 					placeholder='Search'
// 				/>
// 			</li> */}
// 			<li className=' p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
// 				<NavLink to='/' className='flex gap-2'>
// 					<FaHome size={20} />
// 					Home
// 				</NavLink>
// 			</li>
// 			<li className=' p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
// 				<NavLink to='/explore' className='flex gap-2'>
// 					<MdOutlineExplore size={20} />
// 					Explore
// 				</NavLink>
// 			</li>
// 			<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
// 				<NavLink to='/donation' className='flex gap-2'>
// 					<FaDonate size={20} />
// 					Donate
// 				</NavLink>
// 			</li>
// 			<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
// 				<NavLink to='/user' className='flex gap-2'>
// 					<FaRegUser size={20} />
// 					User
// 				</NavLink>
// 			</li>
// 			<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
// 				<NavLink to='/wishlist' className='flex gap-2'>
// 					<FaRegHeart size={20} />
// 					Wishlist
// 				</NavLink>
// 			</li>
// 			<li className='p-2 hover:text-dark-purple/50 transition hover:-translate-y-1 hover:scale-105'>
// 				<NavLink to='/bag' className='flex gap-2'>
// 					<FaShoppingBag size={20} />
// 					Bag
// 				</NavLink>
// 			</li>
// 		</ul>
// 	</nav>
