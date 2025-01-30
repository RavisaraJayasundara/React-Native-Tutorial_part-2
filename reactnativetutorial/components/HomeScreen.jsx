import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Profile List"
        onPress={() => navigation.navigate("Profile List")}
      />
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
