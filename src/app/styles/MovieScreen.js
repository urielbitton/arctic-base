import { StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

export const styles = StyleSheet.create({ 
  trailerContainer: {
    width: '100%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  movieHeader: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    zIndex: 20
  },
  titleFlex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 25,
    fontWeight: '700'
  },
  rating: {
    fontSize: 23,
    color: Colors.gold,
    fontWeight: '700',
    marginLeft: 6
  },
  gradientCoverTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    zIndex: 10
  },
  gradientCoverBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    zIndex: 10
  },
  coverImg: {
    width: '100%',
    height: '100%',
    zIndex: 0
  }
})