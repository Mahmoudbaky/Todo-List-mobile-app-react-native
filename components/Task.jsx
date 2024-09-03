import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#2a6199",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemText: {
    color: "white",
    maxWidth: "80%", // if we dont do that the circle will be pushed down
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
