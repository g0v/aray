// import React from 'react';
import { Route } from 'react-router-dom';

// // Icon Search https://material-ui.com/components/material-icons/
// import PeopleIcon from '@material-ui/icons/People';
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import MotorcycleIcon from '@material-ui/icons/Motorcycle';
// import LockIcon from '@material-ui/icons/Lock';
// import ListAltIcon from '@material-ui/icons/ListAlt';
// import EventNoteIcon from '@material-ui/icons/EventNote';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import RestaurantIcon from '@material-ui/icons/Restaurant';
// import ErrorIcon from '@material-ui/icons/Error';
// import TodayIcon from '@material-ui/icons/Today';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import ProtectedRoute from 'components/ProtectedRoute';

// // User
// // import UserDashboard from 'views/User/Dashboard/Dashboard';

// // Admin
// import AppUsers from 'views/Admin/AppUsers/AppUsers';
// import ClientTable from 'components/ClientTable';
// import ElderTable from 'components/ElderTable';
// import DeliveryStaffTable from 'components/DeliveryStaffTable';
// import Schedule from 'views/Admin/Schedule/Schedule';
// import Orders from 'views/Admin/Orders/Orders';
// import OrderTable from 'components/OrderTable';
// import Order from 'views/Admin/Order/Order';
// import RestaurantTable from 'components/RestaurantTable';
// import ClientDetails from 'components/ClientDetails';
// import ElderDetails from 'components/ElderDetails';
// import RestaurantDetails from 'components/RestaurantDetails';
// import DeliveryStaffDetails from 'components/DeliveryStaffDetails';
import Dashboard from 'views/Admin/Dashboard';
// import IssueCenter from 'views/Admin/IssueCenter/IssueCenter';
// import Users from 'views/Admin/Users/Users';
// import TodayOrders from 'views/Admin/TodayOrders/TodayOrders';
// import DeliveryDiary from 'views/Admin/DeliveryDiary/DeliveryDiary';
// // import TagTable from 'components/TagTable';
// import IssueCenterBadge from 'components/IssueCenterBadge';
// import DeliveryStaffBadge from 'components/DeliveryStaffBadge';
// import SToken from 'views/Admin/SToken/SToken';
// import STokenBadge from 'components/STokenBadge';
// import OrderBadge from 'components/OrderBadge';
// // import Events from 'views/OrgAdmin/Events/Events';

export const generalRoutes = [].map((item) => {
  item.route = item.route || Route;
  return item;
});

export const userRoutes = [].map((item) => {
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
  // {
  //   title: '今日訂單',
  //   icon: TodayIcon,
  //   paths: [{ path: '/todayOrders', exact: true }],
  //   component: TodayOrders,
  // },
  // {
  //   title: '送餐大使',
  //   icon: MotorcycleIcon,
  //   paths: [{ path: '/deliveryStaffs', exact: true }],
  //   component: DeliveryStaffTable,
  // },
  // {
  //   title: '送餐大使頁面',
  //   paths: [{ path: '/deliveryStaff/:id', exact: true }],
  //   component: DeliveryStaffDetails,
  //   hideFromMenu: true,
  // },
  // {
  //   title: '客戶',
  //   icon: SupervisedUserCircleIcon,
  //   paths: [{ path: '/clients', exact: true }],
  //   component: ClientTable,
  // },
  // {
  //   title: '客戶頁面',
  //   paths: [{ path: '/client/:id', exact: true }],
  //   component: ClientDetails,
  //   hideFromMenu: true,
  // },
  // {
  //   title: '送餐對象',
  //   icon: PeopleIcon,
  //   paths: [{ path: '/elders', exact: true }],
  //   component: ElderTable,
  // },
  // {
  //   title: '送餐對象頁面',
  //   paths: [{ path: '/elder/:id', exact: true }],
  //   component: ElderDetails,
  //   hideFromMenu: true,
  // },
  // {
  //   title: '餐廳',
  //   icon: RestaurantIcon,
  //   paths: [{ path: '/restaurants', exact: true }],
  //   component: RestaurantTable,
  // },
  // {
  //   title: '餐廳頁面',
  //   paths: [{ path: '/restaurant/:id', exact: true }],
  //   component: RestaurantDetails,
  //   hideFromMenu: true,
  // },
  // {
  //   title: '訂單',
  //   icon: ListAltIcon,
  //   paths: [{ path: '/orders', exact: true }],
  //   component: Orders,
  // },
  // {
  //   title: '訂單頁面',
  //   icon: ListAltIcon,
  //   paths: [{ path: '/order/:id', exact: true }],
  //   component: Order,
  //   hideFromMenu: true,
  // },
  // {
  //   title: '行程表',
  //   icon: EventNoteIcon,
  //   paths: [{ path: '/schedule', exact: true }],
  //   component: Schedule,
  // },
  // {
  //   title: '送餐關懷',
  //   icon: FavoriteBorderIcon,
  //   paths: [{ path: '/deliveryDiary', exact: true }],
  //   component: DeliveryDiary,
  // },
  // {
  //   title: '應變中心',
  //   icon: ErrorIcon,
  //   paths: [{ path: '/issueCenter', exact: true }],
  //   component: IssueCenter,
  //   badge: IssueCenterBadge,
  // },
  // {
  //   title: 'S Token',
  //   icon: ListAltIcon,
  //   paths: [{ path: '/sToken', exact: true }],
  //   component: SToken,
  //   badge: STokenBadge,
  // },
  // {
  //   title: '新申請大使',
  //   icon: CheckCircleOutlineIcon,
  //   paths: [{ path: '/waitingForApprovalDeliveryStaffs', exact: true }],
  //   component: () => <DeliveryStaffTable queryIsActive={0} />,
  //   badge: DeliveryStaffBadge,
  // },
  // {
  //   title: '新訂單',
  //   icon: ListAltIcon,
  //   paths: [{ path: '/newOrders', exact: true }],
  //   component: () => <OrderTable queryStatus={'waitingForDeliveryStaff'} defaultIndex={1} />,
  //   badge: OrderBadge,
  // },
  // // {
  // //   title: '標籤',
  // //   icon: LocalOfferIcon,
  // //   paths: [{ path: '/tags', exact: true }],
  // //   component: TagTable,
  // // },
  // {
  //   title: '用戶',
  //   icon: LockIcon,
  //   paths: [{ path: '/users', exact: true }],
  //   component: Users,
  // },
  // {
  //   title: '軟體用戶',
  //   icon: LockIcon,
  //   paths: [{ path: '/appUsers', exact: true }],
  //   component: AppUsers,
  // },
  // // {
  // //   title: '系統紀錄',
  // //   icon: EventNote,
  // //   paths: [
  // //     { path: '/events', exact: true },
  // //   ],
  // //   component: Events,
  // // },
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
