import React from "react";
import { ImageProps } from "react-native";

import { CategoryImage } from "../../atoms/CategoryImage";

import * as S from "./styles";

export type CategoryProps = {
  id: string;
  type: "playlist" | "artist" | "podcast";
  title?: string;
  description?: string;
  author?: string;
  imageUrl: ImageProps;
};

type Props = {
  data: CategoryProps;
  size: "small" | "large";
};

let round: number;
let sizeCard: number;

export function Category({ data, size }: Props) {
  const textAlign: string = data.type === "artist" ? "center" : "left";

  switch (size) {
    case "small":
      sizeCard = 120;
      break;

    default:
      sizeCard = 152;
      break;
  }

  switch (data.type) {
    case "playlist":
      round = 0;
      break;
    case "artist":
      round = sizeCard;
      break;
    case "podcast":
      round = 8;
      break;

    default:
      break;
  }

  return (
    <S.Container size={sizeCard}>
      <CategoryImage source={data.imageUrl} size={sizeCard} round={round} />

      {!!data.title && (
        <S.Title
          align={textAlign}
          numberOfLines={data.type === "podcast" ? 1 : 2}
        >
          {data.title}
        </S.Title>
      )}

      {size !== "small" && !!data.description && (
        <S.Description align={textAlign}>{data.description}</S.Description>
      )}

      {size !== "small" && !!data.author && (
        <S.Description align={textAlign}>
          {data.type === "podcast" && "Show · "}
          {data.author}
        </S.Description>
      )}
    </S.Container>
  );
}
