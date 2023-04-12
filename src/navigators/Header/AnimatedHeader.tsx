import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {useScroller} from 'context/ScrollContext';
import styled from 'styled-components/native';
import {colors} from 'constants/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface HeaderProps {
  headerLeft?: JSX.Element;
  headerRight?: JSX.Element;
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

  return (
    <StyledHeaderAnimated
      style={{
        transform: [{translateY: animatedHeader}],
        paddingTop: insets.top,
        height: headerOffsetY,
      }}>
      <StyledHeaderLeft>
        {props.headerLeft !== undefined && props.headerLeft}
      </StyledHeaderLeft>
      <StyledTitleText>{props.title}</StyledTitleText>
      <StyledHeaderRight>
        {props.headerRight !== undefined && props.headerRight}
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
const StyledHeaderLeft = styled.View`
  flex-basis: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;
const StyledHeaderRight = styled.View`
  flex-basis: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;
const StyledTitleText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.black};
`;
