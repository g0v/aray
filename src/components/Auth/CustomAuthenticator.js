import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Authenticator,
} from '@aws-amplify/ui-react';
import querystring from 'query-string';
import { useTranslation } from 'react-i18next';

export default function CustomAuthenticator({
  children = <React.Fragment />,
  initialAuthState: inAuthState,
  currentAuthState,
}) {
  const { t } = useTranslation();

  const [authState, setAuthState] = useState();

  const formFields = {
    signUp: {
      name: {
        label: t('appSignup_name'),
        isRequired: true,
        order: 1,
      },
      email: {
        label: t('appSignup_email'),
        isRequired: true,
        order: 2,
      },
      username: {
        label: t('appSignup_username'),
        isRequired: true,
        order: 3,
      },
      password: {
        label: t('appSignup_password'),
        // placeholder: '密碼',
        isRequired: true,
        order: 4,
      },
      // confirm_password: {
      //   label: '確認密碼',
      //   order: 3,
      // },
    },
  };

  useEffect(() => {
    const { state } = querystring.parse(window.location.search);
    setAuthState(state || 'signIn');
  }, []);

  useEffect(() => {
    if (!inAuthState) return;

    setAuthState(null);

    setTimeout(() => {
      if (inAuthState) {
        setAuthState(inAuthState);
      }
    });
  }, [inAuthState]);

  if (!authState) return null;

  return (
    <Authenticator
      initialState={authState}
      formFields={formFields}
      signUpAttributes={['name', 'email', 'username', 'password']}
    >
      {() => children}
    </Authenticator>
  );
}

CustomAuthenticator.propTypes = {
  children: PropTypes.any,
  initialAuthState: PropTypes.string,
  currentAuthState: PropTypes.string,
};
