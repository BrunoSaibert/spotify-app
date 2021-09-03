import React from 'react';
import {ImageProps} from 'react-native';

import * as S from './styles';

type Props = {
  size: number;
  round: number;
} & ImageProps;

export function CategoryImage({size, round, ...rest}: Props) {
  return <S.Container size={size} round={round} {...rest} />;
}
