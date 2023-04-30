import OverviewIcon from './overviewIcon';

export const leftTopNavs = [
  {
    icon: "https://icons8.com/icon/13963/icon",
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: "https://icons8.com/icon/13963/icon",
    label: 'Courses',
    path: '/courses',
  },
  {
    icon: "https://icons8.com/icon/13963/icon",
    label: 'Traiblazers',
    path: '/traiblazers',
  },
  {
    icon: null,
    label: 'Students',
    path: '/students',
  },
  {
    icon: null,
    label: 'Tutors',
    path: '/tutors',
  },
];

export const leftBottomNavs = [
  {
    icon: null,
    label: 'Profile',
    path: '/profile',
  },

  {
    icon: "https://icons8.com/icon/13963/icon",
    label: 'Logout',
    path: '/logout',
    className: 'text-red-500',
  },
];

export const topNavs = [
  {
    icon: "https://icons8.com/icon/13963/icon",
    label: 'Settings',
    path: '/settings',
    className: 'font-medium',
  },
];

export const sideNavs = [
  {
    icon: OverviewIcon,
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    icon: OverviewIcon,
    label: 'Countries',
    to: '/countries',
  },
  {
    icon: OverviewIcon,
    label: 'Analytics',
    to: '/analytics',
  },
  {
    icon: OverviewIcon,
    label: 'Users',
    to: '/users',
  },
  {
    icon: OverviewIcon,
    label: 'Shop',
    to: '/shop',
  },

  {
    icon: OverviewIcon,
    label: 'Logout',
    to: '/logout',
  },
];
