/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

function CustomHeader() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{
          height: 30,
          borderColor: 'lightgray',
          borderWidth: 1,
          flex: 1,
          borderRadius: 10,
          backgroundColor: 'lightgray',
        }}
        value={searchValue}
        onChangeText={text => setSearchValue(text)}
        placeholder="搜索"
      />
    </View>
  );
}

export default CustomHeader;
