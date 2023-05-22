import { ImageProps } from 'react-native';

export const BACKGROUND_COLOR = '#F1F1F1';

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
    source: require('../assets/svg/onBoardingOne.svg'),
  },
  {
    title: 'Dispatcher',
    description:
      "Search your fields of intrest and the best part..",
    source: require('../assets/svg/onBoardingOne.svg'),
  },
  {
    title: 'Dispatcher',
    description:
      'Save all your articles for later, filter, learn and explore the lates news',
    source: require('../assets/svg/onBoardingOne.svg'),
  },
];
