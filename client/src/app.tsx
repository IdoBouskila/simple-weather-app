import './App.css';
import tabs from '@utils/tabs';
import { useState } from 'react';
import SideNavigation from '@components/side-navigation';
import SearchBar from '@components/search-bar/search-bar';
import { FavoritesProvider } from '@context/favorites-provider';

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
					<FavoritesProvider>
						<SearchBar />
						
						<currentTab.component />
					</FavoritesProvider>
				</main>
			</div>
		</>
	);
}

export default App;
