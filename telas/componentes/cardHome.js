import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';

export default function CardHome()
{

    const {width, height} = Dimensions.get('screen')
    return(
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: 
    {
        backgroundColor: "#FFFF",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 20,
        marginTop: 10,
        borderRadius: 5,
        marginHorizontal: 24,
        height: 180
        
    }
})