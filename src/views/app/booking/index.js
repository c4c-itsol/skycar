import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


// const Addcar = React.lazy(() =>
//   import(/* webpackChunkName: "application-todo" */ './addcar')
// );
const ManageBooking = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './managebooking')
);


const Cars = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/manage-booking`} />
      {/* <Route
        path={`${match.url}/addcar`}
        render={(props) => <Addcar {...props} />}
      /> */}
      <Route
        path={`${match.url}/managebooking`}
        render={(props) => <ManageBooking {...props} />}
        isExact
      /> 
      <Redirect to="/error" />
    </Switch>  
  </Suspense>
);
export default Cars;
