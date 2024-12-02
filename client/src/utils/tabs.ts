import { IconType } from 'react-icons';
import { RxDashboard } from 'react-icons/rx';
import Dashboard from '@components/dashboard';
import { IoHeartOutline } from 'react-icons/io5';
import Favorites from '@components/favorites/favorites';

export type Tab = {
    id: string;
    label: string;
    icon: IconType;
    component: React.FC<{
        selectedLocation: string;
        setSelectedLocation: React.Dispatch<React.SetStateAction<string>>
    }>;
};

const tabs: Tab[] = [
    {
        label: 'Dashboard',
        icon: RxDashboard,
        component: Dashboard,
        id: crypto.randomUUID(),
    },
    {
        label: 'Favorites',
        icon: IoHeartOutline,
        component: Favorites,
        id: crypto.randomUUID(),
    },
];

export default tabs;
