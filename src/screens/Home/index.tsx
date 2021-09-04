import React from "react";
import { useTheme } from "styled-components";

import { Dashboard } from "../../components/templates/Dashboard";

import { dataRecents, dataPodcast, dataArtists } from "../../utils/database";

export function Home() {
  const theme = useTheme();

  return (
    <Dashboard
      color={theme.colors.primary}
      recents={dataRecents}
      podcasts={dataPodcast}
      artists={dataArtists}
    />
  );
}
