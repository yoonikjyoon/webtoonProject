import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';

const Main = () => {
  return (
    <>
      <StyledContainerView>
        <Button title="WebToon" />
        <Icon iconName="icon_webtoon" />
      </StyledContainerView>
    </>
  );
};
export default Main;
const StyledContainerView = styled.View`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
