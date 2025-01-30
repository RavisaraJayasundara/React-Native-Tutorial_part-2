import { View, Text, StyleSheet, Button } from "react-native";


export default function AboutScreen({route,navigation}) {
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <Text> About {name}</Text>
      <Button title="Update the name" onPress={()=>navigation.setParams({
        name:"codevolution"
      })}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
