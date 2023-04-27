import React from 'react';
import {Dimensions, Image} from 'react-native';
import styled from 'styled-components/native';
import {colors} from 'constants/color';
import {PADDING_HORIZONTAL} from 'constants/common';
import IconUp from 'components/atoms/IconUp';

export interface BadgeType {
  type: string;
}

export interface Props {
  imageUrl: string;
  weekday?: string;
  hasBadge?: boolean;
  isNew?: boolean;
}

// 받아와야할 것 : 이미지 url, 우 상단 요일, 좌 상단 뱃지(신작, 성인용)
const ListItem = ({imageUrl, weekday, hasBadge, isNew}: Props) => {
  // const windowWidth = Math.floor(Dimensions.get('window').width);
  // const containerWidth = windowWidth - PADDING_HORIZONTAL;
  // const imageWidth = containerWidth / 3;
  return (
    <StyledContainerView>
      <ImageWrap>
        {weekday && (
          <WeekDayWrap>
            <WeekDay>{weekday}</WeekDay>
          </WeekDayWrap>
        )}
        {hasBadge && <BadgeWrap />}
        {/* <Image /> */}
      </ImageWrap>
      <TitleWrap>
        {!isNew && <IconUp />}
        <TitleText>Test Title</TitleText>
      </TitleWrap>
      <InfoWrap>
        <InfoText>Sub Title</InfoText>
      </InfoWrap>
    </StyledContainerView>
  );
};
export default ListItem;
const StyledContainerView = styled.View`
  position: relative;
  width: 100px;
  height: 150px;
  margin: 5px;
`;
const ImageWrap = styled.View`
  width: 100%;
  height: 80%;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${colors.redPink};
  margin-bottom: 5px;
`;
const WeekDayWrap = styled.View`
  width: 20px;
  height: 20px;
  padding: 2px 4px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 5px;
`;
const WeekDay = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
const BadgeWrap = styled.View`
  width: 18px;
  height: 18px;
  margin: 5px;
  border-radius: 50px;
  background-color: ${colors.naverGreen};
`;
const TitleWrap = styled.View`
  width: 100%;
  height: 16px;
  flex-direction: row;
`;
const TitleText = styled.Text`
  color: ${colors.steelGray};
`;
const InfoWrap = styled.View`
  width: 100%;
  height: 10px;
`;
const InfoText = styled.Text`
  font-size: 10px;
`;
