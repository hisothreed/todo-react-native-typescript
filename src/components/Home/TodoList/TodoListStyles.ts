import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  TodoList: {
    height: '100%',
    padding: 0
  },
  TodoCell: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5
  },
  ButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TodoTitle: {
    color: 'black'
  },
  bgFont: {
    fontSize: 20
  }
})
