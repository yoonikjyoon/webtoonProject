import React, {useEffect, useRef, useState, useCallback} from 'react';
import {ViewStyle, FlatList, Animated} from 'react-native';
import styled from 'styled-components/native';
import TabUnderLineButton from 'components/atoms/TabUnderLineButton';
import {colors} from 'constants/color';
import {
  SCROLLABLE_TAB_HEIGHT,
  COLLAPSIBLE_HEADER_HEIGHT,
} from 'constants/common';
import {StyledLine} from 'style/Line';
import {useScroller} from 'context/ScrollContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// export interface TabType {
//   label: string;
//   value: string | number;
// }

// export interface Props {
//   selectedValue: string | number;
//   tab: TabType[];
//   onChangeValue: (value: string | number) => void;
//   color?: string;
//   paddingLeft?: number;
//   isVisibleStyledLine?: boolen;
// }

// const ScrollableTab = ({
//   selectedValue,
//   tab,
//   onChangeValue,
//   color,
//   paddingLeft,
//   isVisibleStyledLine = true,
// }: Props) => {
//   const insets = useSafeAreaInsets();
//   const headerMaxHeight = insets.top + 96;
//   const headerMinHeight = headerMaxHeight - 48;
//   const headerDistance = headerMaxHeight - headerMinHeight;
//   const flatListRef = useRef<FlatList<TabType>>(null);
//   const {scrollOffsetY} = useScroller();
//   const animatedTabValue = useRef(new Animated.Value(0)).current;
//   const animatedTabTranslateY = animatedTabValue.interpolate({
//     inputRange: [0, headerDistance],
//     outputRange: [headerMaxHeight, headerMinHeight],
//     // inputRange: [0, headerMaxHeight],
//     // outputRange: [0, -(headerMaxHeight / 2)],
//     extrapolate: 'clamp',
//   });

//   useEffect(() => {
//     Animated.multiply(animatedTabTranslateY, -1.5);
//     // Animated.event([{nativeEvent: {contentOffset: {y: animatedTabValue}}}]);
//   }, [scrollOffsetY]);

//   useEffect(() => {
//     const index =
//       selectedValue && tab.findIndex(data => data.value === selectedValue);
//     flatListRef.current?.scrollToIndex({
//       animated: true,
//       index: index ? index : 0,
//       viewPosition: 0.5,
//     });
//   }, [selectedValue]);
//   return (
//     <StyledContainerView backgroundColor={color ? color : colors.white}>
//       <StyledTabHeaderView height={headerMaxHeight} />
//       <Animated.View
//         style={[
//           {
//             // transform: [{translateY: animatedTabTranslateY}],
//             // postion: 'absolute',
//             // left: 0,
//             // right: 0,
//             // top: 0,
//             // height: animatedTabTranslateY,
//             // zIndex: 8,
//             // position: 'static',
//             top: scrollOffsetY < 48 ? 0 : -48,
//             // height: scrollOffsetY < 48 ? headerMaxHeight : headerMinHeight,
//             backgroundColor: colors.white,
//             // borderWidth: 1,
//           },
//         ]}>
//         <FlatList<TabType>
//           alwaysBounceHorizontal={false}
//           data={tab}
//           ref={flatListRef}
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{flexGrow: 1}}
//           onScrollToIndexFailed={info => {
//             const wait = new Promise(resolve => setTimeout(resolve, 500));
//             wait.then(() => {
//               flatListRef.current?.scrollToIndex({
//                 animated: true,
//                 index: info.index,
//               });
//             });
//           }}
//           // ListHeaderComponent={<StyledTabHeaderView height={150} />}
//           renderItem={({item, index}) => (
//             <TabUnderLineButton
//               key={index}
//               label={item.label}
//               isActive={item.value === selectedValue}
//               onPress={() => {
//                 onChangeValue(item.value);
//               }}
//             />
//           )}
//         />
//       </Animated.View>
//     </StyledContainerView>
//   );
// };
// export default ScrollableTab;

// const StyledContainerView = styled.View<ViewStyle>`
//   width: 100%;
//   position: relative;
//   z-index: 8;
//   background-color: ${({backgroundColor}) =>
//     backgroundColor && backgroundColor};
// `;
// const StyledTabHeaderView = styled.View<ViewStyle>`
//   width: 100%;
//   height: ${({height}) => height && height}px;
//   background-color: skyblue;
// `;

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
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + COLLAPSIBLE_HEADER_HEIGHT;
  const flatListRef = useRef<FlatList<TabType>>(null);
  const {scrollOffsetY} = useScroller();
  const [animatedTabValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedTabValue, {
      toValue: scrollOffsetY > headerHeight ? -SCROLLABLE_TAB_HEIGHT : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [scrollOffsetY]);

  useEffect(() => {
    const index =
      selectedValue && tab.findIndex(data => data.value === selectedValue);
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: index ? index : 0,
      viewPosition: 0.5,
    });
  }, [selectedValue]);
  return (
    <Animated.View
      style={[
        {
          transform: [{translateY: animatedTabValue}],
          height: headerHeight + SCROLLABLE_TAB_HEIGHT,
          backgroundColor: colors.white,
          position: 'absolute',
          zIndex: 8,
        },
      ]}>
      <StyledTabHeaderView height={headerHeight} />
      <FlatList<TabType>
        alwaysBounceHorizontal={false}
        data={tab}
        ref={flatListRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              animated: true,
              index: info.index,
            });
          });
        }}
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
    </Animated.View>
  );
};
export default ScrollableTab;

const StyledContainerView = styled.View<ViewStyle>`
  width: 100%;
  background-color: ${({backgroundColor}) =>
    backgroundColor && backgroundColor};
`;
const StyledTabHeaderView = styled.View<ViewStyle>`
  width: 100%;
  height: ${({height}) => height && height}px;
  background-color: skyblue;
`;
