import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const UserProfileCard = () => {
  return (
    <LinearGradient
      colors={["#DB4437", "#FF0363"]}
      start={{ x: 0, y: 1 }}
      style={styles.cardContainer}
    >
      <View style={styles.cardContent}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          <Image
            source={{
              uri: "https://avatar.iran.liara.run/public/boy?username=Ash", // Replace with your avatar image URL
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Tabay</Text>
            <Text style={styles.position}>UI/UX Designer</Text>
          </View>
        </View>

        {/* Right Section */}
        <View style={styles.rightSection}>
          <Text style={styles.memberSinceLabel}>Member since</Text>
          <Text style={styles.memberSinceDate}>01 Juni 2021</Text>
        </View>
      </View>

      {/* Location Info */}
      <View style={styles.locationContainer}>
        <View>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.location}>Kantor Sahid</Text>
        </View>
        <Text style={styles.iconText}>ICO</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 15,
    padding: 15,
    alignSelf: "center",
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  position: {
    color: "#FFF",
    fontSize: 14,
    opacity: 0.8,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  memberSinceLabel: {
    color: "#FFF",
    fontSize: 12,
    opacity: 0.8,
  },
  memberSinceDate: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
  },
  locationLabel: {
    color: "#FFF",
    fontSize: 12,
    opacity: 0.8,
  },
  location: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconText: {
    color: "#FFF",
    fontSize: 14,
    opacity: 0.8,
  },
})

export default UserProfileCard
