import { createSwitchNavigator, createAppContainer } from "react-navigation"

import Login from '../src/Pages/Login'
import Events from '../src/Pages/Events'
import Register from '../src/Pages/Register'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Events,
        Register,
    })
);

export default Routes;