import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';

const More = () => {
  return (
    <>
      <StyledContainerView>
        <Button title="More" />
        <Icon iconName="icon_more" />
      </StyledContainerView>
    </>
  );
};
export default More;
const StyledContainerView = styled.View`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
