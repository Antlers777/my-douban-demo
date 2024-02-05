import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../../theme';
import {DrawerActions} from '@react-navigation/native';

function CustomHeaderLeft({navigation}) {
  const handleDrawerOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableOpacity
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={handleDrawerOpen}>
        <Ionicons name="menu" size={26} color={primaryColor} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomHeaderLeft;
