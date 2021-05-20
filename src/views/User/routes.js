// import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupIcon from '@material-ui/icons/Group';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';

// import Dashboard from './Dashboard';
import MyProjectList from './MyProjectList';
import ProjectList from './ProjectList';
import Project from './Project';
import UserList from './UserList';
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
  {
    title: 'title_myProfile',
    icon: PersonIcon,
    paths: [{ path: '/user/:id', exact: true }],
    component: User,
    hideFromMenu: true,
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
  {
    title: 'title_projectList',
    icon: ListAltIcon,
    paths: [{ path: '/projects', exact: true }],
    component: ProjectList,
  },
  {
    title: 'title_project',
    paths: [{ path: '/project/:id', exact: true }],
    component: Project,
    hideFromMenu: true,
  },
  {
    title: 'title_userList',
    icon: GroupIcon,
    paths: [{ path: '/users', exact: true }],
    component: UserList,
  },
];
