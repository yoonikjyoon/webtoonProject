import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import Header from 'navigators/Header/Header';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';
import {ScrollContextProvider} from 'context/ScrollContext';
import {ScrollView} from 'context/ScrollContext';

const Main = () => {
  return (
    <ScrollContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <Header title="WebToon" />
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
      </SafeAreaView>
    </ScrollContextProvider>
  );
};
export default Main;
const StyledContainerView = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
