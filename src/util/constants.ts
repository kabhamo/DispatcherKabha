import { ImageProps } from 'react-native';
import { ArticleResponse, DrawerListItem } from './types';
import { SourcesDrawerOptionsEnum, LanguageDrawerOptionsEnum } from './enums';

// todo make sure u understan the Pick
export interface PageInterface extends Pick<ImageProps, 'source'> {
  title: string;
  description: string;
}

export const PAGES: PageInterface[] = [
  {
    title: 'Dispatcher',
    description:
      'Welcon to Dispatcher, the right way to read your  news. Just open the app',
    source: require('../assets/svg/onBoardingScreen.svg'),
  },
  {
    title: 'Dispatcher',
    description:
      "Search your fields of intrest and the best part..",
    source: require('../assets/svg/onBoardingScreen.svg'),
  },
  {
    title: 'Dispatcher',
    description:
      'Save all your articles for later, filter, learn and explore the lates news',
    source: require('../assets/svg/onBoardingScreen.svg'),
  },
];

export const drawerItemsContent: DrawerListItem[] = [
  {
      drawer: { label: 'Sources' },
      currentOptionState: 'All',
      drawerOptions: [
          SourcesDrawerOptionsEnum.CBS,
          SourcesDrawerOptionsEnum.NBC,
          SourcesDrawerOptionsEnum.Ynet
      ]
  },
  {
      drawer: { label: 'Language' },
      currentOptionState: 'All',
      drawerOptions: [
          LanguageDrawerOptionsEnum.AR,
          LanguageDrawerOptionsEnum.EN,
          LanguageDrawerOptionsEnum.HE
      ]
  }
]
