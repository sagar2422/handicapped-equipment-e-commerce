import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Explore from './components/Explore';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
			</Routes>
		</> //
	);
}

export default App;
