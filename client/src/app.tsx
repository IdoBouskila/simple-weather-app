import './App.css';
import tabs from '@utils/tabs';
import { useState } from 'react';
import Dashboard from '@components/dashboard';
import SideNavigation from '@components/side-navigation';

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
