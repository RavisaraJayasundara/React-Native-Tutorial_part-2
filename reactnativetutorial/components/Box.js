import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Box() {
  return (
    <View style={styles.container}>
     <View style={[styles.lightblueBox,styles.box]}>
        <Text>Lightblue Box</Text>
     </View>
     <View style={[styles.lightgreenBox,styles.box]}>
        <Text>Lightgreen Box</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'white'
  },
  box:{
    width:500,
    height:100,
    //padding:10,
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:10,
    border:"2px solid black"
  },

  lightblueBox:{
    backgroundColor:'lightblue',
    
  },
  lightgreenBox:{
    backgroundColor:'lightgreen',
  
  }
});
