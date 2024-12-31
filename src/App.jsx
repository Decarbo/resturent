import './App.css';
import Card from '../src/Components/Card';
import Navbar from '../src/Components/Navbar';
import SidePanel from './Components/sidePannel';

function App() {
	return (<>
		<div>
			<SidePanel/>
		</div>
		<div className='flex flex-col gap-6  '>
			<div className='sticky top-0 z-50 '>
				<Navbar />
			</div>
			<div className=" flex justify-between p-2 ">
				<Card />
			</div>
			
		</div>
		</>
	);
}

export default App;
