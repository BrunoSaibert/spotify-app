import React from "react";

import { SearchInput } from "../../atoms/SearchInput";
import { SearchCards } from "../../orgamins/SearchCards";

import { dataArtists, dataPodcast } from "../../../utils/database";

import * as S from "./styles";

export function Search() {
  return (
    <S.Container>
      <S.Title>Buscar</S.Title>

      <SearchInput />

      <SearchCards title="Seus gêneros favoritos" data={dataArtists} />
      <SearchCards title="Categorias populares de podcast" data={dataPodcast} />
    </S.Container>
  );
}
