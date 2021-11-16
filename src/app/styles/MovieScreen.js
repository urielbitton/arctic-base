import { StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

export const styles = StyleSheet.create({ 
  trailerContainer: {
    width: '100%',
    height: 420,
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 20
  },
  titleFlex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 25,
    fontWeight: '600',
    maxWidth: 270
  },
  rating: {
    fontSize: 16,
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
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  playCircle: {
    width: 100,
    height: 100,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playIcon: {
    zIndex: 100
  },
  briefInfoContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20
  },
  infoRow:  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  infoLabel: {
    color: Colors.color
  },
  infoText: {
    color: '#fff',
    maxWidth: 220,
    textAlign: 'right'
  },
  plotText: {
    color: Colors.gray,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 20
  },
  seperatorContainer: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  actorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  rowTitle: {
    paddingHorizontal: 10,
    color: Colors.color,
    fontSize: 17,
    flexBasis: '100%',
    marginBottom: 20
  }
})