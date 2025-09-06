import React, { type ReactNode } from 'react'
import type { ITrello } from '../components/types'

interface CardContextType {
	trellos: ITrello
	addCard: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CardContext = React.createContext<CardContextType | null>(null)

export const CardProvider = ({ children }: { children: ReactNode }) => {
	const addCard = () => {}

	return (
		<CardContext.Provider
			value={{
				trellos,
				addCard,
			}}
		>
			{children}
		</CardContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCardContext = () => {
	const context = React.useContext(CardContext)
	if (!context) {
		throw Error('Card Context was outside provider')
	}
	return context
}
