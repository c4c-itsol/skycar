import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './helpers/Firebase';
import AppLocale from './lang';
import ColorSwitcher from './components/common/ColorSwitcher';
import { NotificationContainer } from './components/common/react-notifications';
import {
  isMultiColorActive,
  adminRoot,
  UserRole,
} from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import { ProtectedRoute } from './helpers/authHelper';

// const ViewHome = React.lazy(() =>
//   import(/* webpackChunkName: "views" */ './views/home')
// );
const ViewHome = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views/user/login')
);
const ViewLogIn = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views/user/login')
);
const ViewRegister = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/user/register')
);
const ViewForgotPassword = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/user/forgot-password')
);
// const ViewApp = React.lazy(() =>
//   import(/* webpackChunkName: "views-app" */ './views/app')
// );
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);
// const ViewUser = React.lazy(() =>
//   import(/* webpackChunkName: "views-user" */ './views/app/cars/addcar')
// );
// const ManageCar = React.lazy(() =>
//   import(/* webpackChunkName: "views-user" */ './views/app/cars/managecar')
// );
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);
const ViewUnauthorized = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/unauthorized')
);
const Transaction = React.lazy(() =>
  import(/* webpackChunkName: "transaction" */ './views/app/transactions/managetransaction')
);

const App = ({ locale }) => {
  const direction = getDirection();
  const currentAppLocale = AppLocale[locale];
  useEffect(() => {
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [direction]);

  return (
    <div className="h-100">
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <>
          <NotificationContainer />
          {isMultiColorActive && <ColorSwitcher />}
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Switch>
                <ProtectedRoute
                  path={adminRoot}
                  component={ViewApp}
                  roles={[UserRole.Admin, UserRole.Editor]}
                />
                {/* <Route
                  path="/cars/addcar"
                  render={(props) => <ViewUser {...props} />}
                />
                <Route
                  path="/cars/managecar"
                  render={(props) => <ManageCar {...props} />}
                /> */}
                <Route
                  path="/transactions/managetransaction"
                  exact
                  render={(props) => <Transaction {...props} />}
                />
                <Route
                  path="/error"
                  exact
                  render={(props) => <ViewError {...props} />}
                />
                <Route
                  path="/unauthorized"
                  exact
                  render={(props) => <ViewUnauthorized {...props} />}
                />
                <Route
                  path="/"
                  exact
                  render={(props) => <ViewHome {...props} />}
                />
                <Route
                  path="/user/register"
                  exact
                  render={(props) => <ViewRegister {...props} />}
                />
                <Route
                  path="/user/login"
                  exact
                  render={(props) => <ViewLogIn {...props} />}
                />
                <Route
                  path="/user/forgot-password"
                  exact
                  render={(props) => <ViewForgotPassword {...props} />}
                />
                {/*
                <Redirect exact from="/" to={adminRoot} />
                */}
                <Redirect to="/error" />
              </Switch>
            </Router>
          </Suspense>
        </>
      </IntlProvider>
    </div>
  );
};

const mapStateToProps = ({ authUser, settings }) => {
  const { currentUser } = authUser;
  const { locale } = settings;
  return { currentUser, locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
