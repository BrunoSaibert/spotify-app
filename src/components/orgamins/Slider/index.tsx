import React, { useEffect } from "react";
import { LogBox, View } from "react-native";

import { Category, CategoryProps } from "../../molecules/Category";

import * as S from "./styles";

type Props = {
  title: string;
  size?: "small" | "large";
  data: CategoryProps[];
};

export function Slider({ title, size = "large", data }: Props) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <S.Container>
      <S.Title style={{ color: "white" }}>{title}</S.Title>

      <S.Slider
        data={data}
        renderItem={({ item }: any) => <Category data={item} size={size} />}
        contentContainerStyle={{ paddingRight: 32 }}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        keyExtractor={({ id }: any) => `${id}`}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
    </S.Container>
  );
}
