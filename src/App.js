import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import DocumentTitle from 'react-document-title';
import { Hub } from 'aws-amplify';
import { toastr } from 'react-redux-toastr';
import { useTranslation } from 'react-i18next';

import { appRoutes } from './routes';

// import Loading from 'components/Loading';
// import Home from 'views/Home';
import Colors from 'constants/Colors';
import AuthErrorCodes from 'constants/AuthErrorCodes';
import CustomAuthenticator from 'components/Auth/CustomAuthenticator';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: Colors.background.light,
    minHeight: 'calc(100vh - 64px)',
  },
}));

const authListener = ({ payload: { event, data } }) => {
  console.log(event, data);
  let errorMessage;
  switch (event) {
    case 'signUp_failure':
    case 'signIn_failure':
      errorMessage = AuthErrorCodes[data.code] || data.code;
      break;
    default:
  }

  if (errorMessage) {
    toastr.error(errorMessage);
  }
};

export default function App({ user }) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [filteredRoutes, setFilteredRoutes] = React.useState(appRoutes);

  React.useEffect(() => {
    if (!user || !user.signInUserSession || !user.attributes) return;

    console.log(user);
    if (!user || !user.signInUserSession || !user.attributes) {
      const filteredRoutes = appRoutes.filter(({ roles }) => {
        return !roles || roles.length === 0;
      });
      console.log('filteredRoutes', filteredRoutes);
      setFilteredRoutes(filteredRoutes);
      return;
    }

    const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
    const filteredRoutes = appRoutes.filter(({ roles }) => {
      return (roles) ? userGroups && userGroups.some((group) => roles.includes(group)) : true;
    });

    setFilteredRoutes(filteredRoutes);
  }, [user]);

  React.useEffect(() => {
    Hub.listen('auth', authListener);
  }, []);

  return (
    <div className={classes.root} data-test-id="app-container">
      <Switch>
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
        {/* <Redirect to={filteredRoutes[0] ? filteredRoutes[0].path : '/'} /> */}
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  user: PropTypes.any,
};

function AuthenticatedApp({ user }) {
  return (
    <CustomAuthenticator>
      <App user={user} />
    </CustomAuthenticator>
  );
}

AuthenticatedApp.propTypes = {
  user: PropTypes.any,
};
