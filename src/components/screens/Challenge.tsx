import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';

const Challenge = () => {
  return (
    <>
      <StyledContainerView>
        <Button title="Challenge" />
        <Icon iconName="icon_challenge" />
      </StyledContainerView>
    </>
  );
};
export default Challenge;
const StyledContainerView = styled.View`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
