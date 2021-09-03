import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View<{size: number}>`
  width: ${({size}) => RFValue(size)}px;
`;

export const Title = styled.Text<{align: string}>`
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.open_sans_700};
  color: ${({theme}) => theme.colors.lighter};

  text-align: ${({align}) => align};

  letter-spacing: -0.3px;

  margin-top: 8px;
`;

export const Description = styled.Text<{align: string}>`
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.open_sans_700};
  color: ${({theme}) => theme.colors.grey};

  text-align: ${({align}) => align};

  letter-spacing: -0.3px;

  margin: 4px 0;
`;
