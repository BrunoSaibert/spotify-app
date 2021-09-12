import React from "react";
import { SearchCard } from "../../molecules/SearchCard";

import * as S from "./styles";

export function SearchCards({ title, data }: any) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.List
        data={data}
        renderItem={({ item }: any) => <SearchCard data={item} />}
        keyExtractor={({ id }: any) => `${id}`}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
      />
    </S.Container>
  );
}
