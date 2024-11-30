import tabs, { Tab } from '@utils/tabs';
import { RxGithubLogo } from 'react-icons/rx';

const SideNavigation: React.FC<{
	currentTab: Tab;
	setCurrentTab: (tab: Tab) => void;
}> = ({ currentTab, setCurrentTab }) => {
	return (
		<div className='side-navigation'>
			<span className='icon'></span>

			<ul>
				{
					tabs.map((tab) => {
						const isTabActive = tab.id === currentTab.id;

						return (
							<li
								key={ tab.id }
								title={ tab.label }
								onClick={ () => setCurrentTab(tab) }
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
