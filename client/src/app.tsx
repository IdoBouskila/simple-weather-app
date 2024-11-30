import './App.css';
import tabs from '@utils/tabs';
import { useState } from 'react';
import SideNavigation from '@components/side-navigation';
import SearchBar from '@components/search-bar/search-bar';

function App() {
	const [currentTab, setCurrentTab] = useState(tabs[0]);

	return (
		<>
			<div className='clouds'></div>
			
			<div className='app-container'>
				<SideNavigation
					currentTab={ currentTab }
					setCurrentTab={ setCurrentTab }
				/>

				<main>
					<SearchBar />
					<currentTab.component />
				</main>
			</div>
		</>
	);
}

export default App;
