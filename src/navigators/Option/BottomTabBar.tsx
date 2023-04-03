import React, {ReactElement} from 'react';
import {Platform, Pressable, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import Icon from 'components/atoms/Icon';
import {IconListKeyType} from 'constants/icon';
import {
  BOTTOM_TAB_CONTAINER_HEIGHT,
  BOTTOM_TAB_CONTAINER_SAFEAREA_HEIGHT,
  BOTTOM_TAB_HEIGHT,
  BOTTOM_TAB_RADIUS,
} from 'constants/bottomTab';

export const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): ReactElement => {
  const insets = useSafeAreaInsets();
  const addBottomHeight = insets.bottom
    ? BOTTOM_TAB_CONTAINER_SAFEAREA_HEIGHT
    : 0;
  const bottomTabContainerHeight =
    BOTTOM_TAB_CONTAINER_HEIGHT + addBottomHeight;

  return (
    <StyledContainerView>
      <StyledTabBarContainerView
        style={{
          paddingBottom: addBottomHeight,
          height: bottomTabContainerHeight,
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          let iconName = '';
          let menuName = '';

          switch (route.name) {
            case 'Main':
              iconName = 'icon_webtoon';
              menuName = '웹툰';
              break;
            case 'Recommend':
              iconName = 'icon_finish';
              menuName = '추천완결';
              break;
            case 'Challenge':
              iconName = 'icon_challenge';
              menuName = '베스트도전';
              break;
            case 'MyPage':
              iconName = 'icon_smile';
              menuName = 'MY';
              break;
            case 'More':
              iconName = 'icon_more';
              menuName = '더보기';
              break;
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (iconName && isFocused) {
            iconName = `${iconName}_on`;
          }
          return (
            <StyledBottomButton key={index} onPress={onPress}>
              <Icon iconName={iconName as IconListKeyType} />
              <TextMenuName isFocused={isFocused}>{menuName}</TextMenuName>
            </StyledBottomButton>
          );
        })}
      </StyledTabBarContainerView>
    </StyledContainerView>
  );
};
const StyledContainerView = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
`;
const StyledTabBarContainerView = styled.View<ViewStyle>`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${BOTTOM_TAB_HEIGHT}px;
  background-color: white;
  border-top-width: 1px;
  border-top-color: gray;
`;
const StyledBottomButton = styled(Pressable)`
  padding-top: 3px;
  height: 60px;
  width: 48px;
  align-items: center;
  justify-content: center;
`;
const TextMenuName = styled.Text<{isFocused?: boolean}>`
  font-size: 10px;
  line-height: 21px;
  letter-spacing: -0.2px;
  text-align: center;
`;
