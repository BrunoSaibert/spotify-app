import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  width: 49%;
  height: 56px;

  margin-bottom: 8px;

  background-color: ${({theme}) => theme.colors.dark};
  border-radius: 4px;

  overflow: hidden;
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
