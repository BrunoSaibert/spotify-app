import React from 'react';
import {useTheme} from 'styled-components';

import {Dashboard} from '../../components/templates/Dashboard';

import {dataRecents} from '../../utils/recents';

export function Home() {
  const theme = useTheme();

  return <Dashboard color={theme.colors.primary} recents={dataRecents} />;
}
