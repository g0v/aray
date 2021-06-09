import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { Link, useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import Version from 'components/Version';
import UserAvatar from 'components/UserAvatar';
import Colors from 'constants/Colors';
import { DRAWER_WIDTH } from 'constants/App';
import LanguageSelector from 'components/LanguageSelector';
import GithubLinkButton from 'components/GithubLinkButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: Colors.dark,
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  // drawer: {
  //   width: DRAWER_WIDTH,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: DRAWER_WIDTH,
  // },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1, 0, 2),
    padding: theme.spacing(0, 2),
    height: 64,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  // custom
  unstyledHyperlink: {
    textDecoration: 'none',
    color: 'white',
  },
  unstyledHyperlinkPrimary: {
    textDecoration: 'none',
    color: Colors.primary,
    fontWeight: 'bold',
  },
  flexbox: {
    flexGrow: 1,
  },
}));

export default function CustomAppBar({ user = {}, routes, open, onUpdate }) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const [openMenu, setOpenMenu] = useState(false);

  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const username = localStorage.getItem('app:username') || '';
  // const userName = localStorage.getItem('app:name') || '';
  // const userCognitoGroupName = localStorage.getItem('app:cognitoGroup') || '';
  // const userCognitoGroupLabel = userCognitoGroupName ? cognitoGroups.find(({ value }) => value === userCognitoGroupName).label : '';

  function handleToggleMenu() {
    setOpenMenu((prevOpen) => !prevOpen);
  }

  function handleCloseMenu(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  }

  const handleDrawerOpen = () => {
    onUpdate(true);
  };

  const handleDrawerClose = () => {
    onUpdate(false);
  };

  useEffect(() => {
    if (prevOpen && prevOpen.current === true && openMenu === false) {
      anchorRef.current && anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  async function handleSignOut(event) {
    handleCloseMenu(event);
    try {
      localStorage.clear();
      await Auth.signOut();
      window.location.reload();
      // history.push('/app');
    } catch (e) {
      history.push('/app');
    }
  }

  return (
    <Box displayPrint="none">
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={1}
      >
        <Toolbar style={{ height: 64 }}>
          {user ?
            <IconButton
              color="inherit"
              aria-label="toggle drawer"
              onClick={open ? handleDrawerClose: handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton)}
            >
              {open ? <VerticalSplitIcon /> : <MenuIcon />}
            </IconButton>:
            <Hidden mdUp={true}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>}
          {/* <img src="/assets/images/g0v-banner.svg" alt="Logo" width="192" style={{ marginRight: 16 }} /> */}
          {!open &&
            <Hidden smDown={true}>
              <Link to="/" className={classes.unstyledHyperlink} data-test-id="title">
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} style={{ marginRight: 8 }}>
                  {t('app_name')}
                </Typography>
              </Link>
              {routes.filter((x) => !x.hideFromMenu).map((route, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={route.link || route.path}
                  startIcon={route.icon ? <route.icon /> : null}
                >
                  {t(route.title)}
                  {/* {route.badge && <route.badge />} */}
                </Button>
              ))}
            </Hidden>
          }
          <div className={classes.flexbox} />
          <GithubLinkButton url='g0v/aray' />
          <LanguageSelector />
          {user && user.username ?
            <React.Fragment>
              <IconButton color="inherit">
                <Badge badgeContent={0} max={99} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Button
                ref={anchorRef}
                color="inherit"
                aria-controls={open ? 'user-menu' : undefined}
                aria-haspopup="true"
                onClick={handleToggleMenu}
                startIcon={<UserAvatar username={username} size={30} />}
                className={classes.titleButton}
              >
                <Hidden smDown={true}>
                  {username}
                </Hidden>
              </Button>
            </React.Fragment>:
            <React.Fragment>
              <Button
                color="inherit"
                component={Link}
                to={'/app?state=signup'}
                startIcon={<PersonAddIcon />}
                className={classes.titleButton}
              >
                {t('customAppBar_register')}
              </Button>
              <Button
                color="inherit"
                component={Link}
                to={'/app?state=signin'}
                startIcon={<PersonIcon />}
                className={classes.titleButton}
              >
                {t('customAppBar_login')}
              </Button>
            </React.Fragment>
          }
          <Popper
            open={openMenu}
            anchorEl={anchorRef.current}
            role={undefined}
            disablePortal
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseMenu}>
                <MenuList id="user-menu" autoFocusItem={openMenu}>
                  <MenuItem disabled={true}>
                    <Version />
                  </MenuItem>
                  <MenuItem onClick={handleSignOut}>{t('customAppBar_logout')}</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        // variant={user ? 'persistent' : null}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={() => onUpdate(false)}
      >
        <div className={classes.drawerHeader}>
          <Typography component="h1" variant="h6" noWrap>
            <Link to="/" className={classes.unstyledHyperlinkPrimary} data-test-id="title">
              {t('app_name')}
            </Link>
          </Typography>
          {/* <img src="/logo/logo_64.png" alt="Logo" width="100%" /> */}
          {/* <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton> */}
        </div>
        <Divider />
        <List>
          {routes.filter((x) => !x.hideFromMenu).map((route, index) => (
            <ListItem
              key={index}
              button
              component={Link}
              // selected={window.location.pathname.startsWith(route.link || route.path)}
              to={route.link || route.path}
            >
              <ListItemIcon style={{ minWidth: 36 }}>
                {route.icon ? <route.icon /> : null}
              </ListItemIcon>
              <ListItemText primary={t(route.title)} />
              {route.badge && <route.badge />}
            </ListItem>
          ))}
          <Divider />
          {user && user.username &&
            <ListItem button onClick={handleSignOut}>
              <ListItemIcon style={{ minWidth: 36 }}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={t('customAppBar_logout')} />
            </ListItem>}
          <ListItem disabled button>
            <ListItemText style={{ textAlign: 'center' }}>
              <Version />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

CustomAppBar.propTypes = {
  user: PropTypes.object,
  routes: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};
