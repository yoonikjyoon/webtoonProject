import React from 'react';
import styled from 'styled-components/native';
import {colors} from 'constants/color';

const IconUp = () => {
  return (
    <IconContainer>
      <IconText>UP</IconText>
    </IconContainer>
  );
};
export default IconUp;
const IconContainer = styled.View`
  width: 19px;
  border: 0.2px solid ${colors.redPink};
  padding: 2px;
  border-radius: 2px;
  margin-right: 3px;
`;
const IconText = styled.Text`
  font-size: 10px;
  color: ${colors.redPink};
`;
