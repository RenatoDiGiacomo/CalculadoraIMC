import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Main from "./src/components/Main";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}
