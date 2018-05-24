import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'flex-start'
  },
  textView: {},
  white: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '400'
  },
  bgFont: {
    fontSize: 20
  },
  listContainer: {
    marginTop: 20,
    shadowOffset: { width: 5, height: 2 },
    shadowColor: 'rgba(0,0,0,0.1)'
  },
  listItem: {
    // height: auto,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
