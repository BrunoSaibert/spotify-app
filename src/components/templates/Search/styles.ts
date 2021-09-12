import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.darker};
  margin-bottom: 56px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  font-size: ${RFValue(28)}px;
  line-height: ${RFValue(38)}px;
  font-family: ${({ theme }) => theme.fonts.open_sans_700};
  color: ${({ theme }) => theme.colors.lighter};

  letter-spacing: -0.3px;
`;
