import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const TodaysActivity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's activity</Text>
      <View style={styles.activities}>
        {/* Check In */}
        <View style={styles.activityItem}>
          <MaterialIcons name="access-time" size={36} color="#FF512F" />
          <Text style={styles.time}>08:30</Text>
          <Text style={styles.label}>Check In</Text>
        </View>

        {/* Working Hours */}
        <View style={styles.activityItem}>
          <MaterialIcons name="loop" size={36} color="#FF512F" />
          <Text style={styles.time}>03:00:00</Text>
          <Text style={styles.label}>Working Hours</Text>
        </View>

        {/* Check Out */}
        <View style={styles.activityItem}>
          <MaterialIcons name="timelapse" size={36} color="#FF512F" />
          <Text style={styles.time}>--:--</Text>
          <Text style={styles.label}>Check Out</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  activities: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activityItem: {
    alignItems: "center",
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF512F",
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
})

export default TodaysActivity
