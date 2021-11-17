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
    paddingVertical: 10
  },
  toolbarTitle: {
    fontSize: 15,
    color: Colors.gray
  },
  inputPicker: {
    color: Colors.gray,
    height: 50,
    width: 100
  },
  pickerItems: {
    color: Colors.gray
  }
})