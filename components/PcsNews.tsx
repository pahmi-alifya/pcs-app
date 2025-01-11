import React, { useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native"
import Carousel from "react-native-reanimated-carousel"

type TData = {
  id: string
  name: string
  date: string
  messages: string[]
  avatar: string
}

const data = [
  {
    id: "1",
    name: "Ana Riswati",
    date: "Senin, 30 Mei 2022",
    messages: [
      "Kalimat 1 - Lorem ipsum dolor sit amet",
      "Kalimat 2 - Lorem ipsum dolor sit amet",
      "Kalimat 3 - Lorem ipsum dolor sit amet",
      "Kalimat 4 - Lorem ipsum dolor sit amet",
    ],
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "John Doe",
    date: "Selasa, 31 Mei 2022",
    messages: [
      "Kalimat 1 - Example text here",
      "Kalimat 2 - Example text here",
      "Kalimat 3 - Example text here",
      "Kalimat 4 - Example text here",
    ],
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Rey",
    date: "Rabu, 31 Mei 2022",
    messages: [
      "Kalimat 1 - Example text here",
      "Kalimat 2 - Example text here",
      "Kalimat 3 - Example text here",
      "Kalimat 4 - Example text here",
    ],
    avatar: "https://i.pravatar.cc/150?img=3",
  },
]

const { width } = Dimensions.get("window")

const PcsNews = () => {
  const ref = useRef(null)

  const renderItem = ({ item }: { item: TData }) => (
    <View style={styles.card} key={item.id}>
      <View style={styles.header}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {item.messages.map((message, index) => (
          <Text key={index} style={styles.message}>
            {message}
          </Text>
        ))}
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PCS News</Text>
      <Carousel
        ref={ref}
        loop
        width={width - 50}
        height={200}
        autoPlayInterval={2000}
        autoPlay
        snapEnabled
        data={data}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
        style={{
          width,
          justifyContent: "center",
        }}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 16,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#DB4437",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  content: {
    marginTop: 10,
  },
  message: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
})

export default PcsNews
