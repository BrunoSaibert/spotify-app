import React from 'react';
import {useTheme} from 'styled-components';

import {Recents} from '../../orgamins/Recents';
import {Slider} from '../../orgamins/Slider';

import * as S from './styles';

type Props = {
  color: string;
  recents: any;
};

const date = new Date();
const hour = date.getHours();

let title = '';

if (hour > 6 && hour < 12) {
  title = 'Bom dia';
} else if (hour < 18) {
  title = 'Boa tarde';
} else {
  title = 'Boa noite';
}

export function Dashboard({color, recents}: Props) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header
        colors={[color, theme.colors.darker]}
        start={[0, 0]}
        end={[0.12, 0.5]}>
        <S.WellcomeWrapper>
          <S.Title>{title}</S.Title>

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

      <Slider title="Seus programas" data={recents} type="podcast" />
      <Slider title="Seus artistas" data={recents} type="artist" />
      <Slider
        title="Seus artistas mini"
        data={recents}
        type="artist"
        size="small"
      />
      <Slider title="Tocadas recentemente" data={recents} size="small" />
      <Slider title="100% você" data={recents} />
    </S.Container>
  );
}
