import React from 'react';
import {ImageProps} from 'react-native';

import * as S from './styles';

export function RecentImage({...rest}: ImageProps) {
  return (
    <S.Container
      {...rest}
      style={{
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 4,
      }}
    />
  );
}
