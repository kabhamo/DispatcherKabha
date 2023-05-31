import { ImageProps } from 'react-native';
import { ArticleResponse } from './types';

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

//! Testing - To delete
export const ARTICLES: ArticleResponse[] = [
  {
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
  },
  {
    "source": {
        "id": null,
        "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "95-year-old woman Tasered by police in Australia dies - BBC",
    "description": "Clare Nowland was Tasered by police at a care home in New South Wales last week, sparking an outcry.",
    "url": "https://www.bbc.com/news/world-australia-65696475",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/476F/production/_129778281_clare_nowland.jpg",
    "publishedAt": "2023-05-24T12:12:40Z",
    "content": "A 95-year-old woman who was Tasered by police at an Australian care home, sparking a public outcry, has died.\r\nClare Nowland was critically injured after police responded to reports she was wandering… [+1511 chars]"
}
]

