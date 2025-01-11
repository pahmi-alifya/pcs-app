import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
import UserProfileCard from "@/components/UserProfileCard"
import TodaysActivity from "@/components/TodaysActivity"
import PcsNews from "@/components/PcsNews"
import OnlineUsers from "@/components/OnlineUsers"

export default function TabHomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>KerjaYuk!</Text>
          <Link href="/notification">
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={34}
              color="#DB4437"
            />
          </Link>
        </View>
        <View style={styles.sectionCard}>
          <Text style={styles.text}>Hi Good Morning!</Text>
          <UserProfileCard />
        </View>
        <View style={styles.sectionCard}>
          <TodaysActivity />
        </View>
        <View style={styles.sectionCard}>
          <PcsNews />
        </View>
        <View style={styles.sectionCard}>
          <OnlineUsers />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
    paddingBottom: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#DB4437",
  },
  sectionCard: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
