import { IconType } from 'react-icons';
import { RxDashboard } from 'react-icons/rx';
import { IoHeartOutline } from "react-icons/io5";
type Tab = {
    id: string;
    label: string;
    icon: IconType;
};

const tabs: Tab[] = [
    {
        label: 'Home',
        icon: RxDashboard,
        id: crypto.randomUUID(),
    },
    {
        label: 'Heart',
        icon: IoHeartOutline,
        id: crypto.randomUUID(),
    },
];

export default tabs;
