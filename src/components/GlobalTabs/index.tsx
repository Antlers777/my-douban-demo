/* eslint-disable react/react-in-jsx-scope */
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import BooksScreen from '../../screens/Books';
import GroupsScreen from '../../screens/Groups';
import MarketScreen from '../../screens/Market';
import MineScreen from '../../screens/Mine';
import CustomHeaderLeft from '../CustomHeaderLeft';
import CustomHeader from '../CustomHeader';
import CustomHeaderRight from '../CustomHeaderRight';
import {primaryColor} from '../../theme';

const Tab = createBottomTabNavigator();
const tabScreenOptions = ({route, navigation}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === '首页') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === '书影音') {
      iconName = focused ? 'library' : 'library-outline';
    } else if (route.name === '小组') {
      iconName = focused ? 'grid' : 'grid-outline';
    } else if (route.name === '市集') {
      iconName = focused ? 'wallet' : 'wallet-outline';
    } else {
      iconName = focused ? 'person' : 'person-outline';
    }
    return <Ionicons name={iconName} size={size} color={primaryColor} />;
  },
  tabBarActiveTintColor: primaryColor,
  tabBarInactiveTintColor: 'gray',
  headerLeft: () => <CustomHeaderLeft navigation={navigation} route={route} />,
  headerTitle: () => <CustomHeader navigation={navigation} route={route} />,
  headerRight: () => (
    <CustomHeaderRight navigation={navigation} route={route} />
  ),
  headerShadowVisible: false, //是否隐藏标题上的标高阴影 (Android) 或底部边框 (iOS)。
  headerMode: 'screen',
  headerLeftContainerStyle: {
    height: 40,
    paddingLeft: 10,
  },
  headerTitleContainerStyle: {
    paddingLeft: 2,
    paddingRight: 2,
    width: '100%',
  },
  headerRightContainerStyle: {
    height: 40,
    paddingRight: 10,
  },
});
function GlobalTabs() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="书影音" component={BooksScreen} />
      <Tab.Screen name="小组" component={GroupsScreen} />
      <Tab.Screen name="市集" component={MarketScreen} />
      <Tab.Screen name="我" component={MineScreen} />
    </Tab.Navigator>
  );
}

export default GlobalTabs;
