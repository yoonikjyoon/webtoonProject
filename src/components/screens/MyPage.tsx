import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';

const MyPage = () => {
  return (
    <>
      <StyledContainerView>
        <Button title="My Page" />
        <Icon iconName="icon_smile" />
      </StyledContainerView>
    </>
  );
};
export default MyPage;
const StyledContainerView = styled.View`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
