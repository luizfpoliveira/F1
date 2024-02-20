import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import racesResponse from "../../assets/data/races.json";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../Constants/Colors";

const races = racesResponse.data.races.response;

export default function RaceListItem({ item }: { item: (typeof races)[0] }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.datesContainer}>
        <Text style={styles.date}>03-05</Text>
        <Text style={styles.month}>Nov</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.round}>Round 21</Text>
        <Text style={styles.country}>{item.competition.location.country}</Text>
        <Text style={styles.description}>
          Formula 1 {item.competition.name} 2023
        </Text>
      </View>
      <Entypo name="chevron-right" size={24} color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  datesContainer: {
    padding: 10,
    marginRight: 10,
    borderRightWidth: 1,
    borderColor: "gainsboro",
    alignItems: "center",
  },
  date: {},
  month: {
    backgroundColor: "gainsboro",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    color: "dimgray",
    fontWeight: "bold",
    marginTop: 4,
  },
  round: {
    color: Colors.primary,
  },
  country: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "dimgray",
  },
});
