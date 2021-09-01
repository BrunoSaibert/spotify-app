import React from 'react';
import {useTheme} from 'styled-components';

import * as S from './styles';

export function Home() {
  const data = [
    {
      id: '1',
      title: 'Músicas Curtidas',
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/KLLYdWJPqGPRfADGV9l5LKOjiH43AZ_I9E_nSdPxYaERDQpP9hAEtkWzGE9CL_LPViwjQCB6EKLdrEOcnVURxZk6m0E0WsZFPGD6UrNp0oVP4iC9F_42luTjp2v0-dgXPyvMP6_MgdKWdQS_1ff_Z63ssNzuVKC397MCuDoSxKzW1RvKmnxhXruw27pXA_PuV0KfmPX3gdD-zCN88fs',
    },
    {
      id: '2',
      title: 'Músicas Curtidas',
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/KLLYdWJPqGPRfADGV9l5LKOjiH43AZ_I9E_nSdPxYaERDQpP9hAEtkWzGE9CL_LPViwjQCB6EKLdrEOcnVURxZk6m0E0WsZFPGD6UrNp0oVP4iC9F_42luTjp2v0-dgXPyvMP6_MgdKWdQS_1ff_Z63ssNzuVKC397MCuDoSxKzW1RvKmnxhXruw27pXA_PuV0KfmPX3gdD-zCN88fs',
    },
    {
      id: '3',
      title: 'Músicas Curtidas',
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/KLLYdWJPqGPRfADGV9l5LKOjiH43AZ_I9E_nSdPxYaERDQpP9hAEtkWzGE9CL_LPViwjQCB6EKLdrEOcnVURxZk6m0E0WsZFPGD6UrNp0oVP4iC9F_42luTjp2v0-dgXPyvMP6_MgdKWdQS_1ff_Z63ssNzuVKC397MCuDoSxKzW1RvKmnxhXruw27pXA_PuV0KfmPX3gdD-zCN88fs',
    },
    {
      id: '4',
      title: 'Músicas Curtidas',
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/KLLYdWJPqGPRfADGV9l5LKOjiH43AZ_I9E_nSdPxYaERDQpP9hAEtkWzGE9CL_LPViwjQCB6EKLdrEOcnVURxZk6m0E0WsZFPGD6UrNp0oVP4iC9F_42luTjp2v0-dgXPyvMP6_MgdKWdQS_1ff_Z63ssNzuVKC397MCuDoSxKzW1RvKmnxhXruw27pXA_PuV0KfmPX3gdD-zCN88fs',
    },
    {
      id: '5',
      title: 'Músicas Curtidas',
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/KLLYdWJPqGPRfADGV9l5LKOjiH43AZ_I9E_nSdPxYaERDQpP9hAEtkWzGE9CL_LPViwjQCB6EKLdrEOcnVURxZk6m0E0WsZFPGD6UrNp0oVP4iC9F_42luTjp2v0-dgXPyvMP6_MgdKWdQS_1ff_Z63ssNzuVKC397MCuDoSxKzW1RvKmnxhXruw27pXA_PuV0KfmPX3gdD-zCN88fs',
    },
    {
      id: '6',
      title: 'Músicas Curtidas',
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/KLLYdWJPqGPRfADGV9l5LKOjiH43AZ_I9E_nSdPxYaERDQpP9hAEtkWzGE9CL_LPViwjQCB6EKLdrEOcnVURxZk6m0E0WsZFPGD6UrNp0oVP4iC9F_42luTjp2v0-dgXPyvMP6_MgdKWdQS_1ff_Z63ssNzuVKC397MCuDoSxKzW1RvKmnxhXruw27pXA_PuV0KfmPX3gdD-zCN88fs',
    },
  ];

  const theme = useTheme();

  return (
    <S.Container>
      <S.Header
        colors={[theme.colors.primary, theme.colors.darker]}
        start={[0, 0]}
        end={[0.1, 0.23]}>
        <S.WellcomeWrapper>
          <S.Title>Boa noite</S.Title>

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

        <S.PlayListWrapper>
          <S.PlayListGrid
            data={data}
            renderItem={({item}: any) => (
              <S.PlayListGridItem>
                <S.PlayListGridItemImage
                  source={{
                    uri: item.imageUrl,
                  }}
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 4,
                  }}
                />
                <S.PlayListGridItemTitle>{item.title}</S.PlayListGridItemTitle>
              </S.PlayListGridItem>
            )}
            keyExtractor={({id}: any) => `${id}`}
            showsHorizontalScrollIndicator={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            numColumns={2}
          />
        </S.PlayListWrapper>
      </S.Header>
    </S.Container>
  );
}
