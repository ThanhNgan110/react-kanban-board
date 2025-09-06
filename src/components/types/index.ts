export interface ITrello {
	columns: string[]
	lists: Record<string, ICardList>
	cards: Record<string, ICardItem>
}

interface ICardList {
	id: string
	title: string
	cards: string[]
}

interface ICardItem {
	id: string
	cover: string
	title: string
	description: string
	avatar: string
	member: string
	email: string
}
