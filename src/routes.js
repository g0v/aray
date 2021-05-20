// import React from 'react';
import { Route } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';

import ProtectedRoute from 'components/ProtectedRoute';

import Dashboard from 'views/Admin/Dashboard';

import userAllRoutes from 'views/User/routes';

export const generalRoutes = [].map((item) => {
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
  ...generalRoutes, ...adminRoutes, ...userRoutes,
].reduce((all, item) => {
  item.paths.forEach(({ path, link, exact = true }) => {
    all.push(Object.assign({ path, link, exact }, item));
  });
  return all;
}, []);
