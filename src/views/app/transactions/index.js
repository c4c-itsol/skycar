import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


// const Addcar = React.lazy(() =>
//   import(/* webpackChunkName: "application-todo" */ './addcar')
// );
const ManageTransaction = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './managetransaction')
);


const Managetransaction = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/manage-transaction `} />
      {/* <Route
        path={`${match.url}/addcar`}
        render={(props) => <Addcar {...props} />}
      /> */}
      <Route
        path={`${match.url}/managetransaction`}
        render={(props) => <ManageTransaction  {...props} />}
        isExact
      /> 
      <Redirect to="/error" />
    </Switch>  
  </Suspense>
);
export default Managetransaction;
