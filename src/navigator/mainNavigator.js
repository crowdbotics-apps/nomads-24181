import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps199226Navigator from '../features/Maps199226/navigator';
import Settings199204Navigator from '../features/Settings199204/navigator';
import Settings199189Navigator from '../features/Settings199189/navigator';
import NotificationList199188Navigator from '../features/NotificationList199188/navigator';
import Maps199187Navigator from '../features/Maps199187/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps199226: { screen: Maps199226Navigator },
Settings199204: { screen: Settings199204Navigator },
Settings199189: { screen: Settings199189Navigator },
NotificationList199188: { screen: NotificationList199188Navigator },
Maps199187: { screen: Maps199187Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
