import './App.css';
import tabs from '@utils/tabs';
import { Suspense, useState } from 'react';
import SideNavigation from '@components/side-navigation';
import SearchBar from '@components/search-bar/search-bar';
import { FavoritesProvider } from '@context/favorites-provider';

function App() {
	const [currentTab, setCurrentTab] = useState(tabs[0]);
	const [selectedLocation, setSelectedLocation] = useState('Jerusalem');

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
						<SearchBar setSelectedLocation={ setSelectedLocation } />
						
						<Suspense fallback={ <div>Loading...</div> }>
							<currentTab.component
								selectedLocation={ selectedLocation }
								setSelectedLocation={ setSelectedLocation }
							/>
						</Suspense>
					</FavoritesProvider>
				</main>
			</div>
		</>
	);
}

export default App;
