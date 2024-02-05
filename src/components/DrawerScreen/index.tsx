/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GlobalTabs from '../GlobalTabs';
import CustomDrawerContent from '../CustomDrawerContent';
import MessageScreen from '../../screens/Message/index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GlobalTabs" component={GlobalTabs} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Drawer" component={DrawerScreen} />
    </Stack.Navigator>
  );
}

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="StackScreen"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="StackScreen" component={StackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
