import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
`;

export const Player = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;

  overflow: hidden;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.dark};

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.darker};

  position: absolute;
  bottom: 56px;
  left: 0;
`;

export const TextContent = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;

  height: ${RFValue(56)}px;

  margin-right: 24px;
  position: relative;
`;

export const TextContainerBefore = styled(LinearGradient)`
  width: 24px;
  height: ${RFValue(56)}px;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const TextContainerAfter = styled(LinearGradient)`
  width: 24px;
  height: ${RFValue(56)}px;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export const Title = styled.Text`
  margin-right: 24px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.open_sans_600};
  color: ${({ theme }) => theme.colors.lighter};
`;

export const ActionButton = styled(BorderlessButton)`
  margin-right: 24px;
`;

export const ActionIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${RFValue(22)}px;
`;
