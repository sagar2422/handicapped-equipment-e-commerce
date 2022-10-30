import React , { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Product from './components/Product.jsx';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import PageNotFound from './pages/PageNotFound.jsx';
import User from './pages/User';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Donation from './pages/Donation';
import DonationPage from './pages/DonationPage';
import Admin from './pages/Admin';
import Users from './pages/AdminDashboard/Users';
import Orders from './pages/AdminDashboard/Orders';
import AdminUser from './pages/AdminDashboard/User';
import AdminOrder from './pages/AdminDashboard/Order';
import AdminProfile from './pages/AdminDashboard/Profile';
import CreateDonation from './pages/CreateDonation';

function App() {
	const token = localStorage.getItem('token');
	
	return (
		<div className='bg-light-purple font-sans min-h-[100vh] '>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<CreateAccount />} />
				<Route path='/user' element={token ? <User />: <Navigate to='/login'/>} /> 
				<Route path='/donation' element={<Donation />} />
				<Route path='/donation/create/:id' element={<CreateDonation />} />
				<Route path='/donation/:id' element={<DonationPage/>} />
				<Route path='/wishlist' element={token ? <Wishlist />: <Navigate to='/login'/>}  />
				<Route path='/cart' element={token ? <Cart />: <Navigate to='/login'/>}  />
				<Route path='/admin' element={<Admin />}/>
				<Route path='/admin/profile' element={<AdminProfile />}/>
				<Route path='/admin/users' element={<Users />}/>
				<Route path='/admin/users/:id' element={<AdminUser />}/>
				<Route path='/admin/orders' element={<Orders />}/>
				<Route path='/admin/orders/:id' element={<AdminOrder/>} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/explore/:id' element={<Product/>} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
