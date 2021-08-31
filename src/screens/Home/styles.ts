import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.darker};
`;

export const WellcomeWrapper = styled.View`
  width: 100%;
  padding: 0 16px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(27)}px;
  font-family: ${({theme}) => theme.fonts.open_sans_700};
  color: ${({theme}) => theme.colors.lighter};

  letter-spacing: -0.3px;
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled(BorderlessButton)`
  margin-left: 24px;
`;

export const ActionIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.grey};
  font-size: ${RFValue(22)}px;
`;

export const PlayListWrapper = styled.View``;

export const PlayListGrid = styled(FlatList)`
  padding: 16px;
`;

export const PlayListGridItem = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  width: 49%;
  height: 56px;

  margin-bottom: 8px;

  background-color: ${({theme}) => theme.colors.dark};
  border-radius: 4px;

  overflow: hidden;
`;

export const PlayListGridItemImage = styled.Image`
  width: 56px;
  height: 56px;

  background-color: ${({theme}) => theme.colors.lighter};
`;

export const PlayListGridItemTitle = styled.Text`
  padding: 8px;

  align-items: center;
  justify-content: center;
  flex-shrink: 1;

  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(13.62)}px;
  font-family: ${({theme}) => theme.fonts.open_sans_700};
  color: ${({theme}) => theme.colors.lighter};

  letter-spacing: -0.3px;
`;
