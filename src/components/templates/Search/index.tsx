import React from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

import { SearchInput } from "../../atoms/SearchInput";
import { SearchCards } from "../../orgamins/SearchCards";

import { dataArtists, dataPodcast } from "../../../utils/database";

import * as S from "./styles";
import { LogBox } from "react-native";

export function Search() {
  const theme = useTheme();

  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.",
  ]);

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor={theme.colors.darker} />

      <S.Title>Buscar</S.Title>

      <SearchInput />

      <SearchCards title="Seus gêneros favoritos" data={dataArtists} />
      <SearchCards title="Categorias populares de podcast" data={dataPodcast} />
    </S.Container>
  );
}
