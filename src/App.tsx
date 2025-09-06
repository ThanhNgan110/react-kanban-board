import { useState } from 'react'
import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd'

import Header from './components/organisms/Header'
import CardList from './components/molecules/card/CardList'

import { dataBoard } from './mocks/data'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Input } from 'antd'

function App() {
	const [trello, setTrello] = useState(dataBoard)

	const onDragEnd = (result: DropResult) => {
		// the only one that is required
		console.log('onDragEnd: ', result)
		const { type, draggableId, source, destination } = result
		console.log('result', result)

		// if (!destination) return

		// TODO: drag & drop list
		if (type === 'LIST') {
			const { index: sourceIndex } = source
			const { index: destinationIndex } = destination
			setTrello(prevState => {
				const newColumns = Array.from(prevState.columns)
				const [removed] = newColumns.splice(sourceIndex, 1) // remove item

				newColumns.splice(destinationIndex, 0, removed)
				return {
					...prevState,
					columns: newColumns,
				}
			})
			return
		}

		const { droppableId: sourceDroppableId, index: sourceIndex } = source
		const { droppableId: destinationDroppableId, index: destinationIndex } = destination

		if (sourceDroppableId === destinationDroppableId) {
			setTrello(prevState => {
				const newCards = prevState.lists[destinationDroppableId].cards
				newCards.splice(sourceIndex, 1) // remove item
				newCards.splice(destinationIndex, 0, draggableId) // add item

				return {
					...prevState,
					lists: {
						...prevState.lists,
						[destinationDroppableId]: {
							...prevState.lists[destinationDroppableId],
							cards: newCards,
						},
					},
				}
			})
			return
		}

		// TODO: drag & drop card in different list
		console.log('result', result);
		
		if (sourceDroppableId !== destinationDroppableId) {
			setTrello(prevState => {
				const newSourceCards = [...prevState.lists[sourceDroppableId].cards]
				const newDestinationCards = [...prevState.lists[destinationDroppableId].cards]
				const [moveCard] = newSourceCards.splice(sourceIndex, 1)

				newDestinationCards.splice(destinationIndex, 0, moveCard)

				return {
					...prevState,
					lists: {
						...prevState.lists,
						[sourceDroppableId]: {
							...prevState.lists[sourceDroppableId],
							cards: newSourceCards,
						},
						[destinationDroppableId]: {
							...prevState.lists[destinationDroppableId],
							cards: newDestinationCards,
						},
					},
				}
			})
			return
		}
	}

	console.log('trello: ', trello)

	return (
		<>
			<Header />

			<main>
				<div className="container flex px-2">
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId="drop-list" type="LIST" direction="horizontal">
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									// style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
									{...provided.droppableProps}
									className="listContainer"
								>
									{trello.columns.map((listId, listIndex) => {
										const listItem = trello.lists[listId]
										if (!listItem) return null

										const cards = listItem.cards.map(cardId => trello.cards[cardId])

										return <CardList key={listId} index={listIndex} listId={listId} listItem={listItem} cards={cards} />
									})}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>
					<Flex vertical align="start">
						<Button icon={<PlusOutlined />} type="text">
							Add another list
						</Button>
						<Card variant="borderless" style={{ width: 350 }}>
							Title:
							<Input type="text" />
							<Flex gap={10} justify='end' style={{ marginTop: 10 }}>
								<Button danger type="text">
									Close
								</Button>
								<Button type="primary">Create</Button>
							</Flex>
						</Card>
					</Flex>
				</div>
			</main>
		</>
	)
}

export default App
