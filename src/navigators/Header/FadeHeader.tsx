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

export const FadeHeader = (props: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const {titleShowing, opacity} = useScroller();
  const [titleFade] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(titleFade, {
      toValue: titleShowing ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.sin,
    }).start();
  });

  return (
    <StyledHeader
      style={{
        paddingTop: insets.top,
        height: insets.top + 48,
      }}>
      <StyledHeaderLeft>
        {props.headerLeft !== undefined && props.headerLeft}
      </StyledHeaderLeft>
      <StyledHeaderAnimated
        style={{
          opacity: titleFade,
          backgroundColor: 'white',
          zIndex: 10,
        }}>
        <StyledTitleText>{props.title}</StyledTitleText>
      </StyledHeaderAnimated>
      <StyledHeaderRight>
        {props.headerRight !== undefined && props.headerRight}
      </StyledHeaderRight>
    </StyledHeader>
  );
};

export default FadeHeader;

const StyledHeader = styled.View<ViewStyle>`
  display: flex;
  width: 100%;
  height: 44px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${colors.white};
  z-index: 9;
`;
const StyledHeaderAnimated = styled(Animated.View)`
  display: flex;
  flex-basis: 33%;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${colors.white};
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
