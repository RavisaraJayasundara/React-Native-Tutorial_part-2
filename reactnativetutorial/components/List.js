import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import Box from "./components/Box";
import { students } from "./components/data";

export default function List() {
  return (
    <View style={styles.container}>
      {/*
      
      <ScrollView>
      <StatusBar style="auto" />
          {students.map((student)=>{
               return(
                <View style={styles.Card} key={student.id}>
                  <Text>Name : {student.name}</Text>
                  <Text>Age :{student.age}</Text>
                  <Text>course_name :{student.course_name}</Text>
                </View>
               )
          })}
      </ScrollView>
      */}
      <FlatList
        data={students}
        renderItem={({ item }) => {
          return (
            <View style={styles.Card} key={item.id}>
              <Text>Name :{item.name}</Text>
              <Text>Age :{item.age}</Text>
              <Text>Gender :{item.gender}</Text>
              <Image source={item.profile_pic} />
            </View>
          );
        }}
        keyExtractor={(item)=>item.id.toString()}

        ListHeaderComponent={
          <Text style={styles.listHeader}> Student List</Text>
        }
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
  },
  Card: {
    backgroundColor: "white",
    padding: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  listHeader:{
    fontSize: 30,
    textAlign: "center",
  }
});
