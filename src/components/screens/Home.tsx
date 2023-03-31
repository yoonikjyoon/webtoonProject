import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';

const Home = () => {
  return (
    <>
      <StyledContainerView>
        <Button title="Hello" />
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
