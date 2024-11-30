import { IconType } from 'react-icons';
import { RxDashboard } from 'react-icons/rx';
import Dashboard from '@components/dashboard';
import Favorites from '@components/favorites';
import { IoHeartOutline } from 'react-icons/io5';

export type Tab = {
    id: string;
    label: string;
    icon: IconType;
    component: React.FC;
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
