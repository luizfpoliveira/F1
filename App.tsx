import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import racesResponse from "../f1/assets/data/races.json";
import RaceListItem from "./src/components/RaceListItem";

const races = racesResponse.data.races.response;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={races}
        renderItem={({ item }) => <RaceListItem item={item} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});
