import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import MainComponent from './Components/MainComponent/MainComponent';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [activeClass, setActiveClass] = useState('#');
	useEffect(() => {
		// console.log(activeClass);
	}, [activeClass]);

	return (
		<>
			<Router>
				<Navbar actNav={activeClass} />
				<Routes>
					<Route
						exact
						path="/"
						element={<MainComponent setActiveClass={setActiveClass} />}
					></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
