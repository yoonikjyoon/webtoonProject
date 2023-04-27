import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import AnimatedHeader from 'navigators/Header/AnimatedHeader';
import FadeHeader from 'navigators/Header/FadeHeader';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';
import {ScrollContextProvider} from 'context/ScrollContext';
import {ScrollView} from 'context/ScrollContext';
import ScrollableTab, {TabType} from 'components/molecules/ScrollableTab';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  SCROLLABLE_TAB_HEIGHT,
  COLLAPSIBLE_HEADER_HEIGHT,
} from 'constants/common';
import ListItem from 'components/molecules/ListItem';

const tabList: TabType[] = [
  {label: '신작', value: 7},
  {label: '매일+', value: 8},
  {label: '월', value: 1},
  {label: '화', value: 2},
  {label: '수', value: 3},
  {label: '목', value: 4},
  {label: '금', value: 5},
  {label: '토', value: 6},
  {label: '일', value: 0},
  {label: '완결', value: 9},
];

const Main = () => {
  const [dayOfWeek, setDayOfWeek] = useState();
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + COLLAPSIBLE_HEADER_HEIGHT;
  const headerPadding = headerHeight + SCROLLABLE_TAB_HEIGHT;
  useEffect(() => {
    const now = new Date().getDay();
    const found = tabList.find(item => item.value === now);
    setDayOfWeek(found.value);
  }, []);
  return (
    <ScrollContextProvider>
      {/* <AnimatedHeader title="WebToon" /> */}
      <ScrollableTab
        tab={tabList}
        selectedValue={dayOfWeek}
        onChangeValue={value => setDayOfWeek(value)}
      />
      <ScrollView style={{paddingTop: headerPadding}}>
        {/* <ScrollView>
        <ScrollableTab
          tab={tabList}
          selectedValue={dayOfWeek}
          onChangeValue={value => setDayOfWeek(value)}
        /> */}
        <ListItem imageUrl="test" weekday="목" hasBadge={true} />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
      </ScrollView>
    </ScrollContextProvider>
  );
};
export default Main;
const StyledContainerView = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
