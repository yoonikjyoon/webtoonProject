import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {useScroller} from 'context/ScrollContext';
import styled from 'styled-components/native';

export interface HeaderProps {
  headerLeft?: JSX.Element;
  headerRight?: JSX.Element;
  title: string;
}

export const Header = (props: HeaderProps) => {
  const {titleShowing, opacity} = useScroller();
  const [titleFade] = useState(new Animated.Value(0));

  useEffect(() => {
    titleShowing === false &&
      Animated.timing(titleFade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();

    titleShowing === true &&
      Animated.timing(titleFade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();
  });

  return (
    <StyledHeader shadowOpacity={opacity}>
      <StyledHeaderLeft>
        {props.headerLeft !== undefined && props.headerLeft}
      </StyledHeaderLeft>
      <StyledHeaderAnimated style={{opacity: titleFade}}>
        <StyledTitleText>{props.title}</StyledTitleText>
      </StyledHeaderAnimated>
      <StyledHeaderRight>
        {props.headerRight !== undefined && props.headerRight}
      </StyledHeaderRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.View<ViewStyle>`
  display: flex;
  width: 100%;
  height: 44px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: white;
  shadow-color: rgba(36, 36, 44, 0.8);
  shadow-offset: 0px 1px;
  shadow-radius: 15px;
  shadow-opacity: ${({shadowOpacity}) => shadowOpacity};
  z-index: 9;
`;
const StyledHeaderAnimated = styled(Animated.View)`
  display: flex;
  flex-basis: 33%;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: green;
`;
