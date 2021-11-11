import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
  container: {  
    flex: 1
  },
  exploreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 20 
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 17,
    color: '#eee',
    marginTop: 8
  },
  profilePicContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden'
  },
  newReleasesRow: {
    marginTop: 40,
    marginBottom: 30,
    width: '100%',
    paddingBottom: 20
  }
})