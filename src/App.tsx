import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import Header from './components/organisms/Header';
import CardList from './components/molecules/card/CardList';
import { useCallback, useState } from 'react';

import { dataBoard } from './mocks/data';

function App() {
  const [trello, setTrello] = useState(dataBoard);
  
  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  console.log("trello: ", trello)

  return (
    <>
      <Header />

      <main>
        <div className='container flex px-2'>
          <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
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
                    const cards = listItem.cards.map(cardId => trello.cards[cardId]);

                    console.log('columns: ', {
                      listId,
                      listItem,
                      cards
                    })
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
