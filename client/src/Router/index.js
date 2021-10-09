import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from '../Pages/Login';
// import Register from '../Pages/Register';
import AuthRoute from './AuthRoute.jsx';
import ProtectedRoute from './ProtectedRoute';
import Home from '../Pages/Home';

// Routes Imports
const Main = React.lazy(() => import('./doctorRoutes'));

function router() {
    return (
        <div className="App" >
            <Suspense>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <AuthRoute path="/login" component={Login} />
                        <ProtectedRoute path="/" component={Main} />
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default router;