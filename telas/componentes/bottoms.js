import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Button({buttonName, onPress})
{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.title}>{buttonName}</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        
    },

    title: 
    {
        color: "#FFF",
        fontSize: 14,
        flex: 1,
      
    },

    button:
    {
        backgroundColor: "#5429CC",
        paddingBottom: 20,
        marginTop: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
       
    }
})