import React from 'react';
import {ImageProps} from 'react-native';
import {RecentImage} from '../../atoms/RecentImage';

import * as S from './styles';

export type RecentProps = {
  id: string;
  title: string;
  imageUrl: ImageProps;
};

type Props = {
  data: RecentProps;
};

export function Recent({data}: Props) {
  return (
    <S.Container>
      <RecentImage source={data.imageUrl} />
      <S.PlayListGridItemTitle>{data.title}</S.PlayListGridItemTitle>
    </S.Container>
  );
}
