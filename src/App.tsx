import './App.css';
import { useState } from 'react';
import tabs from './components/utils/tabs';
import Dashboard from './components/Dashboard';
import SideNavigation from './components/SideNavigation';

function App() {
	const [currentTabId, setCurrentTabId] = useState(tabs[0].id);

	return (
		<>
			<div className='clouds'></div>
			
			<div className='app-container'>
				<SideNavigation
					currentTabId={ currentTabId }
					setCurrentTab={ setCurrentTabId }
				/>

				<Dashboard />
			</div>
		</>
	);
}

export default App;
