import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import AnimatedHeader from 'navigators/Header/AnimatedHeader';
import FadeHeader from 'navigators/Header/FadeHeader';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';
import {ScrollContextProvider} from 'context/ScrollContext';
import {ScrollView} from 'context/ScrollContext';

const Main = () => {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <ScrollContextProvider>
      <AnimatedHeader title="WebToon" />
      {/* <FadeHeader title="WebToon" /> */}
      <ScrollView>
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
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
      </ScrollView>
    </ScrollContextProvider>
    // </SafeAreaView>
  );
};
export default Main;
const StyledContainerView = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
