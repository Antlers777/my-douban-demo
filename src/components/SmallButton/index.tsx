/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, Text} from 'react-native';
// 自定义带有触摸样式的小按钮
const SmallButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 6,
        backgroundColor: 'lightgray',
        borderRadius: 6,
        marginLeft: 4,
      }}
      onPress={onPress}>
      <Text style={{fontSize: 12}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
