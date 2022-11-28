
import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';


const Height = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64;

export default function Header({username}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.username}>Olá, {username}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: '#5429CC',
        paddingTop: Height,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },

    content:
    {
        flex: 1,
        alignItems: 'row',
    },

    username:
    {
        fontSize: 24,
        color: "#FFFF",
        fontWeight: 'bold'
    }
})