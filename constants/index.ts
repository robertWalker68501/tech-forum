import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  StickyNote,
  AppWindow,
} from 'lucide-react';

export const NAV_LINKS = [
  {
    id: '1',
    label: 'Forums',
    href: '/forums',
  },
  {
    id: '2',
    label: 'Top Posts',
    href: '/posts',
  },
  {
    id: '3',
    label: 'Contact',
    href: '/contact',
  },
];

export const DASHBOARD_NAV_LINKS = [
  {
    id: '1',
    label: 'Home',
    href: '/dashboard',
    icon: Home,
  },
  {
    id: '2',
    label: 'Inbox',
    href: '/dashboard/inbox',
    icon: Inbox,
  },
  {
    id: '3',
    label: 'Forums',
    href: '/dashboard/forums',
    icon: AppWindow,
  },
  {
    id: '4',
    label: 'Posts',
    href: '/dashboard/posts',
    icon: StickyNote,
  },
  {
    id: '5',
    label: 'Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
  },
  {
    id: '6',
    label: 'Search',
    href: '/dashboard/search',
    icon: Search,
  },
  {
    id: '7',
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];
