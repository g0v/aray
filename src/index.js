import React from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router';
import Amplify, { Auth } from 'aws-amplify';
import Analytics from '@aws-amplify/analytics';
import to from 'await-to-js';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import DocumentTitle from 'react-document-title';
import { useTranslation } from 'react-i18next';
import { loadCSS } from 'fg-loadcss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'react-calendar-heatmap/dist/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './global';
import './i18n/i18n';
// import './i18n/Amplify';
import './index.css';
import './Amplify.css';

import { appRoutes } from './routes';
import awsconfig from './aws-exports.js';
import App from './App';
import store from './App.reducer';
import reportWebVitals from './reportWebVitals';

import LandingPage from 'views/LandingPage';
import CustomAppBar from 'components/CustomAppBar';
import Loading from 'components/Loading';
import Colors from 'constants/Colors';
import { DRAWER_WIDTH } from 'constants/App';

const classes = {
  content: `index-content`,
  contentShift: `index-contentShift`,
};

const StyledReactStrictMode = styled(React.StrictMode)(({ theme }) => ({
  [`& .${classes.content}`]: {
    marginTop: theme.spacing(3),
    overflow: 'auto',
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: DRAWER_WIDTH,
    minHeight: 'calc(100vh - 64px)',
  },

  [`& .${classes.contentShift}`]: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

// Disable oauth for web
delete awsconfig.oauth;

Amplify.configure(awsconfig);
Analytics.disable();

const history = createBrowserHistory();

// https://material-ui.com/customization/default-theme/
const theme = createTheme({
  palette: {
    primary: {
      light: Colors.primaryLight,
      main: Colors.primary,
      dark: Colors.primaryDark,
      contrastText: '#fff',
    },
    secondary: {
      light: Colors.secondaryLight,
      main: Colors.secondary,
      dark: Colors.secondaryDark,
      contrastText: '#fff',
    },
    background: {
      default: Colors.background.light,
    },
    focus: {
      Card: Colors.hoverCard,
    },
  },
});

const initialPath = history.location;
// console.log(`initialPath`, initialPath);

function ReactApp() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState();
  const [filteredRoutes, setFilteredRoutes] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const [err, cognitoUser] = await to(Auth.currentAuthenticatedUser({ bypassCache: true }));
      console.log({ err, cognitoUser });
      if (err) {
        setIsLoading(false);
        history.push(initialPath);
      } else {
        setUser(cognitoUser);
        setIsLoading(false);
      }
    })();
    return onAuthUIStateChange(async (nextAuthState, authData) => {
      console.log('onAuthUIStateChange', nextAuthState, authData);
      setUser(authData);
    });
  }, []);

  // https://material-ui.com/components/icons/#font-awesome
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  React.useEffect(() => {
    if (!user || !user.signInUserSession) {
      const filteredRoutes = appRoutes.filter(({ roles }) => {
        return !roles || roles.length === 0;
      });
      console.log('filteredRoutes', filteredRoutes);
      setFilteredRoutes(filteredRoutes);
      return;
    }
    // console.log(user);
    // TODO: Let user to choose the group
    const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
    const filteredRoutes = appRoutes.filter(({ roles }) => {
      return (roles) ? userGroups && userGroups.some((group) => roles.includes(group)) : true;
    });

    localStorage.setItem('app:username', user.username);
    localStorage.setItem('app:name', user.attributes.name);
    localStorage.setItem('app:cognitoGroup', userGroups[0]);

    setFilteredRoutes(filteredRoutes);
    setOpen(false);

    history.push(initialPath);
  }, [user]);

  if (isLoading) {
    return (<Loading />);
  }

  console.log('user', user);

  return (
    <Router history={history}>
      <CustomAppBar
        user={user}
        routes={filteredRoutes}
        open={open}
        onUpdate={setOpen}
      />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: !open,
        })}>
        <Switch>
          <Route path="/app" component={App} />
          {user ?
            <Route path="/" component={App} />:
            <React.Fragment>
              <Route path="/" exact component={LandingPage} />
              {filteredRoutes.map((item)=>(
                <item.route
                  key={item.path}
                  exact={item.exact}
                  path={item.path}
                  roles={item.roles}
                  user={user}
                  render={ (props) => (
                    <DocumentTitle title={`${t('app_short_name')} | ${t(item.title)}`}>
                      <item.component {...props} />
                    </DocumentTitle>)
                  }/>
              ))}
              <Redirect to="/" />
            </React.Fragment>}
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <StyledReactStrictMode>
    <React.Suspense fallback={<Loading />}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <div>
              <ReduxToastr
                timeOut={10000}
                newestOnTop={false}
                preventDuplicates
                position='top-right'
                transitionIn='fadeIn'
                transitionOut='fadeOut'
                progressBar
                closeOnToastrClick={false}/>
            </div>
          </Provider>
          <ReactApp />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Suspense>
  </StyledReactStrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
