import './App.css';
import tabs from '@utils/tabs';
import { Suspense, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SideNavigation from '@components/side-navigation';
import SearchBar from '@components/search-bar/search-bar';
import { FavoritesProvider } from '@context/favorites-provider';

function App() {
	const [currentTab, setCurrentTab] = useState(tabs[0]);
	const [selectedLocation, setSelectedLocation] = useState('Jerusalem');

	return (
		<>
			<ToastContainer style={{ fontWeight: 300 }} />
			
			<div className='clouds'></div>
			
			<div className='app-container'>
				<SideNavigation
					currentTab={ currentTab }
					setCurrentTab={ setCurrentTab }
				/>

				<main>
					<FavoritesProvider>
						<SearchBar setSelectedLocation={ setSelectedLocation } />
						
						<Suspense fallback={ <span className='loader'></span> }>
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
