import React from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Link, Tabs } from "expo-router"
import { StyleSheet } from "react-native"

import { useClientOnlyValue } from "@/components/useClientOnlyValue"
import { View } from "@/components/Themed"

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />
}

const CustomTabButton = ({ children, onPress }: any) => {
  return (
    <Link style={styles.customButtonContainer} href={onPress}>
      <View style={styles.customButtonContainer}>
        <View style={styles.customButton}>{children}</View>
      </View>
    </Link>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#DB4437",
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: "Attendance",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar-check-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="check-out"
        options={{
          title: "Checkout",
          tabBarIcon: ({ color, ...rest }) => (
            <CustomTabButton {...rest} onPress={"check-out"}>
              <TabBarIcon name="sign-out" color={"#fff"} />
            </CustomTabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: "Form",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="file-text" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  customButtonContainer: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#FF6B6B",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 5,
  },
})
