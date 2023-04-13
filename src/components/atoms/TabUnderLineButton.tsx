import {colors} from 'constants/color';
import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export interface Props {
  label: string;
  isActive: boolean;
  height?: number;
  hitSlop?: number;
  onPress: () => void;
}

const PADDING_HORIZONTAL = 12;

const TabUnderLineButton = ({
  label,
  isActive,
  onPress,
  height = 48,
  hitSlop,
}: Props) => {
  return (
    <Pressable onPress={onPress} hitSlop={hitSlop}>
      <StyledContainerView height={height}>
        <StyledLabelText>{label}</StyledLabelText>
        {isActive && <StyledActiveUnderLine />}
      </StyledContainerView>
    </Pressable>
  );
};
export default TabUnderLineButton;

const StyledContainerView = styled.View<ViewStyle>`
  height: ${({height}) => height}px;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${PADDING_HORIZONTAL}px;
`;

const StyledLabelText = styled.Text<{isActive: boolean}>`
  font-weight: ${({isActive}) => (isActive ? 'bold' : 'normal')};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  text-align: center;
  color: ${({isActive}) => (isActive ? colors.naverGreen : colors.black)};
`;
const StyledActiveUnderLine = styled.View`
  position: absolute;
  height: 2px;
  background-color: ${colors.naverGreen};
  bottom: 0px;
  right: ${PADDING_HORIZONTAL - 5}px;
  left: ${PADDING_HORIZONTAL - 5}px;
`;
