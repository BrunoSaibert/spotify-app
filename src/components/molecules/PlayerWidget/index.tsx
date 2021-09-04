import React, { ReactNode, useState } from "react";
import TextTicker from "react-native-text-ticker";
import { useTheme } from "styled-components";
import { CategoryImage } from "../../atoms/CategoryImage";

import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export function PlayerWidget({ children }: Props) {
  const [isPlaying, setIsPlaying] = useState(true);

  const theme = useTheme();

  return (
    <S.Container>
      {children}

      <S.Player>
        <CategoryImage
          source={require("../../../assets/images/tame_impala.jpg")}
          size={54}
          round={0}
        />

        <S.TextContent>
          <S.TextContainerBefore
            colors={[theme.colors.dark, "transparent"]}
            start={[0, 0]}
            end={[1, 0]}
          />
          <TextTicker
            duration={10000}
            loop
            bounce={false}
            repeatSpacer={80}
            marqueeDelay={1000}
            isInteraction={false}
            style={{ paddingHorizontal: 24 }}
          >
            <S.Title>Desire Be Desire Go · Tame Impala · InnerSpeaker</S.Title>
          </TextTicker>

          <S.TextContainerAfter
            colors={["transparent", theme.colors.dark]}
            start={[0, 0]}
            end={[1, 0]}
          />
        </S.TextContent>

        <S.ActionButton onPress={() => {}}>
          <S.ActionIcon name="heart" />
        </S.ActionButton>
        <S.ActionButton
          onPress={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          <S.ActionIcon name={isPlaying ? "pause" : "play"} />
        </S.ActionButton>
      </S.Player>
    </S.Container>
  );
}
