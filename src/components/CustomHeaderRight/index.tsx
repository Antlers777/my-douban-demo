import React from 'react';
import {StyleSheet, SafeAreaView, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../../theme';

function CustomHeaderRight({navigation, route}) {
  function goToMessage() {
    navigation.navigate({
      name: 'Message',
    });
  }
  return (
    <SafeAreaView style={styles.safe}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => goToMessage()}>
        <Ionicons name="mail-outline" size={26} color={primaryColor} />
      </TouchableHighlight>
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

export default CustomHeaderRight;
