import React from 'react';

import {Recent} from '../../molecules/Recent';

import * as S from './styles';

export function Recents({data}: any) {
  return (
    <S.Container
      data={data}
      renderItem={({item}: any) => <Recent data={item} />}
      keyExtractor={({id}: any) => `${id}`}
      showsHorizontalScrollIndicator={false}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      numColumns={2}
    />
  );
}
