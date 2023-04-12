import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {useScroller} from 'context/ScrollContext';
import styled from 'styled-components/native';
import {colors} from 'constants/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconButton from 'components/atoms/IconButton';

export interface HeaderProps {
  // headerLeft?: JSX.Element;
  // headerRight?: JSX.Element;
  title: string;
}

export const AnimatedHeader = (props: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const headerOffsetY = insets.top + 48;
  const {scrollOffsetY} = useScroller();
  const [animatedHeader] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedHeader, {
      toValue: scrollOffsetY > headerOffsetY ? 0 : -headerOffsetY,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [scrollOffsetY]);

  const handleCookieOnPress = () => {
    console.log('clicked cookie!');
  };

  const handleSearchOnPress = () => {
    console.log('clicked search!');
  };

  return (
    <StyledHeaderAnimated
      style={{
        transform: [{translateY: animatedHeader}],
        paddingTop: insets.top,
        height: headerOffsetY,
      }}>
      <StyledHeaderLeft>
        <IconButton iconName="icon_cookie" onPress={handleCookieOnPress} />
        <IconButton iconName="icon_bubble" onPress={handleCookieOnPress} />
      </StyledHeaderLeft>
      <StyledTitleText>{props.title}</StyledTitleText>
      <StyledHeaderRight>
        <IconButton
          iconName="icon_search"
          onPress={handleSearchOnPress}
          hitSlop={5}
        />
      </StyledHeaderRight>
    </StyledHeaderAnimated>
  );
};

export default AnimatedHeader;

const StyledHeaderAnimated = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: white;
  z-index: 9;
`;
const StyledTitleText = styled.Text`
  flex-basis: 33%;
  font-size: 18px;
  text-align: center;
  color: ${colors.black};
`;
const StyledHeaderLeft = styled.View`
  flex-basis: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-left: 9px;
`;
const StyledHeaderRight = styled.View`
  flex-basis: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  padding-right: 15px;
`;
