import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


// const Addcar = React.lazy(() =>
//   import(/* webpackChunkName: "application-todo" */ './addcar')
// );
const ManageCustomer = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './managecustomer')
);


const Customer = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/manage-customer`} />
      {/* <Route
        path={`${match.url}/addcar`}
        render={(props) => <Addcar {...props} />}
      /> */}
      <Route
        path={`${match.url}/managecustomer`}
        render={(props) => <ManageCustomer {...props} />}
        isExact
      /> 
      <Redirect to="/error" />
    </Switch>  
  </Suspense>
);
export default Customer;
