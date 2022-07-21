import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Addcar = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './addcar')
);
const ManageCar = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './managecar')
);
const EditCar = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './editcar')
);


const Cars = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/manage-cars`} />
      <Route
        path={`${match.url}/addcar`}
        render={(props) => <Addcar {...props} />}
      />
      <Route
        path={`${match.url}/managecar`}
        render={(props) => <ManageCar {...props} />}
        isExact
      /> 
      <Route
        path={`${match.url}/editcar`}
        render={(props) => <EditCar {...props} />}
        isExact
      />
      <Redirect to="/error" />
    </Switch>  
  </Suspense>
);
export default Cars;
