import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Saldo()
{
    return(
        <View style = {styles.container}>
           <View style={styles.card}>
                <Text style={styles.title}>Saldo</Text>
                <View>
                    <Text style={styles.valor}>R$ 15000</Text>
                </View>
           </View>
        </View>
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
        marginTop: -24,
        borderRadius: 5,
        marginHorizontal: 24,
        height: 120

    },
    card:
    {

    },
    valor:
    {
        fontSize: 26,
        marginVertical: 16,
    },
    
    title:
    {
        marginTop: 10,
        fontSize: 14
    }
})