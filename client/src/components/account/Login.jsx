// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import OktaSignInWidget from './OktaSignInWidget';
// import { useOktaAuth } from '@okta/okta-react';

// const Login = ({ config }) => {
//   const { oktaAuth, authState } = useOktaAuth();

//   const onSuccess = (tokens) => {
//     oktaAuth.handleLoginRedirect(tokens);
//   };

//   const onError = (err) => {
//     console.log('error logging in', err);
//   };

//   // if (authState.isPending) return null;

//   return <Redirect to={{ pathname: '/' }}/>
// //   authState.isAuthenticated ?
// //      :
// //     <OktaSignInWidget
// //       config={config}
// //       onSuccess={onSuccess}
// //       onError={onError}/>;
// };
// export default Login;