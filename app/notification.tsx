import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons"
import React from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"

const notifications = [
  {
    id: "1",
    type: "Reimbursement",
    description:
      'Your submission "Lorem ipsum dolor sit amet..." with the total cost of 50,000 has been paid, please check your BRIMO application, Thank you',
    status: "approved",
    date: "Today",
    icon: "https://via.placeholder.com/40", // Replace with actual icon URL
  },
  {
    id: "2",
    type: "Reimbursement",
    description:
      'Your submission "description" has been rejected, please click for details.',
    status: "rejected",
    date: "Yesterday",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: "3",
    type: "Reimbursement",
    description:
      "Your submission will be processed according to the reimbursement schedule. Please wait.",
    status: "reviewed",
    date: "2022-10-06",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: "4",
    type: "Sickness",
    description: "Your submission has been approved by the Superior.",
    status: "approved",
    date: "2022-10-05",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: "5",
    type: "Sickness",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    status: "rejected",
    date: "2022-10-05",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: "6",
    type: "Sickness",
    description:
      "Your submission is being reviewed to the Superior for the approval process, please wait.",
    status: "reviewed",
    date: "2022-10-05",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: "7",
    type: "Overtime",
    description: "Your submission has been approved by the Superior.",
    status: "approved",
    date: "2022-10-05",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: "8",
    type: "Overtime",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    status: "rejected",
    date: "2022-10-05",
    icon: "https://via.placeholder.com/40",
  },
]

export default function NotificationScreen() {
  const renderStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <Text style={[styles.statusIcon, styles.approved]}>✔</Text>
      case "rejected":
        return <Text style={[styles.statusIcon, styles.rejected]}>✘</Text>
      case "reviewed":
        return <Text style={[styles.statusIcon, styles.reviewed]}>⟳</Text>
      default:
        return null
    }
  }

  const renderIcon = (type: string) => {
    switch (type) {
      case "Reimbursement":
        return (
          <View style={styles.backgroundIcon}>
            <FontAwesome5 name="coins" size={30} color="white" />
          </View>
        )
      case "Sickness":
        return (
          <View style={styles.backgroundIcon}>
            <MaterialCommunityIcons
              name="emoticon-sick-outline"
              size={30}
              color="white"
            />
          </View>
        )
      case "Overtime":
        return (
          <View style={styles.backgroundIcon}>
            <MaterialIcons name="more-time" size={30} color="white" />
          </View>
        )
      default:
        return null
    }
  }

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.notificationCard}>
      {renderIcon(item.type)}
      {renderStatusIcon(item.status)}
      <View style={styles.details}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "red",
  },
  list: {
    paddingBottom: 10,
  },
  backgroundIcon: {
    height: 60,
    width: 60,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#F04363",
  },

  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  type: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  statusIcon: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 40,
    color: "white",
    height: 20,
    width: 20,
    borderRadius: 50,
    paddingLeft: 5,
    left: -15,
  },
  approved: {
    backgroundColor: "#77ff77",
  },
  rejected: {
    backgroundColor: "#ff2222",
  },
  reviewed: {
    backgroundColor: "#2266ff",
  },
})
