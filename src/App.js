import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import {useState} from 'react';

function App() {
	const [darkMode, setDarkMode] = useState('dark');

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		if (darkMode) {
			document.body.classList.remove('dark');
		} else {
			document.body.classList.add('dark');
		}
	};
	return (
		<div
			className={
				darkMode ? 'text-white bg-[#0b1131]' : 'text-black bg-[#FBF9F5]'
			}
		>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
