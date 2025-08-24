export interface ListItem {
  id: string,
  title: string,
  cards: string[]
}

export interface List {
  [key: string]: ListItem
}

export interface CardItem {
  id: string,
  cover: string,
  title: string,
  description: string,
  avatar: string,
  member: string,
  email: string,
}

export interface Card {
  [key: string]: CardItem
}

export interface Trello {
  columns: string[],
  lists: List,
  cards: Card
}