import { useState } from 'react';
import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd';

import Header from './components/organisms/Header';
import CardList from './components/molecules/card/CardList';

import { dataBoard } from './mocks/data';

function App() {
  const [trello, setTrello] = useState(dataBoard);
  
  const onDragEnd = (result: DropResult) => {
    // the only one that is required
    console.log('onDragEnd: ', result)
    const { type, draggableId, source, destination } = result;

    if (!destination) return;

    // TODO: drag & drop list
    if (type === 'LIST') {
      // ....
      return;
    }

    const { droppableId: sourceDroppableId, index: sourceIndex } = source;
    const { droppableId: destinationDroppableId, index: destinationIndex } = destination;

    if (sourceDroppableId === destinationDroppableId) {
      setTrello(prevState => {
        const newCards = prevState.lists[destinationDroppableId].cards;
        newCards.splice(sourceIndex, 1); // remove item
        newCards.splice(destinationIndex, 0, draggableId); // add item

        return {
          ...prevState,
          lists: {
            ...prevState.lists,
            [destinationDroppableId]: {
              ...prevState.lists[destinationDroppableId],
              cards: newCards
            }
          }
        }
      })
      return;
    }

    // TODO: drag & drop card in different list
  }

  console.log("trello: ", trello)

  return (
    <>
      <Header />

      <main>
        <div className='container flex px-2'>
          <DragDropContext
            onDragEnd={onDragEnd}
          >
            <Droppable droppableId="drop-list" type="LIST" direction="horizontal" >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                  {...provided.droppableProps}
                  className='listContainer'
                > 
                  {trello.columns.map((listId, listIndex) => {
                    const listItem = trello.lists[listId];
                    if (!listItem) return null;

                    const cards = listItem.cards.map(cardId => trello.cards[cardId]);

                    return (
                      <CardList 
                        key={listId}
                        index={listIndex}
                        listId={listId}
                        listItem={listItem}
                        cards={cards}
                      />
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>
    </>
  )
}

export default App
