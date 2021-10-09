import React, { Suspense } from 'react';
import { Route, Redirect, useRouteMatch } from "react-router-dom";

const Dashboard = React.lazy(() => import('../Pages/Dashboard/Dashboard'));

function RestaurantRoutes() {

    let { path, url } = useRouteMatch();

    return (

        <React.Fragment>
            <Suspense >
                <Route path={`${path}/dashboard`} component={Dashboard} />
                {/* <Route path={`${path}/patients`} component={Dashboard} />
                <Route path={`${path}/appointment`} component={Dashboard} />
                <Route path={`${path}/prescriptions`} component={Dashboard} /> */}

                <Route render={() => <Redirect to={`${path}/dashboard`} />} />
            </Suspense>
        </React.Fragment>



    );
}


export default RestaurantRoutes;
