import React from 'react';
import {useTheme} from 'styled-components';

import {Recents} from '../../orgamins/Recents';

import * as S from './styles';

type Props = {
  color: string;
  recents: any;
};

export function Dashboard({color, recents}: Props) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header
        colors={[color, theme.colors.darker]}
        start={[0, 0]}
        end={[0.12, 0.5]}>
        <S.WellcomeWrapper>
          <S.Title>Boa noite</S.Title>

          <S.ActionsWrapper>
            <S.ActionButton onPress={() => {}}>
              <S.ActionIcon name="bell" />
            </S.ActionButton>

            <S.ActionButton onPress={() => {}}>
              <S.ActionIcon name="clock" />
            </S.ActionButton>

            <S.ActionButton onPress={() => {}}>
              <S.ActionIcon name="settings" />
            </S.ActionButton>
          </S.ActionsWrapper>
        </S.WellcomeWrapper>

        <Recents data={recents} />
      </S.Header>
    </S.Container>
  );
}
