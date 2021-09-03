import styled from 'styled-components/native';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(Image)<{size: number; round: number}>`
  width: ${({size}) => RFValue(size)}px;
  height: ${({size}) => RFValue(size)}px;

  border-radius: ${({round}) => RFValue(round)}px;

  background-color: ${({theme}) => theme.colors.lighter};
`;
