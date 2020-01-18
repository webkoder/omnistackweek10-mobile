import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

// 41m

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: "Dev Radar"
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: "Perfil no Github"
            }
        }
    }, {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: "#7d40E7"
            },
            headerTintColor: "#FFF"
        }
    })
);

export default Routes;