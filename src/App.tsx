import './App.css';
import { useState } from 'react';
import tabs from './components/utils/tabs';
import SideNavigation from './components/SideNavigation';

function App() {
	const [currentTabId, setCurrentTabId] = useState(tabs[0].id);

	return (
		<div className='app-container'>
			<SideNavigation
				currentTabId={ currentTabId }
				setCurrentTab={ setCurrentTabId }
			/>
		</div>
	);
}

export default App;
