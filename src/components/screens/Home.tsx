import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import Icon from 'components/atoms/Icon';

const Home = () => {
  return (
    <>
      <StyledContainerView>
        <Button title="Hello" />
        {/* <Icon iconName="icon_smile" /> */}
      </StyledContainerView>
    </>
  );
};
export default Home;
const StyledContainerView = styled.View`
  flex: 1;
  background-color: blue;
  padding: 30px;
`;
