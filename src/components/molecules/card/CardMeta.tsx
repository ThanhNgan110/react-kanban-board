import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Draggable } from 'react-beautiful-dnd'
import type { CardItem } from '../../../trello'

interface CardMetaProps {
  index: number,
  card: CardItem
}

function CardMeta({ index, card }: CardMetaProps) {
  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card'
        >
          <Card
            cover={
              <img
                alt="example"
                src={card.cover}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            className='cardItem'
          >
            <Meta
              avatar={<Avatar src={card.avatar} />}
              title={card.title}
              description={card.description}
            />
          </Card>
        </div>
      )}
    </Draggable>
    
  )
}

export default CardMeta