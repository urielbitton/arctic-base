import { StyleSheet } from "react-native";
import Colors from "../utils/Colors";

export const styles = StyleSheet.create({
  searchCard: {
    borderRadius: 10,
    width: '100%',
    height: 130,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  leftSide: {
    width: 80,
    height: '100%'
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  rightSide: {
    paddingLeft: 15,
    paddingVertical: 5,
    justifyContent: 'space-between'
  },
  bookmark: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  title: {
    color: '#fff',
    fontSize: 16,
    maxWidth: 200,
    fontWeight: '700'
  },
  subtitle: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  subtitleText: {
    color: Colors.gray,
    fontSize: 13,
    marginLeft: 5
  },  
  metaText: {
    flexDirection: 'row',
    marginBottom: 8
  },
  meta: {
    color: '#ddd',
    marginRight: 10,
    fontSize: 12,
    alignItems: 'center'
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  numRating: {
    fontSize: 14,
    color: Colors.gold,
    marginLeft: 5
  }
})