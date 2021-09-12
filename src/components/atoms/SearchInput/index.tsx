import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import * as S from "./styles";

export function SearchInput() {
  const theme = useTheme();

  return (
    <S.Container>
      <Feather name="search" size={24} color={theme.colors.grey} />
      <S.Input placeholder="Artistas, canciones o podcasts" />
    </S.Container>
  );
}
