import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {useScroller} from 'context/ScrollContext';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface HeaderProps {
  headerLeft?: JSX.Element;
  headerRight?: JSX.Element;
  title: string;
}

export const Header = (props: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const {titleShowing, opacity, offsetY, offset} = useScroller();
  const [titleFade] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(titleFade, {
      toValue: offsetY > insets.top + 48 ? 0 : -(insets.top + 48),
      duration: 200,
      useNativeDriver: true,
      easing: Easing.sin,
    }).start();
  }, [offsetY]);

  return (
    <StyledHeaderAnimated
      style={{
        // opacity: titleFade,
        // transform: [{translateY: -(insets.top + 48)}],
        transform: [{translateY: titleFade}],
        paddingTop: insets.top - 5,
        width: '100%',
        height: insets.top + 48,
        backgroundColor: 'white',
        zIndex: 10,
      }}>
      <StyledHeader
        shadowOpacity={opacity}
        style={{
          paddingTop: insets.top,
          height: insets.top + 48,
        }}>
        <StyledHeaderLeft>
          {props.headerLeft !== undefined && props.headerLeft}
        </StyledHeaderLeft>
        {/* <StyledHeaderAnimated style={{opacity: titleFade}}> */}
        <StyledTitleText>{props.title}</StyledTitleText>
        <StyledHeaderRight>
          {props.headerRight !== undefined && props.headerRight}
        </StyledHeaderRight>
      </StyledHeader>
    </StyledHeaderAnimated>
  );
};

export default Header;

const StyledHeader = styled.View<ViewStyle>`
  display: flex;
  width: 100%;
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
