import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import Customer from './customer';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

// const Dashboards = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ './dashboards')
// );

const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboard')
);
// const Pages = React.lazy(() =>
//   import(/* webpackChunkName: "pages" */ './pages')
// );
// const Cars = React.lazy(() =>
//   import(/* webpackChunkName: "cars" */ './cars/addcar')
// );

const Cars = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './cars')
);

// const Applications = React.lazy(() =>
//   import(/* webpackChunkName: "applications" */ './applications')
// );
const Booking = React.lazy(() => import(/* webpackChunkName: "booking" */ './booking'));
const Transaction = React.lazy(() => import(/* webpackChunkName: "menu" */ './transactions'));
const Customer = React.lazy(() => import(/* webpackChunkName: "menu" */ './customer'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            {/* <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            /> */}
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            {/* <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            /> */}
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/cars`}
              render={(props) => <Cars {...props} />}
            />
            <Route
              path={`${match.url}/booking`}
              render={(props) => <Booking {...props} />}
            />
            <Route
              path={`${match.url}/transactions`}
              render={(props) => <Transaction {...props} />}
            />
            <Route
              path={`${match.url}/customer`}
              render={(props) => <Customer {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
