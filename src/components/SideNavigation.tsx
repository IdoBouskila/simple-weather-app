import tabs from './utils/tabs';
import { RxGithubLogo } from 'react-icons/rx';

const SideNavigation: React.FC<{
	currentTabId: string;
	setCurrentTab: (tab: string) => void;
}> = ({  currentTabId, setCurrentTab }) => {
	return (
		<div className='side-navigation'>
			<span className='icon'></span>

			<ul>
				{
					tabs.map((tab) => {
						const isTabActive = tab.id === currentTabId;

						return (
							<li
								key={ tab.id }
								title={ tab.label }
								onClick={ () => setCurrentTab(tab.id) }
								className={ isTabActive ? 'active' : '' }
							>
                                <tab.icon />
							</li>
						)
					})
				}
			</ul>

            <a
                target='_blank'
                className='github-link'
                href='https://github.com/IdoBouskila'
            >
                <RxGithubLogo />
            </a>
		</div>
	);
}

export default SideNavigation;
