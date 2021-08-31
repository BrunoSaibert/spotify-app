import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.darker};
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-family: 'OpenSans_700Bold';
  color: ${({theme}) => theme.colors.lighter};
  text-align: center;
  font-size: 40px;
`;

export function Home() {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
}
