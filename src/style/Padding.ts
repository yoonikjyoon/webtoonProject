import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export const StyledPadding = styled.View<ViewStyle>`
  height: ${({height}) => (height ? `${height}px` : '0px')};
  width: ${({width}) => (width ? `${width}px` : '0px')};
`;
