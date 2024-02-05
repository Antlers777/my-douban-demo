/* eslint-disable react-native/no-inline-styles */
import {Header} from '@rneui/themed';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActionSheetIOS,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Tab, TabView} from '@rneui/themed';
import {primaryColor} from '../../theme';
import SmallButton from '../../components/SmallButton';

// 导航头
const MessageHeader = ({index = 0, setIndex, navigation}) => {
  const backNavigate = () => {
    navigation.navigate('GlobalTabs');
  };
  return (
    <Header
      backgroundColor="white"
      leftComponent={
        <TouchableOpacity onPress={backNavigate}>
          <Ionicons name="chevron-back" size={30} color="#333" />
        </TouchableOpacity>
      }
      centerComponent={
        <View style={{width: '100%', marginTop: -10}}>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            dense
            indicatorStyle={{
              backgroundColor: '#333',
              height: 3,
            }}>
            <Tab.Item title="提醒" titleStyle={{fontSize: 16, color: '#333'}} />
            <Tab.Item title="私信" titleStyle={{fontSize: 16, color: '#333'}} />
          </Tab>
        </View>
      }
    />
  );
};

// Tab切换屏幕
const TabViewScreen = ({index = 0, setIndex}) => {
  return (
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{flex: 1}}>
        <RemindScreen />
      </TabView.Item>
      <TabView.Item style={{flex: 1}}>
        <LetterScreen />
      </TabView.Item>
    </TabView>
  );
};

// 提醒屏幕
const RemindScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text>提醒</Text>
    </View>
  );
};

// 私信的假数据
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nickname: 'Antlers',
    time: '昨天',
    content: '呵呵呵',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nickname: '月色如注',
    time: '前天',
    content: '你好呀',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145575e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557244129d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557243229d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1454231e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1452322e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-141571e29d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571119d72',
    nickname: 'postkiller',
    time: '今天',
    content: '你明天去哪里玩？',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
];
function ItemPress() {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ['取消', '置顶', '删除'],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 0,
      userInterfaceStyle: 'light',
      tintColor: primaryColor,
    },
    buttonIndex => {
      if (buttonIndex === 0) {
        // cancel action
      } else if (buttonIndex === 1) {
        setResult(Math.floor(Math.random() * 100) + 1);
      } else if (buttonIndex === 2) {
        setResult('🔮');
      }
    },
  );
}
// 私信列表Item类型
type ItemProps = {nickname: string; time: string; content: string; uri: string};
// 私信Item样式
const Item = ({nickname, time, content, uri}: ItemProps) => (
  <View style={styles.item}>
    <Image
      style={styles.itemLogo}
      source={{
        uri: uri,
      }}
    />
    <View style={{paddingLeft: 20}}>
      <Text style={{fontSize: 16, color: '#333', lineHeight: 20}}>
        {nickname}
      </Text>
      <Text style={{fontSize: 14, color: '#666', lineHeight: 20}}>
        {content}
      </Text>
    </View>
    <View
      style={{
        position: 'absolute',
        right: 10,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 14, color: '#666', paddingRight: 20}}>
        {time}
      </Text>
      <TouchableOpacity onPress={() => ItemPress()}>
        <Ionicons name="ellipsis-horizontal-sharp" size={26} color="#333" />
      </TouchableOpacity>
    </View>
  </View>
);

// 私信屏幕
const LetterScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 1}}>
        <View style={styles.TabRightTool}>
          <View style={styles.TabRightToolLeft}>
            <Text>10条</Text>
          </View>
          <View style={styles.TabRightToolRight}>
            <SmallButton title="全部已读" onPress={() => {}} />
            <SmallButton title="发私信" onPress={() => {}} />
            <SmallButton title="设置" onPress={() => {}} />
          </View>
        </View>
        <View style={styles.TabRightNoticeBar}>
          <View style={styles.TabRightNoticeBarLeft}>
            <Ionicons name="close-outline" size={30} color="#333" />
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'darkcyan'}}>打开推送，</Text>
              <Text style={{color: 'darkcyan'}}>不再错过友邻私信</Text>
            </View>
          </View>
          <View style={styles.TabRightNoticeBarRight}>
            <SmallButton title="去开启" />
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              nickname={item.nickname}
              content={item.content}
              time={item.time}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

// 消息屏幕
function Message({navigation}) {
  const [index, setIndex] = React.useState(0);
  return (
    <View style={{flex: 1}}>
      <MessageHeader
        index={index}
        setIndex={setIndex}
        navigation={navigation}
      />
      <View style={{flex: 1}}>
        <TabViewScreen index={index} setIndex={setIndex} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TabRight: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: 300,
  },
  TabRightTool: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
  TabRightToolLeft: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    lineHeight: 20,
  },
  TabRightToolRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  TabRightNoticeBar: {
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'turquoise',
  },
  TabRightNoticeBarLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TabRightNoticeBarRight: {
    height: 40,
    width: 60,
    alignItems: 'center',
  },
  item: {
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 0,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  itemLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Message;
