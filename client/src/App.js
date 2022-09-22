import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Product from './components/Product.jsx';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import PageNotFound from './components/PageNotFound.jsx';
import User from './components/User';
import Wishlist from './components/Wishlist';
import Bag from './components/Bag';
import Donation from './components/Donation';

function App() {
	return (
		<div className='bg-light-purple font-sans min-h-[100vh] '>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<CreateAccount />} />
				<Route path='/user' element={<User />} />
				<Route path='/donation' element={<Donation />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/bag' element={<Bag />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/explore/:id' element={<Product/>} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
