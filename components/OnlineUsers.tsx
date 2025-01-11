import React from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

// Data Dummy
const users = [
    {
        id: "1",
        name: "Jefril",
        location: "Sahid",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: "2",
        name: "Zasami",
        location: "BSD",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: "3",
        name: "Sam",
        location: "Sahid",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: "4",
        name: "Aldo",
        location: "Sahid",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: "5",
        name: "Erwin",
        location: "Sahid",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: "6",
        name: "Arye",
        location: "BSD",
        avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: "7",
        name: "Risya",
        location: "BSD",
        avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
        id: "8",
        name: "Nesha",
        location: "WFH",
        avatar: "https://i.pravatar.cc/150?img=8",
    },
    { id: "9", name: "10 more", location: "", avatar: null }, // "More" icon
];

// Komponen Avatar Card
const AvatarCard = ({ name, location, avatar }: any) => (
    <View style={styles.cardContainer}>
        {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
            <View style={[styles.avatar, styles.moreContainer]}>
                <Text style={styles.moreText}>10+</Text>
            </View>
        )}
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
    </View>
);

const OnlineUsers = () => {
    return (
        <>
            <Text style={styles.title}>Online</Text>
            <View style={styles.container}>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => (
                        <AvatarCard
                            name={item.name}
                            location={item.location}
                            avatar={item.avatar}
                        />
                    )}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 15,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginBottom: 16,
        color: "#333",
    },
    listContainer: {
        paddingHorizontal: 8,
    },
    cardContainer: {
        alignItems: "center",
    },
    avatar: {
        height: 50,
        width: 50,
        marginRight: -10,
        backgroundColor: "gray",
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "white",
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    moreContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f04e23",
    },
    moreText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    name: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "bold",
    },
    location: {
        fontSize: 12,
        color: "#888",
    },
});

export default OnlineUsers;
