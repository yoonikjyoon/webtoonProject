import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';

const Recommend = () => {
  return (
    <>
      <StyledContainerView>
        <Button title="Recommend" />
        <Icon iconName="icon_finish" />
      </StyledContainerView>
    </>
  );
};
export default Recommend;
const StyledContainerView = styled.View`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
