/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {Avatar} from '@rneui/themed';
import SmallButton from '../SmallButton';

// 列表Item
const Item = ({title, iconName}: {title: string; iconName: string}) => {
  return (
    <View style={styles.item}>
      <Ionicons name={iconName} size={25} color="#666" />
      <Text style={{fontSize: 16, color: '#333', marginLeft: 30}}>{title}</Text>
    </View>
  );
};

const FIRSTDATA = [
  {
    id: '9D3B4488-6E77-0056-2100-A5BD6C5B2580',
    title: '我的收藏/豆列',
    iconName: 'pricetag',
  },
  {
    id: '98F9C667-502A-FC8F-4613-D80E6C1B04BB',
    title: '我的关注',
    iconName: 'duplicate',
  },
  {
    id: '772B91D4-9A86-43C7-151B-94DEC70E6335',
    title: '浏览历史',
    iconName: 'footsteps',
  },
];
const SECONDDATA = [
  {
    id: '2918AC62-8537-8E13-5679-A3AF35C9CDBC',
    title: '未成年人模式',
    iconName: 'accessibility',
  },
  {
    id: '7678C848-D659-B73C-C779-61A633AABEB8',
    title: '设置',
    iconName: 'settings',
  },
  {
    id: '6ACD8756-7D26-0EC2-D04B-8DA6B7B4EC68',
    title: '帮助与反馈',
    iconName: 'information-circle',
  },
  {
    id: 'F21E4D49-63D1-B331-F8FF-65E4761CB1BB',
    title: '社区管理中心',
    iconName: 'flag',
  },
];
const Line = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: '#999',
        marginTop: 10,
        marginBottom: 10,
      }}
    />
  );
};
const OtherView = () => {
  return (
    <View style={styles.otherView}>
      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <Ionicons name="gift" size={30} color="#333" />
          <Text style={styles.iconText}>图标1</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Ionicons name="speedometer" size={30} color="#333" />
          <Text style={styles.iconText}>图标2</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Ionicons name="bag-handle" size={30} color="#333" />
          <Text style={styles.iconText}>图标3</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <Ionicons name="logo-xbox" size={30} color="#333" />
          <Text style={styles.iconText}>图标4</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Ionicons name="desktop" size={30} color="#333" />
          <Text style={styles.iconText}>图标5</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Ionicons name="game-controller" size={30} color="#333" />
          <Text style={styles.iconText}>图标6</Text>
        </View>
      </View>
    </View>
  );
};
function CustomDrawerContent({navigation}) {
  const handleDrawerClose = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.toolView}>
          <TouchableOpacity onPress={handleDrawerClose}>
            <Ionicons name="close" size={38} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="line-scan" size={28} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoView}>
          <Avatar
            size={48}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/35.jpg'}}
          />
          <View style={styles.infoRightView}>
            <Text style={{fontSize: 18, lineHeight: 28, fontWeight: 500}}>
              Antlers
            </Text>
            <SmallButton title="你的背包：10🫘 >" onPress={() => {}} />
          </View>
        </View>
        <View style={styles.firstView}>
          <FlatList
            data={FIRSTDATA}
            renderItem={({item}) => (
              <Item title={item.title} iconName={item.iconName} />
            )}
            keyExtractor={item => item.id}
          />
          <Line />
          <FlatList
            data={SECONDDATA}
            renderItem={({item}) => (
              <Item title={item.title} iconName={item.iconName} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <OtherView />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  toolView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoView: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRightView: {
    width: 120,
    height: 30,
    marginLeft: 10,
    justifyContent: 'center',
  },
  firstView: {
    marginTop: 20,
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    height: 36,
    alignItems: 'center',
  },
  otherView: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    height: 140,
    backgroundColor: 'rgba(245, 245, 245, 0.6)',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // 用于 Android 上的阴影效果
    justifyContent: 'space-between',
    padding: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#333',
  },
});
export default CustomDrawerContent;
