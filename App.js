import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL("https://airtable.com/shr7BsgNciT6moQf0")
        }
      >
        Coaching for Climbing
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
