import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Product from './components/Product.jsx';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import PageNotFound from './pages/PageNotFound.jsx';
import User from './pages/User';
import Wishlist from './pages/Wishlist';
import Bag from './pages/Bag';
import Donation from './pages/Donation';

function App() {
	const user = localStorage.getItem('token');
	return (
		<div className='bg-light-purple font-sans min-h-[100vh] '>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<CreateAccount />} />
				{user && <Route path='/user' element={<User />} />}
				<Route path='/donation' element={<Donation />} />
				{user && <Route path='/wishlist' element={<Wishlist />} />}
				{user && <Route path='/bag' element={<Bag />} />}
				<Route path='/explore' element={<Explore />} />
				<Route path='/explore/:id' element={<Product/>} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
