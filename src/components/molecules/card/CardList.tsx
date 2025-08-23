import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, Tooltip } from 'antd'
import CardMeta from './CardMeta'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import type { CardItem, ListItem } from '../../../trello'


interface CardListProps {
  index: number,
  listId: string,
  listItem: ListItem,
  cards: CardItem[]
}

function CardList({ index, listId, listItem, cards }: CardListProps) {
  return (
    <Draggable draggableId={listId.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='cardList'
        >
          <Droppable droppableId={listId.toString()} type='CARD' direction='vertical'>
            {(provided) => (
               <Card 
                title={listItem.title}
                extra={
                  <>
                    <Tooltip placement="top" title="Add a card">
                      <Button shape="circle" icon={<PlusOutlined />} />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete this list"  className='ml-2'>
                      <Button shape="circle" icon={<DeleteOutlined />}  />
                    </Tooltip>
                  </>
                } 
              >
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {cards.map((card, cardIndex) => (
                    <CardMeta 
                      key={card.id}
                      index={cardIndex}
                      card={card}
                    />
                  ))}
                </div>
              </Card>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
    
  )
}

export default CardList