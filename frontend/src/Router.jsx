import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Cart from './containers/Cart';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Checkout from './containers/Checkout';
import Thankyou from './containers/Thankyou';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Cart'} component={Cart} />
                <Route exact path={'/SignIn'} component={SignIn} />
                <Route exact path={'/SignUp'} component={SignUp} />
                <Route exact path={'/Checkout'} component={Checkout} />
                <Route exact path={'/Thankyou'} component={Thankyou} />
            </Switch>
        </>
    );
};
export default Router;
