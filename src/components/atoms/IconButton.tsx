import React from 'react';
import {Image, Pressable} from 'react-native';
import {getIconProps, IconListKeyType} from 'constants/icon';

export interface Props {
  iconName: IconListKeyType;
  onPress?: () => void;
  hitSlop?: number;
}

const IconButton = ({iconName, onPress, hitSlop}: Props) => {
  return (
    <Pressable onPress={onPress} hitSlop={hitSlop}>
      <Image {...getIconProps(iconName)} />
    </Pressable>
  );
};
export default IconButton;
