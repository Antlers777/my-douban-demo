import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TrendsScreen from './Trends';
import RecommendScreen from './Recommend';

const HomeTab = createMaterialTopTabNavigator();
function Home() {
  const layoutWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <HomeTab.Navigator
        id="HomeTab"
        initialRouteName="TrendsScreen"
        tabBarPosition="top"
        initialLayout={{width: layoutWidth}}
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16},
          tabBarItemStyle: {width: 100},
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarIndicatorStyle: {
            width: 30,
            marginLeft: 35,
            backgroundColor: '#333',
            height: 3,
            borderRadius: 2,
          },
        }}>
        <HomeTab.Screen
          name="TrendsScreen"
          component={TrendsScreen}
          options={{tabBarLabel: '动态'}}
        />
        <HomeTab.Screen
          name="RecommendScreen"
          component={RecommendScreen}
          options={{tabBarLabel: '推荐'}}
        />
      </HomeTab.Navigator>
    </SafeAreaView>
  );
}

export default Home;
