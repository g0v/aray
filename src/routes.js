// import React from 'react';
import { Route } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';

import ProtectedRoute from 'components/ProtectedRoute';

import Dashboard from 'views/Admin/Dashboard';

import userAllRoutes from 'views/User/routes';
import ProjectList from 'views/User/ProjectList';
import Project from 'views/User/Project';
import UserList from 'views/User/UserList';
import User from 'views/User/User';

export const generalRoutes = [
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
  {
    title: 'title_user',
    icon: PersonIcon,
    paths: [{ path: '/user/:id', exact: true }],
    component: User,
    hideFromMenu: true,
  },
].map((item) => {
  item.route = item.route || Route;
  return item;
});

export const userRoutes = userAllRoutes.map((item) => {
  item.route = item.route || ProtectedRoute;
  item.roles = ['Users'];
  return item;
});

export const adminRoutes = [
  {
    title: 'title_dashboard',
    icon: DashboardIcon,
    paths: [{ path: '/dashboard', exact: true }],
    component: Dashboard,
  },
].map((item) => {
  item.route = item.route || ProtectedRoute;
  item.roles = ['Admins'];
  return item;
});

export const appRoutes = [
  ...adminRoutes, ...userRoutes, ...generalRoutes,
].reduce((all, item) => {
  item.paths.forEach(({ path, link, exact = true }) => {
    all.push(Object.assign({ path, link, exact }, item));
  });
  return all;
}, []);
