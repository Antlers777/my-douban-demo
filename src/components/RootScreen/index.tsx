/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../CustomDrawerContent';
import NavigationManager from '../../NavigationManager';

const Drawer = createDrawerNavigator();

const RootScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="StackScreen"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="NavigationManager" component={NavigationManager} />
    </Drawer.Navigator>
  );
};

export default RootScreen;
