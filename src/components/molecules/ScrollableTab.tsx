import React, {useEffect, useRef} from 'react';
import {ViewStyle, FlatList} from 'react-native';
import styled from 'styled-components/native';
import TabUnderLineButton from 'components/atoms/TabUnderLineButton';
import {colors} from 'constants/color';
import {StyledLine} from 'style/Line';

export interface TabType {
  label: string;
  value: string | number;
}

export interface Props {
  selectedValue: string | number;
  tab: TabType[];
  onChangeValue: (value: string | number) => void;
  color?: string;
  paddingLeft?: number;
  isVisibleStyledLine?: boolen;
}

const ScrollableTab = ({
  selectedValue,
  tab,
  onChangeValue,
  color,
  paddingLeft,
  isVisibleStyledLine = true,
}: Props) => {
  const flatListRef = useRef<FlatList<TabType>>(null);

  // useEffect(() => {
  //   const index = tab.findIndex(data => data.value === selectedValue);
  //   flatListRef.current?.scrollToIndex({
  //     animated: true,
  //     index,
  //     viewPosition: 0.5,
  //   });
  // }, [selectedValue]);
  return (
    <StyledContainerView backgroundColor={color ? color : colors.white}>
      <FlatList<TabType>
        alwaysBounceHorizontal={false}
        data={tab}
        ref={flatListRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item, index}) => (
          <TabUnderLineButton
            key={index}
            label={item.label}
            isActive={item.value === selectedValue}
            onPress={() => {
              onChangeValue(item.value);
            }}
          />
        )}
      />
    </StyledContainerView>
  );
};
export default ScrollableTab;

const StyledContainerView = styled.View<ViewStyle>`
  width: 100%;
  background-color: ${({backgroundColor}) =>
    backgroundColor && backgroundColor};
`;
