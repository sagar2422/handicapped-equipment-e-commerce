import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Explore from './components/Explore';

function App() {
	return (
		<div className='bg-light-purple'>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
			</Routes>
		</div> 
	);
}

export default App;
