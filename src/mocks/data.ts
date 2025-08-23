// export const dataBoard = [
//   {
//     id: 'list-1',
//     title: 'List 1',
//     cards: [
//       {
//         id: 'card-1',
//         title: 'Card 1',
//         description: 'Card Description 1',
//         avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//         member: 'tony nguyen',
//         email: 'tony@gmail.com'
//       },
//       {
//         id: 'card-2',
//         title: 'Card 2',
//         description: 'Card Description 1',
//         avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//         member: 'tony nguyen',
//         email: 'tony@gmail.com'
//       }
//     ]
//   },
//   {
//     id: 'list-2',
//     title: 'List 2',
//     cards: [
//       {
//         id: 'card-1',
//         title: 'Card 1',
//         description: 'Card Description 1',
//         avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//         member: 'tony nguyen',
//         email: 'tony@gmail.com'
//       }
//     ]
//   }
// ]

import type { Trello } from '../trello'

export const dataBoard: Trello = {
  columns: ['list-1', 'list-2'],
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'List 1',
      cards: ['card-1-1', 'card-1-2']
    },
    'list-2': {
      id: 'list-2',
      title: 'List 2',
      cards: ['card-2-1']
    }
  },
  cards: {
    'card-1-1': {
      id: 'card-1-1',
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      title: 'Card 1',
      description: 'Card Description 1',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      member: 'tony nguyen',
      email: 'tony@gmail.com'
    },
    'card-1-2': {
      id: 'card-1-2',
      title: 'Card 2',
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      description: 'Card Description 2',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      member: 'tony nguyen',
      email: 'tony@gmail.com'
    },
     'card-2-1': {
      id: 'card-2-1',
      title: 'Card 3',
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      description: 'Card Description 3',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      member: 'tony nguyen',
      email: 'tony@gmail.com'
    }
  }
}

/*
source = 1;
destination = 3;
swap list
1. loop to find item at source
2. delete item source
3. add item source into destination

swap card in same list
1. loop to find List A
2. loop List A to find Card source
3. delete Card Source in List A
4. delete Card Source in List A at destination

swap card in different list
1. loop to find List A at source
2. loop to find List B at destination
3 ....

{}
*/