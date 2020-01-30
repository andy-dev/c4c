import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ 
          padding: 10,
          fontSize: 24, 
          color: "red" 
        }}
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
    backgroundColor: "#05293b",
    alignItems: "center",
    justifyContent: "center"
  }
});
