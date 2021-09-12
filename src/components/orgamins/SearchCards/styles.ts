import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";

export const Container = styled.View`
  padding: 16px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.open_sans_700};
  color: ${({ theme }) => theme.colors.lighter};

  letter-spacing: -0.3px;

  margin-bottom: 8px;
`;

export const List = styled(FlatList)``;
