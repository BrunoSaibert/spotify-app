import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.lighter};

  width: 100%;
  height: 40px;

  padding: 8px 16px;
  margin: 8px auto;

  border-radius: 6px;

  flex-direction: row;
`;

export const Input = styled.TextInput`
  margin-left: 8px;
`;
