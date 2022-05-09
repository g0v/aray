// import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';

// import Dashboard from './Dashboard';
import MyProjectList from './MyProjectList';
import User from './User';

export default [
  // {
  //   title: 'title_dashboard',
  //   icon: DashboardIcon,
  //   paths: [{ path: '/', exact: true }],
  //   component: Dashboard,
  // },
  {
    title: 'title_myProfile',
    icon: PersonIcon,
    paths: [{ path: '/', exact: true }],
    component: User,
  },
  // {
  //   title: 'title_myContributions',
  //   // icon: FavoriteBorderIcon,
  //   paths: [{ path: '/myContributions', exact: true }],
  //   component: MyContributions,
  // },
  {
    title: 'title_myProjectList',
    icon: FavoriteBorderIcon,
    paths: [{ path: '/myProjects', exact: true }],
    component: MyProjectList,
  },
];
