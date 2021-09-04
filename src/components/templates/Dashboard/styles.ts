import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.darker};
  margin-bottom: 56px;
`;

export const Header = styled(LinearGradient)``;

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
  font-family: ${({ theme }) => theme.fonts.open_sans_700};
  color: ${({ theme }) => theme.colors.lighter};

  letter-spacing: -0.3px;
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled(BorderlessButton)`
  margin-left: 24px;
`;

export const ActionIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${RFValue(22)}px;
`;
