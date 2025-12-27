import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  StickyNote,
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
    label: 'Posts',
    href: '/dashboard/posts',
    icon: StickyNote,
  },
  {
    id: '4',
    label: 'Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
  },
  {
    id: '5',
    label: 'Search',
    href: '/dashboard/search',
    icon: Search,
  },
  {
    id: '6',
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];
