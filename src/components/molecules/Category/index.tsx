import React from 'react';
import {ImageProps} from 'react-native';

import {CategoryImage} from '../../atoms/CategoryImage';

import * as S from './styles';

export type CategoryProps = {
  id: string;
  title?: string;
  description?: string;
  imageUrl: ImageProps;
};

type Props = {
  data: CategoryProps;
  type: 'normal' | 'artist' | 'podcast';
  size: 'small' | 'large';
};

let round: number;
let sizeCard: number;

export function Category({data, type, size}: Props) {
  const textAlign: string = type === 'artist' ? 'center' : 'left';

  switch (size) {
    case 'small':
      sizeCard = 120;
      break;

    default:
      sizeCard = 152;
      break;
  }

  switch (type) {
    case 'normal':
      round = 0;
      break;
    case 'artist':
      round = sizeCard;
      break;
    case 'podcast':
      round = 8;
      break;

    default:
      break;
  }

  return (
    <S.Container size={sizeCard}>
      <CategoryImage source={data.imageUrl} size={sizeCard} round={round} />

      {!!data.title && <S.Title align={textAlign}>{data.title}</S.Title>}

      {!!data.description && (
        <S.Description align={textAlign}>{data.description}</S.Description>
      )}
    </S.Container>
  );
}
