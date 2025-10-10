
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LinkText({ text, onPress, highlight }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>
        {text} <Text style={styles.highlight}>{highlight}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
  },
  highlight: {
    color: "#4ade80", // verde (destaque)
    fontWeight: "bold",
  },
});
