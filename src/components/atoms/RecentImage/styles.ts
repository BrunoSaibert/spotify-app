import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Image)`
  width: 56px;
  height: 56px;

  background-color: ${({theme}) => theme.colors.lighter};
`;
