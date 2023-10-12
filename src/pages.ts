import { FontAwesome } from '@expo/vector-icons';

export const pageList = {
  home: 'home',
  article: 'article',
  notification: 'notifications'
} as const;
type keys = keyof typeof pageList;

export type PageName = typeof pageList[keys];
export type IconName = keyof typeof FontAwesome.glyphMap;

interface Page {
  name: PageName,
  icon: IconName
}

const pages: ReadonlyArray<Page> = [
  { name: 'home', icon: "home" },
  { name: 'article', icon: "book" },
  { name: 'notifications', icon: "bell" }
];

export default pages;