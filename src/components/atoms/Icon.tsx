import React from 'react';
import {Image} from 'react-native';
import {getIconProps, IconListKeyType} from 'constants/icon';

export interface Props {
  iconName: IconListKeyType;
}

const Icon = ({iconName}: Props) => {
  return <Image {...getIconProps(iconName)} />;
};
export default Icon;
