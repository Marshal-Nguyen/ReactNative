import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
interface ITodo {
  id: number;
  name: string;
}
export default function App() {
  // const [students, setStudents] = useState([
  //   { id: 1, name: "Giang1", age: 13 },
  //   { id: 2, name: "Giang2", age: 14 },
  //   { id: 3, name: "Giang3", age: 15 },
  //   { id: 4, name: "Giang4", age: 16 },
  //   { id: 5, name: "Giang5", age: 17 },
  //   { id: 6, name: "Giang6", age: 13 },
  //   { id: 7, name: "Giang7", age: 14 },
  //   { id: 8, name: "Giang8", age: 15 },
  //   { id: 9, name: "Giang9", age: 16 },
  //   { id: 10, name: "Giang10", age: 17 },
  // ]);
  const [toDo, settoDo] = useState("");
  const [listToDo, setlistToDo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleAddToDo = () => {
    if (!toDo) return alert("Input Data");
    setlistToDo([...listToDo, { id: randomInteger(2, 200), name: toDo }]);
    settoDo("");
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {students.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                padding: 30,
                backgroundColor: "green",
                marginBottom: 10,
                borderRadius: 10,
              }}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <FlatList
        data={students}
        keyExtractor={(item) => item.id + ""} //nên có key để bảo trì và xác định
        renderItem={(data) => {
          return (
            <View
              style={{
                padding: 30,
                backgroundColor: "green",
                marginBottom: 10,
                borderRadius: 10,
              }}>
              <Text>{data.item.name}</Text>
            </View>
          );
        }}
      /> */}
      {/* header */}
      <Text style={styles.header}>MAKET - TODOAPP</Text>
      {/* form */}
      <View>
        <TextInput
          value={toDo}
          onChangeText={(value) => settoDo(value)}
          style={styles.todoInput}
        />
        <Button title="Add todo" onPress={handleAddToDo} />
      </View>
      {/* list to do */}
      <View style={styles.listToDo}>
        <FlatList
          keyExtractor={(item) => item.id + ""}
          data={listToDo}
          renderItem={(data) => {
            return (
              <View>
                <Text style={styles.dataInList}>{data.item.name}</Text>;
                <Button title="delete" />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
//Không có khái niệm css, css là dành cho web
//css in js
const styles = StyleSheet.create({
  dataInList: {
    borderWidth: 2,
    borderStyle: "dashed",
    marginBottom: 20,
    borderColor: "green",
    padding: 10,
  },
  listToDo: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  todoInput: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 5,
    borderColor: "blue",
    fontSize: 24,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
