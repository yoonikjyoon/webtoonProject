import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export const StyledLine = styled.View<ViewStyle>`
  height: 1px;
  background-color: ${({backgroundColor}) =>
    typeof backgroundColor === 'string' ? `${backgroundColor}` : '#eeeeee'};
  margin-horizontal: ${({marginHorizontal}) =>
    marginHorizontal ? `${marginHorizontal}px` : '0px'};
`;

export const StyledVerticalLine = styled.View<ViewStyle>`
  width: 1px;
  height: 100%;
  background-color: ${({backgroundColor}) =>
    typeof backgroundColor === 'string' ? `${backgroundColor}` : '#eeeeee'};
  margin-horizontal: ${({marginHorizontal}) =>
    marginHorizontal ? `${marginHorizontal}px` : '0px'};
`;

export const SideMarginStyledLine = styled.View<ViewStyle>`
  height: 1px;
  background-color: ${({backgroundColor}) =>
    typeof backgroundColor === 'string' ? `${backgroundColor}` : '#eeeeee'};
  margin: 0px 15px;
`;
