/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GlobalTabs from './components/GlobalTabs';
import MessageScreen from './screens/Message';

const Stack = createNativeStackNavigator();
// 导航管理器，所有页面将注册在这里（除了Root导航）
function NavigationManager() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GlobalTabs" component={GlobalTabs} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
}
export default NavigationManager;
