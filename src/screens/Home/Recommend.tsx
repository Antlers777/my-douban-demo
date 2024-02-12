import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ItemData = {
  id: string;
  avatar: string;
  nickname: string;
  time: string;
  content: string;
};
const Item = ({item}: {item: ItemData}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <View>
          <Text>头像区域</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={28} color="#666" />
      </View>
      <View style={styles.itemBody}>
        <Text>{item.content}</Text>
      </View>
      <View style={styles.itemFooter}>
        <View style={styles.itemFooterFlex}>
          <Ionicons
            name="thumbs-up-outline"
            size={26}
            color="#666"
            style={{marginRight: 5}}
          />
          <Text>赞</Text>
        </View>
        <View style={styles.itemFooterFlex}>
          <Ionicons
            name="chatbox-outline"
            size={26}
            color="#666"
            style={{marginRight: 5}}
          />
          <Text>回复</Text>
        </View>
        <View style={styles.itemFooterFlex}>
          <Ionicons
            name="share-outline"
            size={26}
            color="#666"
            style={{marginRight: 5}}
          />
          <Text>转发</Text>
        </View>
      </View>
    </View>
  );
};

const DATA = [
  {
    id: 'AE7B199F-F376-0E51-5132-A92149CECBD3',
    avatar: '',
    nickname: 'antlers',
    time: '23秒前',
    content:
      '给FlatList我们确保FlatList当状态改变时它会重新渲染，给FlatList我们确保FlatList当状态改变时它会重新渲染。',
  },
  {
    id: '55998781-2839-F574-65ED-AA5FFA7EB513',
    avatar: '',
    nickname: 'antlers',
    time: '23秒前',
    content: '给FlatList我们确保FlatList当状态改变时它会重新渲染。',
  },
  {
    id: '9A93E770-55B0-F71E-4E7B-5959B9154596',
    avatar: '',
    nickname: 'antlers',
    time: '23秒前',
    content: '给FlatList我们确保FlatList当状态改变时它会重新渲染。',
  },
  {
    id: '2AA81EE1-A2EA-0AF0-7FE6-28CFCDADA5E5',
    avatar: '',
    nickname: 'antlers',
    time: '23秒前',
    content: '给FlatList我们确保FlatList当状态改变时它会重新渲染。',
  },
  {
    id: '8FACBA54-9478-3E22-DABA-112A1955750C',
    avatar: '',
    nickname: 'antlers',
    time: '23秒前',
    content:
      '给FlatList我们确保FlatList当状态改变时它会重新渲,给FlatList我们确保FlatList当状态改变时它会重新渲染',
  },
];

function RecommendScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = ({item}: {item: ItemData}) => {
    return <Item item={item} onPress={() => selectItem(item.id)} />;
  };
  // 列表间隔
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    // fetchData();
  };
  // 点击列表，查看详情
  const selectItem = ({id}: {id: string}) => {
    console.log(id);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  separator: {
    height: 0,
    backgroundColor: 'gray',
    marginVertical: 6,
  },
  item: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  itemHeader: {
    flex: 1,
    // width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: 'white',
  },
  itemBody: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  itemFooter: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 20,
  },
  itemFooterFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecommendScreen;
