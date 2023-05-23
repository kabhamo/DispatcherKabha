import { ImageProps } from 'react-native';
import { ArticleResponse } from './types';

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

export const ARTICLE: ArticleResponse = {
  "source": {
      "id": null,
      "name": "The Guardian"
  },
  "author": "Guardian staff reporter",
  "title": "Spanish football chief admits racism problem after Vinícius Júnior abuse - The Guardian",
  "description": "Comments follow racial abuse of Real Madrid player during match against Valencia",
  "url": "https://www.theguardian.com/world/2023/may/22/spanish-football-chief-acknowledges-racism-problem-after-vinicius-jr-abuse",
  "urlToImage": "https://i.guim.co.uk/img/media/aa1cb5ea7d2738d70f1721a4897b488c453933a4/0_89_5000_2999/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=401ae3554c59771835168deab79830af",
  "publishedAt": "2023-05-22T12:14:00Z",
  "content": "The head of Spains national football federation has said the country has a problem with racism following the abuse hurled at Real Madrids Vinícius Júnior during Sundays match against Valencia.\r\nLuis … [+771 chars]"
}

