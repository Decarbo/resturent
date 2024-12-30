import './App.css';
import Card from './Components/card';
import Navbar from './Components/Navbar';

function App() {
	return (
		<div className='flex flex-col gap-6  '>
			<div className='sticky top-0 z-50 '>
				<Navbar />
			</div>
			<div className=" flex justify-between p-2 ">
				<Card />
			</div>
		</div>
	);
}

export default App;
