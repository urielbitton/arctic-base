import { StyleSheet } from 'react-native'; 
import Colors from '../utils/Colors';

export const styles = StyleSheet.create({ 
  flatListContainer: {
    backgroundColor: Colors.dark,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  toolbar: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20
  },
  toolbarTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  toolbarTitleText: {
    fontSize: 15,
    color: Colors.gray
  },
  yearSelected: {
    marginLeft: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
    paddingHorizontal: 5,
    color: '#fff'
  },
  inputContainer: {
    width: '50%'
  }, 
  inputContainerStyle : {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    height: 35
  },
  inputStyle: {
    borderWidth: 0,
    fontSize: 14,
    color: '#ccc'
  }
})