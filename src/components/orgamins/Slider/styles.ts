import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(27)}px;
  font-family: ${({theme}) => theme.fonts.open_sans_700};
  color: ${({theme}) => theme.colors.lighter};

  letter-spacing: -0.3px;

  margin-left: 16px;
  margin-bottom: 16px;
`;

export const Slider = styled(FlatList)`
  padding-left: 16px;
`;
